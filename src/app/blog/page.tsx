import Section from '@/components/ui/Section';
import BlogPostCard from '@/components/ui/BlogPostCard';
import {portfolioData} from '@/config/portfolio-data';
import type {Metadata} from 'next';

export const metadata: Metadata = {
    title: `Blog | ${portfolioData.name}`,
    description: `Read articles and thoughts from ${portfolioData.name} on technology, development, and design.`,
};

export default function AllBlogPostsPage() {
    const {blog} = portfolioData;

    return (
        <main className="pt-20">
            <Section title="All Blog Posts" subtitle="Explore all articles and insights.">
                {blog.posts.length > 0 ? (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {blog.posts.map((post) => (
                            <BlogPostCard key={post.id} post={post}/>
                        ))}
                    </div>
                ) : (
                    <p className="text-center text-muted-foreground font-body">No blog posts yet. Stay tuned!</p>
                )}
            </Section>
        </main>
    );
}
