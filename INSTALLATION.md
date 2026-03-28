# Installation Tutorial (Laravel + Inertia React + Vite + Fortify)

This is a step-by-step guide to install Laravel without a starter kit, then add Inertia with Vite + React (JSX), and install Fortify. It also lists which files are edited or added.

## Requirements

- PHP 8.3+ with required PHP extensions
- Composer
- Node.js 18+ and npm
- SQLite (default) or another supported database

## Step 1: Create a new Laravel project (no starter kit)

```bash
composer create-project laravel/laravel .
```

## Step 2: Install server-side packages

```bash
composer require inertiajs/inertia-laravel laravel/fortify
```

## Step 3: Publish Fortify configuration and stubs

```bash
php artisan vendor:publish --provider="Laravel\\Fortify\\FortifyServiceProvider"
```

This adds:

- config/fortify.php
- app/Providers/FortifyServiceProvider.php
- app/Actions/Fortify/\*
- database/migrations/\*\_add_two_factor_columns_to_users_table.php

## Step 4: Add Inertia middleware

```bash
php artisan inertia:middleware
```

This adds:

- app/Http/Middleware/HandleInertiaRequests.php

## Step 5: Install frontend dependencies (React + Inertia + Vite)

```bash
npm install react react-dom @inertiajs/react @inertiajs/core
npm install -D @vitejs/plugin-react
```

## Step 6: Configure Vite for React (JSX)

Edit:

- vite.config.js

Changes:

- Add @vitejs/plugin-react
- Change input to resources/js/app.jsx

## Step 7: Create the Inertia root view

Add:

- resources/views/app.blade.php

This file includes:

- @viteReactRefresh
- @vite('resources/js/app.jsx')
- @inertiaHead
- @inertia

## Step 8: Create the Inertia app entry

Add:

- resources/js/app.jsx

This file bootstraps Inertia, resolves pages, and renders the React app.

## Step 9: Register Inertia middleware in Laravel

Edit:

- bootstrap/app.php

Add the middleware to the web stack:

- App\Http\Middleware\HandleInertiaRequests::class

## Step 10: Register Fortify service provider

Edit:

- bootstrap/providers.php

Add:

- App\Providers\FortifyServiceProvider::class

## Step 11: Wire Fortify views to Inertia pages

Edit:

- app/Providers/FortifyServiceProvider.php

Add view callbacks:

- login, register, forgot password, reset password
- confirm password, two-factor challenge

## Step 12: Add routes for Inertia pages

Edit:

- routes/web.php

Add:

- / -> Welcome
- /home -> Dashboard (auth middleware)

## Step 13: Create Inertia pages

Add:

- resources/js/Pages/Welcome.jsx
- resources/js/Pages/Dashboard.jsx
- resources/js/Pages/Auth/Login.jsx
- resources/js/Pages/Auth/Register.jsx
- resources/js/Pages/Auth/ForgotPassword.jsx
- resources/js/Pages/Auth/ResetPassword.jsx
- resources/js/Pages/Auth/ConfirmPassword.jsx
- resources/js/Pages/Auth/TwoFactorChallenge.jsx

## Step 14: Configure environment and database

```bash
cp .env.example .env
php artisan key:generate
touch database/database.sqlite
php artisan migrate
```

## Step 15: Run the app

```bash
php artisan serve
npm run dev
```

## Step 16: Build for production

```bash
npm run build
```

## File Changes Summary

### Added files

- app/Actions/Fortify/\*
- app/Http/Middleware/HandleInertiaRequests.php
- app/Providers/FortifyServiceProvider.php
- config/fortify.php
- database/migrations/\*\_add_two_factor_columns_to_users_table.php
- resources/views/app.blade.php
- resources/js/app.jsx
- resources/js/Pages/Welcome.jsx
- resources/js/Pages/Dashboard.jsx
- resources/js/Pages/Auth/Login.jsx
- resources/js/Pages/Auth/Register.jsx
- resources/js/Pages/Auth/ForgotPassword.jsx
- resources/js/Pages/Auth/ResetPassword.jsx
- resources/js/Pages/Auth/ConfirmPassword.jsx
- resources/js/Pages/Auth/TwoFactorChallenge.jsx

### Edited files

- bootstrap/app.php
- bootstrap/providers.php
- routes/web.php
- vite.config.js
- package.json (dependencies)
