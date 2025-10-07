# 🚀 Agustín Swirido - Portfolio Website

A modern, responsive portfolio website showcasing my skills, projects, and experience as a Junior Java Developer and Full Stack Developer. Built with Next.js, React, and Tailwind CSS, featuring a sleek dark theme with neon accents and smooth animations.

![Portfolio Preview](https://img.shields.io/badge/Status-Live-success?style=for-the-badge)
![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-18-blue?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38bdf8?style=for-the-badge&logo=tailwind-css)

## ✨ Features

- **🎨 Modern Design**: Dark theme with neon green (#00FF9D) and cyan blue (#00BFFF) accents
- **🌓 Theme Toggle**: Switch between dark and light modes with smooth transitions
- **📱 Fully Responsive**: Optimized for all devices from mobile to desktop
- **✨ Smooth Animations**: Scroll-triggered animations and interactive hover effects
- **🎯 Sections**:
  - Hero with animated typing effect
  - About Me with education details
  - Featured Projects showcase
  - Technical Skills grid
  - Certifications with status badges
  - Work Experience timeline
  - Contact form
  - Social links

## 🛠️ Tech Stack

### Frontend
- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **UI Library**: [React 18](https://react.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Components**: [shadcn/ui](https://ui.shadcn.com/)
- **Icons**: [Lucide React](https://lucide.dev/)

### Features
- **Animations**: Custom scroll reveal animations with Intersection Observer
- **Theme System**: Custom theme provider with localStorage persistence
- **Fonts**: JetBrains Mono (monospace) & Inter (sans-serif)

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm, yarn, or pnpm package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📦 Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure


```
portfolio/
├── app/
│   ├── layout.tsx          # Root layout with theme provider
│   ├── page.tsx            # Main page with all sections
│   └── globals.css         # Global styles and theme variables
├── components/
│   ├── hero.tsx            # Hero section with typing animation
│   ├── about.tsx           # About me section
│   ├── projects.tsx        # Featured projects showcase
│   ├── skills.tsx          # Technical skills grid
│   ├── experience.tsx      # Work experience & certifications
│   ├── contact.tsx         # Contact form
│   ├── footer.tsx          # Footer with social links
│   ├── theme-provider.tsx  # Theme context provider
│   ├── theme-toggle.tsx    # Theme toggle button
│   ├── scroll-reveal.tsx   # Scroll animation wrapper
│   ├── background-effects.tsx # Animated background
│   └── ui/                 # shadcn/ui components
├── public/                 # Static assets
└── README.md              # This file
```

## 🎨 Customization

### Colors

Edit the theme colors in `app/globals.css`:

```css
@theme inline {
  /* Dark Theme */
  --color-background: #000000;
  --color-foreground: #E6EDF3;
  --color-primary: #00FF9D;
  --color-secondary: #00BFFF;
  
  /* Light Theme */
  .light {
    --color-background: #FFFFFF;
    --color-foreground: #1A1A1A;
    /* ... */
  }
}
```

### Content

Update your personal information in the respective component files:
- **Hero**: `components/hero.tsx`
- **About**: `components/about.tsx`
- **Projects**: `components/projects.tsx`
- **Skills**: `components/skills.tsx`
- **Experience**: `components/experience.tsx`
- **Contact**: `components/contact.tsx`

## 📧 Contact

- **Email**: swiridoagustin123@gmail.com
- **LinkedIn**: [linkedin.com/in/agustin-swirido](https://linkedin.com/in/agustin-swirido)
- **GitHub**: [github.com/Swirius](https://github.com/Swirius)
- **Location**: Buenos Aires, Argentina

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Design inspiration from modern developer portfolios
- UI components from [shadcn/ui](https://ui.shadcn.com/)
- Icons from [Lucide](https://lucide.dev/)

---

**Made with ❤️ by Agustín Swirido**

*If you found this portfolio helpful, consider giving it a ⭐ on GitHub!*
