import Section from '@/components/ui/Section';
import {portfolioData} from '@/config/portfolio-data';
import {Card, CardContent, CardHeader, CardTitle, CardDescription} from '@/components/ui/card';
import {GraduationCap, MapPinIcon} from 'lucide-react';

export default function EducationSection() {
    const {education} = portfolioData;

    if (!education || education.items.length === 0) {
        return null;
    }

    return (
        <Section id="education" title={education.title} subtitle={education.subtitle} className="bg-muted/20">
            <div
                className="space-y-8 relative before:absolute before:inset-0 before:ml-[calc(1.25rem-1px)] md:before:ml-[calc(1.5rem-1px)] before:h-full before:w-0.5 before:bg-border/70">
                {education.items.map((edu, index) => (
                    <div key={index} className="relative pl-[calc(2.5rem+0.5rem)] md:pl-[calc(3rem+0.5rem)]">
                        <div
                            className="absolute left-[calc(1.25rem-1.25rem)] md:left-[calc(1.5rem-1.5rem)] top-4.5 flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-md">
                            {edu.icon ? <edu.icon className="h-5 w-5 md:h-6 md:w-6"/> :
                                <GraduationCap className="h-5 w-5 md:h-6 md:w-6"/>}
                        </div>
                        <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <CardHeader>
                                <CardTitle
                                    className="font-headline text-xl md:text-2xl text-primary">{edu.institution}</CardTitle>
                                <CardDescription
                                    className="font-body text-muted-foreground flex justify-between items-start flex-wrap">
                                    <div className="flex-grow mr-4">
                                        <p>{edu.degree} {edu.fieldOfStudy && `in ${edu.fieldOfStudy}`}</p>
                                        {edu.location && (
                                            <div className="flex items-center text-sm mt-1">
                                                <MapPinIcon className="h-4 w-4 mr-1.5 text-accent"/>
                                                <span>{edu.location}</span>
                                            </div>
                                        )}
                                    </div>
                                    <div className="text-sm mt-1 sm:mt-0 whitespace-nowrap">
                                        {edu.startDate} - {edu.endDate || 'Present'}
                                    </div>
                                </CardDescription>
                            </CardHeader>
                        </Card>
                    </div>
                ))}
            </div>
        </Section>
    );
}
