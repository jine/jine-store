# Jine Store

A simple e-commerce storefront built with Next.js and the DummyJSON API.

## What's this?

This is a practice project for learning Next.js 15+ with App Router. It's a basic online store that fetches product data from [DummyJSON](https://dummyjson.com/) and displays it with search, sorting, and category filtering.

## Features

- **Product listing** with grid layout
- **Category filtering** - browse products by category
- **Search products** by title
- **Sort by price** (ascending/descending)
- **Limit selector** - choose how many products to show per page (10, 20, 30, 50, 100)
- **Like button** with local storage persistence
- **Responsive design** with Tailwind CSS
- **Server-side rendering** for SEO

## Tech Stack

- **Next.js 16** - React framework with App Router
- **React 19** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS v4** - Styling
- **Biome** - Linting and formatting
- **DummyJSON API** - Mock product data

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000
```

## Project Structure

```
app/                    # Next.js App Router pages
├── page.tsx           # Home page
├── products/page.tsx  # All products with filters
├── product/[slug]/    # Individual product page
├── category/[slug]/   # Category filter page
├── categories/page.tsx # Categories list
└── api/like/route.ts  # API route for likes

components/
├── ui/                # Reusable UI components (Button, LikeButton)
├── products/          # Product-related (ProductCard, ProductGrid, LimitSelect)
├── categories/        # Category grid
├── layout/            # Layout components (Navbar, Footer, Hero)
└── views/             # Page-specific views

lib/
├── types.ts           # TypeScript interfaces
└── functions.ts       # Data fetching functions
```

## API Integration

The app uses [DummyJSON Products API](https://dummyjson.com/docs/products) for:

- Fetching products with search, sort, and limit parameters
- Getting product categories
- Fetching single product details
- Filtering by category

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run Biome linter
- `npm run format` - Format code with Biome

## Notes

This is a learning project. The like feature stores data locally in the browser (localStorage) and uses a simple API route. No real backend or database.

Built by [Jim Nelin](https://github.com/jine) learning Next.js and React.
