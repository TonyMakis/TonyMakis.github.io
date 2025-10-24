# Tony Makis Portfolio

A modern, neobrutalism-styled portfolio website built with Next.js, TypeScript, and shadcn/ui components. This site fetches and displays GitHub repository information in a bold, colorful design.

## Features

- 🎨 **Neobrutalism Design**: Bold colors, thick borders, and sharp shadows
- ⚡ **Next.js 14**: Latest React framework with App Router
- 🎯 **TypeScript**: Full type safety throughout the application
- 🧩 **shadcn/ui**: Modern, accessible UI components
- 📊 **Interactive Charts**: Commit data visualization with Chart.js
- 🎨 **Tailwind CSS**: Utility-first CSS framework
- 📱 **Responsive Design**: Works on all device sizes

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS + Custom Neobrutalism Classes
- **UI Components**: shadcn/ui + Radix UI primitives
- **Charts**: Chart.js + react-chartjs-2
- **Icons**: Lucide React
- **Deployment**: GitHub Pages

## Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   # or
   yarn install
   ```

2. **Run the development server**:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

3. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run export` - Export static site for GitHub Pages

## Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles with neobrutalism theme
│   ├── layout.tsx         # Root layout component
│   └── page.tsx          # Home page component
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   ├── project-card.tsx  # Project card component
│   └── project-accordions.tsx # Project details accordion
└── lib/                  # Utility functions
    ├── data-fetch.ts     # GitHub API integration
    ├── data-formatting.ts # Data transformation utilities
    └── utils.ts          # General utilities
```

## Design System

The site uses a custom neobrutalism design system with:

- **Colors**: Bold gradients (purple → pink → red background)
- **Cards**: White background with thick black borders
- **Shadows**: Sharp, offset shadows (`shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]`)
- **Typography**: Bold, uppercase headings with drop shadows
- **Buttons**: Yellow accent with black borders and hover effects

## Deployment

This project is configured for GitHub Pages deployment:

1. Build the project: `npm run build`
2. The static files are generated in the `out/` directory
3. Deploy to GitHub Pages using the configured settings

## Contributing

Feel free to submit issues and enhancement requests!
