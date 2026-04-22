# Truffles & More Cafe

An artisan bakery and coffee house website built with React, Vite, and Tailwind CSS.

## Features

- **Hero Slider** - Auto-rotating slider with 4 slides showcasing bakery highlights
  - Slide 1: No background images, text centered/left-aligned
  - Slides 2-4: Background images with text centered/right-aligned
  - Smooth animations with directional text effects

- **Product Categories** - Grid display of cakes, macarons, cupcakes, pastries, chocolates, cookies, coffee, and premium cakes

- **About Section** - "The Quest for Perfection" with feature highlights (Volcanic Cocoa, Gold Standard, High-Altitude Brew)

- **Holiday Promo** - Limited edition seasonal offers

- **Customer Testimonials** - Reviews from satisfied customers

- **Newsletter Subscription** - Email signup for updates

- **Shopping Cart** - Add to cart functionality

- **Responsive Design** - Mobile-first approach with smooth animations using Framer Motion

## Tech Stack

- React.js
- Vite
- Tailwind CSS
- Framer Motion
- React Router
- Lucide React Icons

## Getting Started

```bash
npm install
npm run dev
```

## Project Structure

```
src/
├── components/     # Reusable components (Header, Footer, Cart)
├── context/      # React context (CartContext)
├── pages/       # Page components (Home, Products, About, Contact)
├── Images/      # Product images
└── assets/      # Static assets
```

## Implemented Tasks

1. Removed background images from first slider only
2. Fixed text animation direction (left for slide 1, right for others)
3. Fixed text transition overlap issues
4. Adjusted text alignment in hero section
5. Fixed animation speed for smooth transitions