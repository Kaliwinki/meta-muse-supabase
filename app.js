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
    "settings.accent": "Accent color",
    "settings.accent_reset": "Reset",
    "theme.dark": "🌙 Dark",
    "theme.light": "☀️ Light",
    "feed.whats_new": "What's new, {u}?",
    "badge.new": "Newcomer",
    "badge.active": "Active member",
    "badge.star": "Blog star",
    "badge.author": "Author",
    "badge.prolific": "Prolific author",
    "badge.chatty": "Chatterbox",
    "badge.generous": "Generous",
    "badge.critic": "Critic",
    "badge.superstar": "Superstar",
    "badge.veteran": "Veteran",
    "badge.popular": "Popular",
    "badge.pioneer": "Pioneer",
    "badge.photographer": "Photographer",
    "badge.collector": "Collector",
    "photo.change_banner": "Change cover photo",
    "photo.save_banner": "Save cover",
    "toast.published": "Post published!",
    "toast.commented": "Comment posted.",
    "toast.link_copied": "Link copied!",
    "toast.blocked": "Member blocked. You will no longer see their content.",
    "toast.unblocked": "Member unblocked.",
    "profile.verified": "Verified account",
    "profile.admin": "Admin",
    "profile.change_name": "Change name",
    "profile.rename_rule": "One name change every 30 days. Admins can change anytime.",
    "profile.rename_in": "You can change your name in {d} day(s).",
    "profile.rename_confirm": "Change your name to {name}?",
    "profile.rename_done": "Name changed!",
    "profile.rename_same": "That is already your name.",
    "admin.title": "Admin panel",
    "admin.only": "This page is for administrators only.",
    "admin.stats_members": "Members",
    "admin.stats_posts": "Posts",
    "admin.stats_comments": "Comments",
    "admin.stats_reports": "Open reports",
    "admin.reports": "Reports",
    "admin.no_reports": "No reports — all clear!",
    "admin.report_by": "Reported by",
    "admin.view_content": "View",
    "admin.delete_content": "Delete content",
    "admin.dismiss": "Dismiss",
    "admin.members": "Member management",
    "admin.verify": "Verify",
    "admin.unverify": "Unverify",
    "admin.make_admin": "Make admin",
    "admin.remove_admin": "Remove admin",
    "admin.ban": "Ban",
    "admin.unban": "Unban",
    "admin.banned_chip": "Banned",
    "admin.banned_notice": "This account has been banned by an administrator.",
    "admin.you_banned": "Your account has been banned by an administrator: you can browse, but you cannot post or comment.",
    "admin.hide": "Hide",
    "admin.unhide": "Unhide",
    "admin.hidden_posts": "Hidden posts",
    "admin.hidden_comments": "Hidden comments",
    "admin.none": "None",
    "admin.confirm_delete_post": "Admin: permanently delete this post?",
    "admin.confirm_delete_comment": "Admin: permanently delete this comment?",
    "admin.confirm_ban": "Ban {name}? Their content will be hidden and they will not be able to post.",
    "admin.confirm_unban": "Unban {name}?",
    "admin.confirm_verify": "Give the verified check to {name}?",
    "admin.confirm_unverify": "Remove the verified check from {name}?",
    "admin.confirm_make_admin": "Make {name} an administrator? They will get all admin powers.",
    "admin.confirm_remove_admin": "Remove admin rights from {name}?",
    "admin.done": "Done.",
    "admin.muted_until": "Muted until {d}",
    "admin.suspended_until": "Suspended until {d}",
    "admin.you_muted": "You are muted until {d}: you can browse, but you cannot post, comment or send messages.",
    "admin.suspended_title": "Account suspended",
    "admin.suspended_msg": "Your account is suspended until {d}. Please come back then.",
    "admin.sanctions": "Sanctions",
    "admin.sanction_none": "No active sanction.",
    "admin.kind_mute": "Mute (no posting)",
    "admin.kind_suspend": "Suspend (account frozen)",
    "admin.days_1": "24 hours",
    "admin.days_7": "7 days",
    "admin.days_30": "30 days",
    "admin.apply": "Apply",
    "admin.clear_sanction": "Lift sanction",
    "admin.confirm_sanction": "Apply this sanction to {name}?",
    "admin.confirm_clear": "Lift all sanctions from {name}?",
    "admin.warn": "Send a warning",
    "admin.warn_ph": "Warning message for this member…",
    "admin.warn_send": "Send warning",
    "admin.warn_sent": "Warning sent.",
    "admin.broadcast": "Announce to everyone",
    "admin.broadcast_ph": "Announcement for all members…",
    "admin.broadcast_send": "Send to everyone",
    "admin.broadcast_sent": "Announcement sent to all members.",
    "admin.confirm_broadcast": "Send this announcement to ALL members?",
    "admin.lock": "Lock comments",
    "admin.unlock": "Unlock comments",
    "admin.comments_locked": "Comments are locked on this post.",
    "admin.feature": "Feature on top",
    "admin.unfeature": "Remove from top",
    "admin.featured_chip": "Featured",
    "admin.clear_avatar": "Remove avatar",
    "admin.clear_banner": "Remove cover",
    "admin.clear_image": "Remove photo",
    "admin.purge": "Purge content",
    "admin.confirm_purge": "PERMANENTLY delete ALL posts and comments of {name}? This cannot be undone.",
    "admin.confirm_purge2": "Are you really sure? Everything from {name} will be erased.",
    "admin.log": "Admin log",
    "admin.log_empty": "No admin action yet.",
    "profile.block": "Block",
    "profile.unblock": "Unblock",
    "profile.block_confirm": "Block this member? You will no longer see their posts and comments, and you will stop following them.",
    "profile.err_block": "Block failed: ",
    "post.hidden_chip": "🚫 Hidden after reports — only you can see it",
    "post.hidden_msg": "This post was hidden after several reports.",
    "comment.hidden_chip": "🚫 Hidden after reports",
    "toast.avatar_saved": "Profile picture updated.",
    "toast.banner_saved": "Cover photo updated.",
    "toast.username_saved": "Username saved. Welcome!",
    "nav.members": "Members",
    "nav.badges": "Badges",
    "common.save": "Save",
    "common.cancel": "Cancel",
    "common.yes": "Yes",
    "common.no": "No",
    "nav.logout_confirm": "Log out of your account?",
    "common.delete": "🗑️ Delete",
    "post.edit": "✏️ Edit",
    "post.delete_confirm": "Delete this post permanently?",
    "post.deleted": "Post deleted.",
    "post.updated": "Post updated.",
    "comment.edit": "Edit",
    "comment.reply": "Reply",
    "comment.reply_ph": "Write a reply…",
    "comment.delete_confirm": "Delete this comment?",
    "comment.deleted": "Comment deleted.",
    "comment.updated": "Comment updated.",
    "follow.follow": "Follow",
    "follow.following_btn": "Following ✓",
    "profile.followers": "Followers",
    "profile.following": "Following",
    "feed.all": "All",
    "feed.following": "Following",
    "feed.trending": "🔥 Trending",
    "feed.empty_trending": "No trending posts this week yet.",
    "feed.saved": "🔖 Saved",
    "feed.empty_saved": "No saved posts yet. Tap 🔖 on a post to save it here.",
    "poll.add": "Add a poll",
    "poll.opt_ph": "Option",
    "poll.add_opt": "Add an option",
    "poll.votes": "votes",
    "poll.err_min": "A poll needs at least 2 options.",
    "poll.err_vote": "Vote failed: ",
    "post.save": "Save",
    "post.saved": "Saved",
    "post.share": "Share",
    "post.pin": "Pin to my profile",
    "post.unpin": "Unpin",
    "post.err_bookmark": "Bookmark failed: ",
    "post.err_pin": "Pin failed: ",
    "profile.pinned": "Pinned post",
    "toast.saved": "Saved to your bookmarks.",
    "toast.unsaved": "Removed from your bookmarks.",
    "toast.pinned": "Post pinned to your profile.",
    "toast.unpinned": "Post unpinned.",
    "feed.following_empty": "Follow some members to see their posts here.",
    "search.posts": "Search posts…",
    "search.members": "Search members…",
    "search.no_results": "No results.",
    "notif.title": "Notifications",
    "notif.empty": "No notifications yet.",
    "notif.comment": "{u} commented on your post",
    "notif.mention": "{u} mentioned you",
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
    "msg.today": "Today",
    "msg.yesterday": "Yesterday",
    "msg.you": "You:",
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
    "auth.err_username_format": "Choose a username of 3 to 20 characters: letters (upper or lower case), numbers, “_”, “-” or “.” only.",
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
    "post.react_laugh": "Funny",
    "post.react_wow": "Wow",
    "post.react_sad": "Sad",
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
    "profile.see_all_badges": "See all badges →",
    "badges.title": "Badges",
    "badges.intro": "Badges reward your activity on Pierre. Unlock them all!",
    "badges.progress": "{a} / {b} badges unlocked",
    "badges.login_cta": "Log in to start unlocking badges!",
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
    "settings.accent": "Couleur d'accent",
    "settings.accent_reset": "Réinitialiser",
    "theme.dark": "🌙 Sombre",
    "theme.light": "☀️ Clair",
    "feed.whats_new": "Quoi de neuf, {u} ?",
    "badge.new": "Nouveau",
    "badge.active": "Membre actif",
    "badge.star": "Star du blog",
    "badge.author": "Auteur",
    "badge.prolific": "Auteur prolifique",
    "badge.chatty": "Bavard",
    "badge.generous": "Généreux",
    "badge.critic": "Critique",
    "badge.superstar": "Superstar",
    "badge.veteran": "Ancien",
    "badge.popular": "Populaire",
    "badge.pioneer": "Pionnier",
    "badge.photographer": "Photographe",
    "badge.collector": "Collectionneur",
    "photo.change_banner": "Changer la bannière",
    "photo.save_banner": "Enregistrer la bannière",
    "toast.published": "Article publié !",
    "toast.commented": "Commentaire publié.",
    "toast.link_copied": "Lien copié !",
    "toast.blocked": "Membre bloqué. Tu ne verras plus ses contenus.",
    "toast.unblocked": "Membre débloqué.",
    "profile.verified": "Compte vérifié",
    "profile.admin": "Admin",
    "profile.change_name": "Changer de nom",
    "profile.rename_rule": "Un changement de nom tous les 30 jours. Les administrateurs n'importe quand.",
    "profile.rename_in": "Tu pourras changer de nom dans {d} jour(s).",
    "profile.rename_confirm": "Changer ton nom pour {name} ?",
    "profile.rename_done": "Nom changé !",
    "profile.rename_same": "C'est déjà ton nom.",
    "admin.title": "Panneau administrateur",
    "admin.only": "Cette page est réservée aux administrateurs.",
    "admin.stats_members": "Membres",
    "admin.stats_posts": "Articles",
    "admin.stats_comments": "Commentaires",
    "admin.stats_reports": "Signalements ouverts",
    "admin.reports": "Signalements",
    "admin.no_reports": "Aucun signalement — tout est calme !",
    "admin.report_by": "Signalé par",
    "admin.view_content": "Voir",
    "admin.delete_content": "Supprimer le contenu",
    "admin.dismiss": "Ignorer",
    "admin.members": "Gestion des membres",
    "admin.verify": "Vérifier",
    "admin.unverify": "Retirer la coche",
    "admin.make_admin": "Nommer admin",
    "admin.remove_admin": "Retirer admin",
    "admin.ban": "Bannir",
    "admin.unban": "Débannir",
    "admin.banned_chip": "Banni",
    "admin.banned_notice": "Ce compte a été banni par un administrateur.",
    "admin.you_banned": "Ton compte a été banni par un administrateur : tu peux naviguer, mais pas publier ni commenter.",
    "admin.hide": "Masquer",
    "admin.unhide": "Afficher",
    "admin.hidden_posts": "Articles masqués",
    "admin.hidden_comments": "Commentaires masqués",
    "admin.none": "Aucun",
    "admin.confirm_delete_post": "Admin : supprimer définitivement cet article ?",
    "admin.confirm_delete_comment": "Admin : supprimer définitivement ce commentaire ?",
    "admin.confirm_ban": "Bannir {name} ? Son contenu sera masqué et il ne pourra plus publier.",
    "admin.confirm_unban": "Débannir {name} ?",
    "admin.confirm_verify": "Donner la coche vérifiée à {name} ?",
    "admin.confirm_unverify": "Retirer la coche vérifiée de {name} ?",
    "admin.confirm_make_admin": "Nommer {name} administrateur ? Il aura tous les pouvoirs admin.",
    "admin.confirm_remove_admin": "Retirer les droits admin de {name} ?",
    "admin.done": "C'est fait.",
    "admin.muted_until": "Muet jusqu'au {d}",
    "admin.suspended_until": "Suspendu jusqu'au {d}",
    "admin.you_muted": "Tu es muet jusqu'au {d} : tu peux naviguer, mais pas publier, commenter ni envoyer de messages.",
    "admin.suspended_title": "Compte suspendu",
    "admin.suspended_msg": "Ton compte est suspendu jusqu'au {d}. Reviens à ce moment-là.",
    "admin.sanctions": "Sanctions",
    "admin.sanction_none": "Aucune sanction active.",
    "admin.kind_mute": "Muet (ne peut plus publier)",
    "admin.kind_suspend": "Suspension (compte gelé)",
    "admin.days_1": "24 heures",
    "admin.days_7": "7 jours",
    "admin.days_30": "30 jours",
    "admin.apply": "Appliquer",
    "admin.clear_sanction": "Lever la sanction",
    "admin.confirm_sanction": "Appliquer cette sanction à {name} ?",
    "admin.confirm_clear": "Lever toutes les sanctions de {name} ?",
    "admin.warn": "Envoyer un avertissement",
    "admin.warn_ph": "Message d'avertissement pour ce membre…",
    "admin.warn_send": "Envoyer l'avertissement",
    "admin.warn_sent": "Avertissement envoyé.",
    "admin.broadcast": "Annonce à tout le monde",
    "admin.broadcast_ph": "Annonce pour tous les membres…",
    "admin.broadcast_send": "Envoyer à tous",
    "admin.broadcast_sent": "Annonce envoyée à tous les membres.",
    "admin.confirm_broadcast": "Envoyer cette annonce à TOUS les membres ?",
    "admin.lock": "Verrouiller les commentaires",
    "admin.unlock": "Déverrouiller les commentaires",
    "admin.comments_locked": "Les commentaires sont verrouillés sur cet article.",
    "admin.feature": "Mettre à la une",
    "admin.unfeature": "Retirer de la une",
    "admin.featured_chip": "À la une",
    "admin.clear_avatar": "Retirer l'avatar",
    "admin.clear_banner": "Retirer la bannière",
    "admin.clear_image": "Retirer la photo",
    "admin.purge": "Purger le contenu",
    "admin.confirm_purge": "Supprimer DÉFINITIVEMENT tous les articles et commentaires de {name} ? Irréversible.",
    "admin.confirm_purge2": "Vraiment sûr ? Tout le contenu de {name} sera effacé.",
    "admin.log": "Journal des actions admin",
    "admin.log_empty": "Aucune action admin pour le moment.",
    "profile.block": "Bloquer",
    "profile.unblock": "Débloquer",
    "profile.block_confirm": "Bloquer ce membre ? Tu ne verras plus ses publications ni ses commentaires, et tu ne le suivras plus.",
    "profile.err_block": "Échec du blocage : ",
    "post.hidden_chip": "🚫 Masqué après des signalements — visible par toi seul",
    "post.hidden_msg": "Cet article a été masqué après plusieurs signalements.",
    "comment.hidden_chip": "🚫 Masqué après des signalements",
    "toast.avatar_saved": "Photo de profil mise à jour.",
    "toast.banner_saved": "Bannière mise à jour.",
    "toast.username_saved": "Pseudo enregistré. Bienvenue !",
    "nav.members": "Membres",
    "nav.badges": "Badges",
    "common.save": "Enregistrer",
    "common.cancel": "Annuler",
    "common.yes": "Oui",
    "common.no": "Non",
    "nav.logout_confirm": "Te déconnecter de ton compte ?",
    "common.delete": "🗑️ Supprimer",
    "post.edit": "✏️ Modifier",
    "post.delete_confirm": "Supprimer définitivement cet article ?",
    "post.deleted": "Article supprimé.",
    "post.updated": "Article mis à jour.",
    "comment.edit": "Modifier",
    "comment.reply": "Répondre",
    "comment.reply_ph": "Écrire une réponse…",
    "comment.delete_confirm": "Supprimer ce commentaire ?",
    "comment.deleted": "Commentaire supprimé.",
    "comment.updated": "Commentaire mis à jour.",
    "follow.follow": "Suivre",
    "follow.following_btn": "Suivi ✓",
    "profile.followers": "Abonnés",
    "profile.following": "Abonnements",
    "feed.all": "Tous",
    "feed.following": "Mes abonnements",
    "feed.trending": "🔥 Tendances",
    "feed.empty_trending": "Pas encore d'article tendance cette semaine.",
    "feed.saved": "🔖 Enregistrés",
    "feed.empty_saved": "Aucun article enregistré. Touche 🔖 sur un article pour le retrouver ici.",
    "poll.add": "Ajouter un sondage",
    "poll.opt_ph": "Option",
    "poll.add_opt": "Ajouter une option",
    "poll.votes": "votes",
    "poll.err_min": "Un sondage demande au moins 2 options.",
    "poll.err_vote": "Échec du vote : ",
    "post.save": "Enregistrer",
    "post.saved": "Enregistré",
    "post.share": "Partager",
    "post.pin": "Épingler à mon profil",
    "post.unpin": "Retirer l'épingle",
    "post.err_bookmark": "Échec de l'enregistrement : ",
    "post.err_pin": "Échec de l'épingle : ",
    "profile.pinned": "Article épinglé",
    "toast.saved": "Enregistré dans tes favoris.",
    "toast.unsaved": "Retiré de tes favoris.",
    "toast.pinned": "Article épinglé à ton profil.",
    "toast.unpinned": "Épingle retirée.",
    "feed.following_empty": "Suis des membres pour voir leurs publications ici.",
    "search.posts": "Rechercher un article…",
    "search.members": "Rechercher un membre…",
    "search.no_results": "Aucun résultat.",
    "notif.title": "Notifications",
    "notif.empty": "Aucune notification pour le moment.",
    "notif.comment": "{u} a commenté ton article",
    "notif.mention": "{u} t'a mentionné",
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
    "msg.today": "Aujourd'hui",
    "msg.yesterday": "Hier",
    "msg.you": "Toi :",
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
    "auth.err_username_format": "Choisis un nom d'utilisateur de 3 à 20 caractères : lettres (majuscules ou minuscules), chiffres, « _ », « - » ou « . » uniquement.",
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
    "post.react_laugh": "Drôle",
    "post.react_wow": "Waouh",
    "post.react_sad": "Triste",
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
    "profile.see_all_badges": "Voir tous les badges →",
    "badges.title": "Badges",
    "badges.intro": "Les badges récompensent ton activité sur Pierre. Débloque-les tous !",
    "badges.progress": "{a} / {b} badges débloqués",
    "badges.login_cta": "Connecte-toi pour commencer à débloquer des badges !",
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

function fmtTime(iso) {
  return new Date(iso).toLocaleTimeString(DATE_LOCALE(), { hour: "2-digit", minute: "2-digit" });
}
function dayKey(iso) {
  const d = new Date(iso);
  return `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`;
}
function dayLabel(iso) {
  if (dayKey(iso) === dayKey(new Date().toISOString())) return t("msg.today");
  const yest = new Date(); yest.setDate(yest.getDate() - 1);
  if (dayKey(iso) === dayKey(yest.toISOString())) return t("msg.yesterday");
  return new Date(iso).toLocaleDateString(DATE_LOCALE(), { day: "numeric", month: "long", year: "numeric" });
}
function fmtConvoTime(iso) {
  if (dayKey(iso) === dayKey(new Date().toISOString())) return fmtTime(iso);
  return new Date(iso).toLocaleDateString(DATE_LOCALE(), { day: "numeric", month: "short" });
}

function excerpt(text, max = 160) {
  const t2 = String(text ?? "").trim();
  return t2.length > max ? t2.slice(0, max).trimEnd() + "…" : t2;
}

/**
 * Texte enrichi : échappement HTML puis transformation des #tags et @mentions
 * en liens cliquables (sur le texte échappé, # et @ sont intacts).
 */
function richText(text) {
  let html = esc(text).replaceAll("\n", "<br>");
  // Un vrai hashtag : # en début de mot (pas précédé de & — sinon l'entité &#39;
  // des apostrophes devient un faux tag « #39 ») et au moins une lettre ou _ .
  html = html.replace(/(^|[^\p{L}\p{N}_&])#((?=[\p{L}\p{N}_]{0,29}[\p{L}_])[\p{L}\p{N}_]{1,30})/gu, (m, pre, tag) =>
    `${pre}<a href="#/blog" class="tag-link" data-tag="${esc(tag.toLowerCase())}">#${esc(tag)}</a>`);
  html = html.replace(/(^|\s)@([A-Za-z0-9_.-]{3,20})/g, (m, sp, name) => {
    const pr = profileByUsernameCI[name.toLowerCase()];
    return pr
      ? `${sp}<a href="#/user/${esc(pr.username)}" class="tag-link">@${esc(name)}</a>`
      : m;
  });
  return html;
}

/** Extrait les profils @mentionnés dans un texte (pseudos existants, uniques). */
function mentionedProfiles(text) {
  const found = new Map();
  for (const m of String(text ?? "").matchAll(/@([A-Za-z0-9_.-]{3,20})/g)) {
    const pr = profileByUsernameCI[m[1].toLowerCase()];
    if (pr && !found.has(pr.id)) found.set(pr.id, pr);
  }
  return [...found.values()];
}

/** Envoie une notification « mention » à chaque @pseudo du texte (hors soi-même et hors exceptions). */
async function notifyMentions(text, postId, excludeIds = []) {
  if (!session?.user) return;
  const done = new Set();
  for (const pr of mentionedProfiles(text)) {
    if (pr.id === session.user.id || excludeIds.includes(pr.id) || done.has(pr.id)) continue;
    done.add(pr.id);
    await notify(pr.id, "mention", postId);
  }
}

function showModalMessage(text, kind = "info") {
  const box = $("auth-message");
  box.textContent = text;
  box.className = `message ${kind}`;
}

/**
 * Confirmation Oui/Non dans une fenêtre du site (remplace confirm() du navigateur,
 * à la demande de l'utilisateur : déconnexion, suppressions…). Résout true = Oui.
 * Cliquer sur le voile = Non.
 */
const _svgIcon = (inner) => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${inner}</svg>`;
/** Icônes maison (SVG) des fenêtres de confirmation — aucun émoji. */
const CONFIRM_ICONS = {
  door: _svgIcon('<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><path d="m16 17 5-5-5-5"/><path d="M21 12H9"/>'),
  trash: _svgIcon('<path d="M3 6h18"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><path d="M10 11v6"/><path d="M14 11v6"/>'),
  ban: _svgIcon('<circle cx="12" cy="12" r="10"/><path d="m4.9 4.9 14.2 14.2"/>'),
  warn: _svgIcon('<path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><path d="M12 9v4"/><path d="M12 17h.01"/>'),
  pencil: _svgIcon('<path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/><path d="m15 5 4 4"/>'),
  mega: _svgIcon('<path d="m3 11 18-5v12L3 14v-3Z"/><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"/>'),
  help: _svgIcon('<circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><path d="M12 17h.01"/>')
};

function confirmYesNo(message, opts = {}) {
  return new Promise((resolve) => {
    const modal = $("confirm-modal");
    const yesBtn = $("confirm-yes");
    const noBtn = $("confirm-no");
    const iconEl = $("confirm-icon");
    iconEl.innerHTML = CONFIRM_ICONS[opts.icon] || CONFIRM_ICONS.help;
    iconEl.classList.toggle("danger", !!opts.danger);
    yesBtn.classList.toggle("danger", !!opts.danger);
    $("confirm-text").textContent = message;
    yesBtn.textContent = t("common.yes");
    noBtn.textContent = t("common.no");
    modal.classList.remove("hidden");
    const done = (val) => {
      modal.classList.add("hidden");
      yesBtn.onclick = null;
      noBtn.onclick = null;
      modal.onclick = null;
      resolve(val);
    };
    yesBtn.onclick = () => done(true);
    noBtn.onclick = () => done(false);
    modal.onclick = (e) => { if (e.target === modal) done(false); };
  });
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
let bannedIds = new Set();
let profileByUsername = {};
let profileByUsernameCI = {};
/** Badges des membres : userId -> [badgeId, …] (ordre de prestige du catalogue). */
let badgesById = {};
/** Abonnements : qui je suis, et compteurs par membre. */
let followingSet = new Set();
let myBookmarks = new Set();
let myBlocks = new Set();
let pollsCache = { optionsByPost: {}, votesByOption: {}, myVote: {} };
let followerCountById = {};
let followingCountById = {};
function avatarFor(userId) {
  return userId ? profilesById[userId]?.avatar_url : null;
}

/** Icônes des badges : dessins vectoriels (SVG, style trait) — fini les émojis (demande de l'utilisateur). */
const BADGE_ICONS = {
  trophy: '<path d="M8 21h8"/><path d="M12 17v4"/><path d="M7 4h10v6a5 5 0 0 1-10 0V4z"/><path d="M7 6H4c0 2.5 1.2 4 3 4"/><path d="M17 6h3c0 2.5-1.2 4-3 4"/>',
  crown: '<path d="M3 8l4.5 4L12 5l4.5 7L21 8l-1.6 10H4.6L3 8z"/><path d="M5 21h14"/>',
  rocket: '<path d="M12 2.5c3 2 4.5 5.8 4.5 9.5l-4.5 4.5-4.5-4.5C7.5 8.3 9 4.5 12 2.5z"/><circle cx="12" cy="9" r="1.8"/><path d="M7.6 12.6C6.2 13.2 5 14 4 14c0-1 .3-2.5 1-4"/><path d="M16.4 12.6c1.4.6 2.6 1.4 3.6 1.4 0-1-.3-2.5-1-4"/><path d="M10 18.2c.4 1.4 1 2.4 2 3.3.9-.9 1.6-1.9 2-3.3"/>',
  gem: '<path d="M7 3h10l3.5 5L12 21 3.5 8L7 3z"/><path d="M3.5 8h17"/><path d="M12 21L8.5 8L12 3l3.5 5L12 21"/>',
  star: '<path d="M12 3l2.7 5.8 6.3.7-4.7 4.3 1.3 6.2L12 16.9 6.4 20l1.3-6.2L3 9.5l6.3-.7L12 3z"/>',
  medal: '<circle cx="12" cy="14" r="5.5"/><path d="M8.6 9.6L5 3h4l2.2 3.8"/><path d="M15.4 9.6L19 3h-4l-2.2 3.8"/>',
  flame: '<path d="M12 3s5.5 5.2 5.5 10a5.5 5.5 0 0 1-11 0c0-2 1-3.8 2.3-5.3.4 1 1 1.8 2 2.3C10.9 7.6 11.3 5 12 3z"/>',
  leaf: '<path d="M12 21v-8"/><path d="M12 13c0-3.5-2.8-6-7-6 0 4.2 2.5 7 7 6z"/><path d="M12 11c0-3 2.2-5 5.5-5 0 3.5-2 5.8-5.5 5z"/>',
  zap: '<path d="M13 2L4.5 13.5H11L9.8 22 19 10h-6.5L13 2z"/>',
  calendar: '<rect x="3.5" y="5" width="17" height="16" rx="2"/><path d="M3.5 10h17"/><path d="M8 3v4"/><path d="M16 3v4"/>',
  clock: '<circle cx="12" cy="12" r="8.5"/><path d="M12 7.5V12l3 2"/>',
  camera: '<path d="M4 8h3l2-2.5h6L17 8h3a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z"/><circle cx="12" cy="13" r="3.5"/>',
  image: '<rect x="3.5" y="5" width="17" height="14" rx="2"/><circle cx="9" cy="10" r="1.6"/><path d="M4 18l5-5 3 3 3.5-3.5L20 17"/>',
  mic: '<rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5.5 11a6.5 6.5 0 0 0 13 0"/><path d="M12 17.5V21"/>',
  megaphone: '<path d="M4 10v4l3 .5V9.5L4 10z"/><path d="M7 9.5L20 5v14l-13-4.5"/><path d="M9.5 15v3.5a1.8 1.8 0 0 0 3.6 0v-2.4"/>',
  message: '<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>',
  messages: '<path d="M21 11.5a8.5 8.5 0 0 1-8.5 8.5c-1.5 0-3-.4-4.2-1.1L3 20l1.1-5.3A8.5 8.5 0 1 1 21 11.5z"/>',
  heart: '<path d="M12 20.7C6 16.9 3 13.6 3 9.9 3 7.2 5 5 7.6 5c1.8 0 3.4 1 4.4 2.6C13 6 14.6 5 16.4 5 19 5 21 7.2 21 9.9c0 3.7-3 7-9 10.8z"/>',
  thumbsup: '<path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.3a2 2 0 0 0 2-1.7l1.2-8a2 2 0 0 0-2-2.3H14z"/><path d="M7 22H4a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2h3"/>',
  laugh: '<circle cx="12" cy="12" r="9"/><path d="M8 14h8a4.5 4.5 0 0 1-8 0z"/><circle cx="9" cy="9.5" r="0.4" fill="currentColor"/><circle cx="15" cy="9.5" r="0.4" fill="currentColor"/>',
  wow: '<circle cx="12" cy="12" r="9"/><circle cx="9" cy="10" r="0.4" fill="currentColor"/><circle cx="15" cy="10" r="0.4" fill="currentColor"/><ellipse cx="12" cy="15.8" rx="1.8" ry="2.3"/>',
  search: '<circle cx="11" cy="11" r="7"/><path d="M20.5 20.5L16.7 16.7"/>',
  book: '<path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/><path d="M4 19.5A2.5 2.5 0 0 0 6.5 22H20"/>',
  feather: '<path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"/><path d="M16 8L2 22"/><path d="M17.5 15H9"/>',
  edit: '<path d="M17 3a2.8 2.8 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"/>',
  file: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><path d="M9 13h6"/><path d="M9 17h6"/>',
  users: '<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20c.8-3.2 3.4-5 6.5-5s5.7 1.8 6.5 5"/><path d="M16 5a3.5 3.5 0 0 1 0 6.5"/><path d="M17.5 15.3c2 .6 3.5 2.2 4 4.7"/>',
  userplus: '<circle cx="10" cy="8" r="3.5"/><path d="M4 20c.7-3 3-4.7 6-4.7 1.5 0 2.8.4 3.8 1.2"/><path d="M18.5 5v6"/><path d="M15.5 8h6"/>',
  usercheck: '<circle cx="10" cy="8" r="3.5"/><path d="M4 20c.7-3 3-4.7 6-4.7 1.2 0 2.3.3 3.2.8"/><path d="M14.5 17.5l2 2 3.5-3.5"/>',
  poll: '<path d="M6 20v-6"/><path d="M12 20V5"/><path d="M18 20v-9"/><path d="M3 20h18"/>',
  vote: '<rect x="4" y="4" width="16" height="16" rx="2"/><path d="M8.5 12.5l2.5 2.5 4.5-5"/>',
  gift: '<rect x="4" y="11" width="16" height="9"/><path d="M12 11v9"/><path d="M4 7.5h16V11H4z"/><path d="M12 7.5c-4 0-4.5-4-2.4-4.4C11.4 2.7 12 4.5 12 7.5z"/><path d="M12 7.5c4 0 4.5-4 2.4-4.4C12.6 2.7 12 4.5 12 7.5z"/>',
  target: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1" fill="currentColor"/>',
  compass: '<circle cx="12" cy="12" r="9"/><path d="M15.5 8.5l-2 5-5 2 2-5z"/>',
  rotate: '<path d="M3 12a9 9 0 1 0 3-6.7L3 8"/><path d="M3 3v5h5"/>',
  award: '<circle cx="12" cy="9" r="6"/><path d="M8.5 14L7 22l5-3 5 3-1.5-8"/>',
  shield: '<path d="M12 3l8 3v6c0 4.5-3.2 7.7-8 9-4.8-1.3-8-4.5-8-9V6l8-3z"/><path d="M9 11.5l2 2 4-4"/>',
  sparkles: '<path d="M11 4l1.7 4.6L17.5 10l-4.8 1.7L11 16.5l-1.7-4.8L4.5 10l4.8-1.4L11 4z"/><path d="M18.5 15l.9 2.4 2.4.9-2.4.9-.9 2.4-.9-2.4-2.4-.9 2.4-.9.9-2.4z"/>',
  globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18"/><path d="M12 3c2.5 2.5 3.8 5.6 3.8 9s-1.3 6.5-3.8 9c-2.5-2.5-3.8-5.6-3.8-9S9.5 5.5 12 3z"/>',
  film: '<rect x="3.5" y="4" width="17" height="16" rx="2"/><path d="M7.5 4v16"/><path d="M16.5 4v16"/><path d="M3.5 9h4"/><path d="M3.5 15h4"/><path d="M16.5 9h4"/><path d="M16.5 15h4"/>',
  landmark: '<path d="M3 21h18"/><path d="M5 21v-9"/><path d="M9.5 21v-9"/><path d="M14.5 21v-9"/><path d="M19 21v-9"/><path d="M2.5 9.5L12 3l9.5 6.5"/>',
  gradcap: '<path d="M2.5 9.5L12 5l9.5 4.5L12 14 2.5 9.5z"/><path d="M6.5 11.5V16c0 1.5 2.5 3 5.5 3s5.5-1.5 5.5-3v-4.5"/><path d="M21.5 9.5V15"/>',
  lock: '<rect x="5" y="11" width="14" height="9" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/><circle cx="12" cy="15.5" r="1" fill="currentColor" stroke="none"/>'
};

/** Médaille dessinée d'un badge : pastille métallique (bronze/argent/or/diamant) + icône SVG. */
function badgeMedalHtml(b, size = "sm") {
  const inner = BADGE_ICONS[b.icon] || BADGE_ICONS.medal;
  return `<span class="medal medal-${b.tier} medal-${size}" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${inner}</svg></span>`;
}

/** Catalogue des badges (100), du plus prestigieux au plus simple. Icône + palier métal, nom et condition EN/FR. */
const BADGES = [
  { id: "mythe", icon: "rocket", tier: "diamond", en: { name: "Myth", desc: "Received 500 reactions" }, fr: { name: "Mythe", desc: "500 réactions reçues" } },
  { id: "idole", icon: "crown", tier: "diamond", en: { name: "Idol", desc: "Received 300 reactions" }, fr: { name: "Idole", desc: "300 réactions reçues" } },
  { id: "phenomene", icon: "sparkles", tier: "diamond", en: { name: "Phenomenon", desc: "Received 150 reactions" }, fr: { name: "Phénomène", desc: "150 réactions reçues" } },
  { id: "exceptionnel", icon: "gem", tier: "diamond", en: { name: "Exceptional", desc: "Average rating of 4.75+ with at least 5 ratings" }, fr: { name: "Exceptionnel", desc: "Note moyenne ≥ 4,75 avec au moins 5 notes" } },
  { id: "parfait", icon: "star", tier: "diamond", en: { name: "Flawless", desc: "Perfect 5.0 average with at least 3 ratings" }, fr: { name: "Sans faute", desc: "Note moyenne de 5,0 avec au moins 3 notes" } },
  { id: "machine", icon: "feather", tier: "diamond", en: { name: "Writing machine", desc: "Published 100 posts" }, fr: { name: "Machine à écrire", desc: "100 articles publiés" } },
  { id: "voix", icon: "megaphone", tier: "diamond", en: { name: "Voice of Pierre", desc: "Wrote 500 comments" }, fr: { name: "Voix de Pierre", desc: "500 commentaires écrits" } },
  { id: "ame_genereuse", icon: "heart", tier: "diamond", en: { name: "Generous soul", desc: "Gave 500 reactions" }, fr: { name: "Âme généreuse", desc: "500 réactions données" } },
  { id: "marathonien", icon: "award", tier: "diamond", en: { name: "Marathoner", desc: "500 total actions (posts, comments, reactions, ratings)" }, fr: { name: "Marathonien", desc: "500 actions au total (articles, commentaires, réactions, notes)" } },
  { id: "musee", icon: "gem", tier: "diamond", en: { name: "Living museum", desc: "Unlocked 40 other badges" }, fr: { name: "Musée vivant", desc: "40 autres badges débloqués" } },
  { id: "monument", icon: "landmark", tier: "diamond", en: { name: "Monument", desc: "Member for 2 years" }, fr: { name: "Monument", desc: "Membre depuis 2 ans" } },
  { id: "influenceur", icon: "users", tier: "diamond", en: { name: "Influencer", desc: "100 followers" }, fr: { name: "Influenceur", desc: "100 abonnés" } },
  { id: "galerie", icon: "image", tier: "diamond", en: { name: "Gallery", desc: "Published 50 posts with photos" }, fr: { name: "Galerie", desc: "50 articles avec photo" } },
  { id: "podium", icon: "trophy", tier: "diamond", en: { name: "Podium", desc: "Among the first 3 members" }, fr: { name: "Podium", desc: "Parmi les 3 premiers membres" } },
  { id: "vedette", icon: "star", tier: "gold", en: { name: "Headliner", desc: "Received 100 reactions" }, fr: { name: "Vedette", desc: "100 réactions reçues" } },
  { id: "superstar", icon: "crown", tier: "gold", en: { name: "Superstar", desc: "Received 50 reactions" }, fr: { name: "Superstar", desc: "50 réactions reçues" } },
  { id: "star", icon: "trophy", tier: "gold", en: { name: "Blog star", desc: "Received 20 reactions or an average rating of 4.5+" }, fr: { name: "Star du blog", desc: "20 réactions reçues ou note moyenne ≥ 4,5" } },
  { id: "celebrite", icon: "film", tier: "gold", en: { name: "Celebrity", desc: "30 followers" }, fr: { name: "Célébrité", desc: "30 abonnés" } },
  { id: "star_montee", icon: "users", tier: "gold", en: { name: "Rising star", desc: "50 followers" }, fr: { name: "Star montante", desc: "50 abonnés" } },
  { id: "legende", icon: "landmark", tier: "gold", en: { name: "Legend", desc: "Published 25 posts" }, fr: { name: "Légende", desc: "25 articles publiés" } },
  { id: "romancier", icon: "book", tier: "gold", en: { name: "Novelist", desc: "Published 50 posts" }, fr: { name: "Romancier", desc: "50 articles publiés" } },
  { id: "tribun", icon: "megaphone", tier: "gold", en: { name: "Town crier", desc: "Wrote 150 comments" }, fr: { name: "Tribun", desc: "150 commentaires écrits" } },
  { id: "debatteur", icon: "megaphone", tier: "gold", en: { name: "Debater", desc: "Wrote 250 comments" }, fr: { name: "Débatteur", desc: "250 commentaires écrits" } },
  { id: "expert", icon: "gradcap", tier: "gold", en: { name: "Expert", desc: "Gave 25 ratings" }, fr: { name: "Expert", desc: "25 notes données" } },
  { id: "academie", icon: "gradcap", tier: "gold", en: { name: "The Academy", desc: "Gave 100 ratings" }, fr: { name: "Académie", desc: "100 notes données" } },
  { id: "artiste", icon: "image", tier: "gold", en: { name: "Visual artist", desc: "Published 20 posts with photos" }, fr: { name: "Artiste visuel", desc: "20 articles avec photo" } },
  { id: "photographe_pro", icon: "camera", tier: "gold", en: { name: "Pro photographer", desc: "Published 30 posts with photos" }, fr: { name: "Photographe pro", desc: "30 articles avec photo" } },
  { id: "collector", icon: "award", tier: "gold", en: { name: "Collector", desc: "Unlocked 8 other badges" }, fr: { name: "Collectionneur", desc: "8 autres badges débloqués" } },
  { id: "grand_collectionneur", icon: "trophy", tier: "gold", en: { name: "Grand collector", desc: "Unlocked 20 other badges" }, fr: { name: "Grand collectionneur", desc: "20 autres badges débloqués" } },
  { id: "coeur_or", icon: "heart", tier: "gold", en: { name: "Heart of gold", desc: "Gave 75 reactions" }, fr: { name: "Cœur d'or", desc: "75 réactions données" } },
  { id: "bienfaiteur", icon: "gift", tier: "gold", en: { name: "Benefactor", desc: "Gave 150 reactions" }, fr: { name: "Bienfaiteur", desc: "150 réactions données" } },
  { id: "philanthrope", icon: "gift", tier: "gold", en: { name: "Philanthropist", desc: "Gave 300 reactions" }, fr: { name: "Philanthrope", desc: "300 réactions données" } },
  { id: "consensus", icon: "target", tier: "gold", en: { name: "Consensus", desc: "Average rating of 4.5+ with at least 10 ratings" }, fr: { name: "Consensus", desc: "Note moyenne ≥ 4,5 avec au moins 10 notes" } },
  { id: "chef_doeuvre", icon: "gem", tier: "gold", en: { name: "Masterpiece", desc: "Received five 5-star ratings" }, fr: { name: "Chef-d'œuvre", desc: "5 notes de 5 étoiles reçues" } },
  { id: "hyperactif", icon: "flame", tier: "gold", en: { name: "Hyperactive", desc: "100 posts and comments combined" }, fr: { name: "Hyperactif", desc: "100 articles et commentaires cumulés" } },
  { id: "pilier", icon: "landmark", tier: "gold", en: { name: "Pillar", desc: "10 posts, 50 comments and 5 followers" }, fr: { name: "Pilier", desc: "10 articles, 50 commentaires et 5 abonnés" } },
  { id: "animateur_disc", icon: "messages", tier: "gold", en: { name: "Discussion host", desc: "Received 50 comments on your posts" }, fr: { name: "Animateur de discussions", desc: "50 commentaires reçus sur tes articles" } },
  { id: "ambassadeur", icon: "globe", tier: "gold", en: { name: "Ambassador", desc: "Follow 50 members" }, fr: { name: "Ambassadeur", desc: "Suit 50 membres" } },
  { id: "democrate", icon: "vote", tier: "gold", en: { name: "Democrat", desc: "Voted in 25 polls" }, fr: { name: "Démocrate", desc: "A voté dans 25 sondages" } },
  { id: "anniversaire", icon: "calendar", tier: "gold", en: { name: "One year", desc: "Member for 1 year" }, fr: { name: "Anniversaire", desc: "Membre depuis 1 an" } },
  { id: "dinosaure", icon: "clock", tier: "gold", en: { name: "Dinosaur", desc: "Member for 180 days" }, fr: { name: "Dinosaure", desc: "Membre depuis 180 jours" } },
  { id: "pioneer", icon: "medal", tier: "gold", en: { name: "Pioneer", desc: "Among the first 10 members" }, fr: { name: "Pionnier", desc: "Parmi les 10 premiers membres" } },
  { id: "bien_note", icon: "star", tier: "silver", en: { name: "Well rated", desc: "Average rating of 4.0+ with at least 5 ratings" }, fr: { name: "Bien noté", desc: "Note moyenne ≥ 4,0 avec au moins 5 notes" } },
  { id: "influent", icon: "mic", tier: "silver", en: { name: "Influential", desc: "15 followers" }, fr: { name: "Influent", desc: "15 abonnés" } },
  { id: "cercle", icon: "users", tier: "silver", en: { name: "Inner circle", desc: "10 followers" }, fr: { name: "Cercle", desc: "10 abonnés" } },
  { id: "reporter", icon: "camera", tier: "silver", en: { name: "Reporter", desc: "Published 10 posts with photos" }, fr: { name: "Reporter", desc: "10 articles avec photo" } },
  { id: "orateur", icon: "mic", tier: "silver", en: { name: "Orator", desc: "Wrote 75 comments" }, fr: { name: "Orateur", desc: "75 commentaires écrits" } },
  { id: "conversateur", icon: "messages", tier: "silver", en: { name: "Conversationalist", desc: "Wrote 50 comments" }, fr: { name: "Conversateur", desc: "50 commentaires écrits" } },
  { id: "prolific", icon: "book", tier: "silver", en: { name: "Prolific author", desc: "Published 10 posts" }, fr: { name: "Auteur prolifique", desc: "10 articles publiés" } },
  { id: "redacteur", icon: "edit", tier: "silver", en: { name: "Editor", desc: "Published 15 posts" }, fr: { name: "Rédacteur", desc: "15 articles publiés" } },
  { id: "illustrateur", icon: "image", tier: "silver", en: { name: "Illustrator", desc: "Published 5 posts with photos" }, fr: { name: "Illustrateur", desc: "5 articles avec photo" } },
  { id: "juge", icon: "award", tier: "silver", en: { name: "Judge", desc: "Gave 50 ratings" }, fr: { name: "Juge", desc: "50 notes données" } },
  { id: "reconnu", icon: "award", tier: "silver", en: { name: "Recognized", desc: "Received 10 ratings" }, fr: { name: "Reconnu", desc: "10 notes reçues" } },
  { id: "encourageant", icon: "heart", tier: "silver", en: { name: "Encourager", desc: "Gave 50 reactions" }, fr: { name: "Encourageant", desc: "50 réactions données" } },
  { id: "marrant", icon: "laugh", tier: "silver", en: { name: "Funny", desc: "Received 10 laugh reactions" }, fr: { name: "Marrant", desc: "10 réactions « drôle » reçues" } },
  { id: "coup_de_coeur", icon: "heart", tier: "silver", en: { name: "Crush", desc: "Received 10 heart reactions" }, fr: { name: "Coup de cœur", desc: "10 réactions « cœur » reçues" } },
  { id: "stupefiant", icon: "wow", tier: "silver", en: { name: "Stunning", desc: "Received 10 wow reactions" }, fr: { name: "Stupéfiant", desc: "10 réactions « wow » reçues" } },
  { id: "relanceur", icon: "messages", tier: "silver", en: { name: "Spark", desc: "Received 10 comments on your posts" }, fr: { name: "Relanceur", desc: "10 commentaires reçus sur tes articles" } },
  { id: "explorateur", icon: "compass", tier: "silver", en: { name: "Explorer", desc: "Commented on 25 different posts" }, fr: { name: "Explorateur", desc: "A commenté 25 articles différents" } },
  { id: "equilibre", icon: "compass", tier: "silver", en: { name: "Well-rounded", desc: "5 posts, 25 comments and 25 reactions given" }, fr: { name: "Équilibré", desc: "5 articles, 25 commentaires et 25 réactions données" } },
  { id: "profil_complet", icon: "usercheck", tier: "silver", en: { name: "Complete profile", desc: "Bio written and profile picture set" }, fr: { name: "Profil complet", desc: "Bio écrite et photo de profil mise" } },
  { id: "retour", icon: "rotate", tier: "silver", en: { name: "The Comeback", desc: "Published again after 30+ days without a post" }, fr: { name: "Le Retour", desc: "A publié après 30+ jours sans article" } },
  { id: "animateur_sondages", icon: "poll", tier: "silver", en: { name: "Poll host", desc: "Created 5 polls" }, fr: { name: "Animateur de sondages", desc: "5 sondages créés" } },
  { id: "citoyen", icon: "vote", tier: "silver", en: { name: "Citizen", desc: "Voted in 10 polls" }, fr: { name: "Citoyen", desc: "A voté dans 10 sondages" } },
  { id: "connecte", icon: "users", tier: "silver", en: { name: "Connected", desc: "Follow 25 members" }, fr: { name: "Connecté", desc: "Suit 25 membres" } },
  { id: "trimestriel", icon: "calendar", tier: "silver", en: { name: "Quarter", desc: "Member for 90 days" }, fr: { name: "Trimestriel", desc: "Membre depuis 90 jours" } },
  { id: "veteran", icon: "calendar", tier: "silver", en: { name: "Veteran", desc: "Member for 30 days" }, fr: { name: "Ancien", desc: "Membre depuis 30 jours" } },
  { id: "premiers25", icon: "medal", tier: "silver", en: { name: "Early member", desc: "Among the first 25 members" }, fr: { name: "Membre précoce", desc: "Parmi les 25 premiers membres" } },
  { id: "eclair", icon: "zap", tier: "silver", en: { name: "Lightning", desc: "Published on the day you joined" }, fr: { name: "Éclair", desc: "A publié le jour de son inscription" } },
  { id: "populaire", icon: "megaphone", tier: "bronze", en: { name: "Popular", desc: "5 followers" }, fr: { name: "Populaire", desc: "5 abonnés" } },
  { id: "premier_abonne", icon: "userplus", tier: "bronze", en: { name: "First follower", desc: "Got your first follower" }, fr: { name: "Premier abonné", desc: "Premier abonné obtenu" } },
  { id: "bavard", icon: "message", tier: "bronze", en: { name: "Chatterbox", desc: "Wrote 25 comments" }, fr: { name: "Bavard", desc: "25 commentaires écrits" } },
  { id: "causeur", icon: "messages", tier: "bronze", en: { name: "Chatty", desc: "Wrote 5 comments" }, fr: { name: "Causeur", desc: "5 commentaires écrits" } },
  { id: "premier_mot", icon: "message", tier: "bronze", en: { name: "First words", desc: "Wrote your first comment" }, fr: { name: "Premier mot", desc: "Premier commentaire écrit" } },
  { id: "critic", icon: "star", tier: "bronze", en: { name: "Critic", desc: "Gave 10 ratings" }, fr: { name: "Critique", desc: "10 notes données" } },
  { id: "curieux", icon: "search", tier: "bronze", en: { name: "Curious", desc: "Gave 5 ratings" }, fr: { name: "Curieux", desc: "5 notes données" } },
  { id: "premier_avis", icon: "star", tier: "bronze", en: { name: "First opinion", desc: "Gave your first rating" }, fr: { name: "Premier avis", desc: "Première note donnée" } },
  { id: "premiere_note", icon: "star", tier: "bronze", en: { name: "First rating received", desc: "Received your first rating" }, fr: { name: "Première note", desc: "Première note reçue" } },
  { id: "photographe", icon: "camera", tier: "bronze", en: { name: "Photographer", desc: "Published 3 posts with photos" }, fr: { name: "Photographe", desc: "3 articles avec photo" } },
  { id: "premier_cliche", icon: "camera", tier: "bronze", en: { name: "First shot", desc: "Published your first post with a photo" }, fr: { name: "Premier cliché", desc: "Premier article avec photo" } },
  { id: "generous", icon: "heart", tier: "bronze", en: { name: "Generous", desc: "Gave 25 reactions" }, fr: { name: "Généreux", desc: "25 réactions données" } },
  { id: "sympathique", icon: "thumbsup", tier: "bronze", en: { name: "Friendly", desc: "Gave 10 reactions" }, fr: { name: "Amical", desc: "10 réactions données" } },
  { id: "premier_geste", icon: "heart", tier: "bronze", en: { name: "First gesture", desc: "Gave your first reaction" }, fr: { name: "Premier geste", desc: "Première réaction donnée" } },
  { id: "blagueur", icon: "laugh", tier: "bronze", en: { name: "Joker", desc: "Gave 10 laugh reactions" }, fr: { name: "Blagueur", desc: "10 réactions « drôle » données" } },
  { id: "decouvreur", icon: "compass", tier: "bronze", en: { name: "Networker", desc: "Follow 10 members" }, fr: { name: "Réseauteur", desc: "Suit 10 membres" } },
  { id: "sociable", icon: "userplus", tier: "bronze", en: { name: "Sociable", desc: "Followed your first member" }, fr: { name: "Sociable", desc: "Premier membre suivi" } },
  { id: "active", icon: "flame", tier: "bronze", en: { name: "Active member", desc: "Published 5 posts or wrote 10 comments" }, fr: { name: "Membre actif", desc: "5 articles publiés ou 10 commentaires" } },
  { id: "apprecie", icon: "thumbsup", tier: "bronze", en: { name: "Appreciated", desc: "Received 10 reactions" }, fr: { name: "Apprécié", desc: "10 réactions reçues" } },
  { id: "remarque", icon: "sparkles", tier: "bronze", en: { name: "Noticed", desc: "Received 5 reactions" }, fr: { name: "Remarqué", desc: "5 réactions reçues" } },
  { id: "author", icon: "edit", tier: "bronze", en: { name: "Author", desc: "Published your first post" }, fr: { name: "Auteur", desc: "Premier article publié" } },
  { id: "apprenti", icon: "feather", tier: "bronze", en: { name: "Apprentice author", desc: "Published 2 posts" }, fr: { name: "Apprenti auteur", desc: "2 articles publiés" } },
  { id: "sondeur", icon: "poll", tier: "bronze", en: { name: "Pollster", desc: "Created your first poll" }, fr: { name: "Sondeur", desc: "Premier sondage créé" } },
  { id: "votant", icon: "vote", tier: "bronze", en: { name: "Voter", desc: "Voted in your first poll" }, fr: { name: "Votant", desc: "Premier vote dans un sondage" } },
  { id: "habitue", icon: "message", tier: "bronze", en: { name: "Regular", desc: "Commented on 10 different posts" }, fr: { name: "Habitué", desc: "A commenté 10 articles différents" } },
  { id: "touche_a_tout", icon: "sparkles", tier: "bronze", en: { name: "Jack of all trades", desc: "Posted, commented, reacted and rated at least once" }, fr: { name: "Touche-à-tout", desc: "A publié, commenté, réagi et noté au moins une fois" } },
  { id: "chasseur", icon: "target", tier: "bronze", en: { name: "Badge hunter", desc: "Unlocked 5 other badges" }, fr: { name: "Chasseur de badges", desc: "5 autres badges débloqués" } },
  { id: "presente", icon: "edit", tier: "bronze", en: { name: "Introduced", desc: "Wrote your bio" }, fr: { name: "Présenté", desc: "Bio écrite" } },
  { id: "visage", icon: "image", tier: "bronze", en: { name: "Has a face", desc: "Set a profile picture" }, fr: { name: "A un visage", desc: "Photo de profil mise" } },
  { id: "cent_premiers", icon: "medal", tier: "bronze", en: { name: "First hundred", desc: "Among the first 100 members" }, fr: { name: "Cent premiers", desc: "Parmi les 100 premiers membres" } },
  { id: "new", icon: "leaf", tier: "bronze", en: { name: "Newcomer", desc: "Joined less than 7 days ago" }, fr: { name: "Nouveau", desc: "Inscrit depuis moins de 7 jours" } }
];

const getBadge = (id) => BADGES.find((b) => b.id === id);
function badgeName(b) { return lang === "fr" ? b.fr.name : b.en.name; }
function badgeDesc(b) { return lang === "fr" ? b.fr.desc : b.en.desc; }

/** Statistiques d'activité par utilisateur, utilisées pour les badges. */
function computeBadges(statsByUser, rankById) {
  badgesById = {};
  for (const [uid, pr] of Object.entries(profilesById)) {
    const st = statsByUser[uid] || { posts: 0, comments: 0, reactionsReceived: 0, ratingCount: 0, ratingSum: 0, reactionsGiven: 0, ratingsGiven: 0, photoPosts: 0, minPostAt: null, fiveStars: 0, commentsReceived: 0, pollsCreated: 0, pollVotesGiven: 0, givenByType: {}, receivedByType: {}, distinctCommented: new Set(), postDates: [] };
    const ageMs = pr.created_at ? Date.now() - new Date(pr.created_at).getTime() : 0;
    const avg = st.ratingCount ? st.ratingSum / st.ratingCount : 0;
    const followers = followerCountById[uid] ?? 0;
    const following = followingCountById[uid] ?? 0;
    const rank = rankById[uid] ?? 999;
    const earned = new Set();
    // Réactions reçues
    if (st.reactionsReceived >= 500) earned.add("mythe");
    if (st.reactionsReceived >= 300) earned.add("idole");
    if (st.reactionsReceived >= 150) earned.add("phenomene");
    if (st.reactionsReceived >= 100) earned.add("vedette");
    if (st.reactionsReceived >= 50) earned.add("superstar");
    if ((st.ratingCount >= 3 && avg >= 4.5) || st.reactionsReceived >= 20) earned.add("star");
    if (st.reactionsReceived >= 10) earned.add("apprecie");
    if (st.reactionsReceived >= 5) earned.add("remarque");
    // Qualité (notes reçues)
    if (st.ratingCount >= 5 && avg >= 4.75) earned.add("exceptionnel");
    if (st.ratingCount >= 3 && avg >= 5) earned.add("parfait");
    if (st.ratingCount >= 10 && avg >= 4.5) earned.add("consensus");
    if (st.fiveStars >= 5) earned.add("chef_doeuvre");
    if (st.ratingCount >= 5 && avg >= 4.0) earned.add("bien_note");
    if (st.ratingCount >= 10) earned.add("reconnu");
    if (st.ratingCount >= 1) earned.add("premiere_note");
    // Articles
    if (st.posts >= 100) earned.add("machine");
    if (st.posts >= 50) earned.add("romancier");
    if (st.posts >= 25) earned.add("legende");
    if (st.posts >= 15) earned.add("redacteur");
    if (st.posts >= 10) earned.add("prolific");
    if (st.posts >= 2) earned.add("apprenti");
    if (st.posts >= 1) earned.add("author");
    // Commentaires écrits
    if (st.comments >= 500) earned.add("voix");
    if (st.comments >= 250) earned.add("debatteur");
    if (st.comments >= 150) earned.add("tribun");
    if (st.comments >= 75) earned.add("orateur");
    if (st.comments >= 50) earned.add("conversateur");
    if (st.comments >= 25) earned.add("bavard");
    if (st.comments >= 5) earned.add("causeur");
    if (st.comments >= 1) earned.add("premier_mot");
    if (st.posts >= 5 || st.comments >= 10) earned.add("active");
    // Réactions données
    if (st.reactionsGiven >= 500) earned.add("ame_genereuse");
    if (st.reactionsGiven >= 300) earned.add("philanthrope");
    if (st.reactionsGiven >= 150) earned.add("bienfaiteur");
    if (st.reactionsGiven >= 75) earned.add("coeur_or");
    if (st.reactionsGiven >= 50) earned.add("encourageant");
    if (st.reactionsGiven >= 25) earned.add("generous");
    if (st.reactionsGiven >= 10) earned.add("sympathique");
    if (st.reactionsGiven >= 1) earned.add("premier_geste");
    // Notes données
    if (st.ratingsGiven >= 100) earned.add("academie");
    if (st.ratingsGiven >= 50) earned.add("juge");
    if (st.ratingsGiven >= 25) earned.add("expert");
    if (st.ratingsGiven >= 10) earned.add("critic");
    if (st.ratingsGiven >= 5) earned.add("curieux");
    if (st.ratingsGiven >= 1) earned.add("premier_avis");
    // Photos
    if (st.photoPosts >= 50) earned.add("galerie");
    if (st.photoPosts >= 30) earned.add("photographe_pro");
    if (st.photoPosts >= 20) earned.add("artiste");
    if (st.photoPosts >= 10) earned.add("reporter");
    if (st.photoPosts >= 5) earned.add("illustrateur");
    if (st.photoPosts >= 3) earned.add("photographe");
    if (st.photoPosts >= 1) earned.add("premier_cliche");
    // Abonnés et abonnements
    if (followers >= 100) earned.add("influenceur");
    if (followers >= 50) earned.add("star_montee");
    if (followers >= 30) earned.add("celebrite");
    if (followers >= 15) earned.add("influent");
    if (followers >= 10) earned.add("cercle");
    if (followers >= 5) earned.add("populaire");
    if (followers >= 1) earned.add("premier_abonne");
    if (following >= 50) earned.add("ambassadeur");
    if (following >= 25) earned.add("connecte");
    if (following >= 10) earned.add("decouvreur");
    if (following >= 1) earned.add("sociable");
    // Sondages
    if (st.pollsCreated >= 5) earned.add("animateur_sondages");
    if (st.pollsCreated >= 1) earned.add("sondeur");
    if (st.pollVotesGiven >= 25) earned.add("democrate");
    if (st.pollVotesGiven >= 10) earned.add("citoyen");
    if (st.pollVotesGiven >= 1) earned.add("votant");
    // Réactions par type
    if ((st.receivedByType.laugh ?? 0) >= 10) earned.add("marrant");
    if ((st.givenByType.laugh ?? 0) >= 10) earned.add("blagueur");
    if ((st.receivedByType.heart ?? 0) >= 10) earned.add("coup_de_coeur");
    if ((st.receivedByType.wow ?? 0) >= 10) earned.add("stupefiant");
    // Discussions reçues et exploration
    if (st.commentsReceived >= 50) earned.add("animateur_disc");
    if (st.commentsReceived >= 10) earned.add("relanceur");
    if ((st.distinctCommented?.size ?? 0) >= 25) earned.add("explorateur");
    if ((st.distinctCommented?.size ?? 0) >= 10) earned.add("habitue");
    // Ancienneté et rang
    if (ageMs >= 730 * 864e5) earned.add("monument");
    if (ageMs >= 365 * 864e5) earned.add("anniversaire");
    if (ageMs >= 180 * 864e5) earned.add("dinosaure");
    if (ageMs >= 90 * 864e5) earned.add("trimestriel");
    if (ageMs >= 30 * 864e5) earned.add("veteran");
    if (ageMs < 7 * 864e5) earned.add("new");
    if (rank <= 3) earned.add("podium");
    if (rank <= 10) earned.add("pioneer");
    if (rank <= 25) earned.add("premiers25");
    if (rank <= 100) earned.add("cent_premiers");
    if (st.minPostAt && pr.created_at && (new Date(st.minPostAt).getTime() - new Date(pr.created_at).getTime()) < 864e5) earned.add("eclair");
    // Retour après une longue pause entre deux articles
    if (st.postDates?.length >= 2) {
      const dates = [...st.postDates].sort();
      for (let i = 1; i < dates.length; i++) {
        if (new Date(dates[i]).getTime() - new Date(dates[i - 1]).getTime() >= 30 * 864e5) { earned.add("retour"); break; }
      }
    }
    // Profil
    const hasBio = !!(pr.bio && pr.bio.trim());
    const hasAvatar = !!pr.avatar_url;
    if (hasBio) earned.add("presente");
    if (hasAvatar) earned.add("visage");
    if (hasBio && hasAvatar) earned.add("profil_complet");
    // Combos
    if (st.posts >= 1 && st.comments >= 1 && st.reactionsGiven >= 1 && st.ratingsGiven >= 1) earned.add("touche_a_tout");
    if (st.posts >= 5 && st.comments >= 25 && st.reactionsGiven >= 25) earned.add("equilibre");
    if (st.posts + st.comments >= 100) earned.add("hyperactif");
    if (st.posts >= 10 && st.comments >= 50 && followers >= 5) earned.add("pilier");
    if (st.posts + st.comments + st.reactionsGiven + st.ratingsGiven >= 500) earned.add("marathonien");
    // Collection (comptée sur les AUTRES badges, hors famille Collection)
    const others = earned.size;
    if (others >= 5) earned.add("chasseur");
    if (others >= 8) earned.add("collector");
    if (others >= 20) earned.add("grand_collectionneur");
    if (others >= 40) earned.add("musee");
    const ordered = BADGES.filter((b) => earned.has(b.id)).map((b) => b.id);
    if (ordered.length) badgesById[uid] = ordered;
  }
}

/** Médailles des badges (3 max + compteur) pour l'affichage compact près des pseudos. */
function badgeIcons(uid, max = 3) {
  const ids = badgesById[uid] || [];
  const shown = ids.slice(0, max).map((id) => {
    const b = getBadge(id);
    return `<span class="badge-ico" title="${esc(badgeName(b))}">${badgeMedalHtml(b, "sm")}</span>`;
  }).join("");
  const more = ids.length > max ? `<span class="badge-more">+${ids.length - max}</span>` : "";
  return shown + more;
}
/** Pseudo cliquable vers la page personnelle, avec mini avatar et badges s'ils existent. */
/** Coche bleue des comptes vérifiés (attribuée depuis le dashboard uniquement). */
function verifiedMark(userId) {
  return profilesById[userId]?.verified
    ? `<span class="verified" title="${esc(t("profile.verified"))}">✓</span>`
    : "";
}

function authorHtml(row) {
  const name = authorName(row);
  const av = avatarFor(row?.user_id);
  const avHtml = av
    ? `<img class="mini-avatar" src="${esc(av)}" alt="">`
    : `<span class="mini-avatar mini-letter">${esc(name.charAt(0).toUpperCase())}</span>`;
  const bHtml = badgeIcons(row?.user_id);
  const vHtml = verifiedMark(row?.user_id);
  return row?.author_username
    ? `<a class="author-link" href="#/user/${esc(row.author_username)}">${avHtml}${esc(name)}${vHtml}${bHtml}</a>`
    : `${avHtml}${esc(name)}${vHtml}${bHtml}`;
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
  if (n.type === "warning" || n.type === "announce") {
    const icon = n.type === "warning" ? "⚠️" : "📣";
    return `
    <div class="notif-item" data-notif="${esc(n.id)}">
      <span class="dot${n.read_at ? " read" : ""}"></span>
      <span>${icon} ${esc(n.message || "")}<br><span class="when">${fmtDate(n.created_at)}</span></span>
    </div>`;
  }
  const key = n.type === "comment" ? "notif.comment" : n.type === "reaction" ? "notif.reaction" : n.type === "mention" ? "notif.mention" : "notif.follow";
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
  { type: "heart", icon: "❤️", labelKey: "post.react_heart" },
  { type: "laugh", icon: "😂", labelKey: "post.react_laugh" },
  { type: "wow", icon: "😮", labelKey: "post.react_wow" },
  { type: "sad", icon: "😢", labelKey: "post.react_sad" }
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
      if (!(await confirmYesNo(t("nav.logout_confirm"), { icon: "door" }))) return;
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
  const rawUsername = $("signup-username").value.trim();
  const email = $("signup-email").value.trim();
  const password = $("signup-password").value;

  if (!/^[A-Za-z0-9_.-]{3,20}$/.test(rawUsername)) {
    showModalMessage(t("auth.err_username_format"), "error");
    return;
  }

  // Vérifie que le pseudo n'est pas déjà pris
  try {
    const { data: taken } = await supabase
      .from("profiles")
      .select("id")
      .ilike("username", rawUsername)
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
    if (/^[A-Za-z0-9_.-]{3,20}$/.test(s)) return s;
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
  const rawUsername = $("username-input").value.trim();
  if (!/^[A-Za-z0-9_.-]{3,20}$/.test(rawUsername)) {
    showUsernameMessage(t("auth.err_username_format"), "error");
    return;
  }
  try {
    const { data: taken } = await supabase
      .from("profiles")
      .select("id")
      .ilike("username", rawUsername)
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

// ---------- Couleur d'accent personnalisée ----------
function applyAccent(color) {
  if (color) document.documentElement.style.setProperty("--accent", color);
  else document.documentElement.style.removeProperty("--accent");
}
function currentAccent() {
  return getComputedStyle(document.documentElement).getPropertyValue("--accent").trim();
}
(function restoreAccent() {
  try {
    const saved = localStorage.getItem("mm_accent");
    if (saved) applyAccent(saved);
  } catch { /* stockage indisponible */ }
})();
$("accent-picker").addEventListener("input", async (e) => {
  const color = e.target.value;
  applyAccent(color);
  try { localStorage.setItem("mm_accent", color); } catch { /* stockage indisponible */ }
  if (session?.user && profilesById[session.user.id]) {
    profilesById[session.user.id].accent_color = color;
    await supabase.from("profiles").update({ accent_color: color }).eq("id", session.user.id);
  }
});
$("accent-reset").addEventListener("click", async () => {
  applyAccent(null);
  try { localStorage.removeItem("mm_accent"); } catch { /* stockage indisponible */ }
  if (session?.user && profilesById[session.user.id]) {
    profilesById[session.user.id].accent_color = null;
    await supabase.from("profiles").update({ accent_color: null }).eq("id", session.user.id);
  }
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
  else {
    showToast(t("report.thanks"), "success");
    // Masquage automatique à partir de 3 signalements (fonction côté base)
    try {
      if (reportTarget.postId) await supabase.rpc("check_post_reports", { p_post_id: reportTarget.postId });
      if (reportTarget.commentId) await supabase.rpc("check_comment_reports", { p_comment_id: reportTarget.commentId });
    } catch { /* silencieux */ }
    if (currentRoute().name === "post") render();
  }
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
  const userMatch = hash.match(/^#\/user\/([A-Za-z0-9_.-]{3,20})$/);
  if (userMatch) return { name: "user", username: userMatch[1] };
  const threadMatch = hash.match(/^#\/messages\/([A-Za-z0-9_.-]{3,20})$/);
  if (threadMatch) return { name: "thread", username: threadMatch[1] };
  if (hash === "#/blog") return { name: "blog" };
  if (hash === "#/members") return { name: "members" };
  if (hash === "#/badges") return { name: "badges" };
  if (hash === "#/admin") return { name: "admin" };
  if (hash === "#/messages") return { name: "conversations" };
  return { name: "home" };
}

function setActiveNav(name) {
  const target = name === "post" ? "blog" : name === "home" ? "home" : name === "blog" ? "blog" : name === "members" ? "members" : "";
  document.querySelectorAll(".nav-links a").forEach((a) => {
    a.classList.toggle("active", a.dataset.nav === target);
  });
}

let lastRouteKey = "";
async function render() {
  if (msgPoll) { clearInterval(msgPoll); msgPoll = null; }
  if (session?.user) {
    try { await loadAggregates(); } catch { /* le rendu normal gérera */ }
    const me = profilesById[session.user.id];
    if (me && !me.is_admin && sanctionState(me).suspended && currentRoute().name !== "admin") {
      view.innerHTML = `<section class="card"><h1>⏸️ ${esc(t("admin.suspended_title"))}</h1><p>${esc(t("admin.suspended_msg").replace("{d}", fmtDate(me.suspended_until)))}</p><p><button class="btn" id="susp-logout" type="button">${esc(t("nav.logout"))}</button></p></section>`;
      $("susp-logout")?.addEventListener("click", async () => { await supabase.auth.signOut(); location.hash = "#/"; location.reload(); });
      return;
    }
  }
  const route = currentRoute();
  const routeKey = route.name + ":" + (route.id || route.username || "");
  if (routeKey !== lastRouteKey) { lastRouteKey = routeKey; window.scrollTo(0, 0); }
  setActiveNav(route.name);
  if (route.name === "blog") {
    await renderBlog();
  } else if (route.name === "post") {
    await renderPostDetail(route.id);
  } else if (route.name === "user") {
    await renderProfile(route.username);
  } else if (route.name === "members") {
    await renderMembers();
  } else if (route.name === "badges") {
    await renderBadgesPage();
  } else if (route.name === "admin") {
    await renderAdmin();
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
  const [reactionsRes, ratingsRes, commentsRes, profilesRes, postsAllRes, followsRes, pollOptRes, pollVoteRes, bookmarksRes, blocksRes] = await Promise.all([
    supabase.from("reactions").select("post_id,type,user_id"),
    supabase.from("ratings").select("post_id,value,user_id"),
    supabase.from("comments").select("post_id,user_id"),
    supabase.from("profiles").select("id,username,avatar_url,created_at,bio,verified,accent_color,pinned_post_id,is_admin,banned,muted_until,suspended_until"),
    supabase.from("posts").select("id,user_id,image_url,created_at"),
    supabase.from("follows").select("follower_id,following_id"),
    supabase.from("poll_options").select("post_id"),
    supabase.from("poll_votes").select("user_id"),
    session?.user ? supabase.from("bookmarks").select("post_id") : Promise.resolve({ data: [] }),
    session?.user ? supabase.from("blocks").select("blocked_id") : Promise.resolve({ data: [] })
  ]);
  myBookmarks = new Set((bookmarksRes.data || []).map((b) => b.post_id));
  myBlocks = new Set((blocksRes.data || []).map((b) => b.blocked_id));
  if (reactionsRes.error) throw reactionsRes.error;
  if (ratingsRes.error) throw ratingsRes.error;
  if (commentsRes.error) throw commentsRes.error;
  if (!profilesRes.error) {
    profilesById = {};
    profileByUsername = {};
    profileByUsernameCI = {};
    bannedIds = new Set();
    for (const pr of profilesRes.data) {
      profilesById[pr.id] = pr;
      profileByUsername[pr.username] = pr;
      profileByUsernameCI[pr.username.toLowerCase()] = pr;
      if (pr.banned) bannedIds.add(pr.id);
    }
    const navAdminEl = document.getElementById("nav-admin");
    if (navAdminEl) navAdminEl.hidden = !isAdminMe();
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
  const stOf = (uid) => (statsByUser[uid] ??= { posts: 0, comments: 0, reactionsReceived: 0, ratingCount: 0, ratingSum: 0, reactionsGiven: 0, ratingsGiven: 0, photoPosts: 0, minPostAt: null, fiveStars: 0, commentsReceived: 0, pollsCreated: 0, pollVotesGiven: 0, givenByType: {}, receivedByType: {}, distinctCommented: new Set(), postDates: [] });
  const postOwner = {};
  for (const p of postsAllRes.data || []) {
    postOwner[p.id] = p.user_id;
    const st = stOf(p.user_id);
    st.posts += 1;
    st.postDates.push(p.created_at);
    if (p.image_url) st.photoPosts += 1;
    if (!st.minPostAt || new Date(p.created_at) < new Date(st.minPostAt)) st.minPostAt = p.created_at;
  }
  for (const c of commentsRes.data || []) {
    const st = stOf(c.user_id);
    st.comments += 1;
    st.distinctCommented.add(c.post_id);
    const owner = postOwner[c.post_id];
    if (owner && owner !== c.user_id) stOf(owner).commentsReceived += 1;
  }
  for (const r of reactionsRes.data) {
    const st = stOf(r.user_id);
    st.reactionsGiven += 1;
    st.givenByType[r.type] = (st.givenByType[r.type] ?? 0) + 1;
  }
  for (const r of ratingsRes.data) {
    stOf(r.user_id).ratingsGiven += 1;
    const owner = postOwner[r.post_id];
    if (owner && r.value === 5) stOf(owner).fiveStars += 1;
  }
  // Réactions reçues : TOUS les types comptent (avant : 👍⭐❤️ seulement, les 😂😮😢 du Pack 2 étaient ignorés)
  for (const [pid, byType] of Object.entries(reactionsByPost)) {
    const owner = postOwner[pid];
    if (!owner) continue;
    const st = stOf(owner);
    for (const [type, n] of Object.entries(byType)) {
      st.reactionsReceived += n;
      st.receivedByType[type] = (st.receivedByType[type] ?? 0) + n;
    }
  }
  for (const [pid, rAgg] of Object.entries(ratingsByPost)) {
    const owner = postOwner[pid];
    if (owner) { stOf(owner).ratingCount += rAgg.count; stOf(owner).ratingSum += rAgg.sum; }
  }
  // Sondages : créés (articles distincts ayant des options) et votes donnés
  const pollPostsByOwner = {};
  for (const o of pollOptRes.data || []) {
    const owner = postOwner[o.post_id];
    if (owner) (pollPostsByOwner[owner] ??= new Set()).add(o.post_id);
  }
  for (const [uid, set] of Object.entries(pollPostsByOwner)) stOf(uid).pollsCreated = set.size;
  for (const v of pollVoteRes.data || []) stOf(v.user_id).pollVotesGiven += 1;

  // --- Abonnements ---
  followingSet = new Set();
  followerCountById = {};
  followingCountById = {};
  for (const f of followsRes.data || []) {
    if (session?.user && f.follower_id === session.user.id) followingSet.add(f.following_id);
    followerCountById[f.following_id] = (followerCountById[f.following_id] ?? 0) + 1;
    followingCountById[f.follower_id] = (followingCountById[f.follower_id] ?? 0) + 1;
  }

  // Rang d'ancienneté (par date d'inscription) puis calcul des badges
  const rankById = {};
  Object.values(profilesById)
    .sort((a, b) => new Date(a.created_at) - new Date(b.created_at))
    .forEach((pr, i) => { rankById[pr.id] = i + 1; });
  computeBadges(statsByUser, rankById);

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
        <div class="post-head-info">
          <div class="post-head-name">${authorHtml(p)}</div>
          <div class="post-head-date">${fmtDate(p.created_at)}</div>
        </div>
      </div>
      <h2><a href="#/post/${esc(p.id)}">${esc(p.title)}</a></h2>
      ${p.hidden ? `<div class="hidden-chip">${esc(t("post.hidden_chip"))}</div>` : ""}
      ${p.featured ? `<div class="featured-chip">⭐ ${esc(t("admin.featured_chip"))}</div>` : ""}
      ${p.image_url ? `<img class="post-image" src="${esc(p.image_url)}" alt="">` : ""}
      <p class="post-excerpt">${richText(excerpt(p.content))}</p>
      ${pollHtml(p.id)}
      ${isAdminMe() ? `<div class="comment-actions admin-actions"><button type="button" data-admin-action="${p.hidden ? "unhide-post" : "hide-post"}" data-id="${esc(p.id)}">${esc(t(p.hidden ? "admin.unhide" : "admin.hide"))}</button><button type="button" class="link-danger" data-admin-action="del-post" data-id="${esc(p.id)}">${esc(t("common.delete").replace("🗑️ ", ""))}</button></div>` : ""}
      <div class="post-stats">${stats}<button class="bm-btn" data-share="${esc(p.id)}" title="${esc(t("post.share"))}">🔗</button><button class="bm-btn${myBookmarks.has(p.id) ? " active" : ""}" data-bookmark="${esc(p.id)}" title="${esc(t("post.save"))}">🔖</button></div>
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
let blogTag = null;
let blogCache = null;

function postsZoneHtml() {
  if (!blogCache) return "";
  const { posts, agg } = blogCache;
  if (!posts.length) return `<section class="card"><p class="empty">${esc(t("blog.empty"))}</p></section>`;
  let list = posts;
  if (session?.user) {
    if (myBlocks.size) list = list.filter((p) => !myBlocks.has(p.user_id));
    list = list.filter((p) => !p.hidden || p.user_id === session.user.id || isAdminMe());
  }
  if (!isAdminMe()) list = list.filter((p) => !bannedIds.has(p.user_id) || p.user_id === session?.user?.id);
  if (feedMode === "all" && !blogTag) {
    list = [...list.filter((p) => p.featured), ...list.filter((p) => !p.featured)];
  }
  if (feedMode === "following" && session?.user) {
    list = list.filter((p) => followingSet.has(p.user_id) || p.user_id === session.user.id);
    if (!list.length) return `<section class="card"><p class="empty">${esc(t("feed.following_empty"))}</p></section>`;
  }
  if (feedMode === "saved" && session?.user) {
    list = list.filter((p) => myBookmarks.has(p.id));
    if (!list.length) return `<section class="card"><p class="empty">${esc(t("feed.empty_saved"))}</p></section>`;
  }
  if (feedMode === "trending") {
    const weekAgo = Date.now() - 7 * 864e5;
    list = list
      .filter((p) => new Date(p.created_at).getTime() >= weekAgo)
      .sort((a, b) => totalReactions(b, agg) - totalReactions(a, agg));
    if (!list.length) return `<section class="card"><p class="empty">${esc(t("feed.empty_trending"))}</p></section>`;
  }
  if (blogTag) {
    const needle = "#" + blogTag;
    list = list.filter((p) => (p.content || "").toLowerCase().includes(needle));
    if (!list.length) return `<section class="card"><p class="empty">${esc(t("search.no_results"))}</p></section>`;
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

/** Nombre total de réactions sur un article (tous types). */
function totalReactions(p, agg) {
  const rc = agg.reactionsByPost[p.id] || {};
  return Object.values(rc).reduce((s, n) => s + n, 0);
}

/** Charge les sondages et les votes pour une liste d'articles. */
async function loadPolls(postIds) {
  const clean = (postIds || []).filter(Boolean);
  if (!clean.length) return { optionsByPost: {}, votesByOption: {}, myVote: {} };
  const [{ data: opts }, { data: votes }] = await Promise.all([
    supabase.from("poll_options").select("*").in("post_id", clean).order("position"),
    supabase.from("poll_votes").select("*").in("post_id", clean)
  ]);
  const optionsByPost = {}, votesByOption = {}, myVote = {};
  for (const o of opts || []) (optionsByPost[o.post_id] ??= []).push(o);
  for (const v of votes || []) {
    votesByOption[v.option_id] = (votesByOption[v.option_id] ?? 0) + 1;
    if (session?.user && v.user_id === session.user.id) myVote[v.post_id] = v.option_id;
  }
  return { optionsByPost, votesByOption, myVote };
}

/** Bloc de sondage (résultats en barres + vote en un clic). */
function pollHtml(postId) {
  const opts = pollsCache.optionsByPost[postId];
  if (!opts?.length) return "";
  const total = opts.reduce((s, o) => s + (pollsCache.votesByOption[o.id] ?? 0), 0);
  return `
    <div class="poll" data-poll="${esc(postId)}">
      ${opts.map((o) => {
        const n = pollsCache.votesByOption[o.id] ?? 0;
        const pct = total ? Math.round((n / total) * 100) : 0;
        const mine = pollsCache.myVote[postId] === o.id;
        return `
        <button type="button" class="poll-opt-btn${mine ? " mine" : ""}" data-vote="${esc(o.id)}" data-post="${esc(postId)}">
          <span class="poll-bar" style="width:${pct}%"></span>
          <span class="poll-label">${esc(o.text)}${mine ? " ✓" : ""}</span>
          <span class="poll-pct">${pct}% · ${n}</span>
        </button>`;
      }).join("")}
      <div class="small">${total} ${esc(t("poll.votes"))}</div>
    </div>`;
}

// Vote / changement de vote dans un sondage (mise à jour sur place)
document.addEventListener("click", async (e) => {
  const btn = e.target.closest("[data-vote]");
  if (!btn) return;
  if (!session?.user) { openAuthModal("login"); return; }
  if (!requireUsername()) return;
  const postId = btn.dataset.post;
  const optionId = btn.dataset.vote;
  const current = pollsCache.myVote[postId];
  let res;
  if (current === optionId) {
    res = await supabase.from("poll_votes").delete().eq("post_id", postId).eq("user_id", session.user.id);
    if (!res.error) { pollsCache.myVote[postId] = undefined; pollsCache.votesByOption[optionId] = Math.max(0, (pollsCache.votesByOption[optionId] ?? 1) - 1); }
  } else if (current) {
    res = await supabase.from("poll_votes").update({ option_id: optionId }).eq("post_id", postId).eq("user_id", session.user.id);
    if (!res.error) {
      pollsCache.votesByOption[current] = Math.max(0, (pollsCache.votesByOption[current] ?? 1) - 1);
      pollsCache.votesByOption[optionId] = (pollsCache.votesByOption[optionId] ?? 0) + 1;
      pollsCache.myVote[postId] = optionId;
    }
  } else {
    res = await supabase.from("poll_votes").insert({ post_id: postId, option_id: optionId, user_id: session.user.id });
    if (!res.error) { pollsCache.votesByOption[optionId] = (pollsCache.votesByOption[optionId] ?? 0) + 1; pollsCache.myVote[postId] = optionId; }
  }
  if (res.error) { showToast(t("poll.err_vote") + res.error.message, "error"); return; }
  document.querySelectorAll(`[data-poll="${postId}"]`).forEach((el) => { el.outerHTML = pollHtml(postId); });
});

// Favoris : ajout / retrait en un clic (mise à jour sur place)
document.addEventListener("click", async (e) => {
  const btn = e.target.closest("[data-bookmark]");
  if (!btn) return;
  e.preventDefault();
  if (!session?.user) { openAuthModal("login"); return; }
  if (!requireUsername()) return;
  const postId = btn.dataset.bookmark;
  const had = myBookmarks.has(postId);
  if (had) myBookmarks.delete(postId); else myBookmarks.add(postId);
  document.querySelectorAll(`[data-bookmark="${postId}"]`).forEach((b) => b.classList.toggle("active", !had));
  const { error } = had
    ? await supabase.from("bookmarks").delete().eq("user_id", session.user.id).eq("post_id", postId)
    : await supabase.from("bookmarks").insert({ user_id: session.user.id, post_id: postId });
  if (error) {
    if (had) myBookmarks.add(postId); else myBookmarks.delete(postId);
    document.querySelectorAll(`[data-bookmark="${postId}"]`).forEach((b) => b.classList.toggle("active", had));
    showToast(t("post.err_bookmark") + error.message, "error");
  } else {
    showToast(t(had ? "toast.unsaved" : "toast.saved"), "success");
    if (feedMode === "saved" && currentRoute().name === "blog") renderBlog();
  }
});

// Épingler / retirer l'épingle d'un article sur son profil
document.addEventListener("click", async (e) => {
  const btn = e.target.closest("[data-pin]");
  if (!btn) return;
  if (!session?.user || !requireUsername()) return;
  const postId = btn.dataset.pin;
  const pinned = profilesById[session.user.id]?.pinned_post_id;
  const next = pinned === postId ? null : postId;
  const { error } = await supabase.from("profiles").update({ pinned_post_id: next }).eq("id", session.user.id);
  if (error) { showToast(t("post.err_pin") + error.message, "error"); return; }
  if (profilesById[session.user.id]) profilesById[session.user.id].pinned_post_id = next;
  if (currentUsername && profileByUsername[currentUsername]) profileByUsername[currentUsername].pinned_post_id = next;
  showToast(t(next ? "toast.pinned" : "toast.unpinned"), "success");
  render();
});

// Partager un article (partage natif ou copie du lien)
document.addEventListener("click", async (e) => {
  const btn = e.target.closest("[data-share]");
  if (!btn) return;
  const url = `${location.origin}${location.pathname}#/post/${btn.dataset.share}`;
  if (navigator.share) {
    try { await navigator.share({ title: "Pierre", url }); } catch { /* partage annulé */ }
  } else {
    try {
      await navigator.clipboard.writeText(url);
      showToast(t("toast.link_copied"), "success");
    } catch { showToast(url, "info"); }
  }
});

// Bloquer / débloquer un membre
document.addEventListener("click", async (e) => {
  const blockBtn = e.target.closest("[data-block]");
  const unblockBtn = e.target.closest("[data-unblock]");
  if (blockBtn) {
    if (!session?.user) return;
    if (!(await confirmYesNo(t("profile.block_confirm"), { icon: "ban", danger: true }))) return;
    const uid = blockBtn.dataset.block;
    const { error } = await supabase.from("blocks").insert({ blocker_id: session.user.id, blocked_id: uid });
    if (error) { showToast(t("profile.err_block") + error.message, "error"); return; }
    await supabase.from("follows").delete().eq("follower_id", session.user.id).eq("following_id", uid);
    followingSet.delete(uid);
    myBlocks.add(uid);
    showToast(t("toast.blocked"), "success");
    render();
  }
  if (unblockBtn) {
    if (!session?.user) return;
    const uid = unblockBtn.dataset.unblock;
    const { error } = await supabase.from("blocks").delete().eq("blocker_id", session.user.id).eq("blocked_id", uid);
    if (error) { showToast(t("profile.err_block") + error.message, "error"); return; }
    myBlocks.delete(uid);
    showToast(t("toast.unblocked"), "success");
    render();
  }
});

// Clic sur un #tag : filtre le blog par ce tag
document.addEventListener("click", (e) => {
  const link = e.target.closest("[data-tag]");
  if (!link) return;
  blogTag = link.dataset.tag || null;
  feedMode = "all";
  if (currentRoute().name === "blog") render();
});

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
            <label class="poll-toggle"><input type="checkbox" id="poll-toggle"> ${esc(t("poll.add"))}</label>
            <div id="poll-fields" class="hidden">
              <div class="poll-opts">
                <input class="poll-opt" maxlength="80" placeholder="${esc(t("poll.opt_ph"))} 1">
                <input class="poll-opt" maxlength="80" placeholder="${esc(t("poll.opt_ph"))} 2">
              </div>
              <button type="button" class="btn small" id="poll-add-opt">${esc(t("poll.add_opt"))}</button>
            </div>
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
    pollsCache = await loadPolls(posts.map((p) => p.id));

    const composerFinal = session?.user && isMutedMe()
      ? `<section class="card"><p class="message error">${esc(myBlockMessage())}</p></section>`
      : composer;
    const tabs = `
      <div class="seg-tabs">
        <button class="seg-tab${feedMode === "all" ? " active" : ""}" data-feed="all" type="button">${esc(t("feed.all"))}</button>
        ${session?.user ? `<button class="seg-tab${feedMode === "following" ? " active" : ""}" data-feed="following" type="button">${esc(t("feed.following"))}</button>` : ""}
        <button class="seg-tab${feedMode === "trending" ? " active" : ""}" data-feed="trending" type="button">${esc(t("feed.trending"))}</button>
        ${session?.user ? `<button class="seg-tab${feedMode === "saved" ? " active" : ""}" data-feed="saved" type="button">${esc(t("feed.saved"))}</button>` : ""}
      </div>`;

    view.innerHTML = `
      <div class="blog-header"><h1>${esc(t("blog.title"))}</h1></div>
      ${composerFinal}
      ${tabs}
      <input id="post-search" class="search-input" type="search" placeholder="${esc(t("search.posts"))}">
      ${blogTag ? `<div class="tag-chip">🏷️ #${esc(blogTag)} <button type="button" id="clear-tag" title="✖">✖</button></div>` : ""}
      <div id="posts-zone">${postsZoneHtml()}</div>`;

    bindPostCards();

    const clearTag = $("clear-tag");
    if (clearTag) clearTag.addEventListener("click", () => { blogTag = null; renderBlog(); });

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

    // Sondage du compositeur : à lier APRÈS l'insertion du formulaire dans le DOM.
    // (Avant ce correctif, la liaison se faisait sur le squelette de chargement :
    // les éléments n'existaient pas encore, la case ne révélait jamais les options
    // et la publication restait bloquée sur « au moins 2 options ».)
    const pollToggle = $("poll-toggle");
    if (pollToggle) {
      pollToggle.addEventListener("change", () => $("poll-fields").classList.toggle("hidden", !pollToggle.checked));
      $("poll-add-opt").addEventListener("click", () => {
        const wrap = document.querySelector(".poll-opts");
        if (wrap.children.length >= 6) return;
        const input = document.createElement("input");
        input.className = "poll-opt";
        input.maxLength = 80;
        input.placeholder = `${t("poll.opt_ph")} ${wrap.children.length + 1}`;
        wrap.appendChild(input);
      });
    }

    const postForm = $("post-form");
    if (postForm) {
      postForm.addEventListener("submit", async (e) => {
        e.preventDefault();
        if (!requireUsername()) return;
        const title = $("post-title").value.trim();
        const content = $("post-content").value.trim();
        if (!title || !content) return;
        let pollOptions = [];
        if ($("poll-toggle")?.checked) {
          pollOptions = [...document.querySelectorAll(".poll-opt")].map((i) => i.value.trim()).filter(Boolean);
          if (pollOptions.length < 2) { showToast(t("poll.err_min"), "error"); return; }
        }
        const imageFile = $("post-image").files[0];
        let imageUrl = null;
        if (imageFile) {
          imageUrl = await uploadPhoto(imageFile, "posts");
          if (imageUrl === undefined) return; // échec d'envoi, déjà signalé
        }
        const { data: newPost, error } = await supabase.from("posts").insert({
          title,
          content,
          user_id: session.user.id,
          author_email: session.user.email,
          author_username: currentUsername,
          image_url: imageUrl
        }).select("id").single();
        if (error) {
          showToast(t("blog.err_publish") + error.message, "error");
        } else {
          if (pollOptions.length) {
            await supabase.from("poll_options").insert(
              pollOptions.map((text, i) => ({ post_id: newPost.id, text, position: i }))
            );
          }
          showToast(t("toast.published"), "success");
          await notifyMentions(content, newPost.id);
          await renderBlog();
        }
      });
    }
  } catch (err) {
    view.innerHTML = `<section class="card"><p class="message error">${esc(t("blog.err_load"))}</p></section>`;
  }
}

// ---------- Vue détail d'une publication ----------
async function renderPostDetail(postId, instant = false) {
  if (!instant) view.innerHTML = skeletonHtml(2);
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
    pollsCache = await loadPolls([postId]);

    if (post.hidden && session?.user?.id !== post.user_id && !isAdminMe()) {
      view.innerHTML = `<section class="card"><p class="message error">${esc(t("post.hidden_msg"))}</p><a class="back-link" href="#/blog">${esc(t("post.back"))}</a></section>`;
      return;
    }
    if (bannedIds.has(post.user_id) && session?.user?.id !== post.user_id && !isAdminMe()) {
      view.innerHTML = `<section class="card"><p class="message error">${esc(t("admin.banned_notice"))}</p><a class="back-link" href="#/blog">${esc(t("post.back"))}</a></section>`;
      return;
    }
    const visibleComments = comments.filter((c) =>
      (!c.hidden || c.user_id === session?.user?.id || session?.user?.id === post.user_id || isAdminMe())
      && (!bannedIds.has(c.user_id) || c.user_id === session?.user?.id || isAdminMe()));

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

    const childrenOf = {};
    const topComments = visibleComments.filter((c) => !c.parent_id);
    for (const c of visibleComments) if (c.parent_id) (childrenOf[c.parent_id] ??= []).push(c);

    function commentHtml(c, isReply) {
      const isCommentOwner = session?.user?.id === c.user_id;
      const actions = loggedIn
        ? `<div class="comment-actions">
             ${isCommentOwner
               ? `<button type="button" data-edit-btn="${esc(c.id)}">${esc(t("comment.edit"))}</button>
                  <button type="button" class="link-danger" data-del-btn="${esc(c.id)}">${esc(t("common.delete").replace("🗑️ ", ""))}</button>`
               : `${!isReply ? `<button type="button" data-reply-btn="${esc(c.id)}">${esc(t("comment.reply"))}</button>` : ""}
                  <button type="button" data-report-comment="${esc(c.id)}">${esc(t("report.button"))}</button>
                  ${isAdminMe() ? `<button type="button" data-admin-action="${c.hidden ? "unhide-comment" : "hide-comment"}" data-id="${esc(c.id)}">${esc(t(c.hidden ? "admin.unhide" : "admin.hide"))}</button>
                  <button type="button" class="link-danger" data-admin-action="del-comment" data-id="${esc(c.id)}">${esc(t("common.delete").replace("🗑️ ", ""))}</button>` : ""}`}
           </div>`
        : "";
      const children = (childrenOf[c.id] || []).map((ch) => commentHtml(ch, true)).join("");
      return `
        <div class="comment${isReply ? " reply" : ""}">
          <div class="comment-head">
            <span class="comment-author">${authorHtml(c)}</span>
            <span class="comment-date">${fmtDate(c.created_at)}</span>
          </div>
          <p class="comment-body">${richText(c.content)}</p>
          ${c.hidden ? `<div class="hidden-chip">${esc(t("comment.hidden_chip"))}</div>` : ""}
          <form class="form comment-edit-form hidden" data-edit-form="${esc(c.id)}">
            <textarea rows="3" maxlength="2000" required>${esc(c.content)}</textarea>
            <div class="comment-actions">
              <button type="submit">${esc(t("common.save"))}</button>
              <button type="button" data-edit-cancel="${esc(c.id)}">${esc(t("common.cancel"))}</button>
            </div>
          </form>
          ${actions}
          <form class="form reply-form hidden" data-reply-form="${esc(c.id)}">
            <textarea rows="2" maxlength="2000" required placeholder="${esc(t("comment.reply_ph"))}"></textarea>
            <div class="comment-actions">
              <button type="submit">${esc(t("comment.reply"))}</button>
              <button type="button" data-reply-cancel="${esc(c.id)}">${esc(t("common.cancel"))}</button>
            </div>
          </form>
          ${children ? `<div class="replies">${children}</div>` : ""}
        </div>`;
    }

    const commentsHtml = topComments.length === 0
      ? `<p class="empty">${esc(t("post.no_comments"))}</p>`
      : topComments.map((c) => commentHtml(c, false)).join("");

    const commentForm = loggedIn && isMutedMe()
      ? `<p class="message error" style="margin-top:1rem">${esc(myBlockMessage())}</p>`
      : loggedIn && post.comments_locked && !isAdminMe()
      ? `<p class="message error" style="margin-top:1rem">🔒 ${esc(t("admin.comments_locked"))}</p>`
      : loggedIn
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
          <button class="btn small" data-pin="${esc(post.id)}" type="button">${profilesById[session.user.id]?.pinned_post_id === post.id ? esc(t("post.unpin")) : "📌 " + esc(t("post.pin"))}</button>
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

    const adminPostBlock = isAdminMe()
      ? `<div class="owner-actions admin-actions">
           ${!isPostOwner ? `<button class="btn small danger" type="button" data-admin-action="del-post" data-id="${esc(post.id)}">${esc(t("common.delete"))}</button>` : ""}
           <button class="btn small" type="button" data-admin-action="${post.hidden ? "unhide-post" : "hide-post"}" data-id="${esc(post.id)}">${esc(t(post.hidden ? "admin.unhide" : "admin.hide"))}</button>
           <button class="btn small" type="button" data-admin-action="${post.comments_locked ? "unlock-post" : "lock-post"}" data-id="${esc(post.id)}">${esc(t(post.comments_locked ? "admin.unlock" : "admin.lock"))}</button>
           <button class="btn small" type="button" data-admin-action="${post.featured ? "unfeature-post" : "feature-post"}" data-id="${esc(post.id)}">${esc(t(post.featured ? "admin.unfeature" : "admin.feature"))}</button>
           ${post.image_url ? `<button class="btn small" type="button" data-admin-action="clear-post-image" data-id="${esc(post.id)}">${esc(t("admin.clear_image"))}</button>` : ""}
         </div>`
      : "";

    view.innerHTML = `
      <a class="back-link" href="#/blog">${esc(t("post.back"))}</a>
      <div class="post-layout">
      <article class="card post-full">
        <h1>${esc(post.title)}</h1>
        <div class="post-meta">${esc(t("post.by"))} ${authorHtml(post)} · ${fmtDate(post.created_at)}</div>
        ${ownerBlock}
        ${adminPostBlock}
        <p>${richText(post.content)}</p>
        ${post.image_url ? `<img class="post-image-full" src="${esc(post.image_url)}" alt="">` : ""}
        ${pollHtml(post.id)}
        <div class="post-tools">
          <button type="button" class="btn small bm-detail${myBookmarks.has(post.id) ? " active" : ""}" data-bookmark="${esc(post.id)}">🔖 ${esc(t("post.save"))}</button>
          <button type="button" class="btn small" data-share="${esc(post.id)}">🔗 ${esc(t("post.share"))}</button>
        </div>
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
            <li><span>${esc(t("post.stat_comments"))}</span><strong data-stat="comments">${visibleComments.length}</strong></li>
            <li><span>${esc(t("post.stat_likes"))}</span><strong data-stat="like">${rc.like ?? 0}</strong></li>
            <li><span>${esc(t("post.stat_stars"))}</span><strong data-stat="star">${rc.star ?? 0}</strong></li>
            <li><span>${esc(t("post.stat_hearts"))}</span><strong data-stat="heart">${rc.heart ?? 0}</strong></li>
            <li><span>${esc(t("post.stat_avg"))}</span><strong data-stat="avg">${avg ? avg.avg.toFixed(1) + "/5" : "—"}</strong></li>
          </ul>
        </div>
      </aside>
      </div>
      <section class="card comments">
        <h3>${esc(t("post.comments"))} (${visibleComments.length})</h3>
        <div id="comments-list">${commentsHtml}</div>
        ${commentForm}
      </section>`;

    const detailLogin = $("detail-login");
    if (detailLogin) detailLogin.addEventListener("click", () => openAuthModal("login"));

    // Recharge la vue sans flash ni perte de position (pas de retour en haut)
    async function rerenderKeepScroll() {
      const y = window.scrollY;
      await renderPostDetail(post.id, true); // instant : pas de squelette
      window.scrollTo(0, y);
    }

    // --- Modifier / supprimer l'article (propriétaire) ---
    const editPostBtn = $("edit-post-btn");
    if (editPostBtn) {
      editPostBtn.addEventListener("click", () => $("edit-post-form").classList.toggle("hidden"));
      $("edit-cancel").addEventListener("click", () => $("edit-post-form").classList.add("hidden"));
      $("delete-post-btn").addEventListener("click", async () => {
        if (!(await confirmYesNo(t("post.delete_confirm"), { icon: "trash", danger: true }))) return;
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
        await rerenderKeepScroll();
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
        await rerenderKeepScroll();
      });
    });
    document.querySelectorAll("[data-del-btn]").forEach((btn) => {
      btn.addEventListener("click", async () => {
        if (!(await confirmYesNo(t("comment.delete_confirm"), { icon: "trash", danger: true }))) return;
        const { error } = await supabase.from("comments").delete().eq("id", btn.dataset.delBtn);
        if (error) { showToast(t("post.err_comment") + error.message, "error"); return; }
        showToast(t("comment.deleted"), "success");
        await rerenderKeepScroll();
      });
    });

    // --- Répondre à un commentaire (réponses imbriquées, un niveau) ---
    document.querySelectorAll("[data-reply-btn]").forEach((btn) => {
      btn.addEventListener("click", () => {
        if (!requireUsername()) return;
        document.querySelectorAll(".reply-form").forEach((f) => f.classList.add("hidden"));
        document.querySelector(`[data-reply-form="${btn.dataset.replyBtn}"]`)?.classList.remove("hidden");
      });
    });
    document.querySelectorAll("[data-reply-cancel]").forEach((btn) => {
      btn.addEventListener("click", () => {
        document.querySelector(`[data-reply-form="${btn.dataset.replyCancel}"]`)?.classList.add("hidden");
      });
    });
    document.querySelectorAll("[data-reply-form]").forEach((form) => {
      form.addEventListener("submit", async (e) => {
        e.preventDefault();
        if (!requireUsername()) return;
        const content = form.querySelector("textarea").value.trim();
        if (!content) return;
        const { error } = await supabase.from("comments").insert({
          post_id: post.id,
          parent_id: form.dataset.replyForm,
          user_id: session.user.id,
          author_email: session.user.email,
          author_username: currentUsername,
          content
        });
        if (error) { showToast(t("post.err_comment") + error.message, "error"); return; }
        showToast(t("toast.commented"), "success");
        notify(post.user_id, "comment", post.id);
        await notifyMentions(content, post.id, [post.user_id]);
        await rerenderKeepScroll();
      });
    });

    // --- Réactions : mise à jour directe, sans recharger la page ---
    document.querySelectorAll(".reaction").forEach((btn) => {
      btn.addEventListener("click", async () => {
        if (!requireUsername()) return;
        const type = btn.dataset.reaction;
        const key = `${post.id}:${type}`;
        const countEl = btn.querySelector(".count");
        const wasActive = btn.classList.contains("active");
        const statEl = document.querySelector(`[data-stat="${type}"]`);
        const syncStat = () => { if (statEl) statEl.textContent = countEl.textContent; };
        // Mise à jour immédiate de l'affichage (la page ne bouge pas)
        btn.classList.toggle("active", !wasActive);
        countEl.textContent = Math.max(0, (parseInt(countEl.textContent, 10) || 0) + (wasActive ? -1 : 1));
        syncStat();
        if (wasActive) delete agg.myReactions[key]; else agg.myReactions[key] = true;
        try {
          if (wasActive) {
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
        } catch (err) {
          // Échec : on remet l'état précédent
          btn.classList.toggle("active", wasActive);
          countEl.textContent = Math.max(0, (parseInt(countEl.textContent, 10) || 0) + (wasActive ? 1 : -1));
          syncStat();
          if (wasActive) agg.myReactions[key] = true; else delete agg.myReactions[key];
          showToast(t("post.err_react") + (err.message ?? ""), "error");
        }
      });
    });

    // --- Notes : mise à jour directe, sans recharger la page ---
    function adjustRating(from, to) {
      const data = agg.ratingsByPost[post.id] ?? { sum: 0, count: 0 };
      let { sum, count } = data;
      if (from > 0) sum -= from; else count += 1;
      if (to > 0) sum += to; else count -= 1;
      if (sum < 0) sum = 0;
      if (count < 0) count = 0;
      agg.ratingsByPost[post.id] = { sum, count };
      if (to > 0) agg.myRatings[post.id] = to; else delete agg.myRatings[post.id];
    }
    function paintStars() {
      const myV = agg.myRatings[post.id] ?? 0;
      document.querySelectorAll(".star").forEach((s) => {
        s.classList.toggle("filled", Number(s.dataset.star) <= myV);
      });
      const summary = document.querySelector(".rating-summary");
      if (summary) {
        const data = agg.ratingsByPost[post.id] ?? { sum: 0, count: 0 };
        const bits = [
          data.count ? `<strong>★ ${(data.sum / data.count).toFixed(1)}/5</strong> — ${data.count}` : esc(t("post.no_rating")),
          myV ? esc(t("post.your_rating").replace("{v}", myV)) : ""
        ].filter(Boolean).join(" · ");
        summary.innerHTML = bits;
        const avgEl = document.querySelector('[data-stat="avg"]');
        if (avgEl) avgEl.textContent = data.count ? (data.sum / data.count).toFixed(1) + "/5" : "—";
      }
    }
    document.querySelectorAll(".star").forEach((btn) => {
      btn.addEventListener("click", async () => {
        if (!requireUsername()) return;
        const value = Number(btn.dataset.star);
        const oldValue = agg.myRatings[post.id] ?? 0;
        if (value === oldValue) return; // déjà la même note
        adjustRating(oldValue, value);
        paintStars();
        try {
          const { error } = await supabase.from("ratings").upsert({
            post_id: post.id,
            user_id: session.user.id,
            value
          }, { onConflict: "post_id,user_id" });
          if (error) throw error;
        } catch (err) {
          adjustRating(value, oldValue);
          paintStars();
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
          await notifyMentions(content, post.id, [post.user_id]);
          await rerenderKeepScroll();
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
    const postsVisible = profile.banned && session?.user?.id !== profile.id && !isAdminMe() ? [] : posts;
    pollsCache = await loadPolls(postsVisible.map((p) => p.id));
    const pinned = profile.pinned_post_id ? postsVisible.find((p) => p.id === profile.pinned_post_id) || null : null;
    const rest = pinned ? postsVisible.filter((p) => p.id !== pinned.id) : postsVisible;

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
      ? `<div class="badge-row">${myBadges.map((id) => { const b = getBadge(id); return `<span class="badge">${badgeMedalHtml(b, "sm")} ${esc(badgeName(b))}</span>`; }).join("")}</div>
         <p class="small" style="margin-top:0.5rem"><a class="author-link" href="#/badges">${esc(t("profile.see_all_badges"))}</a></p>`
      : `<p class="small" style="margin-top:0.5rem"><a class="author-link" href="#/badges">${esc(t("profile.see_all_badges"))}</a></p>`;
    const profileActions = !isOwner && session?.user
      ? `<div class="owner-actions">
           ${followButtonHtml(profile.id)}
           <a class="btn" href="#/messages/${esc(profile.username)}">${esc(t("msg.button"))}</a>
           ${myBlocks.has(profile.id)
             ? `<button class="btn" type="button" data-unblock="${esc(profile.id)}">${esc(t("profile.unblock"))}</button>`
             : `<button class="btn danger" type="button" data-block="${esc(profile.id)}">${esc(t("profile.block"))}</button>`}
         </div>`
      : "";
    const adminProfileBlock = isAdminMe() && !isOwner
      ? `<div class="owner-actions admin-actions">
           <button class="btn small" type="button" data-admin-action="${profile.verified ? "unverify" : "verify"}" data-id="${esc(profile.id)}" data-name="${esc(profile.username)}">${esc(t(profile.verified ? "admin.unverify" : "admin.verify"))}</button>
           <button class="btn small" type="button" data-admin-action="${profile.is_admin ? "remove-admin" : "make-admin"}" data-id="${esc(profile.id)}" data-name="${esc(profile.username)}">${esc(t(profile.is_admin ? "admin.remove_admin" : "admin.make_admin"))}</button>
           <button class="btn small danger" type="button" data-admin-action="${profile.banned ? "unban" : "ban"}" data-id="${esc(profile.id)}" data-name="${esc(profile.username)}">${esc(t(profile.banned ? "admin.unban" : "admin.ban"))}</button>
         </div>`
      : "";
    const profSanction = sanctionState(profile);
    const sanctionBlock = isAdminMe() && !isOwner
      ? `<details class="avatar-edit">
           <summary>⚖️ ${esc(t("admin.sanctions"))}</summary>
           <p class="small" style="margin-top:0.5rem">${profSanction.banned
             ? esc(t("admin.banned_chip"))
             : profSanction.suspended
               ? esc(t("admin.suspended_until").replace("{d}", fmtDate(profile.suspended_until)))
               : profSanction.muted
                 ? esc(t("admin.muted_until").replace("{d}", fmtDate(profile.muted_until)))
                 : esc(t("admin.sanction_none"))}</p>
           <form id="sanction-form" class="form">
             <select id="sanction-kind">
               <option value="mute">${esc(t("admin.kind_mute"))}</option>
               <option value="suspend">${esc(t("admin.kind_suspend"))}</option>
             </select>
             <select id="sanction-days">
               <option value="1">${esc(t("admin.days_1"))}</option>
               <option value="7" selected>${esc(t("admin.days_7"))}</option>
               <option value="30">${esc(t("admin.days_30"))}</option>
             </select>
             <button type="submit" class="primary">${esc(t("admin.apply"))}</button>
           </form>
           ${(profSanction.banned || profSanction.suspended || profSanction.muted)
             ? `<p style="margin-top:0.5rem"><button class="btn small" type="button" data-admin-action="sanction-clear" data-id="${esc(profile.id)}" data-name="${esc(profile.username)}">${esc(t("admin.clear_sanction"))}</button></p>`
             : ""}
           <form id="warn-form" class="form" style="margin-top:0.75rem">
             <label>${esc(t("admin.warn"))}</label>
             <textarea id="warn-text" rows="2" maxlength="300" placeholder="${esc(t("admin.warn_ph"))}"></textarea>
             <button type="submit" class="btn small">${esc(t("admin.warn_send"))}</button>
           </form>
           <div class="admin-btns">
             ${profile.avatar_url ? `<button class="btn small" type="button" data-admin-action="clear-avatar" data-id="${esc(profile.id)}">${esc(t("admin.clear_avatar"))}</button>` : ""}
             ${profile.banner_url ? `<button class="btn small" type="button" data-admin-action="clear-banner" data-id="${esc(profile.id)}">${esc(t("admin.clear_banner"))}</button>` : ""}
             <button class="btn small danger" type="button" data-admin-action="purge" data-id="${esc(profile.id)}" data-name="${esc(profile.username)}">${esc(t("admin.purge"))}</button>
           </div>
         </details>`
      : "";
    const renameState = isOwner ? renameStatus(profile) : null;
    const renameForm = isOwner
      ? `<details class="avatar-edit">
           <summary>${esc(t("profile.change_name"))}</summary>
           ${renameState.ok
             ? `<form id="rename-form" class="form">
                  <input id="rename-input" type="text" maxlength="20" value="${esc(profile.username)}" autocomplete="off">
                  <p class="small">${esc(t("profile.rename_rule"))}</p>
                  <button type="submit" class="primary">${esc(t("common.save"))}</button>
                </form>`
             : `<p class="small" style="margin-top:0.5rem">${esc(t("profile.rename_in").replace("{d}", renameState.days))}</p>`}
         </details>`
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
            <h1>${esc(profile.username)}${profile.verified ? `<span class="verified" title="${esc(t("profile.verified"))}">✓</span>` : ""}${profile.is_admin ? `<span class="admin-chip">${esc(t("profile.admin"))}</span>` : ""}${profile.banned ? `<span class="banned-chip">${esc(t("admin.banned_chip"))}</span>` : ""}</h1>
            <p class="small">${esc(t("profile.member_since"))} ${fmtDate(profile.created_at)}</p>
            ${badgeRow}
            ${bioBlock}
            ${profileActions}
            ${avatarForm}
            ${bannerForm}
            ${bioForm}
            ${renameForm}
            ${adminProfileBlock}
            ${sanctionBlock}
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
      ${pinned
        ? `<h3>📌 ${esc(t("profile.pinned"))}</h3><div class="posts-grid">${postCardHtml(pinned, agg)}</div>` : ""}
      ${rest.length === 0 && !pinned
        ? `<section class="card"><p class="empty">${esc(t("profile.no_posts"))}</p></section>`
        : `<div class="posts-grid">${rest.map((p) => `
            <div class="post-pin-wrap">
              ${postCardHtml(p, agg)}
              ${isOwner ? `<div class="pin-row"><button type="button" class="btn small" data-pin="${esc(p.id)}">${pinned?.id === p.id ? esc(t("post.unpin")) : "📌 " + esc(t("post.pin"))}</button></div>` : ""}
            </div>`).join("")}</div>`}`;

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

    const sanctionFormEl = $("sanction-form");
    if (sanctionFormEl) {
      sanctionFormEl.addEventListener("submit", async (e) => {
        e.preventDefault();
        const kind = $("sanction-kind").value;
        const days = parseInt($("sanction-days").value, 10) || 7;
        if (!(await confirmYesNo(t("admin.confirm_sanction").replace("{name}", profile.username), { icon: "warn", danger: true }))) return;
        if (await adminRpc("admin_sanction", { target: profile.id, kind, days })) {
          showToast(t("admin.done"), "success");
          await renderProfile(profile.username);
        }
      });
    }
    const warnFormEl = $("warn-form");
    if (warnFormEl) {
      warnFormEl.addEventListener("submit", async (e) => {
        e.preventDefault();
        const msg = $("warn-text").value.trim();
        if (!msg) return;
        if (await adminRpc("admin_warn", { target: profile.id, msg })) {
          showToast(t("admin.warn_sent"), "success");
          $("warn-text").value = "";
        }
      });
    }

    const renameFormEl = $("rename-form");
    if (renameFormEl) {
      renameFormEl.addEventListener("submit", async (e) => {
        e.preventDefault();
        const newName = $("rename-input").value.trim().toLowerCase();
        await doRename(profile, newName);
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

// ---------- Changement de nom : 1 fois tous les 30 jours (admins : libre) ----------
function renameStatus(profile) {
  if (profile.is_admin) return { ok: true, days: 0 };
  const created = new Date(profile.created_at).getTime();
  const changed = profile.username_changed_at ? new Date(profile.username_changed_at).getTime() : 0;
  const base = Math.max(created, changed);
  const elapsed = (Date.now() - base) / 86400000;
  return { ok: elapsed >= 30, days: Math.max(1, Math.ceil(30 - elapsed)) };
}

async function doRename(profile, newName) {
  if (!/^[A-Za-z0-9_.-]{3,20}$/.test(newName)) { showToast(t("auth.err_username_format"), "error"); return; }
  if (newName === profile.username) { showToast(t("profile.rename_same"), "error"); return; }
  const { data: taken } = await supabase.from("profiles").select("id").ilike("username", newName).neq("id", profile.id).maybeSingle();
  if (taken) { showToast(t("auth.err_username_taken"), "error"); return; }
  const ok = await confirmYesNo(t("profile.rename_confirm").replace("{name}", newName), { icon: "pencil" });
  if (!ok) return;
  const { error } = await supabase.from("profiles").update({ username: newName }).eq("id", profile.id);
  if (error) { showToast(error.message, "error"); return; }
  // Met à jour le pseudo affiché sur les articles et commentaires déjà publiés
  await supabase.from("posts").update({ author_username: newName }).eq("user_id", profile.id);
  await supabase.from("comments").update({ author_username: newName }).eq("user_id", profile.id);
  if (profilesById[profile.id]) profilesById[profile.id].username = newName;
  showToast(t("profile.rename_done"), "success");
  location.hash = "#/user/" + newName;
  await renderProfile(newName);
}

// ---------- Super pouvoirs administrateur ----------
function isAdminMe() { return !!profilesById[session?.user?.id]?.is_admin; }

function sanctionState(p) {
  if (!p) return { muted: false, suspended: false, banned: false };
  const now = Date.now();
  return {
    muted: !!p.muted_until && new Date(p.muted_until).getTime() > now,
    suspended: !!p.suspended_until && new Date(p.suspended_until).getTime() > now,
    banned: !!p.banned
  };
}
function isMutedMe() {
  const me = profilesById[session?.user?.id];
  if (!me) return false;
  const s = sanctionState(me);
  return s.muted || s.banned;
}
function myBlockMessage() {
  const me = profilesById[session?.user?.id];
  if (!me) return "";
  const s = sanctionState(me);
  if (s.banned) return t("admin.you_banned");
  if (s.muted) return t("admin.you_muted").replace("{d}", fmtDate(me.muted_until));
  return "";
}

async function adminRpc(fn, args) {
  const { error } = await supabase.rpc(fn, args);
  if (error) { showToast(error.message, "error"); return false; }
  return true;
}

// Toutes les actions admin passent par ce seul écouteur (boutons présents
// uniquement dans le HTML généré pour les administrateurs).
document.addEventListener("click", async (e) => {
  const el = e.target.closest("[data-admin-action]");
  if (!el || !isAdminMe()) return;
  const action = el.dataset.adminAction, id = el.dataset.id, name = el.dataset.name || "";
  let ok = false;
  if (action === "del-post") { if (!(await confirmYesNo(t("admin.confirm_delete_post"), { icon: "trash", danger: true }))) return; ok = await adminRpc("admin_delete_post", { pid: id }); }
  else if (action === "hide-post") { ok = await adminRpc("admin_set_post_hidden", { pid: id, val: true }); }
  else if (action === "unhide-post") { ok = await adminRpc("admin_set_post_hidden", { pid: id, val: false }); }
  else if (action === "del-comment") { if (!(await confirmYesNo(t("admin.confirm_delete_comment"), { icon: "trash", danger: true }))) return; ok = await adminRpc("admin_delete_comment", { cid: id }); }
  else if (action === "hide-comment") { ok = await adminRpc("admin_set_comment_hidden", { cid: id, val: true }); }
  else if (action === "unhide-comment") { ok = await adminRpc("admin_set_comment_hidden", { cid: id, val: false }); }
  else if (action === "verify") { if (!(await confirmYesNo(t("admin.confirm_verify").replace("{name}", name)))) return; ok = await adminRpc("admin_set_verified", { target: id, val: true }); }
  else if (action === "unverify") { if (!(await confirmYesNo(t("admin.confirm_unverify").replace("{name}", name)))) return; ok = await adminRpc("admin_set_verified", { target: id, val: false }); }
  else if (action === "make-admin") { if (!(await confirmYesNo(t("admin.confirm_make_admin").replace("{name}", name)))) return; ok = await adminRpc("admin_set_admin", { target: id, val: true }); }
  else if (action === "remove-admin") { if (!(await confirmYesNo(t("admin.confirm_remove_admin").replace("{name}", name)))) return; ok = await adminRpc("admin_set_admin", { target: id, val: false }); }
  else if (action === "ban") { if (!(await confirmYesNo(t("admin.confirm_ban").replace("{name}", name), { icon: "ban", danger: true }))) return; ok = await adminRpc("admin_set_banned", { target: id, val: true }); }
  else if (action === "unban") { if (!(await confirmYesNo(t("admin.confirm_unban").replace("{name}", name)))) return; ok = await adminRpc("admin_set_banned", { target: id, val: false }); }
  else if (action === "lock-post") { ok = await adminRpc("admin_set_comments_locked", { pid: id, val: true }); }
  else if (action === "unlock-post") { ok = await adminRpc("admin_set_comments_locked", { pid: id, val: false }); }
  else if (action === "feature-post") { ok = await adminRpc("admin_set_featured", { pid: id, val: true }); }
  else if (action === "unfeature-post") { ok = await adminRpc("admin_set_featured", { pid: id, val: false }); }
  else if (action === "clear-post-image") { if (!(await confirmYesNo(t("admin.clear_image") + " ?"))) return; ok = await adminRpc("admin_clear_post_image", { pid: id }); }
  else if (action === "clear-avatar") { if (!(await confirmYesNo(t("admin.clear_avatar") + " ?"))) return; ok = await adminRpc("admin_clear_avatar", { target: id }); }
  else if (action === "clear-banner") { if (!(await confirmYesNo(t("admin.clear_banner") + " ?"))) return; ok = await adminRpc("admin_clear_banner", { target: id }); }
  else if (action === "sanction-clear") { if (!(await confirmYesNo(t("admin.confirm_clear").replace("{name}", name)))) return; ok = await adminRpc("admin_sanction", { target: id, kind: "clear", days: 0 }); }
  else if (action === "purge") {
    if (!(await confirmYesNo(t("admin.confirm_purge").replace("{name}", name), { icon: "warn", danger: true }))) return;
    if (!(await confirmYesNo(t("admin.confirm_purge2").replace("{name}", name), { icon: "warn", danger: true }))) return;
    ok = await adminRpc("admin_purge_content", { target: id });
  }
  else if (action === "dismiss-report") { const { error } = await supabase.from("reports").delete().eq("id", id); if (error) { showToast(error.message, "error"); return; } ok = true; }
  else return;
  if (ok) {
    showToast(t("admin.done"), "success");
    blogCache = null;
    if (action === "del-post" && currentRoute().name === "post") location.hash = "#/blog";
    else await render();
  }
});

// ---------- Page Admin ----------
async function renderAdmin() {
  if (!session?.user) { view.innerHTML = `<section class="card"><p class="empty">${esc(t("admin.only"))}</p></section>`; return; }
  view.innerHTML = skeletonHtml(2);
  await loadAggregates();
  if (!isAdminMe()) { view.innerHTML = `<section class="card"><p class="message error">${esc(t("admin.only"))}</p></section>`; return; }
  const [{ data: members }, { data: reports }, { data: hiddenPosts }, { data: hiddenComments }, { count: postsCount }, { count: commentsCount }, { data: logRows }] = await Promise.all([
    supabase.from("profiles").select("*").order("created_at", { ascending: true }),
    supabase.from("reports").select("*").order("created_at", { ascending: false }),
    supabase.from("posts").select("id,title,user_id,created_at").eq("hidden", true).order("created_at", { ascending: false }),
    supabase.from("comments").select("id,content,post_id,user_id,created_at").eq("hidden", true).order("created_at", { ascending: false }),
    supabase.from("posts").select("id", { count: "exact", head: true }),
    supabase.from("comments").select("id", { count: "exact", head: true }),
    supabase.from("admin_log").select("*").order("created_at", { ascending: false }).limit(30)
  ]);
  const uname = (id) => profilesById[id]?.username || "—";
  const commentPost = {};
  const repComments = (reports || []).filter((r) => r.comment_id).map((r) => r.comment_id);
  if (repComments.length) {
    const { data: cs } = await supabase.from("comments").select("id,post_id").in("id", repComments);
    for (const c of cs || []) commentPost[c.id] = c.post_id;
  }
  const reportsHtml = (reports || []).length ? (reports || []).map((r) => {
    const targetPostId = r.post_id || commentPost[r.comment_id];
    return `<div class="report-row">
      <p class="small">${fmtDate(r.created_at)} · ${esc(t("admin.report_by"))} <a class="author-link" href="#/user/${esc(uname(r.reporter_id))}">${esc(uname(r.reporter_id))}</a></p>
      <p>${esc(r.reason)}</p>
      <div class="admin-btns">
        ${targetPostId ? `<a class="btn small" href="#/post/${esc(targetPostId)}">${esc(t("admin.view_content"))}</a>` : ""}
        ${r.post_id ? `<button class="btn small danger" type="button" data-admin-action="del-post" data-id="${esc(r.post_id)}">${esc(t("admin.delete_content"))}</button>` : ""}
        ${r.comment_id ? `<button class="btn small danger" type="button" data-admin-action="del-comment" data-id="${esc(r.comment_id)}">${esc(t("admin.delete_content"))}</button>` : ""}
        <button class="btn small" type="button" data-admin-action="dismiss-report" data-id="${esc(r.id)}">${esc(t("admin.dismiss"))}</button>
      </div>
    </div>`;
  }).join("") : `<p class="empty">${esc(t("admin.no_reports"))}</p>`;

  const membersHtml = (members || []).map((m) => `
    <div class="report-row">
      <p><a class="author-link" href="#/user/${esc(m.username)}">${esc(m.username)}</a>${m.verified ? ` <span class="verified" title="${esc(t("profile.verified"))}">✓</span>` : ""}${m.is_admin ? ` <span class="admin-chip">${esc(t("profile.admin"))}</span>` : ""}${m.banned ? ` <span class="banned-chip">${esc(t("admin.banned_chip"))}</span>` : ""}</p>
      <p class="small">${esc(t("profile.member_since"))} ${fmtDate(m.created_at)}</p>
      ${(() => { const s = sanctionState(m); return s.suspended ? `<p class="small">⏸️ ${esc(t("admin.suspended_until").replace("{d}", fmtDate(m.suspended_until)))}</p>` : s.muted ? `<p class="small">🔇 ${esc(t("admin.muted_until").replace("{d}", fmtDate(m.muted_until)))}</p>` : ""; })()}
      <div class="admin-btns">
        <button class="btn small" type="button" data-admin-action="${m.verified ? "unverify" : "verify"}" data-id="${esc(m.id)}" data-name="${esc(m.username)}">${esc(t(m.verified ? "admin.unverify" : "admin.verify"))}</button>
        ${m.id !== session.user.id ? `<button class="btn small" type="button" data-admin-action="${m.is_admin ? "remove-admin" : "make-admin"}" data-id="${esc(m.id)}" data-name="${esc(m.username)}">${esc(t(m.is_admin ? "admin.remove_admin" : "admin.make_admin"))}</button>` : ""}
        ${m.id !== session.user.id ? `<button class="btn small danger" type="button" data-admin-action="${m.banned ? "unban" : "ban"}" data-id="${esc(m.id)}" data-name="${esc(m.username)}">${esc(t(m.banned ? "admin.unban" : "admin.ban"))}</button>` : ""}
        ${m.id !== session.user.id ? `<button class="btn small danger" type="button" data-admin-action="purge" data-id="${esc(m.id)}" data-name="${esc(m.username)}">${esc(t("admin.purge"))}</button>` : ""}
      </div>
    </div>`).join("");

  const hiddenPostsHtml = (hiddenPosts || []).length ? (hiddenPosts || []).map((p) => `
    <div class="report-row">
      <p><a class="author-link" href="#/post/${esc(p.id)}">${esc(p.title)}</a></p>
      <p class="small">${esc(uname(p.user_id))} · ${fmtDate(p.created_at)}</p>
      <div class="admin-btns"><button class="btn small" type="button" data-admin-action="unhide-post" data-id="${esc(p.id)}">${esc(t("admin.unhide"))}</button>
      <button class="btn small danger" type="button" data-admin-action="del-post" data-id="${esc(p.id)}">${esc(t("common.delete"))}</button></div>
    </div>`).join("") : `<p class="empty">${esc(t("admin.none"))}</p>`;

  const hiddenCommentsHtml = (hiddenComments || []).length ? (hiddenComments || []).map((c) => `
    <div class="report-row">
      <p>${esc(c.content.slice(0, 140))}</p>
      <p class="small">${esc(uname(c.user_id))} · ${fmtDate(c.created_at)}</p>
      <div class="admin-btns"><a class="btn small" href="#/post/${esc(c.post_id)}">${esc(t("admin.view_content"))}</a>
      <button class="btn small" type="button" data-admin-action="unhide-comment" data-id="${esc(c.id)}">${esc(t("admin.unhide"))}</button>
      <button class="btn small danger" type="button" data-admin-action="del-comment" data-id="${esc(c.id)}">${esc(t("common.delete"))}</button></div>
    </div>`).join("") : `<p class="empty">${esc(t("admin.none"))}</p>`;

  const logHtml = (logRows || []).length ? (logRows || []).map((l) => `
    <div class="report-row">
      <p class="small">${fmtDate(l.created_at)} · <strong>${esc(uname(l.admin_id))}</strong> — ${esc(l.action)}${l.target_id ? ` → ${esc(uname(l.target_id))}` : ""}${l.detail ? ` (${esc(l.detail)})` : ""}</p>
    </div>`).join("") : `<p class="empty">${esc(t("admin.log_empty"))}</p>`;

  view.innerHTML = `
    <div class="blog-header"><h1>🛡️ ${esc(t("admin.title"))}</h1></div>
    <section class="card">
      <ul class="stat-list">
        <li><span>${esc(t("admin.stats_members"))}</span><strong>${(members || []).length}</strong></li>
        <li><span>${esc(t("admin.stats_posts"))}</span><strong>${postsCount ?? 0}</strong></li>
        <li><span>${esc(t("admin.stats_comments"))}</span><strong>${commentsCount ?? 0}</strong></li>
        <li><span>${esc(t("admin.stats_reports"))}</span><strong>${(reports || []).length}</strong></li>
      </ul>
    </section>
    <section class="card"><h2>📣 ${esc(t("admin.broadcast"))}</h2>
      <form id="broadcast-form" class="form">
        <textarea id="broadcast-text" rows="2" maxlength="300" placeholder="${esc(t("admin.broadcast_ph"))}"></textarea>
        <button type="submit" class="primary">${esc(t("admin.broadcast_send"))}</button>
      </form>
    </section>
    <section class="card"><h2>${esc(t("admin.reports"))}</h2>${reportsHtml}</section>
    <section class="card"><h2>${esc(t("admin.members"))}</h2>${membersHtml}</section>
    <section class="card"><h2>${esc(t("admin.hidden_posts"))}</h2>${hiddenPostsHtml}</section>
    <section class="card"><h2>${esc(t("admin.hidden_comments"))}</h2>${hiddenCommentsHtml}</section>
    <section class="card"><h2>${esc(t("admin.log"))}</h2>${logHtml}</section>`;

  const broadcastForm = $("broadcast-form");
  if (broadcastForm) {
    broadcastForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      const msg = $("broadcast-text").value.trim();
      if (!msg) return;
      if (!(await confirmYesNo(t("admin.confirm_broadcast"), { icon: "mega" }))) return;
      if (await adminRpc("admin_broadcast", { msg })) {
        showToast(t("admin.broadcast_sent"), "success");
        $("broadcast-text").value = "";
        await renderAdmin();
      }
    });
  }
}

// ---------- Démarrage ----------
applyStaticTexts();

// ---------- Annuaire des membres ----------
function memberCardHtml(m) {
  const badges = badgeIcons(m.id);
  const av = m.avatar_url
    ? `<img class="feed-avatar" src="${esc(m.avatar_url)}" alt="">`
    : `<div class="feed-avatar feed-avatar-letter">${esc(m.username.charAt(0).toUpperCase())}</div>`;
  return `
    <section class="card member-card">
      <div class="member-top">
        ${av}
        <div>
          <a class="author-link" href="#/user/${esc(m.username)}">${esc(m.username)}</a>${verifiedMark(m.id)}${badges}
          <p class="small">${esc(t("profile.followers"))} : ${followerCountById[m.id] ?? 0}</p>
        </div>
      </div>
      ${m.bio ? `<p class="small">${esc(m.bio)}</p>` : ""}
      <div>${followButtonHtml(m.id)}</div>
    </section>`;
}

function membersZoneHtml(members) {
  const q = ($("member-search")?.value || "").trim().toLowerCase();
  let list = q ? members.filter((m) => m.username.toLowerCase().includes(q)) : members;
  if (session?.user && myBlocks.size) list = list.filter((m) => !myBlocks.has(m.id));
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

// ---------- Page Récompenses (badges) ----------
async function renderBadgesPage() {
  view.innerHTML = skeletonHtml(3);
  try {
    await loadAggregates();
    const myIds = session?.user ? (badgesById[session.user.id] || []) : [];
    const earned = new Set(myIds);
    const grid = BADGES.map((b) => {
      const has = earned.has(b.id);
      return `
        <div class="badge-card${has ? " earned" : " locked"}">
          <div class="badge-card-medal">${badgeMedalHtml(b, "lg")}</div>
          <div class="badge-card-name">${esc(badgeName(b))}</div>
          <div class="small">${esc(badgeDesc(b))}</div>
          ${has ? "" : `<div class="badge-card-lock"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${BADGE_ICONS.lock}</svg></div>`}
        </div>`;
    }).join("");
    const intro = session?.user
      ? `<p>${esc(t("badges.intro"))}</p>
         <div class="progress-wrap"><div class="progress-bar" style="width:${Math.round((myIds.length / BADGES.length) * 100)}%"></div></div>
         <p><strong>${esc(t("badges.progress").replace("{a}", myIds.length).replace("{b}", BADGES.length))}</strong></p>`
      : `<p>${esc(t("badges.intro"))}</p><p class="empty">${esc(t("badges.login_cta"))}</p>`;
    view.innerHTML = `
      <div class="blog-header"><h1>${badgeMedalHtml(getBadge("star"), "md")} ${esc(t("badges.title"))}</h1></div>
      <section class="card">${intro}</section>
      <div class="badges-grid">${grid}</div>`;
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
      const lastMine = c.last.sender_id === me;
      items.push(`
        <div class="convo-item${c.unread ? " unread" : ""}" data-convo="${esc(username)}">
          ${av}
          <div class="convo-main">
            <div class="convo-top"><a class="author-link" href="#/user/${esc(username)}">${esc(username)}</a><span class="convo-time">${esc(fmtConvoTime(c.last.created_at))}</span></div>
            <div class="convo-last">${lastMine ? `${esc(t("msg.you"))} ` : ""}${esc(c.last.content)}</div>
          </div>
          ${c.unread ? `<span class="convo-unread">${c.unread}</span>` : ""}
        </div>`);
    }
    view.innerHTML = `
      <div class="blog-header"><h1>${esc(t("msg.title"))}</h1></div>
      <section class="card convo-card">
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
      <section class="card thread-card">
        <div class="thread-head">
          ${av}
          <h2><a class="author-link" href="#/user/${esc(profile.username)}">${esc(profile.username)}</a></h2>
        </div>
        <div id="thread-list" class="thread-list"></div>
        <form id="msg-form" class="msg-form">
          <textarea id="msg-input" rows="1" maxlength="2000" required placeholder="${esc(t("msg.placeholder"))}"></textarea>
          <button type="submit" class="msg-send" aria-label="${esc(t("msg.send"))}" title="${esc(t("msg.send"))}"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M2.01 21 23 12 2.01 3 2 10l15 2-15 2z"/></svg></button>
        </form>
      </section>`;
    await loadThreadMessages(profile.id);
    if (msgPoll) clearInterval(msgPoll);
    msgPoll = setInterval(() => {
      if (location.hash === `#/messages/${username}`) loadThreadMessages(profile.id, true);
    }, 12000);
    const msgInput = $("msg-input");
    msgInput.addEventListener("input", () => {
      msgInput.style.height = "auto";
      msgInput.style.height = Math.min(msgInput.scrollHeight, 120) + "px";
    });
    msgInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); $("msg-form").requestSubmit(); }
    });
    $("msg-form").addEventListener("submit", async (e) => {
      e.preventDefault();
      if (isMutedMe()) { showToast(myBlockMessage(), "error"); return; }
      const content = $("msg-input").value.trim();
      if (!content) return;
      $("msg-input").value = "";
      $("msg-input").style.height = "auto";
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
    const msgs = data || [];
    const rows = [];
    let lastDay = "";
    let prevSender = null;
    msgs.forEach((m, i) => {
      const day = dayKey(m.created_at);
      if (day !== lastDay) {
        rows.push(`<div class="msg-day"><span>${esc(dayLabel(m.created_at))}</span></div>`);
        lastDay = day;
        prevSender = null;
      }
      const mine = m.sender_id === me;
      const grouped = prevSender === m.sender_id;
      const next = msgs[i + 1];
      const showWhen = !next || next.sender_id !== m.sender_id || dayKey(next.created_at) !== day;
      const other = profilesById[m.sender_id];
      const avHtml = mine ? "" : grouped
        ? `<span class="msg-avatar msg-avatar-spacer"></span>`
        : other?.avatar_url
          ? `<img class="msg-avatar" src="${esc(other.avatar_url)}" alt="">`
          : `<span class="msg-avatar msg-avatar-letter">${esc((other?.username || "?").charAt(0).toUpperCase())}</span>`;
      rows.push(`
      <div class="msg-row${mine ? " mine" : ""}${grouped ? " grp" : ""}">
        ${avHtml}
        <div class="msg-col">
          <div class="msg-bubble" title="${esc(fmtDate(m.created_at))}">${esc(m.content)}</div>
          ${showWhen ? `<div class="msg-when">${esc(fmtTime(m.created_at))}</div>` : ""}
        </div>
      </div>`);
      prevSender = m.sender_id;
    });
    list.innerHTML = rows.join("") || `<p class="empty">${esc(t("msg.thread_empty"))}</p>`;
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
  // Couleur d'accent personnelle enregistrée dans le profil
  if (session?.user) {
    try {
      const { data } = await supabase.from("profiles").select("accent_color").eq("id", session.user.id).maybeSingle();
      if (data?.accent_color) {
        applyAccent(data.accent_color);
        const picker = $("accent-picker");
        if (picker) picker.value = data.accent_color;
        try { localStorage.setItem("mm_accent", data.accent_color); } catch { /* stockage indisponible */ }
      }
    } catch { /* silencieux */ }
  }
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
