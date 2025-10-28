# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This will be a search engine optimized product catalogue and ecommerce site for Markbass bass guitar amplifiers and bass guitars, built with Laravel API and NextJS. The site's closest market rival is https://orangeamps.com/ and so this site should follow similar design and layout patterns. Payment processing is to be handled by Stripe and Laravel Cashier, but some products are not available for direct sale and should link to an authorised UK dealer map powered by Leaflet instead.

## Development Commands

### Setup
```bash
# Backend (Laravel)
cd backend
composer install
cp .env.example .env
php artisan key:generate
php artisan migrate

# Frontend (NextJS)
cd frontend
npm install
```

### Building
```bash
# Backend (Laravel) - typically not needed for dev
cd backend
php artisan config:cache
php artisan route:cache

# Frontend (NextJS)
cd frontend
npm run build
```

### Testing
```bash
# Backend - Run all tests
cd backend
php artisan test

# Backend - Run a single test file
cd backend
php artisan test --filter=TestClassName

# Backend - Run tests in parallel
cd backend
php artisan test --parallel

# Frontend - Run all tests
cd frontend
npm test

# Frontend - Run tests in watch mode
cd frontend
npm test -- --watch
```

### Linting
```bash
# Backend - Laravel Pint
cd backend
./vendor/bin/pint

# Frontend - ESLint
cd frontend
npm run lint
```

### Running
```bash
# Backend - Laravel development server (port 8000)
cd backend
php artisan serve

# Frontend - NextJS development server (port 3000)
cd frontend
npm run dev

# Frontend - NextJS with Turbopack
cd frontend
npm run dev --turbopack
```

## Architecture

### Core Concepts
This is a monorepo containing two separate applications:

**Backend (`backend/`)**: Laravel 10 API-only application
- RESTful API following Laravel's MVC architecture
- Handles all business logic, database operations, and payment processing
- Uses Laravel Sanctum for API authentication
- Laravel Cashier integration for Stripe payment processing
- Deployment target: AWS Lightsail

**Frontend (`frontend/`)**: NextJS 16 application with TypeScript
- Server-side rendered React application
- Tailwind CSS for styling
- Consumes the Laravel API
- SEO-optimized for product catalogue
- Deployment target: Vercel

### Key Directories
- `backend/app/Http/Controllers` - API controllers serving JSON responses
- `backend/database/migrations` - Database schema including Cashier migrations
- `backend/routes/api.php` - API route definitions
- `frontend/app` - NextJS App Router pages and layouts
- `frontend/components` - React components (to be created)
- `frontend/lib` - Utility functions and API client (to be created)

### Important Dependencies
- **Laravel Cashier** (^16.0) - Stripe subscription billing integration
- **Laravel Sanctum** - API token authentication for SPA
- **NextJS** (16.x) - React framework with SSR/SSG
- **Tailwind CSS** - Utility-first CSS framework
- **TypeScript** - Type safety for frontend
- **Leaflet** - (To be added) Interactive map for dealer locations
- **Stripe** - Payment processing (via Cashier)

## Development Notes

### API Communication
- Frontend will communicate with backend API at `http://localhost:8000/api` during development
- Configure CORS in `backend/config/cors.php` to allow requests from `http://localhost:3000`
- Use environment variables for API URLs in production

### Database Setup
- Backend requires MySQL/PostgreSQL database configuration in `backend/.env`
- Run `php artisan migrate` after database configuration
- Cashier migrations are included for Stripe integration

### Environment Variables
- Backend: Configure database, Stripe keys, and app URL in `backend/.env`
- Frontend: Create `frontend/.env.local` with `NEXT_PUBLIC_API_URL` pointing to backend

### Product Types
- Some products are available for direct purchase (use Stripe/Cashier)
- Other products should display dealer locator (use Leaflet map)
- Product model should include a flag to determine display behavior
