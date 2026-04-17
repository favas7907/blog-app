# Beyond UI

Beyond UI is a handcrafted, state-of-the-art editorial blog platform built with Next.js and Tailwind CSS. Designed to deliver a premium reading experience, it combines elegant typography, modern layout principles, and dynamic content integration for creators, designers, and engineers.

## ✨ Features

- **Premium Editorial Aesthetic**: Carefully chosen typography blending `Geist` (Sans & Mono) with the classic elegance of `Playfair Display` for a sophisticated reading experience.
- **Modern Edge-to-Edge Design**: A fully responsive, full-width layout that seamlessly adapts from mobile screens to ultra-wide desktop monitors.
- **Dynamic Content Integration**: Built-in support for external API data fetching with a structured normalization layer, allowing you to easily plug in your CMS or mock data provider.
- **Latest Tech Stack**: Powered by **Next.js 16 (App Router)** and styled utilizing the cutting-edge **Tailwind CSS v4** engine.
- **High-Performance Architecture**: Optimized server components, layout structures, and standardized file routing.
- **Accessible & Polished**: Thoughtful micro-details including custom scrollbars, stylized selection tokens, and integrated robust focus rings for accessible navigation.

### Live Link : https://blog-app-eta-inky.vercel.app/


## 🚀 Getting Started

### Prerequisites

You will need Node.js 18.17+ and your preferred package manager (`npm`, `yarn`, `pnpm`, or `bun`).

### Installation

1. Clone the repository and navigate into the project directory:
   ```bash
   git clone https://github.com/favas7907/blog-app.git
   cd beyond-ui
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

3. Configure Environment Variables:
   Create a `.env.local` file in the root directory and add your API endpoint. If you are using MockAPI or an alternative backend, structure it here.
   ```env
   NEXT_PUBLIC_API_URL=your_api_endpoint_here
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open (http://localhost:3000) with your browser to see the result.

## 📂 Project Structure

- `src/app/` - Next.js App Router including root layouts, global CSS, and primary page endpoints.
- `src/components/` - Modular React components categorized into:
  - `home/` - Dashboard/home specific modules like `HeroFeaturedPost`, `RecentPostsGrid`, and `FeaturedPostsSidebar`.
  - `layout/` - Global navigational scaffolding (`Navbar`, `Footer`).
  - `blog/` - Card layouts and post specific UI abstractions.
- `src/lib/` - Core utilities like API data fetching logic, data normalization, and mock-data configurations.

## 🎨 Styling Architecture

Beyond UI uses **Tailwind CSS v4** cleanly integrated.
Global theme directives and custom CSS utilities are managed directly inside `src/app/globals.css`. Distinctive typography features are efficiently handled using Next.js `next/font/google` optimizations directly inside the root `layout.tsx`.

## 🛠 Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new). Make sure to define your required Environment Variables in the Vercel dashboard prior to the final build.

## 📄 License

This project is open-sourced under the MIT License.
