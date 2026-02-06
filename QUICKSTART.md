# ⚡ Quick Start Guide

Get the app running in 3 minutes!

## Prerequisites

- Node.js 18+ ([Download](https://nodejs.org/))
- A code editor (VS Code recommended)

## Installation (2 minutes)

```bash
# 1. Navigate to project
cd gutenberg-app

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev
```

That's it! Your browser will open to `http://localhost:3000`

## What You'll See

### Homepage
- 7 genre cards (Fiction, Drama, etc.)
- Click any genre to see books

### Books Page
- Grid of books with covers
- Search bar for filtering
- Infinite scroll (auto-loads more)
- Click any book to open it

## Key Commands

```bash
npm run dev      # Start dev server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Check code quality
```

## Project Structure (Quick Reference)

```
src/
├── components/    # UI components
├── pages/         # Home & Books pages
├── hooks/         # Custom React hooks
├── services/      # API integration
├── store/         # State management (Zustand)
├── types/         # TypeScript types
├── utils/         # Helper functions
└── styles/        # Global CSS
```

## Common Tasks

### Change API Endpoint
Edit `src/services/api.service.ts`:
```typescript
private baseURL = 'https://your-api.com';
```

### Add a New Genre
Edit `src/utils/constants.ts`:
```typescript
export const GENRES = [
  // ... existing genres
  {
    id: 'science',
    label: 'SCIENCE',
    icon: '🔬',
    topic: 'science',
    description: 'Scientific works',
  },
];
```

### Modify Colors
Edit `src/styles/global.css`:
```css
:root {
  --color-accent-primary: #your-color;
}
```

### Change Fonts
Update `index.html` Google Fonts link and `global.css`:
```css
:root {
  --font-display: 'Your Font', serif;
}
```

## Tech Stack (Quick Overview)

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Zustand** - State management
- **Axios** - API calls
- **Framer Motion** - Animations
- **React Router** - Navigation

## Key Features

✅ Genre-based browsing  
✅ Real-time search (debounced)  
✅ Infinite scroll loading  
✅ Smart book format selection  
✅ Responsive design  
✅ Fast performance  

## Performance Features

- Virtual rendering optimization
- Debounced search (500ms)
- Lazy image loading
- Code splitting
- Intersection Observer for scroll

## Troubleshooting

**Port in use?**
```bash
# Change port in vite.config.ts
server: { port: 3001 }
```

**Installation errors?**
```bash
rm -rf node_modules package-lock.json
npm install
```

**TypeScript errors?**
```bash
npm install -D typescript@latest
```

## Development Workflow

1. Start dev server: `npm run dev`
2. Make changes (auto-reloads)
3. Check types: `npm run lint`
4. Build: `npm run build`
5. Preview: `npm run preview`

## API Information

**Endpoint**: `https://gutendex.com/books`

**Query Parameters**:
- `page` - Pagination
- `topic` - Genre filter
- `search` - Title/author search
- `mime_type=image/` - Only books with covers

**Example**:
```
https://gutendex.com/books?page=1&topic=fiction&search=dickens&mime_type=image/
```

## File Locations

**Components**: `src/components/[Name]/[Name].tsx`  
**Styles**: `src/components/[Name]/[Name].module.css`  
**Pages**: `src/pages/[Name]/[Name].tsx`  
**Types**: `src/types/book.types.ts`  
**Store**: `src/store/bookStore.ts`  
**API**: `src/services/api.service.ts`  

## Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel deploy
```

### Netlify
```bash
npm run build
# Upload dist/ folder to Netlify
```

### GitHub Pages
```bash
npm run build
# Push dist/ to gh-pages branch
```

## Next Steps

1. ✅ Run the app
2. 📖 Read the full [README.md](./README.md)
3. 🏗️ Study [ARCHITECTURE.md](./ARCHITECTURE.md)
4. 🔧 Follow [SETUP_GUIDE.md](./SETUP_GUIDE.md)

## Need Help?

- Check browser console (F12) for errors
- Verify Node.js version: `node --version`
- Ensure internet connection (API access required)
- Review detailed guides in project root

## Keyboard Shortcuts (VS Code)

- `Cmd/Ctrl + B` - Toggle sidebar
- `Cmd/Ctrl + P` - Quick file open
- `Cmd/Ctrl + Shift + P` - Command palette
- `Cmd/Ctrl + \` - Split editor

---

**Time to first run**: ~3 minutes  
**Ready to deploy**: ~10 minutes with customization

Happy coding! 🚀
