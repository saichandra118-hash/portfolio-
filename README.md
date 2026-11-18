# Premium Developer Portfolio – Adigoppula Saichandra

A modern, responsive, and personal developer portfolio built for **Adigoppula Saichandra**, a Computer Science & Engineering student specializing in **Artificial Intelligence & Machine Learning** at **Dr. M.G.R. Educational and Research Institute, Chennai**.

---

## 🌟 Key Highlights & Design Direction

- **Deep Charcoal / Dark Aesthetic**: Near-black canvas (`#0B0D12`) accented with Electric Blue (`#3B82F6`) and Violet (`#8B5CF6`).
- **Typography**: Space Grotesk for bold headers, Inter for crisp, readable body text, and JetBrains Mono for code elements.
- **Glassmorphism**: Translucent cards with subtle borders (`backdrop-blur-xl`), soft glowing gradients, and smooth hover elevation.
- **Interactive Particle & Neural Background**: HTML5 canvas rendering soft, connected nodes that gently react to mouse movement.
- **Scroll Reading Progress**: Top indicator bar tracking reading depth.
- **Interactive Modals**:
  - **Resume Viewer Modal**: Full CV with print and text export simulation.
  - **Live AI Screener Simulator**: In-browser simulator demonstrating the *AI-Based Resume Screening System* (Parsing, Skill Extraction, JD Vector Matching, and Ranking).
  - **Social Links Configurator**: Editable placeholders for GitHub and LinkedIn without inventing unverified URLs.
  - **Project URL Configurator**: Editable placeholder modal for project repository links.

---

## 📂 Project Structure

```
saichandra-portfolio/
├── index.html                  # HTML entry point with Google Fonts (Space Grotesk & Inter)
├── tailwind.config.js          # Custom colors, fonts, shadows, and animations
├── postcss.config.js           # PostCSS configuration
├── package.json                # React 19, Framer Motion, Lucide icons, Canvas Confetti
└── src/
    ├── main.jsx                # React app mount
    ├── App.jsx                 # Master page orchestration & modal states
    ├── index.css               # Tailwind directives, custom glass utilities, scrollbar
    ├── data/
    │   └── portfolioData.js    # Verified profile data, academics, skills, & copy
    └── components/
        ├── BackgroundEffects.jsx # Interactive particle neural canvas & ambient orbs
        ├── ScrollProgress.jsx    # Reading progress bar
        ├── Navbar.jsx            # Sticky glassmorphic navbar with mobile drawer
        ├── Hero.jsx              # Impressive first-screen experience & 3D AI visual
        ├── About.jsx             # Story, education badge, 3 metric cards (8.5 CGPA)
        ├── Skills.jsx            # Technical skills organized into verified categories
        ├── Projects.jsx          # AI-Based Resume Screening System featured card
        ├── Education.jsx         # Modern vertical timeline (Dr. M.G.R. University)
        ├── SoftSkills.jsx        # 6 core competencies with custom icons
        ├── Languages.jsx         # English, Telugu, Hindi minimal cards
        ├── Contact.jsx           # Form, direct email/phone copy, confetti celebration
        ├── Footer.jsx            # "Designed & Developed by Adigoppula Saichandra"
        ├── Icons.jsx             # SVG icons (GithubIcon, LinkedinIcon)
        ├── ResumeModal.jsx       # Executive CV viewer & download
        ├── AiDemoModal.jsx       # Interactive NLP resume screening demo
        ├── SocialLinksModal.jsx  # Configurable profile placeholders
        └── ProjectUrlModal.jsx   # Configurable project repository link
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)
- npm or pnpm

### Running Locally
```bash
# Navigate to the project directory
cd saichandra-portfolio

# Install dependencies (if not already installed)
npm install

# Start the Vite development server
npm run dev

# Or test the production build
npm run build
npm run preview
```

---

## ⚙️ Customization & Live Links

All personal details, project descriptions, and academic records are centralized in [portfolioData.js](file:///C:/Users/saich/.gemini/antigravity/scratch/saichandra-portfolio/src/data/portfolioData.js).

When ready to link your live GitHub repository or LinkedIn profile:
1. Open [portfolioData.js](file:///C:/Users/saich/.gemini/antigravity/scratch/saichandra-portfolio/src/data/portfolioData.js)
2. Update the `socialPlaceholders` and `featuredProject.projectUrlPlaceholder` values with your actual URLs.
3. Alternatively, click **"Configure profile links"** or **"Edit Links"** directly on the website to save them in your browser via `localStorage`!
