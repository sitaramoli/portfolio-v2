import Link from 'next/link';
import {portfolioData} from '@/config/portfolio-data';
import Container from '@/components/ui/Container';

export default function Footer() {
    const {text, socialLinks} = portfolioData.footer;

    return (
        <footer className="bg-muted/50 py-8 border-t">
            <Container className="text-center">
                {socialLinks && socialLinks.length > 0 && (
                    <div className="flex justify-center space-x-6 mb-4">
                        {socialLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={link.name}
                                className="text-muted-foreground hover:text-primary transition-colors"
                            >
                                <link.icon className="h-6 w-6"/>
                            </Link>
                        ))}
                    </div>
                )}
                <p className="text-sm text-muted-foreground font-body">{text}</p>
            </Container>
        </footer>
    );
}
