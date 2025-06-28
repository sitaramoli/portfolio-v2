import type {Metadata} from 'next';
import './globals.css';
import {Toaster} from "@/components/ui/toaster";
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import {portfolioData} from '@/config/portfolio-data';
import React from "react";
import Head from "next/head";
import {Analytics} from "@vercel/analytics/next"

export const metadata: Metadata = {
    title: `${portfolioData.name} - ${portfolioData.jobTitle}`,
    description: portfolioData.hero.shortBio,
    openGraph: {
        title: `${portfolioData.name} - ${portfolioData.jobTitle}`,
        description: portfolioData.hero.shortBio,
        url: "https://sitaramoli.com.np",
        type: "website",
        images: [
            {
                url: "https://opengraph.b-cdn.net/production/images/b1305d0b-6fbd-4d32-b8cd-3daddc020632.jpg?token=qz9qFMJrxMiv1ayjKTsRmBrMAmzxiSlFR7LyG-1vtLg&height=800&width=1200&expires=33287152517",
                width: 1200,
                height: 800,
                alt: portfolioData.hero.shortBio,
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: `${portfolioData.name} - ${portfolioData.jobTitle}`,
        description: `${portfolioData.name} - ${portfolioData.jobTitle}`,
        images: [
            "https://opengraph.b-cdn.net/production/images/b1305d0b-6fbd-4d32-b8cd-3daddc020632.jpg?token=qz9qFMJrxMiv1ayjKTsRmBrMAmzxiSlFR7LyG-1vtLg&height=800&width=1200&expires=33287152517",
        ],
    },
};

export default function RootLayout({children}: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en">
        <Head>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/>
            <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&display=swap" rel="stylesheet"/>
            <link href="https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&display=swap" rel="stylesheet"/>
        </Head>
        <body className="font-body antialiased flex flex-col min-h-screen">
        <Navbar/>
        <div className="flex-grow">
            {children}
        </div>
        <Footer/>
        <Toaster/>
        <Analytics/>
        </body>
        </html>
    );
}
