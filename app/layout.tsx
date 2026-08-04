import "/public/assets/css/vendors/bootstrap.min.css";
import "/public/assets/css/vendors/swiper-bundle.min.css";
import "/public/assets/css/vendors/carouselTicker.css";
import "/public/assets/css/vendors/magnific-popup.css";
import "/public/assets/fonts/remixicon/remixicon.css";
import "/public/assets/css/main.css";

import type { Metadata } from "next";
import { Urbanist, Playfair_Display, DM_Mono } from "next/font/google";

const urbanist = Urbanist({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--urbanist",
  display: "swap",
});
const playfair_display = Playfair_Display({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--playfair",
  display: "swap",
});
const dmMono = DM_Mono({
  weight: ["300", "400", "500"],
  subsets: ["latin"],
  variable: "--dmMono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sanjay Paswan | Frontend Engineer | React & Next.js Developer",
  description:
    "Frontend Engineer with 4+ years of experience building modern web applications, SaaS platforms, mobile apps, and AI-powered products using React, Next.js, Flutter, Laravel, and TypeScript.",
  keywords: [
    "Sanjay Paswan",
    "Frontend Engineer",
    "React Developer",
    "Next.js Developer",
    "TypeScript",
    "Flutter",
    "Laravel",
    "SaaS Development",
    "Product Builder",
  ],
  openGraph: {
    title: "Sanjay Paswan | Frontend Engineer | React & Next.js Developer",
    description:
      "Frontend Engineer with 4+ years of experience building modern web applications, SaaS platforms, mobile apps, and AI-powered products using React, Next.js, Flutter, Laravel, and TypeScript.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sanjay Paswan | Frontend Engineer | React & Next.js Developer",
    description:
      "Frontend Engineer with 4+ years of experience building modern web applications, SaaS platforms, mobile apps, and AI-powered products using React, Next.js, Flutter, Laravel, and TypeScript.",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Sanjay Paswan",
  jobTitle: "Frontend Engineer",
  description:
    "Frontend Engineer with 4+ years of experience building scalable web applications, SaaS platforms, mobile apps, and startup products.",
  email: "mailto:paswans05@gmail.com",
  sameAs: [
    "https://github.com/paswans05",
    "https://www.linkedin.com/in/unofficialsanju",
  ],
  knowsAbout: [
    "React.js",
    "Next.js",
    "TypeScript",
    "Flutter",
    "Laravel",
    "Node.js",
    "REST APIs",
    "Product Development",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-bs-theme="dark">
      <body
        className={`${urbanist.variable} ${playfair_display.variable} ${dmMono.variable}`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {children}
      </body>
    </html>
  );
}
