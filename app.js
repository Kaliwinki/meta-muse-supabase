import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm";
import { supabaseConfig } from "./supabase-config.js";

// Éléments de la page
const messageBox = document.getElementById("message");
const authZone = document.getElementById("auth-zone");
const memberZone = document.getElementById("member-zone");
const tabLogin = document.getElementById("tab-login");
const tabSignup = document.getElementById("tab-signup");
const loginForm = document.getElementById("login-form");
const signupForm = document.getElementById("signup-form");
const userEmail = document.getElementById("user-email");
const userUid = document.getElementById("user-uid");
const logoutBtn = document.getElementById("logout-btn");

function showMessage(text, kind = "info") {
  messageBox.textContent = text;
  messageBox.className = `message ${kind}`;
}

function hideMessage() {
  messageBox.className = "message hidden";
}

// Si la config n'est pas encore remplie, on affiche un message de maintenance
// au lieu d'essayer de contacter Supabase.
if (!supabaseConfig.url || supabaseConfig.url === "A_REMPLIR") {
  showMessage(
    "Le site est en cours de configuration : l'authentification sera activée très bientôt.",
    "info"
  );
} else {
  const supabase = createClient(supabaseConfig.url, supabaseConfig.anonKey);

  // Traduction des erreurs Supabase en français clair
  function authErrorMessage(message) {
    const m = (message || "").toLowerCase();
    if (m.includes("user already registered")) {
      return "Cette adresse e-mail est déjà utilisée par un compte.";
    }
    if (m.includes("invalid login credentials")) {
      return "Adresse e-mail ou mot de passe incorrect.";
    }
    if (m.includes("email not confirmed")) {
      return "Compte non confirmé : vérifie ta boîte e-mail avant de te connecter.";
    }
    if (m.includes("at least 6 characters") || m.includes("password")) {
      return "Le mot de passe doit contenir au moins 6 caractères.";
    }
    if (m.includes("invalid") && m.includes("email")) {
      return "L'adresse e-mail n'est pas valide.";
    }
    return "Une erreur est survenue. Réessaie.";
  }

  // Onglets Connexion / Inscription
  tabLogin.addEventListener("click", () => {
    tabLogin.classList.add("active");
    tabSignup.classList.remove("active");
    loginForm.classList.remove("hidden");
    signupForm.classList.add("hidden");
    hideMessage();
  });

  tabSignup.addEventListener("click", () => {
    tabSignup.classList.add("active");
    tabLogin.classList.remove("active");
    signupForm.classList.remove("hidden");
    loginForm.classList.add("hidden");
    hideMessage();
  });

  // Connexion
  loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    hideMessage();
    const email = document.getElementById("login-email").value.trim();
    const password = document.getElementById("login-password").value;
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) {
      showMessage(authErrorMessage(error.message), "error");
    }
  });

  // Inscription
  signupForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    hideMessage();
    const email = document.getElementById("signup-email").value.trim();
    const password = document.getElementById("signup-password").value;
    const { data, error } = await supabase.auth.signUp({ email, password });
    if (error) {
      showMessage(authErrorMessage(error.message), "error");
    } else if (data.session) {
      showMessage("Compte créé avec succès. Bienvenue !", "success");
    } else {
      showMessage(
        "Compte créé ! Vérifie ta boîte e-mail pour confirmer ton adresse, puis connecte-toi.",
        "success"
      );
    }
  });

  // Déconnexion
  logoutBtn.addEventListener("click", async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      showMessage(authErrorMessage(error.message), "error");
    }
  });

  // Affiche la bonne zone selon l'état de connexion
  function renderSession(session) {
    const user = session?.user ?? null;
    if (user) {
      userEmail.textContent = user.email ?? "(adresse inconnue)";
      userUid.textContent = user.id;
      authZone.classList.add("hidden");
      memberZone.classList.remove("hidden");
      hideMessage();
    } else {
      authZone.classList.remove("hidden");
      memberZone.classList.add("hidden");
    }
  }

  supabase.auth.getSession().then(({ data }) => renderSession(data.session));
  supabase.auth.onAuthStateChange((_event, session) => renderSession(session));
}
