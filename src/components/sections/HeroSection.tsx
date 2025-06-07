"use client";

import Link from 'next/link';
import {Button} from '@/components/ui/button';
import Container from '@/components/ui/Container';
import type {HeroData} from '@/config/portfolio-data';
import {portfolioData} from '@/config/portfolio-data';
import {useEffect, useState} from 'react';

export default function HeroSection() {
    const {name} = portfolioData;
    const hero: HeroData = portfolioData.hero;
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const animationDelay = (index: number) => ({
        animationDelay: `${index * 0.15 + 0.3}s`,
    });

    return (
        <section
            id="home"
            className="relative pt-32 pb-16 md:pt-48 md:pb-24 min-h-screen flex items-center justify-center overflow-hidden
                 bg-gradient-to-br from-primary/5 via-background to-accent/5 animate-gradient-flow"
        >
            <Container className="relative z-10 flex flex-col items-center justify-center text-center h-full">
                {/* Text Content Area - Centered */}
                <div className="space-y-6 max-w-3xl"> {/* Increased max-w for centered content */}
                    <p
                        className={`font-body text-accent text-lg md:text-xl font-medium animate-fade-in-slide-up ${isMounted ? 'opacity-100' : 'opacity-0'}`}
                        style={animationDelay(0)}
                    >
                        {hero.greeting}
                    </p>
                    <h1
                        className={`font-headline text-4xl sm:text-5xl md:text-6xl font-bold text-primary leading-tight animate-fade-in-slide-up ${isMounted ? 'opacity-100' : 'opacity-0'}`}
                        style={animationDelay(1)}
                    >
                        {name}
                    </h1>
                    <h2
                        className={`font-headline text-2xl sm:text-3xl md:text-4xl font-semibold text-foreground leading-snug animate-fade-in-slide-up ${isMounted ? 'opacity-100' : 'opacity-0'}`}
                        style={animationDelay(2)}
                    >
                        {hero.tagline}
                    </h2>
                    <p
                        className={`font-body text-muted-foreground text-base md:text-lg mx-auto animate-fade-in-slide-up ${isMounted ? 'opacity-100' : 'opacity-0'}`}
                        style={animationDelay(3)}
                    >
                        {hero.shortBio}
                    </p>
                    <div
                        className={`flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-slide-up ${isMounted ? 'opacity-100' : 'opacity-0'}`}
                        style={animationDelay(4)}
                    >
                        <Button asChild size="lg"
                                className="font-body bg-primary hover:bg-primary/90 text-primary-foreground shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                            <Link href={hero.ctaLink}>{hero.ctaText}</Link>
                        </Button>
                        <Button asChild variant="outline" size="lg"
                                className="font-body text-primary border-primary hover:bg-primary/10 hover:text-primary shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                            <Link href="#contact">Contact Me</Link>
                        </Button>
                    </div>
                    {hero.socialLinks && hero.socialLinks.length > 0 && (
                        <div
                            className={`flex space-x-4 pt-4 justify-center animate-fade-in-slide-up ${isMounted ? 'opacity-100' : 'opacity-0'}`}
                            style={animationDelay(5)}
                        >
                            {hero.socialLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={link.name}
                                    className="text-muted-foreground hover:text-primary transition-colors transform hover:scale-110"
                                >
                                    <link.icon className="h-7 w-7"/>
                                </Link>
                            ))}
                        </div>
                    )}
                </div>
            </Container>
        </section>
    );
}
