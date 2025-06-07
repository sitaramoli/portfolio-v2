import type {Metadata} from 'next';
import './globals.css';
import {Toaster} from "@/components/ui/toaster";
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import {portfolioData} from '@/config/portfolio-data';
import React from "react";
import Head from "next/head";

export const metadata: Metadata = {
    title: `${portfolioData.name} - ${portfolioData.jobTitle}`,
    description: portfolioData.hero.shortBio,
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
        </body>
        </html>
    );
}
