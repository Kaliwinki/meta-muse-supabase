import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm";
import { supabaseConfig } from "./supabase-config.js";

// ---------- Langues (anglais par défaut, français via les paramètres) ----------
const I18N = {
  en: {
    "meta.title": "Meta Muse — Home",
    "nav.home": "Home",
    "nav.blog": "Blog",
    "nav.login": "Login",
    "nav.signup": "Sign up",
    "nav.logout": "Log out",
    "nav.account": "My account",
    "nav.connected_as": "Signed in as",
    "footer.text": "Meta Muse — a site hosted free on GitHub Pages, with accounts and blog powered by Supabase.",
    "auth.tab_login": "Login",
    "auth.tab_signup": "Sign up",
    "auth.login_title": "Log in",
    "auth.signup_title": "Create an account",
    "auth.email": "Email address",
    "auth.password": "Password",
    "auth.password_signup": "Password (6 characters minimum)",
    "auth.username": "Username",
    "auth.username_ph": "e.g. marie_2026",
    "auth.username_hint": "This is the name that will appear publicly on the blog — your email stays private.",
    "auth.submit_login": "Log in",
    "auth.submit_signup": "Sign up",
    "auth.err_registered": "This email address is already in use.",
    "auth.err_credentials": "Incorrect email or password.",
    "auth.err_not_confirmed": "Account not confirmed: check your inbox before logging in.",
    "auth.err_password": "Password must be at least 6 characters.",
    "auth.err_email_invalid": "This email address is not valid.",
    "auth.err_generic": "Something went wrong. Please try again.",
    "auth.err_username_format": "Choose a username of 3 to 20 characters: letters, numbers, “_” or “-” only.",
    "auth.err_username_taken": "This username is already taken. Try another one!",
    "auth.err_profile": "Account created, but the profile could not be saved. Log out and log back in to try again.",
    "auth.ok_welcome": "Account created successfully. Welcome, {u}!",
    "auth.ok_confirm": "Account created! Check your inbox to confirm your address, then log in.",
    "settings.title": "Settings",
    "settings.language": "Language",
    "common.user": "User",
    "common.config_missing": "The site is being configured: check back in a moment.",
    "home.hero_title": "Welcome to",
    "home.hero_desc": "The first test project: a real site with real user accounts, hosted free on GitHub Pages and powered by Supabase.",
    "home.go_blog": "Go to the blog",
    "home.create_account": "Create an account",
    "home.discover_blog": "Discover the blog",
    "home.features_title": "What you can do here",
    "home.f1_title": "👤 User accounts",
    "home.f1_text": "Sign up with an email address, log in and log out. Your credentials are securely managed by Supabase Auth.",
    "home.f2_title": "📝 Community blog",
    "home.f2_text": "Publish articles, comment on others', react with a like, a star or a heart, and rate posts from 1 to 5 stars.",
    "home.f3_title": "🆓 100% free",
    "home.f3_text": "Hosted on GitHub Pages with a Supabase database: no credit card, no fees.",
    "home.steps_title": "How does it work?",
    "home.s1_title": "Create your account",
    "home.s1_text": "Pick a username, an email address and a password, top right. Only your username is public; your email stays private.",
    "home.s2_title": "Publish on the blog",
    "home.s2_text": "Open the Blog tab and share your first article with the community.",
    "home.s3_title": "Interact",
    "home.s3_text": "Comment on posts, leave reactions and rate your favorites from 1 to 5 stars.",
    "blog.title": "Blog",
    "blog.loading": "Loading the blog…",
    "blog.publish_title": "Publish an article",
    "blog.post_title": "Title",
    "blog.post_title_ph": "A catchy title…",
    "blog.post_content": "Content",
    "blog.post_content_ph": "Tell the community something…",
    "blog.publish": "Publish",
    "blog.need_account": "To publish an article, you first need an account.",
    "blog.login_signup": "Log in / Sign up",
    "blog.empty": "No posts yet. Be the first to write!",
    "blog.by": "By",
    "blog.err_publish": "Could not publish: ",
    "blog.err_load": "Could not load the blog right now. Please try again in a moment.",
    "post.loading": "Loading…",
    "post.not_found": "Post not found.",
    "post.back": "← Back to the blog",
    "post.by": "By",
    "post.react_like": "Like",
    "post.react_star": "Great",
    "post.react_heart": "Love",
    "post.rate_label": "Rate this post:",
    "post.no_rating": "No ratings yet",
    "post.your_rating": "Your rating: {v}/5",
    "post.login_to_react": "Log in to react and rate.",
    "post.about": "About",
    "post.published_on": "Published on",
    "post.stats": "Statistics",
    "post.stat_comments": "💬 Comments",
    "post.stat_likes": "👍 Likes",
    "post.stat_stars": "⭐ Stars",
    "post.stat_hearts": "❤️ Hearts",
    "post.stat_avg": "★ Average rating",
    "post.comments": "Comments",
    "post.no_comments": "No comments yet. Start the discussion!",
    "post.add_comment": "Add a comment",
    "post.comment_ph": "Write your comment…",
    "post.comment_btn": "Comment",
    "post.login_to_comment": "Log in to comment",
    "post.err_react": "Action not possible right now: ",
    "post.err_rate": "Could not rate right now: ",
    "post.err_comment": "Could not comment right now: ",
    "post.err_load": "Could not load this post right now."
  },
  fr: {
    "meta.title": "Meta Muse — Accueil",
    "nav.home": "Accueil",
    "nav.blog": "Blog",
    "nav.login": "Connexion",
    "nav.signup": "Inscription",
    "nav.logout": "Déconnexion",
    "nav.account": "Mon compte",
    "nav.connected_as": "Connecté en tant que",
    "footer.text": "Meta Muse — site hébergé gratuitement sur GitHub Pages, comptes et blog propulsés par Supabase.",
    "auth.tab_login": "Connexion",
    "auth.tab_signup": "Inscription",
    "auth.login_title": "Se connecter",
    "auth.signup_title": "Créer un compte",
    "auth.email": "Adresse e-mail",
    "auth.password": "Mot de passe",
    "auth.password_signup": "Mot de passe (6 caractères minimum)",
    "auth.username": "Nom d'utilisateur",
    "auth.username_ph": "ex. marie_2026",
    "auth.username_hint": "C'est ce pseudo qui apparaîtra publiquement sur le blog — ton adresse e-mail reste privée.",
    "auth.submit_login": "Se connecter",
    "auth.submit_signup": "S'inscrire",
    "auth.err_registered": "Cette adresse e-mail est déjà utilisée par un compte.",
    "auth.err_credentials": "Adresse e-mail ou mot de passe incorrect.",
    "auth.err_not_confirmed": "Compte non confirmé : vérifie ta boîte e-mail avant de te connecter.",
    "auth.err_password": "Le mot de passe doit contenir au moins 6 caractères.",
    "auth.err_email_invalid": "L'adresse e-mail n'est pas valide.",
    "auth.err_generic": "Une erreur est survenue. Réessaie.",
    "auth.err_username_format": "Choisis un nom d'utilisateur de 3 à 20 caractères : lettres, chiffres, « _ » ou « - » uniquement.",
    "auth.err_username_taken": "Ce nom d'utilisateur est déjà pris. Essaie-en un autre !",
    "auth.err_profile": "Compte créé, mais le profil n'a pas pu être enregistré. Déconnecte-toi puis reconnecte-toi pour réessayer.",
    "auth.ok_welcome": "Compte créé avec succès. Bienvenue, {u} !",
    "auth.ok_confirm": "Compte créé ! Vérifie ta boîte e-mail pour confirmer ton adresse, puis connecte-toi.",
    "settings.title": "Paramètres",
    "settings.language": "Langue",
    "common.user": "Utilisateur",
    "common.config_missing": "Le site est en cours de configuration : reviens dans quelques instants.",
    "home.hero_title": "Bienvenue sur",
    "home.hero_desc": "Le premier projet test : un vrai site avec de vrais comptes utilisateurs, hébergé gratuitement sur GitHub Pages et propulsé par Supabase.",
    "home.go_blog": "Aller au blog",
    "home.create_account": "Créer un compte",
    "home.discover_blog": "Découvrir le blog",
    "home.features_title": "Ce que tu peux faire ici",
    "home.f1_title": "👤 Comptes utilisateurs",
    "home.f1_text": "Inscris-toi avec une adresse e-mail, connecte-toi et déconnecte-toi. Tes identifiants sont gérés en sécurité par Supabase Auth.",
    "home.f2_title": "📝 Blog communautaire",
    "home.f2_text": "Publie des articles, commente ceux des autres, réagis avec un like, une étoile ou un cœur, et note les publications de 1 à 5 étoiles.",
    "home.f3_title": "🆓 100 % gratuit",
    "home.f3_text": "Hébergement sur GitHub Pages et base de données Supabase : aucune carte bancaire, aucun frais.",
    "home.steps_title": "Comment ça marche ?",
    "home.s1_title": "Crée ton compte",
    "home.s1_text": "Choisis un pseudo, une adresse e-mail et un mot de passe, en haut à droite. Seul ton pseudo est public ; ton e-mail reste privé.",
    "home.s2_title": "Publie sur le blog",
    "home.s2_text": "Ouvre l'onglet Blog et partage ton premier article avec la communauté.",
    "home.s3_title": "Échange",
    "home.s3_text": "Commente les publications, laisse des réactions et note tes coups de cœur de 1 à 5 étoiles.",
    "blog.title": "Blog",
    "blog.loading": "Chargement du blog…",
    "blog.publish_title": "Publier un article",
    "blog.post_title": "Titre",
    "blog.post_title_ph": "Un titre accrocheur…",
    "blog.post_content": "Contenu",
    "blog.post_content_ph": "Raconte quelque chose à la communauté…",
    "blog.publish": "Publier",
    "blog.need_account": "Pour publier un article, il faut d'abord avoir un compte.",
    "blog.login_signup": "Se connecter / S'inscrire",
    "blog.empty": "Aucune publication pour le moment. Sois le premier ou la première à écrire !",
    "blog.by": "Par",
    "blog.err_publish": "Impossible de publier : ",
    "blog.err_load": "Impossible de charger le blog pour le moment. Réessaie dans un instant.",
    "post.loading": "Chargement…",
    "post.not_found": "Publication introuvable.",
    "post.back": "← Retour au blog",
    "post.by": "Par",
    "post.react_like": "J'aime",
    "post.react_star": "Super",
    "post.react_heart": "Coup de cœur",
    "post.rate_label": "Note cette publication :",
    "post.no_rating": "Aucune note pour le moment",
    "post.your_rating": "Ta note : {v}/5",
    "post.login_to_react": "Connecte-toi pour réagir et noter.",
    "post.about": "À propos",
    "post.published_on": "Publié le",
    "post.stats": "Statistiques",
    "post.stat_comments": "💬 Commentaires",
    "post.stat_likes": "👍 J'aime",
    "post.stat_stars": "⭐ Super",
    "post.stat_hearts": "❤️ Coups de cœur",
    "post.stat_avg": "★ Note moyenne",
    "post.comments": "Commentaires",
    "post.no_comments": "Aucun commentaire pour le moment. Lance la discussion !",
    "post.add_comment": "Ajouter un commentaire",
    "post.comment_ph": "Écris ton commentaire…",
    "post.comment_btn": "Commenter",
    "post.login_to_comment": "Se connecter pour commenter",
    "post.err_react": "Action impossible pour le moment : ",
    "post.err_rate": "Note impossible pour le moment : ",
    "post.err_comment": "Commentaire impossible pour le moment : ",
    "post.err_load": "Impossible de charger cette publication pour le moment."
  }
};

let lang = localStorage.getItem("mm_lang") || "en";
const t = (key) => (I18N[lang] && I18N[lang][key]) || I18N.en[key] || key;
const DATE_LOCALE = () => (lang === "fr" ? "fr-FR" : "en-US");

function applyStaticTexts() {
  document.title = t("meta.title");
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach((el) => { el.textContent = t(el.dataset.i18n); });
  document.querySelectorAll("[data-i18n-ph]").forEach((el) => { el.placeholder = t(el.dataset.i18nPh); });
  document.querySelectorAll("[data-i18n-aria]").forEach((el) => el.setAttribute("aria-label", t(el.dataset.i18nAria)));
  document.querySelectorAll(".settings-item[data-lang]").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });
}

function setLang(newLang) {
  if (!I18N[newLang]) return;
  lang = newLang;
  localStorage.setItem("mm_lang", newLang);
  applyStaticTexts();
  renderAuthArea();
  render();
}

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
  return new Date(iso).toLocaleDateString(DATE_LOCALE(), {
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit"
  });
}

function excerpt(text, max = 160) {
  const t2 = String(text ?? "").trim();
  return t2.length > max ? t2.slice(0, max).trimEnd() + "…" : t2;
}

function showModalMessage(text, kind = "info") {
  const box = $("auth-message");
  box.textContent = text;
  box.className = `message ${kind}`;
}

// ---------- Configuration ----------
if (!supabaseConfig.url || supabaseConfig.url === "A_REMPLIR") {
  view.innerHTML = `<section class="card"><p>${esc(t("common.config_missing"))}</p></section>`;
  throw new Error("Configuration Supabase manquante");
}

const supabase = createClient(supabaseConfig.url, supabaseConfig.anonKey);
let session = null;
let currentUsername = null;

/** Récupère le pseudo du compte connecté (et crée le profil s'il manque). */
async function fetchUsername() {
  if (!session?.user) return null;
  const { data } = await supabase
    .from("profiles")
    .select("username")
    .eq("id", session.user.id)
    .maybeSingle();
  if (data?.username) return data.username;
  const fromMeta = session.user.user_metadata?.username;
  if (fromMeta) {
    await supabase.from("profiles").insert({ id: session.user.id, username: fromMeta });
    return fromMeta;
  }
  return null;
}

function authorName(row) {
  return row?.author_username || t("common.user");
}

const REACTION_TYPES = [
  { type: "like", icon: "👍", labelKey: "post.react_like" },
  { type: "star", icon: "⭐", labelKey: "post.react_star" },
  { type: "heart", icon: "❤️", labelKey: "post.react_heart" }
];

// ---------- Authentification ----------
function authErrorMessage(message) {
  const m = (message || "").toLowerCase();
  if (m.includes("user already registered")) return t("auth.err_registered");
  if (m.includes("invalid login credentials")) return t("auth.err_credentials");
  if (m.includes("email not confirmed")) return t("auth.err_not_confirmed");
  if (m.includes("at least 6 characters") || m.includes("password")) return t("auth.err_password");
  if (m.includes("invalid") && m.includes("email")) return t("auth.err_email_invalid");
  return t("auth.err_generic");
}

function renderAuthArea() {
  const area = $("auth-area");
  if (session?.user) {
    const display = currentUsername || t("nav.account");
    area.innerHTML = `
      <span class="user-email" title="${esc(t("nav.connected_as"))} : ${esc(session.user.email)}">${esc(display)}</span>
      <button class="btn" id="logout-btn" type="button">${esc(t("nav.logout"))}</button>`;
    $("logout-btn").addEventListener("click", async () => {
      const { error } = await supabase.auth.signOut();
      if (error) alert(authErrorMessage(error.message));
    });
  } else {
    area.innerHTML = `
      <button class="btn" id="open-login" type="button">${esc(t("nav.login"))}</button>
      <button class="btn primary" id="open-signup" type="button">${esc(t("nav.signup"))}</button>`;
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
  const rawUsername = $("signup-username").value.trim().toLowerCase();
  const email = $("signup-email").value.trim();
  const password = $("signup-password").value;

  if (!/^[a-z0-9_-]{3,20}$/.test(rawUsername)) {
    showModalMessage(t("auth.err_username_format"), "error");
    return;
  }

  // Vérifie que le pseudo n'est pas déjà pris
  try {
    const { data: taken } = await supabase
      .from("profiles")
      .select("id")
      .eq("username", rawUsername)
      .maybeSingle();
    if (taken) {
      showModalMessage(t("auth.err_username_taken"), "error");
      return;
    }
  } catch {
    // si la vérification échoue, la base (contrainte unique) protège quand même
  }

  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: { data: { username: rawUsername } }
  });
  if (error) {
    showModalMessage(authErrorMessage(error.message), "error");
  } else if (data.session && data.user) {
    // Crée le profil public (pseudo), lié au compte — l'e-mail n'est jamais exposé
    const { error: profileError } = await supabase
      .from("profiles")
      .insert({ id: data.user.id, username: rawUsername });
    if (profileError && !String(profileError.message).toLowerCase().includes("duplicate")) {
      showModalMessage(t("auth.err_profile"), "error");
      return;
    }
    showModalMessage(t("auth.ok_welcome").replace("{u}", rawUsername), "success");
    setTimeout(closeAuthModal, 1200);
  } else {
    showModalMessage(t("auth.ok_confirm"), "success");
  }
});

// ---------- Panneau paramètres (langue) ----------
$("settings-btn").addEventListener("click", (e) => {
  e.stopPropagation();
  applyStaticTexts();
  $("settings-menu").classList.toggle("hidden");
});
document.addEventListener("click", (e) => {
  const menu = $("settings-menu");
  if (menu && !menu.classList.contains("hidden") && !e.target.closest(".settings-wrap")) {
    menu.classList.add("hidden");
  }
});
document.querySelectorAll(".settings-item[data-lang]").forEach((btn) => {
  btn.addEventListener("click", () => {
    setLang(btn.dataset.lang);
    $("settings-menu").classList.add("hidden");
  });
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
    a.classList.toggle("active", a.dataset.nav === (name === "post" ? "blog" : name === "home" ? "home" : name));
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
      <h1>${esc(t("home.hero_title"))} <span class="accent">Meta Muse</span></h1>
      <p>${esc(t("home.hero_desc"))}</p>
      <div class="hero-actions">
        ${session?.user
          ? `<a class="btn primary" href="#/blog">${esc(t("home.go_blog"))}</a>`
          : `<button class="btn primary" id="hero-signup" type="button">${esc(t("home.create_account"))}</button>
             <a class="btn" href="#/blog">${esc(t("home.discover_blog"))}</a>`}
      </div>
    </section>

    <div class="home-grid">
    <section class="card">
      <h2>${esc(t("home.features_title"))}</h2>
      <div class="features">
        <div class="feature">
          <h3>${esc(t("home.f1_title"))}</h3>
          <p>${esc(t("home.f1_text"))}</p>
        </div>
        <div class="feature">
          <h3>${esc(t("home.f2_title"))}</h3>
          <p>${esc(t("home.f2_text"))}</p>
        </div>
        <div class="feature">
          <h3>${esc(t("home.f3_title"))}</h3>
          <p>${esc(t("home.f3_text"))}</p>
        </div>
      </div>
    </section>

    <section class="card">
      <h2>${esc(t("home.steps_title"))}</h2>
      <ol class="steps">
        <li><strong>${esc(t("home.s1_title"))}</strong><p>${esc(t("home.s1_text"))}</p></li>
        <li><strong>${esc(t("home.s2_title"))}</strong><p>${esc(t("home.s2_text"))}</p></li>
        <li><strong>${esc(t("home.s3_title"))}</strong><p>${esc(t("home.s3_text"))}</p></li>
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
  view.innerHTML = `<section class="card"><p>${esc(t("blog.loading"))}</p></section>`;
  try {
    const [posts, agg] = await Promise.all([loadPosts(), loadAggregates()]);

    const composer = session?.user
      ? `
        <section class="card">
          <form id="post-form" class="form">
            <h2>${esc(t("blog.publish_title"))}</h2>
            <label for="post-title">${esc(t("blog.post_title"))}</label>
            <input id="post-title" maxlength="120" required placeholder="${esc(t("blog.post_title_ph"))}">
            <label for="post-content">${esc(t("blog.post_content"))}</label>
            <textarea id="post-content" rows="4" maxlength="5000" required placeholder="${esc(t("blog.post_content_ph"))}"></textarea>
            <button type="submit" class="primary">${esc(t("blog.publish"))}</button>
          </form>
        </section>`
      : `
        <section class="card">
          <p>${esc(t("blog.need_account"))}
          <button class="btn primary" id="blog-login" type="button">${esc(t("blog.login_signup"))}</button></p>
        </section>`;

    const list = posts.length === 0
      ? `<section class="card"><p class="empty">${esc(t("blog.empty"))}</p></section>`
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
              <div class="post-meta">${esc(t("blog.by"))} ${esc(authorName(p))} · ${fmtDate(p.created_at)}</div>
              <p class="post-excerpt">${esc(excerpt(p.content))}</p>
              <div class="post-stats">${stats}</div>
            </article>`;
        }).join("");

    view.innerHTML = `
      <div class="blog-header"><h1>${esc(t("blog.title"))}</h1></div>
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
          author_email: session.user.email,
          author_username: currentUsername
        });
        if (error) {
          alert(t("blog.err_publish") + error.message);
        } else {
          await renderBlog();
        }
      });
    }
  } catch (err) {
    view.innerHTML = `<section class="card"><p class="message error">${esc(t("blog.err_load"))}</p></section>`;
  }
}

// ---------- Vue détail d'une publication ----------
async function renderPostDetail(postId) {
  view.innerHTML = `<section class="card"><p>${esc(t("post.loading"))}</p></section>`;
  try {
    const [{ data: post, error: postErr }, agg, { data: comments, error: comErr }] = await Promise.all([
      supabase.from("posts").select("*").eq("id", postId).single(),
      loadAggregates(),
      supabase.from("comments").select("*").eq("post_id", postId).order("created_at", { ascending: true })
    ]);
    if (postErr || !post) {
      view.innerHTML = `<section class="card"><p class="message error">${esc(t("post.not_found"))}</p><a class="back-link" href="#/blog">${esc(t("post.back"))}</a></section>`;
      return;
    }
    if (comErr) throw comErr;

    const avg = avgRating(agg.ratingsByPost, post.id);
    const rc = agg.reactionsByPost[post.id] ?? {};
    const loggedIn = !!session?.user;
    const myRating = agg.myRatings[post.id] ?? 0;

    const reactionsHtml = REACTION_TYPES.map(({ type, icon, labelKey }) => {
      const active = !!agg.myReactions[`${post.id}:${type}`];
      return `<button class="reaction${active ? " active" : ""}" data-reaction="${type}" ${loggedIn ? "" : "disabled"} title="${esc(t(labelKey))}">${icon}<span class="count">${rc[type] ?? 0}</span></button>`;
    }).join("");

    const starsHtml = [1, 2, 3, 4, 5].map((v) =>
      `<button class="star${v <= myRating ? " filled" : ""}" data-star="${v}" ${loggedIn ? "" : "disabled"} title="${v} ★">★</button>`
    ).join("");

    const commentsHtml = comments.length === 0
      ? `<p class="empty">${esc(t("post.no_comments"))}</p>`
      : comments.map((c) => `
        <div class="comment">
          <div class="comment-head">
            <span class="comment-author">${esc(authorName(c))}</span>
            <span class="comment-date">${fmtDate(c.created_at)}</span>
          </div>
          <p>${esc(c.content)}</p>
        </div>`).join("");

    const commentForm = loggedIn
      ? `
        <form id="comment-form" class="form" style="margin-top:1rem">
          <label for="comment-content">${esc(t("post.add_comment"))}</label>
          <textarea id="comment-content" rows="3" maxlength="2000" required placeholder="${esc(t("post.comment_ph"))}"></textarea>
          <button type="submit" class="primary">${esc(t("post.comment_btn"))}</button>
        </form>`
      : `<p><button class="btn primary" id="detail-login" type="button">${esc(t("post.login_to_comment"))}</button></p>`;

    const ratingBits = [
      avg
        ? `<strong>★ ${avg.avg.toFixed(1)}/5</strong> — ${avg.count}`
        : esc(t("post.no_rating")),
      loggedIn && myRating ? esc(t("post.your_rating").replace("{v}", myRating)) : "",
      !loggedIn ? esc(t("post.login_to_react")) : ""
    ].filter(Boolean).join(" · ");

    view.innerHTML = `
      <a class="back-link" href="#/blog">${esc(t("post.back"))}</a>
      <div class="post-layout">
      <article class="card post-full">
        <h1>${esc(post.title)}</h1>
        <div class="post-meta">${esc(t("post.by"))} ${esc(authorName(post))} · ${fmtDate(post.created_at)}</div>
        <p>${esc(post.content)}</p>
        <div class="reactions">${reactionsHtml}</div>
        <div class="rating-block">
          <div class="label">${esc(t("post.rate_label"))}</div>
          <div class="star-row">${starsHtml}</div>
          <div class="rating-summary">${ratingBits}</div>
        </div>
      </article>
      <aside class="post-side">
        <div class="card side-card">
          <h3>${esc(t("post.about"))}</h3>
          <p><strong>${esc(authorName(post))}</strong></p>
          <p class="small">${esc(t("post.published_on"))} ${fmtDate(post.created_at)}</p>
        </div>
        <div class="card side-card">
          <h3>${esc(t("post.stats"))}</h3>
          <ul class="stat-list">
            <li><span>${esc(t("post.stat_comments"))}</span><strong>${comments.length}</strong></li>
            <li><span>${esc(t("post.stat_likes"))}</span><strong>${rc.like ?? 0}</strong></li>
            <li><span>${esc(t("post.stat_stars"))}</span><strong>${rc.star ?? 0}</strong></li>
            <li><span>${esc(t("post.stat_hearts"))}</span><strong>${rc.heart ?? 0}</strong></li>
            <li><span>${esc(t("post.stat_avg"))}</span><strong>${avg ? avg.avg.toFixed(1) + "/5" : "—"}</strong></li>
          </ul>
        </div>
      </aside>
      </div>
      <section class="card comments">
        <h3>${esc(t("post.comments"))} (${comments.length})</h3>
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
          alert(t("post.err_react") + (err.message ?? ""));
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
          alert(t("post.err_rate") + (err.message ?? ""));
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
          author_username: currentUsername,
          content
        });
        if (error) {
          alert(t("post.err_comment") + error.message);
        } else {
          await renderPostDetail(post.id);
        }
      });
    }
  } catch (err) {
    view.innerHTML = `<section class="card"><p class="message error">${esc(t("post.err_load"))}</p><a class="back-link" href="#/blog">${esc(t("post.back"))}</a></section>`;
  }
}

// ---------- Démarrage ----------
applyStaticTexts();

async function applySession(newSession) {
  session = newSession ?? null;
  currentUsername = await fetchUsername();
  renderAuthArea();
  render();
}

supabase.auth.getSession().then(({ data }) => applySession(data.session));

supabase.auth.onAuthStateChange((_event, newSession) => applySession(newSession));
