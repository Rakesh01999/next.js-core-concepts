# Next.js Application

This repository contains a **Next.js** application demonstrating various features such as **Server-Side Rendering (SSR)**, **Static Site Generation (SSG)**, **Image Optimization**, **Font Handling**, and **Advanced Data Fetching Strategies**.

## 🚀 Features

- ✅ **SSR & SSG**: Efficient data fetching strategies.
- ✅ **Image Optimization**: Using Next.js’ built-in Image component.
- ✅ **Hydration Management**: Implementing `suppressHydrationWarning`.
- ✅ **Error Handling**: Customized error pages for enhanced user experience.
- ✅ **Dynamic Routing**: Handling active links in navigation.
- ✅ **SEO Optimization**: Meta tags for better search engine ranking.
- ✅ **Authentication**: Firebase authentication integration.
- ✅ **Pagination & Filtering**: Seamless product browsing experience.

## 🛠 Installation

To get started with this application, clone the repository and install dependencies:

```bash
git clone <repo-url>
cd your-project-name
npm install
```

## 📌 Getting Started

To run the server locally, you need to set up a **JSON server** to provide mock data.

### 1️⃣ Install JSON Server

```bash
npm install json-server
```

### 2️⃣ Setup Database

Create a `db.json` file in the root directory with sample data:

```json
{
  "products": [
    {
      "id": 1,
      "productName": "Ultrabook X15",
      "category": "Laptop",
      "brand": "TechPro",
      "price": 1200,
      "image": "https://www.example.com/image1.jpg"
    },
    {
      "id": 2,
      "productName": "Gaming Beast G17",
      "category": "Laptop",
      "brand": "PowerCore",
      "price": 1800,
      "image": "https://www.example.com/image2.jpg"
    }
  ]
}
```

### 3️⃣ Update `package.json`

Add the JSON server script:

```json
"scripts": {
  "json-server": "json-server --watch db.json --port 5000"
}
```

### 4️⃣ Run the Server

```bash
npm run json-server
```

To launch your **Next.js** app:

```bash
npm run dev
```

## ⚡ Hydration Warnings

Next.js might encounter **hydration mismatch errors** if the server-rendered HTML doesn't match what React expects. You can use `suppressHydrationWarning`:

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

## 🖼 Image Optimization

Next.js provides the `Image` component for optimized image loading.

### 🛠 Configuration

Update `next.config.mjs`:

```javascript
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

### 🚀 Usage

```jsx
import Image from "next/image";
import nextImage from "@/assets/next-image.png";

const GalleryPage = () => {
  return <Image src={nextImage} alt="Next Image" width={500} height={300} />;
};
```

## 🔡 Font Optimization

Import fonts and improve **SEO** with metadata.

```jsx
import { Roboto } from 'next/font/google';
const roboto = Roboto({ subsets: ['latin'], weight: '400' });
```

## ⚡ Pre-rendering (SSR & SSG)

### **SSR Example**

```javascript
const res = await fetch("http://localhost:5000/products");
const products = await res.json();
```

### **Production Mode**

```bash
npm run build
npm start
```

## 🔄 Advanced Data Fetching Strategies

- **ISR (Incremental Static Regeneration)**

```javascript
const res = await fetch("http://localhost:5000/products", {
  next: { revalidate: 5 },
});
```

- **SSR with No Cache**

```javascript
const res = await fetch("http://localhost:5000/products", { cache: "no-store" });
```

## 🚨 Error Handling

Customize your **error page**:

```javascript
"use client";

const ErrorPage = ({ error, reset }) => {
  return (
    <div>
      <h1>Something Went Wrong !!</h1>
      <p>{error.message}</p>
      <button onClick={() => reset()} className="bg-red-400 text-white">
        Try Again
      </button>
    </div>
  );
};

export default ErrorPage;
```

## 🔗 Active Links in Navigation

```javascript
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathName = usePathname();

  return (
    <nav>
      <Link href="/about" className={pathName === "/about" ? "active-class" : ""}>
        About Us
      </Link>
      <Link href="/gallery">Gallery</Link>
      <Link href="/products">Products</Link>
    </nav>
  );
};

export default Navbar;
```

## 🔥 About the Developer

👋 Hi, I'm **Rakesh Biswas** – a passionate **Full-Stack Developer** and **Tech Innovator**. I specialize in **MERN Stack** development and love building scalable web applications. I'm currently working on various projects, including:

- **MoneyWave** - A Mobile Financial Service (MFS) platform.
- **Matrimony Mate** - A modern matrimonial website.
- **Tourist Spot Management** - A full-stack travel management system.
- **ShopEase** - A full-stack e-commerce platform.
- **Library Management System** - A school library management system.

📌 My Portfolio: [rakesh-biswas-portfolio.netlify.app](https://rakesh-biswas-portfolio.netlify.app/)

📌 Connect with me on GitHub: [github.com/rakesh-biswas](https://github.com/rakesh-biswas)

---

🚀 **Keywords:** #NextJS #React #MERN #WebDevelopment #JavaScript #TechInnovator #RakeshBiswas
