# 🚀 Setup Guide - Gutenberg Book Catalog

Complete step-by-step guide to get the application running on your machine.

## Prerequisites Check

Before starting, ensure you have:

```bash
# Check Node.js version (should be 18+)
node --version

# Check npm version
npm --version
```

If Node.js is not installed, download from: https://nodejs.org/

## Step-by-Step Setup

### 1. Extract/Clone the Project

If you received a ZIP file:
```bash
unzip gutenberg-app.zip
cd gutenberg-app
```

If cloning from Git:
```bash
git clone <repository-url>
cd gutenberg-app
```

### 2. Install Dependencies

Choose your preferred package manager:

#### Using npm (recommended):
```bash
npm install
```

#### Using yarn:
```bash
yarn install
```

#### Using pnpm:
```bash
pnpm install
```

**Installation time**: ~2-3 minutes depending on your internet speed.

### 3. Start the Development Server

```bash
npm run dev
```

You should see output like:
```
  VITE v5.0.11  ready in 324 ms

  ➜  Local:   http://localhost:3000/
  ➜  Network: use --host to expose
  ➜  press h to show help
```

The application will automatically open in your default browser at `http://localhost:3000`

### 4. Verify Everything Works

Once the app opens, you should see:
- ✅ Homepage with 7 genre buttons
- ✅ Click any genre to see books
- ✅ Search bar working
- ✅ Infinite scroll as you scroll down
- ✅ Click any book to open it in a new tab

## Building for Production

### 1. Create Production Build

```bash
npm run build
```

This creates an optimized build in the `dist/` folder.

### 2. Preview Production Build Locally

```bash
npm run preview
```

Opens the production build at `http://localhost:4173`

### 3. Deploy

The `dist/` folder contains all files needed for deployment. You can deploy to:

- **Vercel**: `vercel deploy`
- **Netlify**: Drag `dist/` folder to Netlify
- **GitHub Pages**: Copy `dist/` to gh-pages branch
- **Any static host**: Upload `dist/` contents

## Folder Structure Explained

```
gutenberg-app/
│
├── src/                      # Source code
│   ├── components/           # Reusable UI components
│   │   ├── BookCard/         # Individual book display
│   │   ├── GenreCard/        # Genre selection buttons
│   │   ├── SearchBar/        # Search input component
│   │   └── Loading/          # Loading spinner
│   │
│   ├── pages/                # Main page components
│   │   ├── Home/             # Homepage with genres
│   │   └── Books/            # Books list with search
│   │
│   ├── hooks/                # Custom React hooks
│   │   ├── useDebounce.ts    # Debounced values
│   │   └── useInfiniteScroll.ts  # Infinite scroll logic
│   │
│   ├── services/             # External services
│   │   └── api.service.ts    # API calls to Gutendex
│   │
│   ├── store/                # State management
│   │   └── bookStore.ts      # Zustand store for books
│   │
│   ├── types/                # TypeScript definitions
│   │   └── book.types.ts     # Book-related types
│   │
│   ├── utils/                # Helper functions
│   │   ├── bookUtils.ts      # Book formatting utilities
│   │   └── constants.ts      # App constants
│   │
│   ├── styles/               # Global styles
│   │   └── global.css        # CSS variables & base styles
│   │
│   ├── App.tsx               # Main app with routing
│   └── main.tsx              # Entry point
│
├── public/                   # Static assets
│   └── book-icon.svg         # Favicon
│
├── index.html                # HTML template
├── package.json              # Dependencies
├── tsconfig.json             # TypeScript config
├── vite.config.ts            # Vite config
└── README.md                 # Documentation
```

## Common Issues & Solutions

### Issue: Port 3000 already in use

**Solution**: Change the port in `vite.config.ts`:
```typescript
server: {
  port: 3001, // Change to any available port
}
```

### Issue: Module not found errors

**Solution**: Delete node_modules and reinstall:
```bash
rm -rf node_modules package-lock.json
npm install
```

### Issue: TypeScript errors

**Solution**: Ensure TypeScript is installed:
```bash
npm install -D typescript@latest
```

### Issue: Styles not loading

**Solution**: Check that CSS imports in components are correct and CSS modules are named `*.module.css`

### Issue: API not responding

**Solution**: Check internet connection. The app uses `https://gutendex.com/books` which must be accessible.

## Development Commands

### Run Development Server
```bash
npm run dev
```
- Hot module replacement enabled
- Opens at http://localhost:3000
- Auto-refreshes on file changes

### Build for Production
```bash
npm run build
```
- Creates optimized bundle
- Output in `dist/` folder
- Minified and tree-shaken

### Preview Production Build
```bash
npm run preview
```
- Serves production build locally
- Tests production configuration
- Opens at http://localhost:4173

### Lint Code
```bash
npm run lint
```
- Checks TypeScript and React code
- Reports errors and warnings
- Enforces code quality

## Environment Configuration

The application doesn't require environment variables. All configuration is in the code:

- **API Base URL**: `src/services/api.service.ts`
- **App Constants**: `src/utils/constants.ts`
- **Styling Variables**: `src/styles/global.css`

To change the API endpoint:
```typescript
// src/services/api.service.ts
private baseURL = 'https://gutendex.com'; // Change this
```

## Performance Optimization Features

The app includes several optimizations out of the box:

1. **Virtual Scrolling** - Only renders visible items
2. **Code Splitting** - Separate bundles for vendors
3. **Lazy Loading** - Images load on demand
4. **Debounced Search** - Reduces API calls
5. **Memoization** - Prevents unnecessary re-renders

## Browser Support

Supports all modern browsers:
- ✅ Chrome/Edge (last 2 versions)
- ✅ Firefox (last 2 versions)
- ✅ Safari (last 2 versions)
- ⚠️ IE11 not supported

## Testing the Application

### Manual Testing Checklist

**Homepage**:
- [ ] All 7 genre cards displayed
- [ ] Hover effects work on cards
- [ ] Clicking genre navigates to books page
- [ ] Footer text and link visible

**Books Page**:
- [ ] Genre name shows in back button
- [ ] Search bar accepts input
- [ ] Books load on page open
- [ ] Infinite scroll loads more books
- [ ] Book cards have cover images
- [ ] Clicking book opens in new tab
- [ ] Back button returns to homepage
- [ ] Loading states show correctly
- [ ] Empty state shows when no results

**Search Functionality**:
- [ ] Search updates after typing stops
- [ ] Results filter by search term
- [ ] Genre filter maintained during search
- [ ] Clear button removes search
- [ ] Loading indicator during search

**Responsive Design**:
- [ ] Works on mobile (< 768px)
- [ ] Works on tablet (768px - 1024px)
- [ ] Works on desktop (> 1024px)
- [ ] Touch interactions work on mobile

## Customization Guide

### Change Colors

Edit CSS variables in `src/styles/global.css`:
```css
:root {
  --color-accent-primary: #c85a3f;  /* Main accent color */
  --color-bg-primary: #faf8f5;      /* Background color */
  /* ... more variables */
}
```

### Change Fonts

Update in `index.html` and `src/styles/global.css`:
```css
:root {
  --font-display: 'Your Display Font', serif;
  --font-body: 'Your Body Font', sans-serif;
}
```

### Add New Genre

Edit `src/utils/constants.ts`:
```typescript
export const GENRES: Genre[] = [
  // ... existing genres
  {
    id: 'science',
    label: 'SCIENCE',
    icon: '🔬',
    topic: 'science',
    description: 'Scientific works and discoveries',
  },
];
```

### Modify API Behavior

Edit `src/services/api.service.ts`:
```typescript
async fetchBooks(page: number = 1, filters: SearchFilters = {}) {
  // Customize query parameters here
  const params = { /* ... */ };
}
```

## Next Steps

After setup is complete:

1. **Explore the Code**: Start with `src/App.tsx` and follow the imports
2. **Read Type Definitions**: Check `src/types/book.types.ts` for data structures
3. **Understand State Management**: Review `src/store/bookStore.ts`
4. **Study Components**: Look at component structure in `src/components/`
5. **Review API Service**: See how API calls work in `src/services/api.service.ts`

## Getting Help

If you encounter issues:

1. Check this guide's troubleshooting section
2. Review the main README.md
3. Check browser console for errors (F12)
4. Verify internet connection for API access
5. Ensure all dependencies are installed correctly

## Additional Resources

- **React Documentation**: https://react.dev
- **TypeScript Handbook**: https://www.typescriptlang.org/docs/
- **Vite Guide**: https://vitejs.dev/guide/
- **Zustand Docs**: https://docs.pmnd.rs/zustand/
- **Gutendex API**: https://gutendex.com

---

**Setup Time**: ~5-10 minutes including dependency installation

**Happy Coding! 📚**
