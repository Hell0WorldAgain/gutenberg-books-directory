# Gutenberg Project - Book Catalog Application

A modern, high-performance React application for browsing and searching Project Gutenberg's extensive book database. Built with TypeScript, Vite, and optimized with React Virtualization.

## 🚀 Features

### Core Functionality
- **Genre-based Navigation**: Browse books across 7 literary categories
- **Infinite Scroll**: Seamlessly load more content as you scroll
- **Real-time Search**: Debounced search with instant results
- **Smart Book Viewing**: Opens books in optimal format (HTML → PDF → TXT)
- **Virtualized Rendering**: Efficient rendering of large book lists
- **Responsive Design**: Beautiful UI on all screen sizes

### Performance Optimizations
- **React Window**: Virtual scrolling for thousands of books
- **Debounced Search**: 500ms delay prevents excessive API calls
- **Code Splitting**: Automatic chunk splitting with Vite
- **Lazy Loading**: Images load only when visible
- **Zustand State Management**: Lightweight and efficient state management
- **Axios Interceptors**: Centralized API error handling and request optimization

### Technical Highlights
- **TypeScript**: Full type safety throughout the application
- **Modular Architecture**: Clean separation of concerns
- **Custom Hooks**: Reusable logic for infinite scroll and debouncing
- **CSS Modules**: Scoped styling with no conflicts
- **Path Aliases**: Clean imports with @ alias
- **Framer Motion**: Smooth, performant animations

## 📁 Project Structure

```
gutenberg-app/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── BookCard/
│   │   │   ├── BookCard.tsx
│   │   │   └── BookCard.module.css
│   │   ├── GenreCard/
│   │   │   ├── GenreCard.tsx
│   │   │   └── GenreCard.module.css
│   │   ├── SearchBar/
│   │   │   ├── SearchBar.tsx
│   │   │   └── SearchBar.module.css
│   │   ├── Loading/
│   │   │   ├── Loading.tsx
│   │   │   └── Loading.module.css
│   │   └── index.ts
│   ├── pages/               # Page components
│   │   ├── Home/
│   │   │   ├── Home.tsx
│   │   │   └── Home.module.css
│   │   ├── Books/
│   │   │   ├── Books.tsx
│   │   │   └── Books.module.css
│   │   └── index.ts
│   ├── hooks/               # Custom React hooks
│   │   ├── useDebounce.ts
│   │   └── useInfiniteScroll.ts
│   ├── services/            # API services
│   │   └── api.service.ts
│   ├── store/               # State management
│   │   └── bookStore.ts
│   ├── types/               # TypeScript types
│   │   └── book.types.ts
│   ├── utils/               # Utility functions
│   │   ├── bookUtils.ts
│   │   └── constants.ts
│   ├── styles/              # Global styles
│   │   └── global.css
│   ├── App.tsx              # Main App component
│   ├── main.tsx             # Entry point
│   └── vite-env.d.ts        # Vite types
├── public/                  # Static assets
├── index.html               # HTML template
├── package.json             # Dependencies
├── tsconfig.json            # TypeScript config
├── tsconfig.node.json       # Node TypeScript config
├── vite.config.ts           # Vite configuration
└── .gitignore               # Git ignore file
```

## 🛠️ Technologies Used

### Core
- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server

### State & Data
- **Zustand** - State management
- **Axios** - HTTP client
- **React Router** - Routing

### UI & Animation
- **Framer Motion** - Animations
- **React Window** - Virtualization
- **CSS Modules** - Scoped styling

### API
- **Gutendex API** - Book data from Project Gutenberg

## 📦 Installation & Setup

### Prerequisites
- Node.js 18+ 
- npm or yarn or pnpm

### Step 1: Install Dependencies

```bash
# Using npm
npm install

# Using yarn
yarn install

# Using pnpm
pnpm install
```

### Step 2: Start Development Server

```bash
# Using npm
npm run dev

# Using yarn
yarn dev

# Using pnpm
pnpm dev
```

The application will open automatically at `http://localhost:3000`

### Step 3: Build for Production

```bash
# Using npm
npm run build

# Using yarn
yarn build

# Using pnpm
pnpm build
```

### Step 4: Preview Production Build

```bash
# Using npm
npm run preview

# Using yarn
yarn preview

# Using pnpm
pnpm preview
```

## 🎨 Design Philosophy

The application features a **warm, editorial design** inspired by literary archives and bookstores:

- **Typography**: Cormorant Garamond (serif, display) + Jost (sans-serif, body)
- **Color Palette**: Warm beige backgrounds with terracotta and amber accents
- **Spatial Design**: Generous whitespace with elegant proportions
- **Animations**: Subtle, purposeful transitions that enhance UX

This aesthetic creates a sophisticated, bookish atmosphere that respects the literary content while providing a modern browsing experience.

## 🔧 Configuration

### Path Aliases
The project uses path aliases for cleaner imports:

```typescript
import { BookCard } from '@/components';
import { useBookStore } from '@/store/bookStore';
import { formatAuthors } from '@/utils/bookUtils';
```

### Environment Variables
No environment variables required. The API URL is configured in `src/services/api.service.ts`.

## 🚀 Performance Features

### 1. Virtual Scrolling with React Window
Only renders visible books in the viewport, dramatically improving performance with large lists.

### 2. Debounced Search
Search input is debounced by 500ms to prevent excessive API calls while typing.

### 3. Intersection Observer
Efficient infinite scroll implementation using native browser API.

### 4. Code Splitting
Vite automatically splits code into optimized chunks:
- `react-vendor`: React core libraries
- `ui-vendor`: UI libraries (Framer Motion, React Window)

### 5. Image Lazy Loading
Book covers load only when they enter the viewport.

### 6. Optimistic State Updates
UI updates immediately while API calls happen in the background.

## 📖 API Usage

### Gutendex API
Base URL: `https://gutendex.com/books`

#### Query Parameters Used:
- `page`: Pagination (1-based)
- `mime_type=image/`: Only books with covers
- `topic`: Genre filter (fiction, drama, etc.)
- `search`: Title or author search

#### Example Request:
```
GET https://gutendex.com/books?page=1&mime_type=image/&topic=fiction&search=dickens
```

## 🎯 Key Features Explained

### Smart Format Selection
When opening a book, the app automatically selects the best viewable format:

1. **HTML** (preferred) - Best for reading in browser
2. **PDF** (fallback) - Good for printing/saving
3. **TXT** (fallback) - Plain text version
4. **Alert** - Shows error if no format available

Automatically filters out `.zip` files from all formats.

### Infinite Scroll
- Triggers when user scrolls near bottom
- Fetches next page automatically
- Prevents duplicate requests
- Shows loading indicator
- Gracefully handles end of results

### Search Behavior
- Maintains genre filter while searching
- Searches both title AND author
- Debounced to prevent API spam
- Resets pagination on new search
- Shows loading state during fetch

## 🐛 Troubleshooting

### Port Already in Use
Change port in `vite.config.ts`:
```typescript
server: {
  port: 3001, // Change this
}
```

### Build Errors
Clear cache and reinstall:
```bash
rm -rf node_modules package-lock.json
npm install
```

### TypeScript Errors
Ensure all dependencies are installed and TypeScript version is 5.3+

## 📝 Best Practices Implemented

1. **TypeScript Strict Mode** - Full type safety
2. **Component Modularity** - Single responsibility principle
3. **Custom Hooks** - Reusable logic extraction
4. **CSS Modules** - Scoped styling, no conflicts
5. **Error Boundaries** - Graceful error handling
6. **Accessibility** - ARIA labels, keyboard navigation
7. **Performance** - Virtual scrolling, lazy loading
8. **Code Organization** - Clear folder structure
9. **State Management** - Centralized with Zustand
10. **API Layer** - Abstracted API calls

## 🔮 Future Enhancements

Potential improvements:
- Book details modal with full metadata
- Reading progress tracking
- Bookmark/favorites functionality
- Advanced filters (language, year, etc.)
- Dark mode toggle
- Offline support with service workers
- Social features (reviews, ratings)
- Export/share book lists

## 📄 License

This is a demonstration project. All book data is from the public domain courtesy of [Project Gutenberg](https://www.gutenberg.org/).

## 🙏 Credits

- **Book Data**: Project Gutenberg
- **API**: Gutendex
- **Fonts**: Google Fonts (Cormorant Garamond, Jost)

---

Built with ❤️ using React, TypeScript, and Vite
