"use client";

import Link from 'next/link';
import {useState, useEffect} from 'react';
import {Menu, X} from 'lucide-react';
import {Button} from '@/components/ui/button';
import {portfolioData} from '@/config/portfolio-data';
import {cn} from '@/lib/utils';

const navItems = [
    {label: 'Home', href: '/'},
    {label: 'About', href: '#about'},
    {label: 'Experience', href: '#experience'},
    {label: 'Education', href: '#education'},
    {label: 'Projects', href: '#projects'},
    {label: 'Blog', href: '#blog'},
    {label: 'Contact', href: '#contact'},
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <header className={cn(
            "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
            isScrolled ? "bg-background/90 shadow-lg backdrop-blur-md" : "bg-transparent"
        )}>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <Link href="/"
                          className="text-2xl font-headline font-bold text-primary hover:text-accent transition-colors">
                        {portfolioData.name.split(' ')[0]}<span className="text-accent">.</span>
                    </Link>

                    <nav className="hidden md:flex space-x-6">
                        {navItems.map((item) => (
                            <Link
                                key={item.label}
                                href={item.href}
                                className="font-body text-foreground hover:text-accent transition-colors px-3 py-2 rounded-md text-sm font-medium"
                            >
                                {item.label}
                            </Link>
                        ))}
                    </nav>

                    <div className="md:hidden">
                        <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label="Toggle menu">
                            {isOpen ? <X className="h-6 w-6 text-primary"/> : <Menu className="h-6 w-6 text-primary"/>}
                        </Button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-background shadow-lg pb-4">
                    <nav className="flex flex-col space-y-2 px-4">
                        {navItems.map((item) => (
                            <Link
                                key={item.label}
                                href={item.href}
                                onClick={() => setIsOpen(false)}
                                className="font-body text-foreground hover:text-accent hover:bg-secondary/50 transition-colors block px-3 py-2 rounded-md text-base font-medium"
                            >
                                {item.label}
                            </Link>
                        ))}
                    </nav>
                </div>
            )}
        </header>
    );
}
