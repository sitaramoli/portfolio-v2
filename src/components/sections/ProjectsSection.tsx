import Section from '@/components/ui/Section';
import ProjectCard from '@/components/ui/ProjectCard';
import {portfolioData} from '@/config/portfolio-data';

export default function ProjectsSection() {
    const {projects} = portfolioData;

    return (
        <Section id="projects" title={projects.title} subtitle={projects.subtitle}>
            <div className="space-y-12 md:space-y-16">
                {projects.items.map((project, index) => (
                    <ProjectCard key={project.id} project={project} reverseLayout={index % 2 !== 0}/>
                ))}
            </div>
        </Section>
    );
}
