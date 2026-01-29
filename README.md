# iCloud Fotos teilen - Anleitung

Eine moderne, mehrsprachige Website mit Schritt-für-Schritt-Anleitung zum Teilen von Fotos über iCloud in voller Qualität.

## 🎯 Projektziel

Viele Menschen wissen nicht, wie sie Fotos über iCloud teilen können, ohne Qualitätsverlust. Diese Website bietet eine einfache, visuelle Anleitung mit Screenshots und ausklappbaren Details.

## ✨ Features

- ✅ **Schritt-für-Schritt Anleitung** mit nummerierten Schritten
- ✅ **Dark Mode** mit automatischer System-Präferenz-Erkennung
- ✅ **Responsive Design** für Mobile und Desktop
- ✅ **Markdown-basierte Inhalte** (YAML) - einfach zu editieren
- ✅ **Ausklappbare Details** für zusätzliche Informationen
- 🔄 **Mehrsprachigkeit** (DE, EN, ES, FR) - in Planung
- 🔄 **Vergleichstabelle** iCloud vs. WhatsApp vs. WeTransfer - in Planung
- 🔄 **Screenshot-Integration** - in Planung

## 🛠️ Tech Stack

- **Next.js 16** (App Router) - React Framework mit SSR/SSG
- **TypeScript** - Type-Safety
- **Tailwind CSS 4** - Utility-First CSS Framework
- **next-themes** - Dark Mode Management
- **react-markdown** - Markdown Rendering
- **js-yaml** - YAML Content Parsing
- **remark-gfm** - GitHub Flavored Markdown Support

## 🚀 Schnellstart

### Voraussetzungen

- Node.js 18+ 
- npm oder yarn

### Installation

```bash
# Repository klonen
git clone https://github.com/christianphilie/icloud-photos-sharing-manual.git
cd icloud-photos-sharing-manual

# Dependencies installieren
npm install

# Development Server starten
npm run dev
```

Öffne [http://localhost:3000](http://localhost:3000) im Browser.

### Build für Production

```bash
npm run build
npm start
```

## 📁 Projektstruktur

```
icloud-photos-sharing-manual/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root Layout mit Theme Provider
│   ├── page.tsx           # Hauptseite
│   └── globals.css        # Globale Styles & Design System
├── components/            # React Komponenten
│   ├── ui/               # Wiederverwendbare UI-Komponenten
│   │   ├── Card.tsx
│   │   └── Button.tsx
│   ├── StepGuide.tsx     # Schritt-für-Schritt Anleitung
│   ├── ExpandableDetail.tsx
│   ├── Markdown.tsx      # Markdown Renderer
│   └── Header.tsx
├── content/              # Inhalte (YAML)
│   └── steps.yaml        # Anleitungsschritte
├── lib/                  # Utilities
│   └── content.ts        # Content Loading & Caching
└── public/               # Statische Assets
    └── screenshots/      # Screenshots (wird hinzugefügt)
```

## 📝 Inhalte bearbeiten

Die Anleitungsschritte werden in `content/steps.yaml` verwaltet. Einfach die YAML-Datei bearbeiten - Markdown wird unterstützt:

```yaml
steps:
  - number: 1
    title: "Schritt Titel"
    description: |
      **Fettgedruckter** Text und normale Beschreibung.
    details: |
      Ausklappbare Details mit:
      
      - Listen
      - Mehreren Absätzen
      - **Formatierung**
```

## 🗺️ Roadmap

### ✅ Abgeschlossen

- [x] Next.js Projekt Setup
- [x] Design-System (Tailwind CSS)
- [x] Dark Mode mit next-themes
- [x] Basis UI-Komponenten (Card, Button)
- [x] StepGuide Komponente
- [x] ExpandableDetail Komponente
- [x] Markdown-basierte Inhalte (YAML)
- [x] Content-Loading mit Caching
- [x] Responsive Design

### 🔄 In Arbeit

- [ ] Screenshots erstellen und integrieren
- [ ] ComparisonTable Komponente (iCloud vs. WhatsApp vs. WeTransfer)
- [ ] SEO Meta-Tags optimieren
- [ ] Accessibility verbessern (ARIA-Labels, Keyboard-Navigation)

### 📋 Geplant

- [ ] Mehrsprachigkeit (next-intl)
  - [ ] Deutsch (Basis)
  - [ ] Englisch
  - [ ] Spanisch
  - [ ] Französisch
- [ ] Screenshots für alle Sprachen (falls nötig)
- [ ] Performance-Optimierung
- [ ] Analytics Integration (optional)
- [ ] Open Graph Tags für Social Sharing

## 📄 License

MIT License - siehe [LICENSE](LICENSE) Datei

## 🤝 Contributing

Contributions sind willkommen! Bitte erstelle einen Issue oder Pull Request.

## 📧 Kontakt

Bei Fragen oder Anregungen: [Issue erstellen](https://github.com/dein-username/icloud-photos-sharing-manual/issues)

---

Made with ❤️ using Next.js and Tailwind CSS
