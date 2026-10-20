import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm";
import { supabaseConfig } from "./supabase-config.js";

// ---------- Langues (anglais par défaut, français via les paramètres) ----------
const I18N = {
  en: {
    "meta.title": "Pierre — Home",
    "nav.home": "Home",
    "nav.blog": "Blog",
    "nav.login": "Login",
    "nav.signup": "Sign up",
    "nav.logout": "Log out",
    "nav.account": "My account",
    "nav.connected_as": "Signed in as",
    "footer.text": "Pierre — a social network hosted free on GitHub Pages, with accounts and blog powered by Supabase.",
    "footer.privacy": "Privacy Policy",
    "settings.theme": "Theme",
    "theme.dark": "🌙 Dark",
    "theme.light": "☀️ Light",
    "feed.whats_new": "What's new, {u}?",
    "badge.new": "Newcomer",
    "badge.active": "Active member",
    "badge.star": "Blog star",
    "photo.change_banner": "Change cover photo",
    "photo.save_banner": "Save cover",
    "toast.published": "Post published!",
    "toast.commented": "Comment posted.",
    "toast.avatar_saved": "Profile picture updated.",
    "toast.banner_saved": "Cover photo updated.",
    "toast.username_saved": "Username saved. Welcome!",
    "nav.members": "Members",
    "common.save": "Save",
    "common.cancel": "Cancel",
    "common.delete": "🗑️ Delete",
    "post.edit": "✏️ Edit",
    "post.delete_confirm": "Delete this post permanently?",
    "post.deleted": "Post deleted.",
    "post.updated": "Post updated.",
    "comment.edit": "Edit",
    "comment.delete_confirm": "Delete this comment?",
    "comment.deleted": "Comment deleted.",
    "comment.updated": "Comment updated.",
    "follow.follow": "Follow",
    "follow.following_btn": "Following ✓",
    "profile.followers": "Followers",
    "profile.following": "Following",
    "feed.all": "All",
    "feed.following": "Following",
    "feed.following_empty": "Follow some members to see their posts here.",
    "search.posts": "Search posts…",
    "search.members": "Search members…",
    "search.no_results": "No results.",
    "notif.title": "Notifications",
    "notif.empty": "No notifications yet.",
    "notif.comment": "{u} commented on your post",
    "notif.reaction": "{u} reacted to your post",
    "notif.follow": "{u} started following you",
    "notif.mark_all": "Mark all as read",
    "msg.title": "Messages",
    "msg.empty": "No conversations yet. Send a message from a member's page!",
    "msg.placeholder": "Write a message…",
    "msg.send": "Send",
    "msg.button": "✉️ Message",
    "msg.thread_empty": "No messages yet. Say hi!",
    "msg.signin": "Log in to see your messages.",
    "members.title": "Members",
    "profile.bio_edit": "Edit bio",
    "profile.bio_placeholder": "Tell everyone about yourself…",
    "toast.bio_saved": "Bio updated.",
    "report.button": "🚩 Report",
    "report.title": "Report this content",
    "report.reason": "Reason (required)",
    "report.send": "Send report",
    "report.thanks": "Thanks, your report has been sent.",
    "report.err": "Could not send the report.",
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
    "auth.or": "or",
    "auth.google": "Continue with Google",
    "auth.facebook": "Continue with Facebook",
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
    "home.hero_desc": "Pierre is a friendly social network: create your account, get your own personal page, post articles, and connect with the community through comments, reactions and ratings.",
    "home.go_blog": "Go to the blog",
    "home.create_account": "Create an account",
    "home.discover_blog": "Discover the blog",
    "home.features_title": "What you can do here",
    "home.f1_title": "👤 Your own page",
    "home.f1_text": "Every member gets a personal page: your posts, your stats, your presence in the community — just one click from your username, anywhere on the site.",
    "home.f2_title": "📝 Posts & blog",
    "home.f2_text": "Publish articles, comment on others', react with a like, a star or a heart, and rate posts from 1 to 5 stars.",
    "home.f3_title": "🤝 A real community",
    "home.f3_text": "Meet other members, visit their pages, discover their posts and build your circle — like on a real social network.",
    "home.steps_title": "How does it work?",
    "home.s1_title": "Create your account",
    "home.s1_text": "Pick a username, an email address and a password, top right. Only your username is public; your email stays private.",
    "home.s2_title": "Get your page",
    "home.s2_text": "Your personal page comes with your account: it's your corner of Pierre, reachable by clicking your username anywhere.",
    "home.s3_title": "Post & connect",
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
    "post.err_load": "Could not load this post right now.",
    "profile.not_found": "User not found.",
    "profile.member_since": "Member since",
    "profile.posts": "Posts",
    "profile.no_posts": "No posts yet.",
    "profile.stat_posts": "📝 Posts",
    "profile.stat_comments": "💬 Comments written",
    "profile.stat_reactions": "❤️ Reactions received",
    "profile.stat_avg": "★ Average rating received",
    "username.title": "Choose your username",
    "username.desc": "Welcome to Pierre! Pick the username that will appear publicly. Your email stays private.",
    "username.label": "Username",
    "username.save": "Save my username",
    "username.later": "Later",
    "photo.add": "Add a photo (optional)",
    "photo.change_avatar": "Change profile picture",
    "photo.save_avatar": "Save photo",
    "photo.too_big": "This image is too large (max 5 MB).",
    "photo.not_image": "Please choose an image file.",
    "photo.upload_error": "Photo upload failed. Please try again.",
    "photo.need_username": "Choose your username first."
  },
  fr: {
    "meta.title": "Pierre — Accueil",
    "nav.home": "Accueil",
    "nav.blog": "Blog",
    "nav.login": "Connexion",
    "nav.signup": "Inscription",
    "nav.logout": "Déconnexion",
    "nav.account": "Mon compte",
    "nav.connected_as": "Connecté en tant que",
    "footer.text": "Pierre — un réseau social hébergé gratuitement sur GitHub Pages, comptes et blog propulsés par Supabase.",
    "footer.privacy": "Politique de confidentialité",
    "settings.theme": "Thème",
    "theme.dark": "🌙 Sombre",
    "theme.light": "☀️ Clair",
    "feed.whats_new": "Quoi de neuf, {u} ?",
    "badge.new": "Nouveau",
    "badge.active": "Membre actif",
    "badge.star": "Star du blog",
    "photo.change_banner": "Changer la bannière",
    "photo.save_banner": "Enregistrer la bannière",
    "toast.published": "Article publié !",
    "toast.commented": "Commentaire publié.",
    "toast.avatar_saved": "Photo de profil mise à jour.",
    "toast.banner_saved": "Bannière mise à jour.",
    "toast.username_saved": "Pseudo enregistré. Bienvenue !",
    "nav.members": "Membres",
    "common.save": "Enregistrer",
    "common.cancel": "Annuler",
    "common.delete": "🗑️ Supprimer",
    "post.edit": "✏️ Modifier",
    "post.delete_confirm": "Supprimer définitivement cet article ?",
    "post.deleted": "Article supprimé.",
    "post.updated": "Article mis à jour.",
    "comment.edit": "Modifier",
    "comment.delete_confirm": "Supprimer ce commentaire ?",
    "comment.deleted": "Commentaire supprimé.",
    "comment.updated": "Commentaire mis à jour.",
    "follow.follow": "Suivre",
    "follow.following_btn": "Suivi ✓",
    "profile.followers": "Abonnés",
    "profile.following": "Abonnements",
    "feed.all": "Tous",
    "feed.following": "Mes abonnements",
    "feed.following_empty": "Suis des membres pour voir leurs publications ici.",
    "search.posts": "Rechercher un article…",
    "search.members": "Rechercher un membre…",
    "search.no_results": "Aucun résultat.",
    "notif.title": "Notifications",
    "notif.empty": "Aucune notification pour le moment.",
    "notif.comment": "{u} a commenté ton article",
    "notif.reaction": "{u} a réagi à ton article",
    "notif.follow": "{u} s'est abonné à toi",
    "notif.mark_all": "Tout marquer comme lu",
    "msg.title": "Messages",
    "msg.empty": "Aucune conversation pour le moment. Envoie un message depuis la page d'un membre !",
    "msg.placeholder": "Écris un message…",
    "msg.send": "Envoyer",
    "msg.button": "✉️ Message",
    "msg.thread_empty": "Aucun message pour le moment. Dis bonjour !",
    "msg.signin": "Connecte-toi pour voir tes messages.",
    "members.title": "Membres",
    "profile.bio_edit": "Modifier ma bio",
    "profile.bio_placeholder": "Présente-toi en quelques mots…",
    "toast.bio_saved": "Bio mise à jour.",
    "report.button": "🚩 Signaler",
    "report.title": "Signaler ce contenu",
    "report.reason": "Motif (obligatoire)",
    "report.send": "Envoyer le signalement",
    "report.thanks": "Merci, ton signalement a été envoyé.",
    "report.err": "Impossible d'envoyer le signalement.",
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
    "auth.or": "ou",
    "auth.google": "Continuer avec Google",
    "auth.facebook": "Continuer avec Facebook",
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
    "home.hero_desc": "Pierre est un réseau social convivial : crée ton compte, obtiens ta page personnelle, publie des articles et échange avec la communauté grâce aux commentaires, réactions et notes.",
    "home.go_blog": "Aller au blog",
    "home.create_account": "Créer un compte",
    "home.discover_blog": "Découvrir le blog",
    "home.features_title": "Ce que tu peux faire ici",
    "home.f1_title": "👤 Ta page personnelle",
    "home.f1_text": "Chaque membre a sa page personnelle : tes publications, tes statistiques, ta présence dans la communauté — à un clic de ton pseudo, partout sur le site.",
    "home.f2_title": "📝 Publications & blog",
    "home.f2_text": "Publie des articles, commente ceux des autres, réagis avec un like, une étoile ou un cœur, et note les publications de 1 à 5 étoiles.",
    "home.f3_title": "🤝 Une vraie communauté",
    "home.f3_text": "Rencontre d'autres membres, visite leurs pages, découvre leurs publications et construis ton cercle — comme sur un vrai réseau social.",
    "home.steps_title": "Comment ça marche ?",
    "home.s1_title": "Crée ton compte",
    "home.s1_text": "Choisis un pseudo, une adresse e-mail et un mot de passe, en haut à droite. Seul ton pseudo est public ; ton e-mail reste privé.",
    "home.s2_title": "Obtiens ta page",
    "home.s2_text": "Ta page personnelle est créée avec ton compte : c'est ton coin de Pierre, accessible en cliquant sur ton pseudo n'importe où.",
    "home.s3_title": "Publie & échange",
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
    "post.err_load": "Impossible de charger cette publication pour le moment.",
    "profile.not_found": "Utilisateur introuvable.",
    "profile.member_since": "Membre depuis",
    "profile.posts": "Publications",
    "profile.no_posts": "Aucune publication pour le moment.",
    "profile.stat_posts": "📝 Publications",
    "profile.stat_comments": "💬 Commentaires écrits",
    "profile.stat_reactions": "❤️ Réactions reçues",
    "profile.stat_avg": "★ Note moyenne reçue",
    "username.title": "Choisis ton nom d'utilisateur",
    "username.desc": "Bienvenue sur Pierre ! Choisis le pseudo qui apparaîtra publiquement. Ton e-mail reste privé.",
    "username.label": "Nom d'utilisateur",
    "username.save": "Enregistrer mon pseudo",
    "username.later": "Plus tard",
    "photo.add": "Ajouter une photo (facultatif)",
    "photo.change_avatar": "Changer la photo de profil",
    "photo.save_avatar": "Enregistrer la photo",
    "photo.too_big": "Cette image est trop lourde (max 5 Mo).",
    "photo.not_image": "Choisis un fichier image.",
    "photo.upload_error": "L'envoi de la photo a échoué. Réessaie.",
    "photo.need_username": "Choisis d'abord ton nom d'utilisateur."
  }
};

let lang = localStorage.getItem("mm_lang") || "en";
const t = (key) => (I18N[lang] && I18N[lang][key]) || I18N.en[key] || key;
const DATE_LOCALE = () => (lang === "fr" ? "fr-FR" : "en-US");

function applyStaticTexts() {
  document.title = t("meta.title");
  document.documentElement.lang = lang;
  applyTheme();
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

/** Avatar public du compte (ou rien). */
let profilesById = {};
/** Badges des membres : userId -> [{emoji, key}]. */
let badgesById = {};
/** Abonnements : qui je suis, et compteurs par membre. */
let followingSet = new Set();
let followerCountById = {};
let followingCountById = {};
function avatarFor(userId) {
  return userId ? profilesById[userId]?.avatar_url : null;
}

/** Statistiques d'activité par utilisateur, utilisées pour les badges. */
function computeBadges(statsByUser) {
  badgesById = {};
  for (const [uid, pr] of Object.entries(profilesById)) {
    const badges = [];
    const created = pr.created_at ? new Date(pr.created_at).getTime() : null;
    if (created && Date.now() - created < 7 * 864e5) badges.push({ emoji: "🌱", key: "badge.new" });
    const st = statsByUser[uid] || { posts: 0, comments: 0, reactionsReceived: 0, ratingCount: 0, ratingSum: 0 };
    if (st.posts >= 5 || st.comments >= 10) badges.push({ emoji: "🔥", key: "badge.active" });
    if (st.ratingCount >= 3 && st.ratingSum / st.ratingCount >= 4.5) badges.push({ emoji: "🏆", key: "badge.star" });
    else if (st.reactionsReceived >= 20) badges.push({ emoji: "🏆", key: "badge.star" });
    if (badges.length) badgesById[uid] = badges;
  }
}

/** Pseudo cliquable vers la page personnelle, avec mini avatar et badges s'ils existent. */
function authorHtml(row) {
  const name = authorName(row);
  const av = avatarFor(row?.user_id);
  const avHtml = av ? `<img class="mini-avatar" src="${esc(av)}" alt="">` : "";
  const badges = badgesById[row?.user_id] || [];
  const bHtml = badges.map((b) => `<span class="badge" title="${esc(t(b.key))}">${b.emoji}</span>`).join("");
  return row?.author_username
    ? `<a class="author-link" href="#/user/${esc(row.author_username)}">${avHtml}${esc(name)}${bHtml}</a>`
    : `${avHtml}${esc(name)}${bHtml}`;
}

/** Avatar 40px du fil social (photo ou initiale). */
function feedAvatarHtml(row) {
  const av = avatarFor(row?.user_id);
  if (av) return `<img class="feed-avatar" src="${esc(av)}" alt="">`;
  return `<div class="feed-avatar feed-avatar-letter">${esc(authorName(row).charAt(0).toUpperCase())}</div>`;
}

function myFeedAvatarHtml() {
  const av = avatarFor(session?.user?.id);
  if (av) return `<img class="feed-avatar" src="${esc(av)}" alt="">`;
  return `<div class="feed-avatar feed-avatar-letter">${esc((currentUsername || "?").charAt(0).toUpperCase())}</div>`;
}

/** Crée une notification pour un autre membre (silencieux en cas d'échec). */
async function notify(userId, type, postId = null) {
  if (!session?.user || !userId || userId === session.user.id) return;
  try {
    await supabase.from("notifications").insert({
      user_id: userId,
      actor_id: session.user.id,
      actor_username: currentUsername,
      type,
      post_id: postId
    });
  } catch { /* une notification ne doit jamais bloquer l'action principale */ }
}

/** Bouton Suivre / Suivi pour un profil (rien pour soi ou déconnecté). */
function followButtonHtml(profileId) {
  if (!session?.user || profileId === session.user.id) return "";
  const on = followingSet.has(profileId);
  return `<button class="btn follow-btn${on ? " following" : ""}" data-follow-btn="${esc(profileId)}" type="button">${esc(on ? t("follow.following_btn") : t("follow.follow"))}</button>`;
}

function refreshFollowButtons() {
  document.querySelectorAll("[data-follow-btn]").forEach((btn) => {
    const on = followingSet.has(btn.dataset.followBtn);
    btn.textContent = on ? t("follow.following_btn") : t("follow.follow");
    btn.classList.toggle("following", on);
  });
}

async function toggleFollow(userId) {
  if (!session?.user) { openAuthModal("login"); return; }
  if (!currentUsername) { openUsernameModal(); return; }
  if (userId === session.user.id) return;
  if (followingSet.has(userId)) {
    const { error } = await supabase.from("follows").delete()
      .eq("follower_id", session.user.id).eq("following_id", userId);
    if (!error) {
      followingSet.delete(userId);
      followerCountById[userId] = Math.max(0, (followerCountById[userId] ?? 1) - 1);
    }
  } else {
    const { error } = await supabase.from("follows").insert({ follower_id: session.user.id, following_id: userId });
    if (!error) {
      followingSet.add(userId);
      followerCountById[userId] = (followerCountById[userId] ?? 0) + 1;
      notify(userId, "follow", null);
    }
  }
  refreshFollowButtons();
}

/** Compteurs du badge cloche et messages dans la barre de navigation. */
async function refreshBadges() {
  if (!session?.user) return;
  const nb = $("notif-badge");
  const mb = $("msg-badge");
  if (!nb && !mb) return;
  try {
    const [{ count: nCount }, { count: mCount }] = await Promise.all([
      supabase.from("notifications").select("id", { count: "exact", head: true }).is("read_at", null),
      supabase.from("messages").select("id", { count: "exact", head: true }).eq("recipient_id", session.user.id).is("read_at", null)
    ]);
    if (nb) { nb.textContent = nCount ?? ""; nb.classList.toggle("hidden", !nCount); }
    if (mb) { mb.textContent = mCount ?? ""; mb.classList.toggle("hidden", !mCount); }
  } catch { /* silencieux */ }
}

function notifItemHtml(n) {
  const key = n.type === "comment" ? "notif.comment" : n.type === "reaction" ? "notif.reaction" : "notif.follow";
  const who = n.actor_username || "?";
  return `
    <div class="notif-item" data-notif="${esc(n.id)}">
      <span class="dot${n.read_at ? " read" : ""}"></span>
      <span>${esc(t(key).replace("{u}", who))}<br><span class="when">${fmtDate(n.created_at)}</span></span>
    </div>`;
}

async function toggleNotifPanel() {
  const panel = $("notif-panel");
  if (!panel) return;
  if (!panel.classList.contains("hidden")) { panel.classList.add("hidden"); return; }
  panel.innerHTML = `<p class="small">${esc(t("post.loading"))}</p>`;
  panel.classList.remove("hidden");
  const { data, error } = await supabase.from("notifications")
    .select("*").order("created_at", { ascending: false }).limit(20);
  if (error || !data?.length) {
    panel.innerHTML = `<p class="small">${esc(t("notif.empty"))}</p>`;
    return;
  }
  panel.innerHTML = `
    <div class="notif-actions"><button id="notif-mark-all" type="button">${esc(t("notif.mark_all"))}</button></div>
    ${data.map(notifItemHtml).join("")}`;
  panel.querySelectorAll("[data-notif]").forEach((el) => {
    el.addEventListener("click", () => openNotification(el.dataset.notif, data));
  });
  $("notif-mark-all").addEventListener("click", async () => {
    await supabase.from("notifications").update({ read_at: new Date().toISOString() }).is("read_at", null);
    panel.classList.add("hidden");
    refreshBadges();
  });
}

async function openNotification(id, list) {
  const n = list.find((x) => x.id === id);
  if (!n) return;
  if (!n.read_at) {
    await supabase.from("notifications").update({ read_at: new Date().toISOString() }).eq("id", id);
    refreshBadges();
  }
  $("notif-panel")?.classList.add("hidden");
  if (n.type === "follow" && n.actor_username) location.hash = `#/user/${n.actor_username}`;
  else if (n.post_id) location.hash = `#/post/${n.post_id}`;
}

/** Signalement : modale partagée par les articles et les commentaires. */
let reportTarget = null;
function openReportModal(target) {
  if (!session?.user) { openAuthModal("login"); return; }
  reportTarget = target;
  $("report-message").innerHTML = "";
  $("report-reason").value = "";
  $("report-modal").classList.remove("hidden");
}
function closeReportModal() {
  $("report-modal").classList.add("hidden");
  reportTarget = null;
}

/** Rafraîchissement périodique des conversations ouvertes. */
let msgPoll = null;

/** True si l'utilisateur peut écrire (sinon, lui proposer de choisir son pseudo). */
function requireUsername() {
  if (!session?.user) return false;
  if (!currentUsername) {
    openUsernameModal();
    showUsernameMessage(t("photo.need_username"), "info");
    return false;
  }
  return true;
}

/** Envoie une photo dans le dossier personnel de l'utilisateur (kind: "posts" | "avatars").
    Retourne : URL publique, null (pas de fichier), ou undefined (échec, message déjà affiché). */
const MAX_PHOTO = 5 * 1024 * 1024;
async function uploadPhoto(file, kind) {
  if (!file) return null;
  if (!file.type.startsWith("image/")) { showToast(t("photo.not_image"), "error"); return undefined; }
  if (file.size > MAX_PHOTO) { showToast(t("photo.too_big"), "error"); return undefined; }
  const ext = (file.name.split(".").pop() || "jpg").toLowerCase().replace(/[^a-z0-9]/g, "") || "jpg";
  const path = `${kind}/${session.user.id}/${Date.now()}-${Math.random().toString(36).slice(2, 8)}.${ext}`;
  const { error } = await supabase.storage.from("media").upload(path, file, { cacheControl: "3600", upsert: false });
  if (error) { showToast(t("photo.upload_error"), "error"); return undefined; }
  const { data } = supabase.storage.from("media").getPublicUrl(path);
  return data.publicUrl;
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
    const nameHtml = currentUsername
      ? `<a class="user-email author-link" href="#/user/${esc(currentUsername)}" title="${esc(t("nav.connected_as"))} : ${esc(session.user.email)}">${esc(display)}</a>`
      : `<span class="user-email" title="${esc(t("nav.connected_as"))} : ${esc(session.user.email)}">${esc(display)}</span>`;
    area.innerHTML = `
      <span class="icon-wrap">
        <button class="btn icon-btn" id="msg-btn" type="button" title="${esc(t("msg.title"))}">💬</button>
        <span class="badge-count hidden" id="msg-badge"></span>
      </span>
      <span class="notif-wrap">
        <span class="icon-wrap">
          <button class="btn icon-btn" id="notif-btn" type="button" title="${esc(t("notif.title"))}">🔔</button>
          <span class="badge-count hidden" id="notif-badge"></span>
        </span>
        <div id="notif-panel" class="notif-panel hidden"></div>
      </span>
      ${nameHtml}
      <button class="btn" id="logout-btn" type="button">${esc(t("nav.logout"))}</button>`;
    $("logout-btn").addEventListener("click", async () => {
      const { error } = await supabase.auth.signOut();
      if (error) showToast(authErrorMessage(error.message), "error");
    });
    $("msg-btn").addEventListener("click", () => { location.hash = "#/messages"; });
    refreshBadges();
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

// ---------- Connexion via Google / Facebook ----------
async function signInWithProvider(provider) {
  const { error } = await supabase.auth.signInWithOAuth({
    provider,
    options: { redirectTo: window.location.origin + window.location.pathname }
  });
  if (error) showModalMessage(authErrorMessage(error.message), "error");
}

$("oauth-google").addEventListener("click", () => signInWithProvider("google"));
$("oauth-facebook").addEventListener("click", () => signInWithProvider("facebook"));

// ---------- Choix du pseudo (après une connexion sociale) ----------
let usernamePromptShown = false;

function showUsernameMessage(text, kind = "info") {
  const box = $("username-message");
  box.textContent = text;
  box.className = `message ${kind}`;
}

function suggestUsername() {
  const md = session?.user?.user_metadata || {};
  const candidates = [md.user_name, md.preferred_username, md.full_name, md.name, (session?.user?.email || "").split("@")[0]];
  for (const c of candidates) {
    const s = String(c || "").toLowerCase().replace(/[^a-z0-9_-]/g, "").slice(0, 20);
    if (/^[a-z0-9_-]{3,20}$/.test(s)) return s;
  }
  return "";
}

function openUsernameModal() {
  if (!$("username-input").value) $("username-input").value = suggestUsername();
  $("username-message").className = "message hidden";
  $("username-modal").classList.remove("hidden");
}

function closeUsernameModal() {
  $("username-modal").classList.add("hidden");
}

$("username-later").addEventListener("click", closeUsernameModal);

$("username-form").addEventListener("submit", async (e) => {
  e.preventDefault();
  const rawUsername = $("username-input").value.trim().toLowerCase();
  if (!/^[a-z0-9_-]{3,20}$/.test(rawUsername)) {
    showUsernameMessage(t("auth.err_username_format"), "error");
    return;
  }
  try {
    const { data: taken } = await supabase
      .from("profiles")
      .select("id")
      .eq("username", rawUsername)
      .maybeSingle();
    if (taken && taken.id !== session.user.id) {
      showUsernameMessage(t("auth.err_username_taken"), "error");
      return;
    }
  } catch { /* la contrainte unique protège quand même */ }

  const md = session?.user?.user_metadata || {};
  const avatarUrl = md.avatar_url || md.picture || null;
  const { error } = await supabase
    .from("profiles")
    .upsert({ id: session.user.id, username: rawUsername, avatar_url: avatarUrl }, { onConflict: "id" });
  if (error) {
    showUsernameMessage(t("auth.err_generic"), "error");
    return;
  }
  currentUsername = rawUsername;
  closeUsernameModal();
  showToast(t("toast.username_saved"), "success");
  renderAuthArea();
  render();
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

// ---------- Thème clair / sombre ----------
let theme = localStorage.getItem("mm_theme") || "dark";
function applyTheme() {
  document.documentElement.dataset.theme = theme;
  document.querySelectorAll(".settings-item[data-theme]").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.theme === theme);
  });
}
function setTheme(newTheme) {
  if (newTheme !== "dark" && newTheme !== "light") return;
  theme = newTheme;
  localStorage.setItem("mm_theme", theme);
  applyTheme();
}
document.querySelectorAll(".settings-item[data-theme]").forEach((btn) => {
  btn.addEventListener("click", () => { setTheme(btn.dataset.theme); });
});

// ---------- Délégation globale : suivre, signaler, notifications ----------
document.addEventListener("click", (e) => {
  const fb = e.target.closest("[data-follow-btn]");
  if (fb) { toggleFollow(fb.dataset.followBtn); return; }
  const rp = e.target.closest("[data-report-post]");
  if (rp) { openReportModal({ postId: rp.dataset.reportPost }); return; }
  const rc = e.target.closest("[data-report-comment]");
  if (rc) { openReportModal({ commentId: rc.dataset.reportComment }); return; }
  if (e.target.closest("#notif-btn")) { toggleNotifPanel(); return; }
  const panel = $("notif-panel");
  if (panel && !panel.classList.contains("hidden") && !e.target.closest(".notif-wrap")) {
    panel.classList.add("hidden");
  }
});

// ---------- Modale de signalement ----------
$("report-close").addEventListener("click", closeReportModal);
$("report-modal").addEventListener("click", (e) => {
  if (e.target === $("report-modal")) closeReportModal();
});
$("report-form").addEventListener("submit", async (e) => {
  e.preventDefault();
  const reason = $("report-reason").value.trim();
  if (!reason || !reportTarget || !session?.user) return;
  const { error } = await supabase.from("reports").insert({
    reporter_id: session.user.id,
    reason,
    post_id: reportTarget.postId || null,
    comment_id: reportTarget.commentId || null
  });
  closeReportModal();
  if (error) showToast(t("report.err"), "error");
  else showToast(t("report.thanks"), "success");
});

// ---------- Application installable (PWA) ----------
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("sw.js").catch(() => {});
  });
}

// ---------- Notifications toast ----------
function showToast(text, kind = "info") {
  let box = $("toasts");
  if (!box) {
    box = document.createElement("div");
    box.id = "toasts";
    document.body.appendChild(box);
  }
  const el = document.createElement("div");
  el.className = `toast ${kind}`;
  el.textContent = text;
  box.appendChild(el);
  setTimeout(() => {
    el.classList.add("out");
    setTimeout(() => el.remove(), 350);
  }, 3400);
}

// ---------- Squelettes de chargement ----------
function skeletonHtml(n = 3) {
  const card = `
    <section class="card">
      <div class="skel skel-avatar"></div>
      <div class="skel skel-title"></div>
      <div class="skel skel-line"></div>
      <div class="skel skel-line short"></div>
      <div class="skel skel-line"></div>
    </section>`;
  return Array.from({ length: n }, () => card).join("");
}

// ---------- Routeur ----------
function currentRoute() {
  const hash = location.hash || "#/";
  const postMatch = hash.match(/^#\/post\/([0-9a-f-]{36})$/i);
  if (postMatch) return { name: "post", id: postMatch[1] };
  const userMatch = hash.match(/^#\/user\/([a-z0-9_-]{3,20})$/);
  if (userMatch) return { name: "user", username: userMatch[1] };
  const threadMatch = hash.match(/^#\/messages\/([a-z0-9_-]{3,20})$/);
  if (threadMatch) return { name: "thread", username: threadMatch[1] };
  if (hash === "#/blog") return { name: "blog" };
  if (hash === "#/members") return { name: "members" };
  if (hash === "#/messages") return { name: "conversations" };
  return { name: "home" };
}

function setActiveNav(name) {
  const target = name === "post" ? "blog" : name === "home" ? "home" : name === "blog" ? "blog" : name === "members" ? "members" : "";
  document.querySelectorAll(".nav-links a").forEach((a) => {
    a.classList.toggle("active", a.dataset.nav === target);
  });
}

async function render() {
  if (msgPoll) { clearInterval(msgPoll); msgPoll = null; }
  const route = currentRoute();
  setActiveNav(route.name);
  if (route.name === "blog") {
    await renderBlog();
  } else if (route.name === "post") {
    await renderPostDetail(route.id);
  } else if (route.name === "user") {
    await renderProfile(route.username);
  } else if (route.name === "members") {
    await renderMembers();
  } else if (route.name === "conversations") {
    await renderConversations();
  } else if (route.name === "thread") {
    await renderThread(route.username);
  } else {
    renderHome();
  }
}

window.addEventListener("hashchange", render);

// ---------- Page d'accueil ----------
function renderHome() {
  view.innerHTML = `
    <section class="hero card">
      <h1>${esc(t("home.hero_title"))} <span class="accent">Pierre</span></h1>
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
  const [reactionsRes, ratingsRes, commentsRes, profilesRes, postsAllRes, followsRes] = await Promise.all([
    supabase.from("reactions").select("post_id,type,user_id"),
    supabase.from("ratings").select("post_id,value,user_id"),
    supabase.from("comments").select("post_id,user_id"),
    supabase.from("profiles").select("id,username,avatar_url,created_at,bio"),
    supabase.from("posts").select("id,user_id"),
    supabase.from("follows").select("follower_id,following_id")
  ]);
  if (reactionsRes.error) throw reactionsRes.error;
  if (ratingsRes.error) throw ratingsRes.error;
  if (commentsRes.error) throw commentsRes.error;
  if (!profilesRes.error) {
    profilesById = {};
    for (const pr of profilesRes.data) profilesById[pr.id] = pr;
  }

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

  // --- Statistiques par membre (badges) ---
  const statsByUser = {};
  const stOf = (uid) => (statsByUser[uid] ??= { posts: 0, comments: 0, reactionsReceived: 0, ratingCount: 0, ratingSum: 0 });
  const postOwner = {};
  for (const p of postsAllRes.data || []) {
    postOwner[p.id] = p.user_id;
    stOf(p.user_id).posts += 1;
  }
  for (const c of commentsRes.data) stOf(c.user_id).comments += 1;
  for (const [pid, byType] of Object.entries(reactionsByPost)) {
    const owner = postOwner[pid];
    if (owner) stOf(owner).reactionsReceived += (byType.like ?? 0) + (byType.star ?? 0) + (byType.heart ?? 0);
  }
  for (const [pid, rAgg] of Object.entries(ratingsByPost)) {
    const owner = postOwner[pid];
    if (owner) { stOf(owner).ratingCount += rAgg.count; stOf(owner).ratingSum += rAgg.sum; }
  }
  computeBadges(statsByUser);

  // --- Abonnements ---
  followingSet = new Set();
  followerCountById = {};
  followingCountById = {};
  for (const f of followsRes.data || []) {
    if (session?.user && f.follower_id === session.user.id) followingSet.add(f.following_id);
    followerCountById[f.following_id] = (followerCountById[f.following_id] ?? 0) + 1;
    followingCountById[f.follower_id] = (followingCountById[f.follower_id] ?? 0) + 1;
  }

  return { reactionsByPost, myReactions, ratingsByPost, myRatings, commentsCountByPost };
}

function avgRating(ratingsByPost, postId) {
  const agg = ratingsByPost[postId];
  if (!agg || agg.count === 0) return null;
  return { avg: agg.sum / agg.count, count: agg.count };
}

/** Carte d'un article (utilisée par le blog et les pages personnelles). */
function postCardHtml(p, agg) {
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
      <div class="post-head">
        ${feedAvatarHtml(p)}
        <div class="post-head-info">
          <div class="post-head-name">${authorHtml(p)}</div>
          <div class="post-head-date">${fmtDate(p.created_at)}</div>
        </div>
      </div>
      <h2><a href="#/post/${esc(p.id)}">${esc(p.title)}</a></h2>
      ${p.image_url ? `<img class="post-image" src="${esc(p.image_url)}" alt="">` : ""}
      <p class="post-excerpt">${esc(excerpt(p.content))}</p>
      <div class="post-stats">${stats}</div>
    </article>`;
}

function bindPostCards() {
  document.querySelectorAll(".post-card").forEach((card) => {
    card.addEventListener("click", (e) => {
      if (e.target.closest("a,button")) return;
      location.hash = `#/post/${card.dataset.postId}`;
    });
  });
}

// ---------- Vue Blog (liste) ----------
let feedMode = "all";
let blogCache = null;

function postsZoneHtml() {
  if (!blogCache) return "";
  const { posts, agg } = blogCache;
  if (!posts.length) return `<section class="card"><p class="empty">${esc(t("blog.empty"))}</p></section>`;
  let list = posts;
  if (feedMode === "following" && session?.user) {
    list = list.filter((p) => followingSet.has(p.user_id) || p.user_id === session.user.id);
    if (!list.length) return `<section class="card"><p class="empty">${esc(t("feed.following_empty"))}</p></section>`;
  }
  const q = ($("post-search")?.value || "").trim().toLowerCase();
  if (q) {
    list = list.filter((p) =>
      p.title.toLowerCase().includes(q) ||
      p.content.toLowerCase().includes(q) ||
      authorName(p).toLowerCase().includes(q));
    if (!list.length) return `<section class="card"><p class="empty">${esc(t("search.no_results"))}</p></section>`;
  }
  return `<div class="posts-grid">${list.map((p) => postCardHtml(p, agg)).join("")}</div>`;
}

async function renderBlog() {
  view.innerHTML = skeletonHtml(3);
  try {
    const [posts, agg] = await Promise.all([loadPosts(), loadAggregates()]);

    const composer = session?.user
      ? `
        <section class="card">
          <div class="composer-head">
            ${myFeedAvatarHtml()}
            <h2>${esc(t("feed.whats_new").replace("{u}", currentUsername || ""))}</h2>
          </div>
          <form id="post-form" class="form">
            <label for="post-title">${esc(t("blog.post_title"))}</label>
            <input id="post-title" maxlength="120" required placeholder="${esc(t("blog.post_title_ph"))}">
            <label for="post-content">${esc(t("blog.post_content"))}</label>
            <textarea id="post-content" rows="4" maxlength="5000" required placeholder="${esc(t("blog.post_content_ph"))}"></textarea>
            <label for="post-image">${esc(t("photo.add"))}</label>
            <input id="post-image" type="file" accept="image/*">
            <button type="submit" class="primary">${esc(t("blog.publish"))}</button>
          </form>
        </section>`
      : `
        <section class="card">
          <p>${esc(t("blog.need_account"))}
          <button class="btn primary" id="blog-login" type="button">${esc(t("blog.login_signup"))}</button></p>
        </section>`;

    blogCache = { posts, agg };

    const tabs = session?.user
      ? `<div class="seg-tabs">
           <button class="seg-tab${feedMode === "all" ? " active" : ""}" data-feed="all" type="button">${esc(t("feed.all"))}</button>
           <button class="seg-tab${feedMode === "following" ? " active" : ""}" data-feed="following" type="button">${esc(t("feed.following"))}</button>
         </div>`
      : "";

    view.innerHTML = `
      <div class="blog-header"><h1>${esc(t("blog.title"))}</h1></div>
      ${composer}
      ${tabs}
      <input id="post-search" class="search-input" type="search" placeholder="${esc(t("search.posts"))}">
      <div id="posts-zone">${postsZoneHtml()}</div>`;

    bindPostCards();

    document.querySelectorAll("[data-feed]").forEach((b) => {
      b.addEventListener("click", () => {
        feedMode = b.dataset.feed;
        document.querySelectorAll("[data-feed]").forEach((x) => x.classList.toggle("active", x === b));
        $("posts-zone").innerHTML = postsZoneHtml();
        bindPostCards();
      });
    });
    $("post-search").addEventListener("input", () => {
      $("posts-zone").innerHTML = postsZoneHtml();
      bindPostCards();
    });

    const blogLogin = $("blog-login");
    if (blogLogin) blogLogin.addEventListener("click", () => openAuthModal("login"));

    const postForm = $("post-form");
    if (postForm) {
      postForm.addEventListener("submit", async (e) => {
        e.preventDefault();
        if (!requireUsername()) return;
        const title = $("post-title").value.trim();
        const content = $("post-content").value.trim();
        if (!title || !content) return;
        const imageFile = $("post-image").files[0];
        let imageUrl = null;
        if (imageFile) {
          imageUrl = await uploadPhoto(imageFile, "posts");
          if (imageUrl === undefined) return; // échec d'envoi, déjà signalé
        }
        const { error } = await supabase.from("posts").insert({
          title,
          content,
          user_id: session.user.id,
          author_email: session.user.email,
          author_username: currentUsername,
          image_url: imageUrl
        });
        if (error) {
          showToast(t("blog.err_publish") + error.message, "error");
        } else {
          showToast(t("toast.published"), "success");
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
  view.innerHTML = skeletonHtml(2);
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
      : comments.map((c) => {
          const isCommentOwner = session?.user?.id === c.user_id;
          const actions = loggedIn
            ? `<div class="comment-actions">
                 ${isCommentOwner
                   ? `<button type="button" data-edit-btn="${esc(c.id)}">${esc(t("comment.edit"))}</button>
                      <button type="button" class="link-danger" data-del-btn="${esc(c.id)}">${esc(t("common.delete").replace("🗑️ ", ""))}</button>`
                   : `<button type="button" data-report-comment="${esc(c.id)}">${esc(t("report.button"))}</button>`}
               </div>`
            : "";
          return `
        <div class="comment">
          <div class="comment-head">
            <span class="comment-author">${authorHtml(c)}</span>
            <span class="comment-date">${fmtDate(c.created_at)}</span>
          </div>
          <p class="comment-body">${esc(c.content)}</p>
          <form class="form comment-edit-form hidden" data-edit-form="${esc(c.id)}">
            <textarea rows="3" maxlength="2000" required>${esc(c.content)}</textarea>
            <div class="comment-actions">
              <button type="submit">${esc(t("common.save"))}</button>
              <button type="button" data-edit-cancel="${esc(c.id)}">${esc(t("common.cancel"))}</button>
            </div>
          </form>
          ${actions}
        </div>`;
        }).join("");

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

    const isPostOwner = session?.user?.id === post.user_id;
    const ownerBlock = isPostOwner
      ? `
        <div class="owner-actions">
          <button class="btn small" id="edit-post-btn" type="button">${esc(t("post.edit"))}</button>
          <button class="btn small danger" id="delete-post-btn" type="button">${esc(t("common.delete"))}</button>
        </div>
        <form id="edit-post-form" class="form hidden">
          <label for="edit-title">${esc(t("blog.post_title"))}</label>
          <input id="edit-title" maxlength="120" required value="${esc(post.title)}">
          <label for="edit-content">${esc(t("blog.post_content"))}</label>
          <textarea id="edit-content" rows="6" maxlength="5000" required>${esc(post.content)}</textarea>
          <label for="edit-image">${esc(t("photo.add"))}</label>
          <input id="edit-image" type="file" accept="image/*">
          <div class="owner-actions">
            <button type="submit" class="btn primary">${esc(t("common.save"))}</button>
            <button type="button" class="btn" id="edit-cancel">${esc(t("common.cancel"))}</button>
          </div>
        </form>`
      : loggedIn
        ? `<div class="owner-actions"><button class="btn small" data-report-post="${esc(post.id)}" type="button">${esc(t("report.button"))}</button></div>`
        : "";

    view.innerHTML = `
      <a class="back-link" href="#/blog">${esc(t("post.back"))}</a>
      <div class="post-layout">
      <article class="card post-full">
        <h1>${esc(post.title)}</h1>
        <div class="post-meta">${esc(t("post.by"))} ${authorHtml(post)} · ${fmtDate(post.created_at)}</div>
        ${ownerBlock}
        <p>${esc(post.content)}</p>
        ${post.image_url ? `<img class="post-image-full" src="${esc(post.image_url)}" alt="">` : ""}
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
          <p><strong>${authorHtml(post)}</strong></p>
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

    // --- Modifier / supprimer l'article (propriétaire) ---
    const editPostBtn = $("edit-post-btn");
    if (editPostBtn) {
      editPostBtn.addEventListener("click", () => $("edit-post-form").classList.toggle("hidden"));
      $("edit-cancel").addEventListener("click", () => $("edit-post-form").classList.add("hidden"));
      $("delete-post-btn").addEventListener("click", async () => {
        if (!confirm(t("post.delete_confirm"))) return;
        const { error } = await supabase.from("posts").delete().eq("id", post.id);
        if (error) { showToast(t("post.err_comment") + error.message, "error"); return; }
        showToast(t("post.deleted"), "success");
        location.hash = "#/blog";
      });
      $("edit-post-form").addEventListener("submit", async (e) => {
        e.preventDefault();
        const title = $("edit-title").value.trim();
        const content = $("edit-content").value.trim();
        if (!title || !content) return;
        const updates = { title, content };
        const imageFile = $("edit-image").files[0];
        if (imageFile) {
          const url = await uploadPhoto(imageFile, "posts");
          if (url === undefined) return;
          updates.image_url = url;
        }
        const { error } = await supabase.from("posts").update(updates).eq("id", post.id);
        if (error) { showToast(t("post.err_comment") + error.message, "error"); return; }
        showToast(t("post.updated"), "success");
        await renderPostDetail(post.id);
      });
    }

    // --- Modifier / supprimer un commentaire (propriétaire) ---
    document.querySelectorAll("[data-edit-btn]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const form = document.querySelector(`[data-edit-form="${btn.dataset.editBtn}"]`);
        form?.classList.toggle("hidden");
      });
    });
    document.querySelectorAll("[data-edit-cancel]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const form = document.querySelector(`[data-edit-form="${btn.dataset.editCancel}"]`);
        form?.classList.add("hidden");
      });
    });
    document.querySelectorAll("[data-edit-form]").forEach((form) => {
      form.addEventListener("submit", async (e) => {
        e.preventDefault();
        const content = form.querySelector("textarea").value.trim();
        if (!content) return;
        const { error } = await supabase.from("comments")
          .update({ content }).eq("id", form.dataset.editForm);
        if (error) { showToast(t("post.err_comment") + error.message, "error"); return; }
        showToast(t("comment.updated"), "success");
        await renderPostDetail(post.id);
      });
    });
    document.querySelectorAll("[data-del-btn]").forEach((btn) => {
      btn.addEventListener("click", async () => {
        if (!confirm(t("comment.delete_confirm"))) return;
        const { error } = await supabase.from("comments").delete().eq("id", btn.dataset.delBtn);
        if (error) { showToast(t("post.err_comment") + error.message, "error"); return; }
        showToast(t("comment.deleted"), "success");
        await renderPostDetail(post.id);
      });
    });

    document.querySelectorAll(".reaction").forEach((btn) => {
      btn.addEventListener("click", async () => {
        if (!requireUsername()) return;
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
            notify(post.user_id, "reaction", post.id);
          }
          await renderPostDetail(post.id);
        } catch (err) {
          showToast(t("post.err_react") + (err.message ?? ""), "error");
        }
      });
    });

    document.querySelectorAll(".star").forEach((btn) => {
      btn.addEventListener("click", async () => {
        if (!requireUsername()) return;
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
          showToast(t("post.err_rate") + (err.message ?? ""), "error");
        }
      });
    });

    const commentFormEl = $("comment-form");
    if (commentFormEl) {
      commentFormEl.addEventListener("submit", async (e) => {
        e.preventDefault();
        if (!requireUsername()) return;
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
          showToast(t("post.err_comment") + error.message, "error");
        } else {
          showToast(t("toast.commented"), "success");
          notify(post.user_id, "comment", post.id);
          await renderPostDetail(post.id);
        }
      });
    }
  } catch (err) {
    view.innerHTML = `<section class="card"><p class="message error">${esc(t("post.err_load"))}</p><a class="back-link" href="#/blog">${esc(t("post.back"))}</a></section>`;
  }
}

// ---------- Page personnelle d'un membre ----------
async function renderProfile(username) {
  view.innerHTML = skeletonHtml(2);
  try {
    const { data: profile } = await supabase
      .from("profiles")
      .select("*")
      .eq("username", username)
      .maybeSingle();

    if (!profile) {
      view.innerHTML = `<section class="card"><p class="message error">${esc(t("profile.not_found"))}</p><a class="back-link" href="#/blog">${esc(t("post.back"))}</a></section>`;
      return;
    }

    const [{ data: postsData }, agg, { count: commentsCount }] = await Promise.all([
      supabase.from("posts").select("*").eq("user_id", profile.id).order("created_at", { ascending: false }),
      loadAggregates(),
      supabase.from("comments").select("id", { count: "exact", head: true }).eq("user_id", profile.id)
    ]);
    const posts = postsData || [];

    let reactionsReceived = 0;
    let ratingSum = 0;
    let ratingCount = 0;
    for (const p of posts) {
      const rc = agg.reactionsByPost[p.id] ?? {};
      reactionsReceived += (rc.like ?? 0) + (rc.star ?? 0) + (rc.heart ?? 0);
      const a = agg.ratingsByPost[p.id];
      if (a) { ratingSum += a.sum; ratingCount += a.count; }
    }
    const avgReceived = ratingCount ? ratingSum / ratingCount : null;

    const isOwner = session?.user?.id === profile.id;
    const avatarBlock = profile.avatar_url
      ? `<img class="avatar-img" src="${esc(profile.avatar_url)}" alt="">`
      : `<div class="avatar">${esc(profile.username.charAt(0).toUpperCase())}</div>`;
    const avatarForm = isOwner
      ? `<details class="avatar-edit">
           <summary>${esc(t("photo.change_avatar"))}</summary>
           <form id="avatar-form" class="form">
             <input id="avatar-input" type="file" accept="image/*">
             <button type="submit" class="primary">${esc(t("photo.save_avatar"))}</button>
           </form>
         </details>`
      : "";

    const bannerForm = isOwner
      ? `<details class="banner-edit">
           <summary>${esc(t("photo.change_banner"))}</summary>
           <form id="banner-form" class="form">
             <input id="banner-input" type="file" accept="image/*">
             <button type="submit" class="primary">${esc(t("photo.save_banner"))}</button>
           </form>
         </details>`
      : "";
    const myBadges = badgesById[profile.id] || [];
    const badgeRow = myBadges.length
      ? `<div class="badge-row">${myBadges.map((b) => `<span class="badge">${b.emoji} ${esc(t(b.key))}</span>`).join("")}</div>`
      : "";
    const profileActions = !isOwner && session?.user
      ? `<div class="owner-actions">
           ${followButtonHtml(profile.id)}
           <a class="btn" href="#/messages/${esc(profile.username)}">${esc(t("msg.button"))}</a>
         </div>`
      : "";
    const bioBlock = profile.bio ? `<p>${esc(profile.bio)}</p>` : "";
    const bioForm = isOwner
      ? `<details class="avatar-edit">
           <summary>${esc(t("profile.bio_edit"))}</summary>
           <form id="bio-form" class="form">
             <textarea id="bio-input" rows="3" maxlength="300" placeholder="${esc(t("profile.bio_placeholder"))}">${esc(profile.bio || "")}</textarea>
             <button type="submit" class="primary">${esc(t("common.save"))}</button>
           </form>
         </details>`
      : "";

    view.innerHTML = `
      <section class="card profile-top">
        <div class="profile-banner"${profile.banner_url ? ` style="background-image:url('${esc(profile.banner_url)}')"` : ""}></div>
        <div class="profile-head">
          ${avatarBlock}
          <div class="profile-info">
            <h1>${esc(profile.username)}</h1>
            <p class="small">${esc(t("profile.member_since"))} ${fmtDate(profile.created_at)}</p>
            ${badgeRow}
            ${bioBlock}
            ${profileActions}
            ${avatarForm}
            ${bannerForm}
            ${bioForm}
          </div>
        </div>
      </section>
      <section class="card">
        <ul class="stat-list">
          <li><span>${esc(t("profile.stat_posts"))}</span><strong>${posts.length}</strong></li>
          <li><span>${esc(t("profile.stat_comments"))}</span><strong>${commentsCount ?? 0}</strong></li>
          <li><span>${esc(t("profile.stat_reactions"))}</span><strong>${reactionsReceived}</strong></li>
          <li><span>${esc(t("profile.stat_avg"))}</span><strong>${avgReceived ? avgReceived.toFixed(1) + "/5" : "—"}</strong></li>
          <li><span>${esc(t("profile.followers"))}</span><strong>${followerCountById[profile.id] ?? 0}</strong></li>
          <li><span>${esc(t("profile.following"))}</span><strong>${followingCountById[profile.id] ?? 0}</strong></li>
        </ul>
      </section>
      <h2 class="profile-posts-title">${esc(t("profile.posts"))} (${posts.length})</h2>
      ${posts.length === 0
        ? `<section class="card"><p class="empty">${esc(t("profile.no_posts"))}</p></section>`
        : `<div class="posts-grid">${posts.map((p) => postCardHtml(p, agg)).join("")}</div>`}`;

    bindPostCards();

    const avatarFormEl = $("avatar-form");
    if (avatarFormEl) {
      avatarFormEl.addEventListener("submit", async (e) => {
        e.preventDefault();
        const file = $("avatar-input").files[0];
        const url = await uploadPhoto(file, "avatars");
        if (!url) return; // échec déjà signalé, ou aucun fichier choisi
        const { error } = await supabase.from("profiles").update({ avatar_url: url }).eq("id", profile.id);
        if (error) { showToast(t("photo.upload_error"), "error"); return; }
        showToast(t("toast.avatar_saved"), "success");
        await renderProfile(username);
      });
    }

    const bannerFormEl = $("banner-form");
    if (bannerFormEl) {
      bannerFormEl.addEventListener("submit", async (e) => {
        e.preventDefault();
        const file = $("banner-input").files[0];
        const url = await uploadPhoto(file, "banners");
        if (!url) return; // échec déjà signalé, ou aucun fichier choisi
        const { error } = await supabase.from("profiles").update({ banner_url: url }).eq("id", profile.id);
        if (error) { showToast(t("photo.upload_error"), "error"); return; }
        showToast(t("toast.banner_saved"), "success");
        await renderProfile(username);
      });
    }

    const bioFormEl = $("bio-form");
    if (bioFormEl) {
      bioFormEl.addEventListener("submit", async (e) => {
        e.preventDefault();
        const bio = $("bio-input").value.trim();
        const { error } = await supabase.from("profiles").update({ bio: bio || null }).eq("id", profile.id);
        if (error) { showToast(t("photo.upload_error"), "error"); return; }
        showToast(t("toast.bio_saved"), "success");
        await renderProfile(username);
      });
    }
  } catch (err) {
    view.innerHTML = `<section class="card"><p class="message error">${esc(t("post.err_load"))}</p><a class="back-link" href="#/blog">${esc(t("post.back"))}</a></section>`;
  }
}

// ---------- Démarrage ----------
applyStaticTexts();

// ---------- Annuaire des membres ----------
function memberCardHtml(m) {
  const badges = (badgesById[m.id] || []).map((b) => `<span class="badge" title="${esc(t(b.key))}">${b.emoji}</span>`).join("");
  const av = m.avatar_url
    ? `<img class="feed-avatar" src="${esc(m.avatar_url)}" alt="">`
    : `<div class="feed-avatar feed-avatar-letter">${esc(m.username.charAt(0).toUpperCase())}</div>`;
  return `
    <section class="card member-card">
      <div class="member-top">
        ${av}
        <div>
          <a class="author-link" href="#/user/${esc(m.username)}">${esc(m.username)}</a>${badges}
          <p class="small">${esc(t("profile.followers"))} : ${followerCountById[m.id] ?? 0}</p>
        </div>
      </div>
      ${m.bio ? `<p class="small">${esc(m.bio)}</p>` : ""}
      <div>${followButtonHtml(m.id)}</div>
    </section>`;
}

function membersZoneHtml(members) {
  const q = ($("member-search")?.value || "").trim().toLowerCase();
  const list = q ? members.filter((m) => m.username.toLowerCase().includes(q)) : members;
  if (!list.length) return `<section class="card"><p class="empty">${esc(t("search.no_results"))}</p></section>`;
  return `<div class="member-grid">${list.map(memberCardHtml).join("")}</div>`;
}

async function renderMembers() {
  view.innerHTML = skeletonHtml(3);
  try {
    await loadAggregates();
    const members = Object.values(profilesById)
      .sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
    view.innerHTML = `
      <div class="blog-header"><h1>${esc(t("members.title"))}</h1></div>
      <input id="member-search" class="search-input" type="search" placeholder="${esc(t("search.members"))}">
      <div id="members-zone">${membersZoneHtml(members)}</div>`;
    $("member-search").addEventListener("input", () => {
      $("members-zone").innerHTML = membersZoneHtml(members);
    });
  } catch (err) {
    view.innerHTML = `<section class="card"><p class="message error">${esc(t("post.err_load"))}</p></section>`;
  }
}

// ---------- Messagerie privée ----------
async function renderConversations() {
  view.innerHTML = skeletonHtml(2);
  if (!session?.user) {
    view.innerHTML = `<section class="card"><p>${esc(t("msg.signin"))} <button class="btn primary" id="msg-login" type="button">${esc(t("blog.login_signup"))}</button></p></section>`;
    $("msg-login")?.addEventListener("click", () => openAuthModal("login"));
    return;
  }
  if (!currentUsername) { openUsernameModal(); return; }
  try {
    await loadAggregates();
    const { data, error } = await supabase.from("messages")
      .select("*").order("created_at", { ascending: false });
    if (error) throw error;
    const me = session.user.id;
    const convos = new Map(); // otherId -> { last, unread }
    for (const m of data || []) {
      const other = m.sender_id === me ? m.recipient_id : m.sender_id;
      if (!convos.has(other)) convos.set(other, { last: m, unread: 0 });
      if (m.recipient_id === me && !m.read_at) convos.get(other).unread += 1;
    }
    const items = [];
    for (const [otherId, c] of convos) {
      const pr = profilesById[otherId];
      const username = pr?.username;
      if (!username) continue;
      const av = pr?.avatar_url
        ? `<img class="feed-avatar" src="${esc(pr.avatar_url)}" alt="">`
        : `<div class="feed-avatar feed-avatar-letter">${esc(username.charAt(0).toUpperCase())}</div>`;
      items.push(`
        <div class="convo-item" data-convo="${esc(username)}">
          ${av}
          <div class="convo-main">
            <div><a class="author-link" href="#/user/${esc(username)}">${esc(username)}</a></div>
            <div class="convo-last">${esc(c.last.content)}</div>
          </div>
          ${c.unread ? `<span class="convo-unread">${c.unread}</span>` : ""}
        </div>`);
    }
    view.innerHTML = `
      <div class="blog-header"><h1>${esc(t("msg.title"))}</h1></div>
      <section class="card">
        ${items.length ? items.join("") : `<p class="empty">${esc(t("msg.empty"))}</p>`}
      </section>`;
    document.querySelectorAll("[data-convo]").forEach((el) => {
      el.addEventListener("click", (e) => {
        if (e.target.closest("a")) return; // laisser le lien profil fonctionner
        location.hash = `#/messages/${el.dataset.convo}`;
      });
    });
  } catch (err) {
    view.innerHTML = `<section class="card"><p class="message error">${esc(t("post.err_load"))}</p></section>`;
  }
}

async function renderThread(username) {
  view.innerHTML = skeletonHtml(2);
  if (!session?.user) {
    view.innerHTML = `<section class="card"><p>${esc(t("msg.signin"))} <button class="btn primary" id="msg-login" type="button">${esc(t("blog.login_signup"))}</button></p></section>`;
    $("msg-login")?.addEventListener("click", () => openAuthModal("login"));
    return;
  }
  if (!currentUsername) { openUsernameModal(); return; }
  if (username === currentUsername) { location.hash = "#/messages"; return; }
  try {
    const [aggRes, { data: profile }] = await Promise.all([
      loadAggregates(),
      supabase.from("profiles").select("*").eq("username", username).maybeSingle()
    ]);
    if (!profile) {
      view.innerHTML = `<section class="card"><p class="message error">${esc(t("profile.not_found"))}</p><a class="back-link" href="#/messages">${esc(t("post.back"))}</a></section>`;
      return;
    }
    const av = profile.avatar_url
      ? `<img class="feed-avatar" src="${esc(profile.avatar_url)}" alt="">`
      : `<div class="feed-avatar feed-avatar-letter">${esc(profile.username.charAt(0).toUpperCase())}</div>`;
    view.innerHTML = `
      <a class="back-link" href="#/messages">${esc(t("msg.title"))}</a>
      <section class="card">
        <div class="composer-head">
          ${av}
          <h2><a class="author-link" href="#/user/${esc(profile.username)}">${esc(profile.username)}</a></h2>
        </div>
        <div id="thread-list" class="thread-list"></div>
        <form id="msg-form" class="msg-form">
          <textarea id="msg-input" rows="2" maxlength="2000" required placeholder="${esc(t("msg.placeholder"))}"></textarea>
          <button type="submit" class="primary">${esc(t("msg.send"))}</button>
        </form>
      </section>`;
    await loadThreadMessages(profile.id);
    if (msgPoll) clearInterval(msgPoll);
    msgPoll = setInterval(() => {
      if (location.hash === `#/messages/${username}`) loadThreadMessages(profile.id, true);
    }, 12000);
    $("msg-form").addEventListener("submit", async (e) => {
      e.preventDefault();
      const content = $("msg-input").value.trim();
      if (!content) return;
      $("msg-input").value = "";
      const { error } = await supabase.from("messages").insert({
        sender_id: session.user.id,
        recipient_id: profile.id,
        content
      });
      if (error) { showToast(t("post.err_comment") + error.message, "error"); return; }
      await loadThreadMessages(profile.id);
    });
  } catch (err) {
    view.innerHTML = `<section class="card"><p class="message error">${esc(t("post.err_load"))}</p><a class="back-link" href="#/messages">${esc(t("post.back"))}</a></section>`;
  }
}

async function loadThreadMessages(otherId, quiet = false) {
  const me = session.user.id;
  const list = $("thread-list");
  try {
    const { data, error } = await supabase.from("messages").select("*")
      .or(`and(sender_id.eq.${me},recipient_id.eq.${otherId}),and(sender_id.eq.${otherId},recipient_id.eq.${me})`)
      .order("created_at", { ascending: true }).limit(200);
    if (error) throw error;
    if (!list) return;
    list.innerHTML = (data || []).map((m) => `
      <div class="msg-row${m.sender_id === me ? " mine" : ""}">
        <div>
          <div class="msg-bubble">${esc(m.content)}</div>
          <div class="msg-when">${fmtDate(m.created_at)}</div>
        </div>
      </div>`).join("") || `<p class="empty">${esc(t("msg.thread_empty"))}</p>`;
    if (!quiet) list.scrollIntoView({ block: "end" });
    const unreadIds = (data || []).filter((m) => m.recipient_id === me && !m.read_at).map((m) => m.id);
    if (unreadIds.length) {
      await supabase.from("messages").update({ read_at: new Date().toISOString() }).in("id", unreadIds);
      refreshBadges();
    }
  } catch {
    if (!quiet && list) list.innerHTML = `<p class="message error">${esc(t("post.err_load"))}</p>`;
  }
}

async function applySession(newSession, event = "RESTORED") {
  session = newSession ?? null;
  currentUsername = await fetchUsername();
  renderAuthArea();
  render();
  // Après une connexion sociale (Google/Facebook), le compte n'a pas encore de pseudo :
  // proposer de le choisir tout de suite (uniquement à la connexion, pas à chaque visite).
  if (event === "SIGNED_IN" && session?.user && !currentUsername && !usernamePromptShown) {
    usernamePromptShown = true;
    openUsernameModal();
  }
}

supabase.auth.getSession().then(({ data }) => applySession(data.session, "RESTORED"));

supabase.auth.onAuthStateChange((event, newSession) => {
  if (event === "SIGNED_IN") applySession(newSession, event);
  else if (event === "SIGNED_OUT") applySession(null, event);
});
