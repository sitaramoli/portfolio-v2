import type {LucideIcon} from 'lucide-react';
import {Github, Linkedin, Twitter, Mail, Briefcase, GraduationCap, Edit3, Globe} from 'lucide-react';

export interface SocialLink {
    name: string;
    url: string;
    icon: LucideIcon;
}

export interface Project {
    id: string;
    title: string;
    description: string;
    imageUrl: string;
    tags: string[];
    liveUrl?: string;
    sourceUrl?: string;
    details?: string;
}

export interface Skill {
    name: string;
    logoUrl?: string;
}

// New interface for individual positions within a company
export interface PositionEntry {
    role: string;
    startDate: string;
    endDate?: string;
    description: string[];
}

// Updated Experience interface
export interface Experience {
    company: string;
    location?: string;
    icon?: LucideIcon;
    positions: PositionEntry[]; // Array of positions
}


export interface EducationEntry {
    institution: string;
    degree: string;
    fieldOfStudy?: string;
    startDate: string;
    endDate?: string;
    location?: string;
    icon?: LucideIcon;
}

export interface BlogPost {
    id: string;
    title: string;
    slug: string;
    date: string;
    excerpt: string;
    imageUrl: string;
    tags: string[];
    content: string; // Markdown or HTML content
    author: string;
    authorImageUrl?: string;
}

export interface HeroData {
    greeting: string;
    tagline: string;
    shortBio: string;
    ctaText: string;
    ctaLink: string;
    socialLinks: SocialLink[];
}

export interface PortfolioData {
    name: string;
    jobTitle: string;
    hero: HeroData;
    aboutMe: {
        introduction: string;
        sections: {
            title: string;
            content: string;
            icon?: LucideIcon;
        }[];
        skills: Skill[];
        experience: Experience[];
        cvUrl?: string;
    };
    education: {
        title: string;
        subtitle: string;
        items: EducationEntry[];
    };
    projects: {
        title: string;
        subtitle: string;
        items: Project[];
    };
    blog: {
        title: string;
        subtitle: string;
        posts: BlogPost[];
    };
    contact: {
        title: string;
        subtitle: string;
        email: string;
        phone?: string;
        address?: string;
        socialLinks?: SocialLink[];
        form: {
            namePlaceholder: string;
            emailPlaceholder: string;
            messagePlaceholder: string;
            submitButtonText: string;
        }
    };
    footer: {
        text: string;
        socialLinks?: SocialLink[];
    }
}

export const portfolioData: PortfolioData = {
    name: "Alex Johnson",
    jobTitle: "Full-Stack Developer & UI/UX Enthusiast",
    hero: {
        greeting: "Hello, I'm",
        tagline: "Crafting digital experiences that inspire and engage.",
        shortBio: "A passionate developer specializing in modern web technologies and user-centric design. I turn complex problems into elegant solutions.",
        ctaText: "Explore My Work",
        ctaLink: "#projects",
        socialLinks: [
            {name: "GitHub", url: "https://github.com", icon: Github},
            {name: "LinkedIn", url: "https://linkedin.com", icon: Linkedin},
            {name: "Twitter", url: "https://twitter.com", icon: Twitter},
        ],
    },
    aboutMe: {
        introduction: "With a keen eye for detail and a drive for excellence, I strive to build software that not only functions flawlessly but also provides a delightful user experience. My journey in tech has been fueled by curiosity and a constant desire to learn and grow.",
        sections: [
            {
                title: "My Philosophy",
                content: "I believe in clean code, agile methodologies, and collaborative teamwork. My goal is to create impactful products that solve real-world problems and make a positive difference.",
                icon: Edit3,
            },
            {
                title: "Interests & Hobbies",
                content: "Outside of coding, I enjoy exploring new technologies, contributing to open-source projects, hiking in nature, and photography. These activities help me stay creative and bring fresh perspectives to my work.",
                icon: Globe,
            }
        ],
        skills: [
            {name: "JavaScript", logoUrl: "https://placehold.co/64x64.png"},
            {name: "TypeScript", logoUrl: "https://placehold.co/64x64.png"},
            {name: "React", logoUrl: "https://placehold.co/64x64.png"},
            {name: "Next.js", logoUrl: "https://placehold.co/64x64.png"},
            {name: "Node.js", logoUrl: "https://placehold.co/64x64.png"},
            {name: "Python", logoUrl: "https://placehold.co/64x64.png"},
            {name: "UI/UX Design", logoUrl: "https://placehold.co/64x64.png"},
            {name: "Figma", logoUrl: "https://placehold.co/64x64.png"},
        ],
        experience: [
            {
                company: "Tech Solutions Inc.",
                location: "San Francisco, CA",
                icon: Briefcase,
                positions: [
                    {
                        role: "Senior Developer",
                        startDate: "Jan 2022",
                        endDate: "Present",
                        description: [
                            "Led development of key features for a flagship SaaS product.",
                            "Mentored junior developers and conducted code reviews.",
                            "Architected scalable solutions for new product modules."
                        ],
                    },
                    {
                        role: "Software Developer",
                        startDate: "Jan 2020",
                        endDate: "Dec 2021",
                        description: [
                            "Developed and maintained features for various modules.",
                            "Collaborated with cross-functional teams to deliver high-quality software.",
                            "Contributed to the migration of legacy systems to modern microservices."
                        ],
                    },
                ],
            },
            {
                company: "Web Creators LLC",
                location: "Remote",
                icon: Briefcase,
                positions: [
                    {
                        role: "Frontend Developer",
                        startDate: "Jun 2017",
                        endDate: "Dec 2019",
                        description: [
                            "Developed responsive and interactive user interfaces for various clients.",
                            "Worked closely with designers to translate mockups into functional web pages.",
                            "Optimized web applications for performance and scalability."
                        ],
                    },
                ]
            },
        ],
        cvUrl: "/resume.pdf",
    },
    education: {
        title: "My Education",
        subtitle: "A summary of my academic background and qualifications.",
        items: [
            {
                institution: "University of Advanced Technology",
                degree: "Master of Science",
                fieldOfStudy: "Computer Science",
                startDate: "2018",
                endDate: "2020",
                location: "Silicon Valley, CA",
                icon: GraduationCap,
            },
            {
                institution: "State College of Engineering",
                degree: "Bachelor of Science",
                fieldOfStudy: "Software Engineering",
                startDate: "2014",
                endDate: "2018",
                location: "Techville, USA",
                icon: GraduationCap,
            },
        ],
    },
    projects: {
        title: "My Projects",
        subtitle: "A selection of my recent work, showcasing my skills in design and development.",
        items: [
            {
                id: "project-1",
                title: "E-commerce Platform",
                description: "A full-featured e-commerce solution with a custom CMS and payment integration.",
                imageUrl: "https://placehold.co/600x400.png",
                tags: ["React", "Node.js", "Stripe", "MongoDB"],
                liveUrl: "#",
                sourceUrl: "#"
            },
            {
                id: "project-2",
                title: "Portfolio Website Template",
                description: "A customizable portfolio template built with Next.js and Tailwind CSS.",
                imageUrl: "https://placehold.co/600x400.png",
                tags: ["Next.js", "Tailwind CSS", "TypeScript"],
                liveUrl: "#"
            },
            {
                id: "project-3",
                title: "Task Management App",
                description: "A collaborative task management tool with real-time updates.",
                imageUrl: "https://placehold.co/600x400.png",
                tags: ["Vue.js", "Firebase", "Vuetify"],
                sourceUrl: "#"
            },
        ],
    },
    blog: {
        title: "My Blog",
        subtitle: "Sharing my thoughts on technology, development, and design trends.",
        posts: [
            {
                id: "blog-1",
                slug: "mastering-react-hooks",
                title: "Mastering React Hooks: A Deep Dive",
                date: "2024-07-15",
                excerpt: "Explore advanced patterns and best practices for using React Hooks effectively in your projects.",
                imageUrl: "https://placehold.co/400x250.png",
                tags: ["React", "JavaScript", "Web Development"],
                content: "<p>React Hooks have revolutionized how we write components. This post delves into...</p><h2>Understanding useState</h2><p>More content here...</p>",
                author: "Alex Johnson",
                authorImageUrl: "https://placehold.co/50x50.png",
            },
            {
                id: "blog-2",
                slug: "the-future-of-ui-ux",
                title: "The Future of UI/UX: Trends to Watch",
                date: "2024-06-28",
                excerpt: "Discover the upcoming trends in user interface and user experience design that will shape digital products.",
                imageUrl: "https://placehold.co/400x250.png",
                tags: ["UI/UX", "Design", "Technology"],
                content: "<p>The digital landscape is constantly evolving. Here are some key UI/UX trends...</p>",
                author: "Alex Johnson",
                authorImageUrl: "https://placehold.co/50x50.png",

            },
        ],
    },
    contact: {
        title: "Get In Touch",
        subtitle: "I'm always open to discussing new projects, creative ideas, or opportunities to be part of something amazing. Feel free to reach out!",
        email: "alex.johnson@example.com",
        phone: "+1 123 456 7890",
        address: "123 Creative Lane, Innovation City, USA",
        socialLinks: [
            {name: "Mail", url: "mailto:alex.johnson@example.com", icon: Mail},
            {name: "LinkedIn", url: "https://linkedin.com/in/alexjohnson", icon: Linkedin},
        ],
        form: {
            namePlaceholder: "Your Name",
            emailPlaceholder: "Your Email",
            messagePlaceholder: "Your Message",
            submitButtonText: "Send Message",
        }
    },
    footer: {
        text: `© ${new Date().getFullYear()} Alex Johnson. All rights reserved.`,
        socialLinks: [
            {name: "GitHub", url: "https://github.com", icon: Github},
            {name: "LinkedIn", url: "https://linkedin.com", icon: Linkedin},
            {name: "Twitter", url: "https://twitter.com", icon: Twitter},
        ],
    }
};
