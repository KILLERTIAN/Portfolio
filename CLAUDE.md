# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build Commands

- `npm run dev` - Start development server with Turbopack on http://localhost:3000
- `npm run build` - Create production build
- `npm run start` - Start production server
- `npm run lint` - Run ESLint with Next.js core-web-vitals and TypeScript rules

## Tech Stack

- **Next.js 15** with App Router and Turbopack
- **React 19** with TypeScript
- **Tailwind CSS v4** with CSS-based configuration (no tailwind.config file)
- **shadcn/ui** components using "new-york" style
- **Framer Motion** for animations
- **GSAP** for advanced animations
- **Lucide React** for icons

## Architecture

### Project Structure

```
src/
  app/
    page.tsx         # Main portfolio page (single-page application)
    layout.tsx       # Root layout with Geist fonts and dark theme
    globals.css      # Tailwind v4 CSS with CSS variables for theming
  components/
    ui/              # shadcn/ui components (button, card, tabs, etc.)
    navbar.tsx
    experience-section.tsx
    projects-section.tsx
    skills-section.tsx
    contact-section.tsx
    footer.tsx
  lib/
    utils.ts         # `cn()` utility for merging Tailwind classes
```

### Key Patterns

- **Single-page portfolio**: All content rendered in `src/app/page.tsx` with section components
- **Dark theme only**: `html` element has `className="dark"` in layout.tsx
- **CSS Variables**: Colors defined via CSS variables in globals.css (e.g., `--background`, `--foreground`)
- **Class merging**: Always use `cn()` from `@/lib/utils` for conditional Tailwind classes
- **Path aliases**: Use `@/` prefix for imports (e.g., `@/components/ui/button`)

### shadcn/ui Components

Components are managed via `components.json`. Use the shadcn CLI to add new components:
```bash
npx shadcn add <component-name>
```

Currently installed: avatar, button, card, hover-card, sheet, tabs

### Styling

- Tailwind CSS v4 uses CSS-based configuration in `globals.css`
- No `tailwind.config.ts` file - configuration is in CSS
- `tw-animate-css` provides animation utilities
- `@tailwindcss/aspect-ratio` plugin is installed
