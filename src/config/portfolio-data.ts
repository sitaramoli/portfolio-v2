import type {LucideIcon} from 'lucide-react';
import {Github, Linkedin, Mail, Briefcase, GraduationCap, Edit3, Globe} from 'lucide-react';
import {
    jsIcon,
    tsIcon,
    pythonIcon,
    javaIcon,
    reactIcon,
    nextIcon,
    nodeIcon,
    mySqlIcon,
    postgresIcon,
    htmlIcon,
    cssIcon,
    portfolioV2,
    galaxyAttack
} from "@/app/assets"
import {StaticImageData} from "next/image";

export interface SocialLink {
    name: string;
    url: string;
    icon: LucideIcon;
}

export interface Project {
    id: string;
    title: string;
    description: string;
    imageUrl: string | StaticImageData;
    tags: string[];
    liveUrl?: string;
    sourceUrl?: string;
    details?: string;
}

export interface Skill {
    name: string;
    logoUrl?: string | StaticImageData;
}

export interface PositionEntry {
    role: string;
    startDate: string;
    endDate?: string;
    description: string[];
}

export interface Experience {
    company: string;
    location?: string;
    icon?: LucideIcon;
    positions: PositionEntry[];
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
    name: "Baymax",
    jobTitle: "Software Engineer | Full-Stack Developer",
    hero: {
        greeting: "Hello, I'm",
        tagline: "Crafting digital experiences that inspire and engage.",
        shortBio: "A passionate developer specializing in modern web technologies and user-centric design. I turn complex problems into elegant solutions.",
        ctaText: "Explore My Work",
        ctaLink: "#projects",
        socialLinks: [
            {name: "GitHub", url: "https://github.com/sitaramoli", icon: Github},
            {name: "LinkedIn", url: "https://www.linkedin.com/in/sita-ram-oli-a35740208/", icon: Linkedin},
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
                content: "Outside of coding, I enjoy exploring new technologies, hiking in nature, and photography. These activities help me stay creative and bring fresh perspectives to my work.",
                icon: Globe,
            }
        ],
        skills: [
            {name: "JavaScript", logoUrl: jsIcon},
            {name: "TypeScript", logoUrl: tsIcon},
            {name: "Python", logoUrl: pythonIcon},
            {name: "Java", logoUrl: javaIcon},
            {name: "React", logoUrl: reactIcon},
            {name: "Next.js", logoUrl: nextIcon},
            {name: "Node.js", logoUrl: nodeIcon},
            {name: "MySQL", logoUrl: mySqlIcon},
            {name: "PostgreSQL", logoUrl: postgresIcon},
            {name: "HTML", logoUrl: htmlIcon},
            {name: "CSS", logoUrl: cssIcon},
        ],
        experience: [
            {
                company: "Cedar Gate Services",
                location: "Lalitpur, Nepal",
                icon: Briefcase,
                positions: [
                    {
                        role: "Software Engineer",
                        startDate: "May 2024",
                        endDate: "April 2025",
                        description: [
                            "Developed robust applications by thoroughly analyzing software requirements and writing clean, industry-standard code.",
                            "Ensured software quality through comprehensive unit testing, debugging, and conducting detailed code reviews to enhance performance.",
                            "Created clear technical documentation and collaborated effectively with teams to support development processes and drive successful project outcomes.",
                        ],
                    },
                    {
                        role: "Associate Software Engineer",
                        startDate: "May 2023",
                        endDate: "May 2024",
                        description: [
                            "Built Java applications using OOP principles and best practices.",
                            "Created UI with HTML/CSS and managed SQL databases with procedures and functions.",
                            "Analyzed requirements, worked with experts, documented features, and integrated new APIs.",
                        ],
                    },
                ],
            },
            {
                company: "Outside",
                location: "Lalitpur, Nepal",
                icon: Briefcase,
                positions: [
                    {
                        role: "Internship",
                        startDate: "Dec 2022",
                        endDate: "Mar 2022",
                        description: [
                            "Learned web technologies including HTML, CSS, JavaScript, React, PHP, and relational databases.",
                            "Developed a JavaScript game and a web-based planning poker application.",
                            "Gained hands-on experience in quality assurance and project management.",
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
                institution: "Laurentian University",
                degree: "Master of Science",
                fieldOfStudy: "Computational Sciences",
                startDate: "2025",
                endDate: "Present",
                location: "Sudbury, Canada",
                icon: GraduationCap,
            },
            {
                institution: "Eastern Region Campus",
                degree: "Bachelor of Engineering",
                fieldOfStudy: "Computer Engineering",
                startDate: "2016",
                endDate: "2021",
                location: "Dharan, Nepal",
                icon: GraduationCap,
            },
        ],
    },
    projects: {
        title: "My Projects",
        subtitle: "A selection of my recent work, showcasing my skills in design and development.",
        items: [
            {
                id: "portfolio-v2",
                title: "Portfolio Website Template",
                description: "A customizable portfolio template built with Next.js and Tailwind CSS.",
                imageUrl: portfolioV2,
                tags: ["Next.js", "Tailwind CSS", "TypeScript"],
                sourceUrl: "https://github.com/sitaramoli/portfolio-v2",
                liveUrl: "https://portfolio-v2-tau-self.vercel.app/"
            },
            {
                id: "galaxy-attack",
                title: "Galaxy Attack : Alien Shooter",
                description: "A 2D space shooter game. The player controls a spaceship at the bottom of the screen, firing projectiles upwards. There are enemy spaceships (UFOs) at the top of the screen that the player needs to shoot down.",
                imageUrl: galaxyAttack,
                tags: ["JavaScript", "CSS", "HTML"],
                sourceUrl: "https://github.com/sitaramoli/Outside/tree/main/js/final",
                liveUrl: "https://sitaramoli.github.io/Outside/js/final/"
            },
        ],
    },
    contact: {
        title: "Get In Touch",
        subtitle: "I'm always open to discussing new projects, creative ideas, or opportunities to be part of something amazing. Feel free to reach out!",
        email: "sitaramoli1998@gmail.com",
        phone: "+1 249 377 9086",
        address: "108 King Street, Sudbury, Canada",
        socialLinks: [
            {name: "Mail", url: "mailto:sitaramoli1998@gmail.com", icon: Mail},
            {name: "LinkedIn", url: "https://www.linkedin.com/in/sita-ram-oli-a35740208/", icon: Linkedin},
        ],
        form: {
            namePlaceholder: "Your Name",
            emailPlaceholder: "Your Email",
            messagePlaceholder: "Your Message",
            submitButtonText: "Send Message",
        }
    },
    footer: {
        text: `© ${new Date().getFullYear()} Baymax. All rights reserved.`,
        socialLinks: [
            {name: "GitHub", url: "https://github.com/sitaramoli", icon: Github},
            {name: "LinkedIn", url: "https://www.linkedin.com/in/sita-ram-oli-a35740208/", icon: Linkedin},
        ],
    }
};
