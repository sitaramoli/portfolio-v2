import {Button} from '@/components/ui/button';
import Section from '@/components/ui/Section';
import {portfolioData} from '@/config/portfolio-data';
import {Card, CardContent, CardHeader, CardTitle, CardDescription} from '@/components/ui/card';
import {Briefcase, Download, MapPinIcon} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function AboutMeSection() {
    const {aboutMe} = portfolioData;

    const getSkillLogoHint = (skillName: string): string => {
        const name = skillName.toLowerCase();
        if (name.includes('next.js')) return 'nextjs logo';
        if (name.includes('node.js')) return 'nodejs logo';
        if (name.includes('ui/ux')) return 'design logo';
        return `${name.split(' ')[0]} logo`;
    }

    return (
        <Section id="about" title="About Me" subtitle={aboutMe.introduction}>
            <div className="grid md:grid-cols-2 gap-12 mb-16">
                {aboutMe.sections.map((section, index) => (
                    <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <CardHeader className="flex flex-row items-center space-x-4 pb-2">
                            {section.icon && <section.icon className="h-8 w-8 text-accent"/>}
                            <CardTitle className="font-headline text-2xl text-primary">{section.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="font-body text-muted-foreground">{section.content}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>

            <div className="mb-16">
                <h3 className="font-headline text-2xl md:text-3xl font-semibold text-primary mb-8 text-center">My
                    Skills</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                    {aboutMe.skills.map((skill) => (
                        <Card key={skill.name} className="shadow-md hover:shadow-lg transition-shadow duration-300">
                            <CardContent className="flex flex-col items-center justify-center p-4 sm:p-6 h-full">
                                {skill.logoUrl && (
                                    <div className="relative h-16 w-16 mb-3">
                                        <Image
                                            src={skill.logoUrl}
                                            alt={`${skill.name} logo`}
                                            layout="fill"
                                            objectFit="contain"
                                            data-ai-hint={getSkillLogoHint(skill.name)}
                                        />
                                    </div>
                                )}
                                <p className="font-body font-semibold text-base sm:text-lg text-foreground text-center">
                                    {skill.name}
                                </p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>

            <div id="experience">
                <h3 className="font-headline text-2xl md:text-3xl font-semibold text-primary mb-8 text-center">My
                    Experience</h3>
                <div
                    className="space-y-8 relative before:absolute before:inset-0 before:ml-[calc(1.25rem-1px)] md:before:ml-[calc(1.5rem-1px)] before:h-full before:w-0.5 before:bg-border/70">
                    {aboutMe.experience.map((exp, index) => (
                        <div key={index} className="relative pl-[calc(2.5rem+0.5rem)] md:pl-[calc(3rem+0.5rem)]">
                            <div
                                className="absolute left-[calc(1.25rem-1.25rem)] md:left-[calc(1.5rem-1.5rem)] top-4.5 flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-md">
                                {exp.icon ? <exp.icon className="h-5 w-5 md:h-6 md:w-6"/> :
                                    <Briefcase className="h-5 w-5 md:h-6 md:w-6"/>}
                            </div>
                            <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                                <CardHeader>
                                    <CardTitle
                                        className="font-headline text-xl md:text-2xl text-primary">{exp.company}</CardTitle>
                                    <CardDescription className="font-body text-muted-foreground mt-1">
                                        {exp.location && (
                                            <div className="flex items-center text-sm">
                                                <MapPinIcon className="h-4 w-4 mr-1.5 text-accent"/>
                                                <span>{exp.location}</span>
                                            </div>
                                        )}
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-6">
                                    {exp.positions.map((position, posIndex) => (
                                        <div key={posIndex}
                                             className={posIndex > 0 ? "pt-4 border-t border-border/50" : ""}>
                                            <div className="flex justify-between items-start flex-wrap mb-1">
                                                <h4 className="font-headline text-lg font-semibold text-foreground">{position.role}</h4>
                                                <p className="text-sm text-muted-foreground whitespace-nowrap mt-1 sm:mt-0">
                                                    {position.startDate} - {position.endDate || 'Present'}
                                                </p>
                                            </div>
                                            <ul className="list-disc list-inside space-y-1 font-body text-foreground">
                                                {position.description.map((desc, i) => (
                                                    <li key={i}>{desc}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </CardContent>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>

            {aboutMe.cvUrl && (
                <div className="text-center mt-16">
                    <Button asChild size="lg"
                            className="font-body bg-accent hover:bg-accent/90 text-accent-foreground shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                        <Link href={aboutMe.cvUrl} target="_blank" rel="noopener noreferrer">
                            <Download className="mr-2 h-5 w-5"/> Download CV
                        </Link>
                    </Button>
                </div>
            )}
        </Section>
    );
}

