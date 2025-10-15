# Sashanka's Portfolio Website

A modern, responsive portfolio website built with Next.js 15, React 19, and Tailwind CSS. This portfolio showcases my skills, projects, experience, and education in an elegant and interactive design.

## 🚀 Features

- **Modern Design**: Clean, professional interface with smooth animations
- **Responsive Layout**: Optimized for desktop, tablet, and mobile devices
- **Interactive Navigation**: Smooth scrolling with active section highlighting
- **Dark/Light Theme**: Theme switching capability with next-themes
- **Component-Based Architecture**: Modular design with reusable components
- **Performance Optimized**: Built with Next.js 15 for optimal performance
- **Accessibility**: WCAG compliant with proper semantic HTML

## 🛠️ Tech Stack

- **Framework**: Next.js 15.2.4
- **Frontend**: React 19
- **Styling**: Tailwind CSS 3.4.17
- **UI Components**: Radix UI primitives
- **Icons**: Lucide React
- **Animations**: Tailwind CSS Animate
- **Form Handling**: React Hook Form with Zod validation
- **Charts**: Recharts
- **Carousel**: Embla Carousel & Swiper
- **TypeScript**: Full type safety

## 📁 Project Structure

```
├── app/                    # Next.js App Router
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── projects/          # Projects page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # Reusable UI components
├── hooks/                 # Custom React hooks
├── lib/                   # Utility functions
├── public/                # Static assets
├── styles/                # Additional stylesheets
└── components.json        # shadcn/ui configuration
```

## 🎨 Sections

The portfolio includes the following sections:

- **Hero Section**: Introduction and call-to-action
- **About**: Personal background and summary
- **Skills**: Technical skills and competencies
- **Projects**: Showcase of completed projects
- **Experience**: Professional work experience
- **Education**: Academic background
- **Contact**: Contact information and form

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio-website
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🎨 Customization

### Styling
- Modify `tailwind.config.ts` for custom theme configuration
- Update `app/globals.css` for global styles
- Component-specific styles are handled with Tailwind classes

### Content
- Update personal information in respective component files
- Add your projects, skills, and experience data
- Replace placeholder images in the `public/` directory

### Theme
The website supports light/dark themes. Theme configuration can be found in:
- `components/theme-provider.tsx` (if exists)
- Theme toggle component in navigation

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🔧 Dependencies

### Core Dependencies
- **Next.js**: React framework for production
- **React**: UI library
- **Tailwind CSS**: Utility-first CSS framework
- **TypeScript**: Type safety

### UI Components
- **Radix UI**: Accessible component primitives
- **Lucide React**: Icon library
- **shadcn/ui**: Pre-built component library

### Additional Libraries
- **React Hook Form**: Form handling
- **Zod**: Schema validation
- **Recharts**: Chart components
- **Framer Motion**: Animations (if used)

## 📄 License

This project is for personal use. Feel free to use it as inspiration for your own portfolio.

## 🤝 Contributing

This is a personal portfolio project, but suggestions and feedback are welcome!

## 📞 Contact

- **Email**: [Your Email]
- **LinkedIn**: [Your LinkedIn]
- **GitHub**: [Your GitHub]
- **Website**: [Your Website URL]

---

Built with ❤️ using Next.js and Tailwind CSS
