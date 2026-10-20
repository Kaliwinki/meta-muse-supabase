import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm";
import { supabaseConfig } from "./supabase-config.js";

// ---------- Utilitaires ----------
const $ = (id) => document.getElementById(id);
const view = $("view");

function esc(str) {
  return String(str ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function fmtDate(iso) {
  return new Date(iso).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit"
  });
}

function excerpt(text, max = 160) {
  const t = String(text ?? "").trim();
  return t.length > max ? t.slice(0, max).trimEnd() + "…" : t;
}

function showModalMessage(text, kind = "info") {
  const box = $("auth-message");
  box.textContent = text;
  box.className = `message ${kind}`;
}

// ---------- Configuration ----------
if (!supabaseConfig.url || supabaseConfig.url === "A_REMPLIR") {
  view.innerHTML = `<section class="card"><p>Le site est en cours de configuration : reviens dans quelques instants.</p></section>`;
  throw new Error("Configuration Supabase manquante");
}

const supabase = createClient(supabaseConfig.url, supabaseConfig.anonKey);
let session = null;

const REACTION_TYPES = [
  { type: "like", icon: "👍", label: "J'aime" },
  { type: "star", icon: "⭐", label: "Super" },
  { type: "heart", icon: "❤️", label: "Coup de cœur" }
];

// ---------- Authentification ----------
function authErrorMessage(message) {
  const m = (message || "").toLowerCase();
  if (m.includes("user already registered")) return "Cette adresse e-mail est déjà utilisée par un compte.";
  if (m.includes("invalid login credentials")) return "Adresse e-mail ou mot de passe incorrect.";
  if (m.includes("email not confirmed")) return "Compte non confirmé : vérifie ta boîte e-mail avant de te connecter.";
  if (m.includes("at least 6 characters") || m.includes("password")) return "Le mot de passe doit contenir au moins 6 caractères.";
  if (m.includes("invalid") && m.includes("email")) return "L'adresse e-mail n'est pas valide.";
  return "Une erreur est survenue. Réessaie.";
}

function renderAuthArea() {
  const area = $("auth-area");
  if (session?.user) {
    area.innerHTML = `
      <span class="user-email" title="${esc(session.user.email)}">${esc(session.user.email)}</span>
      <button class="btn" id="logout-btn" type="button">Déconnexion</button>`;
    $("logout-btn").addEventListener("click", async () => {
      const { error } = await supabase.auth.signOut();
      if (error) alert(authErrorMessage(error.message));
    });
  } else {
    area.innerHTML = `
      <button class="btn" id="open-login" type="button">Connexion</button>
      <button class="btn primary" id="open-signup" type="button">Inscription</button>`;
    $("open-login").addEventListener("click", () => openAuthModal("login"));
    $("open-signup").addEventListener("click", () => openAuthModal("signup"));
  }
}

function openAuthModal(mode = "login") {
  $("auth-modal").classList.remove("hidden");
  $("auth-message").className = "message hidden";
  switchAuthTab(mode);
}

function closeAuthModal() {
  $("auth-modal").classList.add("hidden");
}

function switchAuthTab(mode) {
  const isLogin = mode === "login";
  $("tab-login").classList.toggle("active", isLogin);
  $("tab-signup").classList.toggle("active", !isLogin);
  $("login-form").classList.toggle("hidden", !isLogin);
  $("signup-form").classList.toggle("hidden", isLogin);
  $("auth-message").className = "message hidden";
}

$("tab-login").addEventListener("click", () => switchAuthTab("login"));
$("tab-signup").addEventListener("click", () => switchAuthTab("signup"));
$("modal-close").addEventListener("click", closeAuthModal);
$("auth-modal").addEventListener("click", (e) => {
  if (e.target === $("auth-modal")) closeAuthModal();
});

$("login-form").addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = $("login-email").value.trim();
  const password = $("login-password").value;
  const { error } = await supabase.auth.signInWithPassword({ email, password });
  if (error) {
    showModalMessage(authErrorMessage(error.message), "error");
  } else {
    closeAuthModal();
  }
});

$("signup-form").addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = $("signup-email").value.trim();
  const password = $("signup-password").value;
  const { data, error } = await supabase.auth.signUp({ email, password });
  if (error) {
    showModalMessage(authErrorMessage(error.message), "error");
  } else if (data.session) {
    showModalMessage("Compte créé avec succès. Bienvenue !", "success");
    setTimeout(closeAuthModal, 1200);
  } else {
    showModalMessage("Compte créé ! Vérifie ta boîte e-mail pour confirmer ton adresse, puis connecte-toi.", "success");
  }
});

// ---------- Routeur ----------
function currentRoute() {
  const hash = location.hash || "#/";
  const postMatch = hash.match(/^#\/post\/([0-9a-f-]{36})$/i);
  if (postMatch) return { name: "post", id: postMatch[1] };
  if (hash === "#/blog") return { name: "blog" };
  return { name: "home" };
}

function setActiveNav(name) {
  document.querySelectorAll(".nav-links a").forEach((a) => {
    a.classList.toggle("active", a.dataset.nav === (name === "post" ? "blog" : name === "home" ? "accueil" : name));
  });
}

async function render() {
  const route = currentRoute();
  setActiveNav(route.name);
  if (route.name === "blog") {
    await renderBlog();
  } else if (route.name === "post") {
    await renderPostDetail(route.id);
  } else {
    renderHome();
  }
}

window.addEventListener("hashchange", render);

// ---------- Page d'accueil ----------
function renderHome() {
  view.innerHTML = `
    <section class="hero card">
      <h1>Bienvenue sur <span class="accent">Meta Muse</span></h1>
      <p>Le premier projet test : un vrai site avec de vrais comptes utilisateurs, hébergé gratuitement sur GitHub Pages et propulsé par Supabase.</p>
      <div class="hero-actions">
        ${session?.user
          ? `<a class="btn primary" href="#/blog">Aller au blog</a>`
          : `<button class="btn primary" id="hero-signup" type="button">Créer un compte</button>
             <a class="btn" href="#/blog">Découvrir le blog</a>`}
      </div>
    </section>

    <div class="home-grid">
    <section class="card">
      <h2>Ce que tu peux faire ici</h2>
      <div class="features">
        <div class="feature">
          <h3>👤 Comptes utilisateurs</h3>
          <p>Inscris-toi avec une adresse e-mail, connecte-toi et déconnecte-toi. Tes identifiants sont gérés en sécurité par Supabase Auth.</p>
        </div>
        <div class="feature">
          <h3>📝 Blog communautaire</h3>
          <p>Publie des articles, commente ceux des autres, réagis avec un like, une étoile ou un cœur, et note les publications de 1 à 5 étoiles.</p>
        </div>
        <div class="feature">
          <h3>🆓 100 % gratuit</h3>
          <p>Hébergement sur GitHub Pages et base de données Supabase : aucune carte bancaire, aucun frais.</p>
        </div>
      </div>
    </section>

    <section class="card">
      <h2>Comment ça marche ?</h2>
      <ol class="steps">
        <li><strong>Crée ton compte</strong><p>Une adresse e-mail et un mot de passe suffisent, en haut à droite.</p></li>
        <li><strong>Publie sur le blog</strong><p>Ouvre l'onglet Blog et partage ton premier article avec la communauté.</p></li>
        <li><strong>Échange</strong><p>Commente les publications, laisse des réactions et note tes coups de cœur de 1 à 5 étoiles.</p></li>
      </ol>
    </section>
    </div>`;

  const heroSignup = $("hero-signup");
  if (heroSignup) heroSignup.addEventListener("click", () => openAuthModal("signup"));
}

// ---------- Données du blog ----------
async function loadPosts() {
  const { data, error } = await supabase
    .from("posts")
    .select("*")
    .order("created_at", { ascending: false });
  if (error) throw error;
  return data;
}

async function loadAggregates() {
  const [reactionsRes, ratingsRes, commentsRes] = await Promise.all([
    supabase.from("reactions").select("post_id,type,user_id"),
    supabase.from("ratings").select("post_id,value,user_id"),
    supabase.from("comments").select("post_id")
  ]);
  if (reactionsRes.error) throw reactionsRes.error;
  if (ratingsRes.error) throw ratingsRes.error;
  if (commentsRes.error) throw commentsRes.error;

  const reactionsByPost = {};
  const myReactions = {};
  for (const r of reactionsRes.data) {
    const byType = (reactionsByPost[r.post_id] ??= {});
    byType[r.type] = (byType[r.type] ?? 0) + 1;
    if (session?.user && r.user_id === session.user.id) myReactions[`${r.post_id}:${r.type}`] = true;
  }

  const ratingsByPost = {};
  const myRatings = {};
  for (const r of ratingsRes.data) {
    const agg = (ratingsByPost[r.post_id] ??= { sum: 0, count: 0 });
    agg.sum += r.value;
    agg.count += 1;
    if (session?.user && r.user_id === session.user.id) myRatings[r.post_id] = r.value;
  }

  const commentsCountByPost = {};
  for (const c of commentsRes.data) {
    commentsCountByPost[c.post_id] = (commentsCountByPost[c.post_id] ?? 0) + 1;
  }

  return { reactionsByPost, myReactions, ratingsByPost, myRatings, commentsCountByPost };
}

function avgRating(ratingsByPost, postId) {
  const agg = ratingsByPost[postId];
  if (!agg || agg.count === 0) return null;
  return { avg: agg.sum / agg.count, count: agg.count };
}

// ---------- Vue Blog (liste) ----------
async function renderBlog() {
  view.innerHTML = `<section class="card"><p>Chargement du blog…</p></section>`;
  try {
    const [posts, agg] = await Promise.all([loadPosts(), loadAggregates()]);

    const composer = session?.user
      ? `
        <section class="card">
          <form id="post-form" class="form">
            <h2>Publier un article</h2>
            <label for="post-title">Titre</label>
            <input id="post-title" maxlength="120" required placeholder="Un titre accrocheur…">
            <label for="post-content">Contenu</label>
            <textarea id="post-content" rows="4" maxlength="5000" required placeholder="Raconte quelque chose à la communauté…"></textarea>
            <button type="submit" class="primary">Publier</button>
          </form>
        </section>`
      : `
        <section class="card">
          <p>Pour publier un article, il faut d'abord avoir un compte.
          <button class="btn primary" id="blog-login" type="button">Se connecter / S'inscrire</button></p>
        </section>`;

    const list = posts.length === 0
      ? `<section class="card"><p class="empty">Aucune publication pour le moment. Sois le premier ou la première à écrire !</p></section>`
      : posts.map((p) => {
          const avg = avgRating(agg.ratingsByPost, p.id);
          const rc = agg.reactionsByPost[p.id] ?? {};
          const stats = `
            <span>💬 ${agg.commentsCountByPost[p.id] ?? 0}</span>
            <span>👍 ${rc.like ?? 0}</span>
            <span>⭐ ${rc.star ?? 0}</span>
            <span>❤️ ${rc.heart ?? 0}</span>
            ${avg ? `<span class="avg">★ ${avg.avg.toFixed(1)}/5 (${avg.count})</span>` : `<span>★ —</span>`}`;
          return `
            <article class="card post-card" data-post-id="${esc(p.id)}">
              <h2><a href="#/post/${esc(p.id)}">${esc(p.title)}</a></h2>
              <div class="post-meta">Par ${esc(p.author_email)} · ${fmtDate(p.created_at)}</div>
              <p class="post-excerpt">${esc(excerpt(p.content))}</p>
              <div class="post-stats">${stats}</div>
            </article>`;
        }).join("");

    view.innerHTML = `
      <div class="blog-header"><h1>Blog</h1></div>
      ${composer}
      <div id="posts-list" class="posts-grid">${list}</div>`;

    document.querySelectorAll(".post-card").forEach((card) => {
      card.addEventListener("click", (e) => {
        if (e.target.closest("a,button")) return;
        location.hash = `#/post/${card.dataset.postId}`;
      });
    });

    const blogLogin = $("blog-login");
    if (blogLogin) blogLogin.addEventListener("click", () => openAuthModal("login"));

    const postForm = $("post-form");
    if (postForm) {
      postForm.addEventListener("submit", async (e) => {
        e.preventDefault();
        const title = $("post-title").value.trim();
        const content = $("post-content").value.trim();
        if (!title || !content) return;
        const { error } = await supabase.from("posts").insert({
          title,
          content,
          user_id: session.user.id,
          author_email: session.user.email
        });
        if (error) {
          alert("Impossible de publier : " + error.message);
        } else {
          await renderBlog();
        }
      });
    }
  } catch (err) {
    view.innerHTML = `<section class="card"><p class="message error">Impossible de charger le blog pour le moment. Réessaie dans un instant.</p></section>`;
  }
}

// ---------- Vue détail d'une publication ----------
async function renderPostDetail(postId) {
  view.innerHTML = `<section class="card"><p>Chargement…</p></section>`;
  try {
    const [{ data: post, error: postErr }, agg, { data: comments, error: comErr }] = await Promise.all([
      supabase.from("posts").select("*").eq("id", postId).single(),
      loadAggregates(),
      supabase.from("comments").select("*").eq("post_id", postId).order("created_at", { ascending: true })
    ]);
    if (postErr || !post) {
      view.innerHTML = `<section class="card"><p class="message error">Publication introuvable.</p><a class="back-link" href="#/blog">← Retour au blog</a></section>`;
      return;
    }
    if (comErr) throw comErr;

    const avg = avgRating(agg.ratingsByPost, post.id);
    const rc = agg.reactionsByPost[post.id] ?? {};
    const loggedIn = !!session?.user;
    const myRating = agg.myRatings[post.id] ?? 0;

    const reactionsHtml = REACTION_TYPES.map(({ type, icon, label }) => {
      const active = !!agg.myReactions[`${post.id}:${type}`];
      return `<button class="reaction${active ? " active" : ""}" data-reaction="${type}" ${loggedIn ? "" : "disabled"} title="${label}">${icon}<span class="count">${rc[type] ?? 0}</span></button>`;
    }).join("");

    const starsHtml = [1, 2, 3, 4, 5].map((v) =>
      `<button class="star${v <= myRating ? " filled" : ""}" data-star="${v}" ${loggedIn ? "" : "disabled"} title="${v} étoile${v > 1 ? "s" : ""}">★</button>`
    ).join("");

    const commentsHtml = comments.length === 0
      ? `<p class="empty">Aucun commentaire pour le moment. Lance la discussion !</p>`
      : comments.map((c) => `
        <div class="comment">
          <div class="comment-head">
            <span class="comment-author">${esc(c.author_email)}</span>
            <span class="comment-date">${fmtDate(c.created_at)}</span>
          </div>
          <p>${esc(c.content)}</p>
        </div>`).join("");

    const commentForm = loggedIn
      ? `
        <form id="comment-form" class="form" style="margin-top:1rem">
          <label for="comment-content">Ajouter un commentaire</label>
          <textarea id="comment-content" rows="3" maxlength="2000" required placeholder="Écris ton commentaire…"></textarea>
          <button type="submit" class="primary">Commenter</button>
        </form>`
      : `<p><button class="btn primary" id="detail-login" type="button">Se connecter pour commenter</button></p>`;

    view.innerHTML = `
      <a class="back-link" href="#/blog">← Retour au blog</a>
      <div class="post-layout">
      <article class="card post-full">
        <h1>${esc(post.title)}</h1>
        <div class="post-meta">Par ${esc(post.author_email)} · ${fmtDate(post.created_at)}</div>
        <p>${esc(post.content)}</p>
        <div class="reactions">${reactionsHtml}</div>
        <div class="rating-block">
          <div class="label">Note cette publication :</div>
          <div class="star-row">${starsHtml}</div>
          <div class="rating-summary">
            ${avg ? `<strong>★ ${avg.avg.toFixed(1)}/5</strong> — ${avg.count} avis` : "Aucune note pour le moment"}
            ${loggedIn && myRating ? ` · Ta note : ${myRating}/5` : ""}
            ${!loggedIn ? " · Connecte-toi pour réagir et noter." : ""}
          </div>
        </div>
      </article>
      <aside class="post-side">
        <div class="card side-card">
          <h3>À propos</h3>
          <p><strong>${esc(post.author_email)}</strong></p>
          <p class="small">Publié le ${fmtDate(post.created_at)}</p>
        </div>
        <div class="card side-card">
          <h3>Statistiques</h3>
          <ul class="stat-list">
            <li><span>💬 Commentaires</span><strong>${comments.length}</strong></li>
            <li><span>👍 J'aime</span><strong>${rc.like ?? 0}</strong></li>
            <li><span>⭐ Super</span><strong>${rc.star ?? 0}</strong></li>
            <li><span>❤️ Coups de cœur</span><strong>${rc.heart ?? 0}</strong></li>
            <li><span>★ Note moyenne</span><strong>${avg ? avg.avg.toFixed(1) + "/5" : "—"}</strong></li>
          </ul>
        </div>
      </aside>
      </div>
      <section class="card comments">
        <h3>Commentaires (${comments.length})</h3>
        <div id="comments-list">${commentsHtml}</div>
        ${commentForm}
      </section>`;

    const detailLogin = $("detail-login");
    if (detailLogin) detailLogin.addEventListener("click", () => openAuthModal("login"));

    document.querySelectorAll(".reaction").forEach((btn) => {
      btn.addEventListener("click", async () => {
        const type = btn.dataset.reaction;
        const key = `${post.id}:${type}`;
        try {
          if (agg.myReactions[key]) {
            const { error } = await supabase.from("reactions")
              .delete()
              .eq("post_id", post.id)
              .eq("user_id", session.user.id)
              .eq("type", type);
            if (error) throw error;
          } else {
            const { error } = await supabase.from("reactions").insert({
              post_id: post.id,
              user_id: session.user.id,
              type
            });
            if (error) throw error;
          }
          await renderPostDetail(post.id);
        } catch (err) {
          alert("Action impossible pour le moment : " + (err.message ?? "erreur inconnue"));
        }
      });
    });

    document.querySelectorAll(".star").forEach((btn) => {
      btn.addEventListener("click", async () => {
        const value = Number(btn.dataset.star);
        try {
          const { error } = await supabase.from("ratings").upsert({
            post_id: post.id,
            user_id: session.user.id,
            value
          }, { onConflict: "post_id,user_id" });
          if (error) throw error;
          await renderPostDetail(post.id);
        } catch (err) {
          alert("Note impossible pour le moment : " + (err.message ?? "erreur inconnue"));
        }
      });
    });

    const commentFormEl = $("comment-form");
    if (commentFormEl) {
      commentFormEl.addEventListener("submit", async (e) => {
        e.preventDefault();
        const content = $("comment-content").value.trim();
        if (!content) return;
        const { error } = await supabase.from("comments").insert({
          post_id: post.id,
          user_id: session.user.id,
          author_email: session.user.email,
          content
        });
        if (error) {
          alert("Commentaire impossible pour le moment : " + error.message);
        } else {
          await renderPostDetail(post.id);
        }
      });
    }
  } catch (err) {
    view.innerHTML = `<section class="card"><p class="message error">Impossible de charger cette publication pour le moment.</p><a class="back-link" href="#/blog">← Retour au blog</a></section>`;
  }
}

// ---------- Démarrage ----------
supabase.auth.getSession().then(({ data }) => {
  session = data.session ?? null;
  renderAuthArea();
  render();
});

supabase.auth.onAuthStateChange((_event, newSession) => {
  session = newSession ?? null;
  renderAuthArea();
  render();
});
