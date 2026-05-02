# Portfolio Website

Modern, responsive portfolio website for Hassan - Software Engineer & AI Researcher specializing in Edge-AI, Generative AI, and Full-Stack development.

## Features

✨ **Modern Design**
- Dark theme with gradient accents
- Fully responsive (mobile, tablet, desktop)
- Smooth animations and transitions
- Professional typography

🎯 **Sections**
- Hero section with strong headline
- About section with expertise showcase
- Featured projects showcase
- Contact section
- Navigation bar with smooth scrolling

⚙️ **Technology Stack**
- Next.js 16+ (App Router)
- TypeScript
- Tailwind CSS
- Responsive design

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies (already done)
npm install

# Start development server
npm run dev

# Open browser
# Visit http://localhost:3000
```

## Customization Guide

### 1. **Update Personal Information**

Edit `app/page.tsx`:

```typescript
// Update contact links
<a href="mailto:your-email@example.com" className="...">
  Email Me
</a>

// Update social links
<a href="https://linkedin.com/in/your-profile" target="_blank">
  LinkedIn
</a>
<a href="https://github.com/your-username" target="_blank">
  GitHub
</a>
```

### 2. **Add Your Projects**

In the projects array in `app/page.tsx`:

```typescript
const projects = [
  {
    name: "Project Name",
    description: "Brief description",
    technologies: ["Tech1", "Tech2", "Tech3"],
    github: "https://github.com/your-username/repo",
    demo: "https://deployed-project.com",
  },
  // Add more projects...
];
```

### 3. **Update About Section**

Replace placeholder text in the About Me section with your own professional summary.

### 4. **Customize Colors**

Edit Tailwind classes in `app/page.tsx`:
- `from-blue-400 to-purple-500` - Gradient colors
- `bg-blue-600` - Button backgrounds
- Modify any color utility class as needed

### 5. **Add Profile Photo**

1. Place image in `public/` folder (e.g., `public/profile.jpg`)
2. Add to About section:

```typescript
import Image from "next/image";

<Image 
  src="/profile.jpg" 
  alt="Profile" 
  width={200} 
  height={200}
  className="rounded-lg"
/>
```

## Deployment

### Option 1: Vercel (Recommended)

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import project
4. Deploy (automatic from main branch)

```bash
# OR use Vercel CLI
npm i -g vercel
vercel
```

### Option 2: Other Platforms

**Netlify:**
```bash
npm run build
# Deploy `out/` folder or connect GitHub
```

**GitHub Pages:**
```bash
npm run build
# Deploy with gh-pages package
```

## Project Structure

```
portfolio/
├── app/
│   ├── page.tsx          # Main portfolio page
│   ├── layout.tsx        # Root layout
│   └── globals.css       # Global styles
├── public/               # Static assets (images, etc)
├── package.json
└── tailwind.config.ts    # Tailwind configuration
```

## Build & Production

```bash
# Build for production
npm run build

# Start production server
npm start

# Check for TypeScript errors
npm run type-check

# Run linter
npm run lint
```

## Next Steps

1. **Update GitHub Profile Links** - Add your actual GitHub repository URLs
2. **Add LinkedIn URL** - Point to your LinkedIn profile
3. **Add Email** - Replace placeholder email
4. **Upload Project Screenshots** - Add to public folder and showcase
5. **Deploy to Vercel** - Make it live online
6. **Add Custom Domain** - Optional but recommended

## Tips

📌 Keep project descriptions concise and impactful
📌 Update technologies list for each project accurately
📌 Add real links to GitHub repos and deployed demos
📌 Keep the dark theme for a modern professional look
📌 Test on mobile devices

## Support

Need to modify? Edit `app/page.tsx` and save - changes auto-reload!

---

**Built with ❤️ using Next.js & Tailwind CSS**
