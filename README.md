# DevEvoke — Agence Digitale Spécialisée dans le Secteur Médico-Social

Site officiel et plateforme web de **[DevEvoke](https://www.devevoke.com)**, agence numérique française spécialisée dans la conception de logiciels métiers sur-mesure, d'applications web et mobiles, de solutions SaaS (dont **[Floticar](https://www.devevoke.com/realisations/floticar)**) et dans l'automatisation des processus pour les **associations gestionnaires** et **établissements sociaux et médico-sociaux (ESMS)** : IME, DITEP, SESSAD, ESAT, EHPAD, MAS et FAM.

---

## 🛠 Stack Technique

- **Framework :** [Next.js 16](https://nextjs.org/) (App Router, Turbopack, génération statique SSG & routes API)
- **UI & Composants :** [React 19](https://react.dev/), [TypeScript 6](https://www.typescriptlang.org/), [Tailwind CSS 4](https://tailwindcss.com/), [Lucide React](https://lucide.dev/), [Motion](https://motion.dev/)
- **Formulaires & Validation :** `react-hook-form`, `zod` (validation stricte côté client et côté serveur)
- **Système d'E-mails Transactionnels :**
  - Templates HTML/texte avec `@react-email/components`
  - Transport principal via **Resend** (`resend`)
  - Transport de secours automatique (fallback) via **Nodemailer** (`nodemailer` SMTP)
  - Vérification B2B anti-spam et contrôle des adresses professionnelles via **Hunter Email Verifier** (avec cache mémoire condensé en SHA-256 sans stockage d'e-mail en clair)
- **Sécurité Applicative :** Honeypot anti-bot, Rate Limiting par IP et par type de formulaire, protection anti-injection CRLF, journalisation d'audit anonymisée (hachage IP)
- **Tests & Qualité :** Suites de tests unitaires et d'intégration (`tsx` + `node:assert`), tests End-to-End avec **Playwright** (`@playwright/test`), ESLint 9 & Prettier

---

## 📁 Architecture du Projet

```text
├── public/
│   ├── images/                  # Visuels statiques (accueil, solutions, diagnostic, à propos)
│   └── templates/               # 16 démonstrateurs HTML interactifs dédiés au secteur santé & médico-social
├── src/
│   ├── app/
│   │   ├── (pages)/             # Pages publiques et routes métier (App Router)
│   │   │   ├── agence-digitale-medico-social/
│   │   │   ├── developpement-logiciel-medico-social/
│   │   │   ├── solutions-medico-social/ (associations, ime, sessad, esat, ehpad)
│   │   │   ├── services/, developpement-web/, application-mobile/, developpement-saas/
│   │   │   ├── solutions-metier/, automatisation/, securite-et-conformite/
│   │   │   ├── realisations/ (et étude de cas Floticar), logiciel-gestion-vehicules-medico-social/
│   │   │   ├── diagnostic-numerique/, templates/, tarifs/, a-propos/, contact/
│   │   │   └── blog/ (liste et pages dynamiques [slug] générées statiquement)
│   │   ├── api/
│   │   │   ├── contact/         # Endpoint unifié : contact, devis, démo et diagnostic numérique
│   │   │   └── newsletters/     # Endpoint d'inscription à la veille numérique médico-sociale
│   │   ├── layout.tsx           # Layout racine, métadonnées globales et Schema.org
│   │   ├── page.tsx             # Page d'accueil
│   │   ├── robots.ts            # Configuration robots.txt
│   │   └── sitemap.ts           # Génération dynamique du sitemap XML (pages piliers + 18 articles)
│   ├── components/              # Composants UI et sections par domaine fonctionnel
│   ├── data/
│   │   ├── data.ts              # Données structurées des services, projets et FAQ
│   │   ├── dataBlog.ts          # Base éditoriale des 18 articles spécialisés (santé & médico-social)
│   │   ├── dataSlideDevis.ts    # Configuration du simulateur de devis interactif
│   │   └── typeFile.ts          # Interfaces TypeScript des données
│   ├── emails/                  # Registre et templates React Email + orchestrateur d'envoi Resend/SMTP
│   ├── images/                  # Assets optimisés importés statiquement (dont les 18 couvertures WebP du blog)
│   ├── lib/
│   │   ├── email/               # Configuration SMTP, transporteur Nodemailer et vérification Hunter B2B
│   │   ├── forms/               # Schémas Zod partagés (contact, devis, démo, diagnostic, newsletter)
│   │   ├── security/            # Rate limiter, honeypot, sanitization CRLF, références et logger d'audit
│   │   └── validation/          # Règles de validation des adresses e-mail professionnelles B2B
│   └── utils/                   # Utilitaires (génération de slugs SEO, etc.)
└── tests/
    ├── unit/                    # Tests unitaires de validation d'e-mails professionnels et intégration Hunter
    ├── integration/             # Tests d'intégration des routes API (/api/contact, /api/newsletters)
    └── e2e/                     # Tests Playwright (navigation, formulaires, modales, accessibilité, mobile)
```

---

## ⚙️ Installation & Variables d'Environnement

### 1. Prérequis

- **Node.js** `>= 20.x`
- **npm** `>= 10.x`

### 2. Installation des dépendances

```bash
npm install
```

### 3. Configuration de l'environnement

Copiez le modèle [.env.example](file:///Users/bouciffaradji/Documents/Project/Dev/devevoke/.env.example) vers `.env.local` :

```bash
cp .env.example .env.local
```

Variables utilisées par l'application :

| Variable                               | Description                                                                        | Défaut / Exemple       |
| :------------------------------------- | :--------------------------------------------------------------------------------- | :--------------------- |
| `RESEND_API_KEY`                       | Clé API secrète Resend (laisser `re_placeholder` en local pour le mode simulation) | `re_placeholder`       |
| `EMAIL_FROM_NAME`                      | Nom d'expéditeur des e-mails transactionnels                                       | `DevEvoke`             |
| `EMAIL_FROM_ADDRESS`                   | Adresse d'expédition sur domaine vérifié                                           | `noreply@devevoke.com` |
| `DEVOKE_CONTACT_EMAIL`                 | Adresse interne recevant les notifications de formulaires                          | `contact@devevoke.com` |
| `HUNTER_API_KEY`                       | Clé API secrète serveur Hunter Email Verifier (validation B2B)                     | _(vide en dev)_        |
| `HUNTER_EMAIL_VERIFICATION_ENABLED`    | Active ou désactive la vérification serveur Hunter                                 | `true`                 |
| `HUNTER_EMAIL_VERIFICATION_TIMEOUT_MS` | Délai d'attente maximal pour l'appel API Hunter (en ms)                            | `10000`                |
| `HUNTER_MIN_SCORE`                     | Score minimal de délivrabilité exigé par Hunter (0–100)                            | `80`                   |
| `HUNTER_ALLOW_ACCEPT_ALL`              | Autorise ou refuse les domaines `accept_all`                                       | `false`                |
| `SMTP_HOST`                            | Serveur SMTP de secours (fallback automatique Nodemailer)                          | `smtp.hostinger.com`   |
| `SMTP_PORT`                            | Port SMTP (`465` active automatiquement SSL/TLS)                                   | `465`                  |
| `SMTP_USER`                            | Identifiant du compte SMTP de secours                                              | `contact@devevoke.com` |
| `SMTP_PASS`                            | Mot de passe du compte SMTP de secours                                             | _(secret)_             |
| `RATE_LIMIT_DISABLED`                  | Désactive le rate limiting (uniquement pour tests automatisés)                     | `false`                |
| `GA_TRACKING_ID`                       | Identifiant de flux Google Analytics 4                                             | `G-XXXXXXXXXX`         |

---

## 🚀 Commandes Disponibles

```bash
# Démarrer le serveur de développement (http://localhost:3000)
npm run dev

# Compiler le build de production (vérification TypeScript + génération statique des 57 routes)
npm run build

# Démarrer le serveur de production après un build
npm run start

# Exécuter les tests unitaires et d'intégration API
npm run test

# Exécuter uniquement les tests unitaires (validation B2B & Hunter)
npm run test:unit

# Exécuter uniquement les tests d'intégration (/api/contact & /api/newsletters)
npm run test:integration

# Exécuter les tests End-to-End Playwright
npm run test:e2e

# Vérifier le code avec ESLint et le formatage avec Prettier
npm run lint
npm run prettier:check
```

---

## 📄 Licence

Propriété exclusive de **DevEvoke** ([https://www.devevoke.com](https://www.devevoke.com)). Tous droits réservés.
