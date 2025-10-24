# Modern Portfolio - Adarsh Mishra

A sleek, modern, single-page portfolio built with Next.js 15, TypeScript, Tailwind CSS, shadcn/ui, and Framer Motion.

## 🚀 Features

- ✨ **Modern Design**: Clean, professional single-page layout
- 🌓 **Dark/Light Theme**: Smooth theme transitions with next-themes
- 🎨 **shadcn/ui Components**: Beautiful, accessible UI components
- 🎭 **Framer Motion**: Smooth animations and transitions
- 📱 **Fully Responsive**: Optimized for all devices
- ⚡ **Performance Optimized**: Built with Next.js 15 for optimal performance
- 🎯 **SEO Ready**: Meta tags and OpenGraph support
- 📝 **Form Validation**: Contact form with react-hook-form and Zod

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Animations**: Framer Motion
- **Theme**: next-themes
- **Form Handling**: react-hook-form + Zod
- **Icons**: React Icons, Lucide React

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd nextjs-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
nextjs-portfolio/
├── app/
│   ├── layout.tsx          # Root layout with theme provider
│   ├── page.tsx            # Main page with all sections
│   └── globals.css         # Global styles and theme variables
├── components/
│   ├── ui/                 # shadcn/ui components
│   ├── navbar.tsx          # Navigation with smooth scroll
│   ├── hero-section.tsx    # Hero section with typewriter
│   ├── about-section.tsx   # About section
│   ├── experience-section.tsx  # Experience timeline
│   ├── skills-section.tsx  # Skills showcase
│   ├── projects-section.tsx    # Projects grid
│   ├── contact-section.tsx     # Contact form
│   ├── footer.tsx          # Footer component
│   ├── scroll-progress.tsx # Scroll progress indicator
│   ├── theme-provider.tsx  # Theme provider wrapper
│   └── theme-toggle.tsx    # Dark/Light mode toggle
├── lib/
│   ├── utils.ts            # Utility functions
│   └── animations.ts       # Framer Motion variants
└── public/
    ├── fonts/              # Custom fonts
    └── images/             # Images and assets
```

## 🎨 Customization

### Colors
Modify the theme colors in `app/globals.css` under the `:root` and `.dark` selectors.

### Content
- Update personal information in component files
- Modify projects data in `components/projects-section.tsx`
- Update experience timeline in `components/experience-section.tsx`
- Customize skills in `components/skills-section.tsx`

### Animations
Adjust animation variants in `lib/animations.ts` to customize motion effects.

## 📄 License

MIT License - feel free to use this template for your own portfolio!

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 👤 Author

**Adarsh Mishra**
- GitHub: [@aadrsh26288](https://github.com/aadrsh26288)
- LinkedIn: [Adarsh Mishra](https://linkedin.com/in/adarsh-mishra)

---

Built with ❤️ using Next.js and TypeScript
