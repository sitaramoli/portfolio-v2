import {portfolioData} from '@/config/portfolio-data';
import {notFound} from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import {Badge} from '@/components/ui/badge';
import {CalendarDays, UserCircle, ArrowLeft} from 'lucide-react';
import {Button} from '@/components/ui/button';

interface BlogPostPageProps {
    params: {
        slug: string;
    };
}

export async function generateStaticParams() {
    return portfolioData.blog.posts.map((post) => ({
        slug: post.slug,
    }));
}

export async function generateMetadata({params}: BlogPostPageProps) {
    const post = portfolioData.blog.posts.find((p) => p.slug === params.slug);
    if (!post) {
        return {
            title: 'Post Not Found',
        };
    }
    return {
        title: `${post.title} | ${portfolioData.name}`,
        description: post.excerpt,
    };
}

export default function BlogPostPage({params}: BlogPostPageProps) {
    const post = portfolioData.blog.posts.find((p) => p.slug === params.slug);

    if (!post) {
        notFound();
    }

    return (
        <main className="pt-20 pb-16 md:pb-24 bg-background">
            <Container>
                <article className="max-w-3xl mx-auto">
                    <div className="mb-8">
                        <Button variant="outline" asChild
                                className="font-body text-primary border-primary hover:bg-primary/10 hover:text-primary">
                            <Link href="/#blog">
                                <ArrowLeft className="mr-2 h-4 w-4"/> Back to Blog
                            </Link>
                        </Button>
                    </div>

                    <h1 className="font-headline text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-6 leading-tight">
                        {post.title}
                    </h1>

                    <div
                        className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground font-body mb-8">
                        <div className="flex items-center">
                            <CalendarDays className="h-4 w-4 mr-2 text-accent"/>
                            <span>{new Date(post.date).toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric'
                            })}</span>
                        </div>
                        <div className="flex items-center">
                            {post.authorImageUrl ? (
                                <Image src={post.authorImageUrl} alt={post.author} width={24} height={24}
                                       className="rounded-full mr-2" data-ai-hint="person avatar"/>
                            ) : (
                                <UserCircle className="h-4 w-4 mr-2 text-accent"/>
                            )}
                            <span>By {post.author}</span>
                        </div>
                    </div>

                    {post.imageUrl && (
                        <div className="relative aspect-video w-full rounded-lg overflow-hidden mb-8 shadow-lg">
                            <Image
                                src={post.imageUrl}
                                alt={post.title}
                                layout="fill"
                                objectFit="cover"
                                data-ai-hint="creative workspace"
                            />
                        </div>
                    )}

                    {/* Using prose for Tailwind Typography styling if available, or basic styling otherwise */}
                    <div
                        className="prose prose-lg lg:prose-xl dark:prose-invert max-w-none font-body text-foreground space-y-6
                       prose-headings:font-headline prose-headings:text-primary 
                       prose-a:text-accent prose-a:no-underline hover:prose-a:underline
                       prose-strong:font-semibold prose-strong:text-foreground
                       prose-blockquote:border-l-accent prose-blockquote:text-muted-foreground"
                        dangerouslySetInnerHTML={{__html: post.content}}
                    />

                    {post.tags && post.tags.length > 0 && (
                        <div className="mt-12 pt-8 border-t border-border">
                            <h3 className="font-headline text-lg font-semibold text-primary mb-4">Tags:</h3>
                            <div className="flex flex-wrap gap-2">
                                {post.tags.map((tag) => (
                                    <Badge key={tag} variant="secondary"
                                           className="font-body bg-accent/20 text-accent border-accent/30">
                                        {tag}
                                    </Badge>
                                ))}
                            </div>
                        </div>
                    )}
                </article>
            </Container>
        </main>
    );
}
