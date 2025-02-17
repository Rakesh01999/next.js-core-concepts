# 🚀 Next.js Optimization & Advanced Data Fetching

<!-- Welcome to the **Next.js Optimization & Advanced Data Fetching** -->
Welcome to the **next.js-core-concepts**

 repository! This guide covers essential concepts such as hydration warnings, image optimization, SEO improvements, JSON server setup, and data-fetching strategies like SSG, SSR, and ISR.

## 📌 Table of Contents
- [Understanding `suppressHydrationWarning` in Next.js](#understanding-suppresshydrationwarning-in-nextjs)
- [Optimizing Images in Next.js](#optimizing-images-in-nextjs)
- [Optimizing Fonts & Improving SEO](#optimizing-fonts--improving-seo)
- [Pre-Rendering in Next.js (SSG & SSR)](#pre-rendering-in-nextjs-ssg--ssr)
- [Setting Up JSON Server](#setting-up-json-server)
- [Data Fetching Strategies: SSG, SSR, ISR](#data-fetching-strategies-ssg-ssr-isr)

---

## 📌 Understanding `suppressHydrationWarning` in Next.js
When using Next.js, you might encounter hydration mismatch errors, which happen when the server-rendered HTML differs from what React renders on the client.

### ❌ Problem Example
```html
<!-- Server-rendered HTML -->
<html lang="en">
  <body class="antialiased">
    {children}
  </body>
</html>

<!-- Browser-modified HTML (due to extensions) -->
<html lang="en" data-extension-installed="true">
  <body class="antialiased" data-grammar-check="enabled">
    {children}
  </body>
</html>
```
🔹 **React warning:** "Text content did not match. Server: X Client: Y"

### ✅ Solution: Using `suppressHydrationWarning`
```jsx
export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
```
### ✅ When to Use:
- Handling browser extensions that modify HTML
- Root layouts where attributes may change
- Elements with dynamic content

### ❌ When NOT to Use:
- To hide actual rendering bugs
- Across the entire application
- For fixing incorrect data mismatches

---

## 🎨 Optimizing Images in Next.js

### 📌 Next.js Image Optimization Docs:
🔗 [Optimizing Images in Next.js](https://nextjs.org/api/docs-og?title=Optimizing%20Images)

### 🔧 Configure `next.config.mjs`:
```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
};
export default nextConfig;
```
### 📸 Using Next.js `Image` Component
```jsx
import Image from "next/image";
import nextImage from "@/assets/next-image.png";

const GalleryPage = () => {
  return (
    <div>
      <h1 className="text-2xl text-center">Next.js Image Optimization</h1>
      <Image src={nextImage} alt="Optimized Image" width={500} height={500} className="mx-auto" />
    </div>
  );
};

export default GalleryPage;
```

---

## 📌 Optimizing Fonts & Improving SEO
🔗 [Next.js Fonts & Metadata](https://nextjs.org/docs/app/getting-started/images-and-fonts)

### ✅ Using Import Aliases in `next.config.js`
```js
import nextImage from "@/assets/next-image.png";
import Navbar from "@/components/Navbar";
```

---

## 🚀 Pre-Rendering in Next.js (SSG & SSR)
### 🔍 Static Site Generation (SSG)
```js
const res = await fetch("http://localhost:5000/products", {
  cache: "force-cache",
});
```
✅ Best for pages that don’t change frequently

### 🔄 Server-Side Rendering (SSR)
```js
const res = await fetch("http://localhost:5000/products", {
  cache: "no-store",
});
```
✅ Fetches fresh data on every request

---

## 🛠️ Setting Up JSON Server
### 🔗 JSON Server Docs: [json-server](https://www.npmjs.com/package/json-server)

### ✅ Install JSON Server:
```sh
npm install -g json-server
```

### ✅ Configure `db.json`:
```json
{
  "products": [
    { "id": "1", "productName": "Ultrabook X15", "price": 1200 },
    { "id": "2", "productName": "Gaming Beast G17", "price": 1800 }
  ]
}
```

### ✅ Start the JSON Server:
```sh
json-server --watch db.json --port 5000
```

---

## 🔥 Data Fetching Strategies: SSG, SSR, ISR

### 🛠️ Issue with SSG (Static Generation)
```js
const res = await fetch("http://localhost:5000/products", {
  cache: "force-cache",
});
```
❌ The page won’t update unless rebuilt manually.

### 🚀 Solution: Incremental Static Regeneration (ISR)
```js
const res = await fetch("http://localhost:5000/products", {
  next: {
    revalidate: 5,
  },
});
```
✅ Automatically rebuilds the page every 5 seconds.

### 🏭 Running in Production
```sh
npm run build && npm start
```

---

## 🎯 Conclusion
This repository serves as a comprehensive guide for optimizing Next.js applications. It covers hydration warnings, image optimization, font improvements, metadata, JSON server setup, and advanced data-fetching techniques (SSG, SSR, ISR).

🔹 **Follow best practices** to ensure performance, SEO, and maintainability.

📌 **Contributions & Issues:**
- Feel free to submit pull requests!
- Report bugs and issues in the GitHub **Issues** tab.

🚀 **Happy Coding with Next.js!** 🎉




<!-- Previous/Default -->
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
