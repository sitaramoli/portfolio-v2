import Section from '@/components/ui/Section';
import BlogPostCard from '@/components/ui/BlogPostCard';
import {portfolioData} from '@/config/portfolio-data';
import {Button} from '@/components/ui/button';
import Link from 'next/link';

export default function BlogSection() {
    const {blog} = portfolioData;

    // Display limited posts on homepage, e.g., latest 3
    const displayedPosts = blog.posts.slice(0, 3);

    return (
        <Section id="blog" title={blog.title} subtitle={blog.subtitle}>
            {displayedPosts.length > 0 ? (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {displayedPosts.map((post) => (
                        <BlogPostCard key={post.id} post={post}/>
                    ))}
                </div>
            ) : (
                <p className="text-center text-muted-foreground font-body">No blog posts yet. Stay tuned!</p>
            )}
            {blog.posts.length > 3 && (
                <div className="text-center mt-12">
                    <Button asChild size="lg" variant="outline"
                            className="font-body text-primary border-primary hover:bg-primary/10 hover:text-primary shadow-md hover:shadow-lg">
                        <Link href="/blog">View All Posts</Link>
                    </Button>
                </div>
            )}
        </Section>
    );
}
