import Image from 'next/image';
import Link from 'next/link';
import type { Project } from '@/config/portfolio-data';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

interface ProjectCardProps {
  project: Project;
  reverseLayout?: boolean;
}

export default function ProjectCard({ project, reverseLayout = false }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
      <div className={`grid md:grid-cols-2 items-center gap-0 ${reverseLayout ? 'md:grid-flow-col-dense' : ''}`}>
        <div className={`relative aspect-video md:aspect-[4/3] w-full h-full ${reverseLayout ? 'md:col-start-2' : ''}`}>
          <Image
            src={project.imageUrl}
            alt={project.title}
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-500 hover:scale-105"
            data-ai-hint="technology abstract"
          />
        </div>
        <div className={`p-6 md:p-8 space-y-4 ${reverseLayout ? 'md:col-start-1' : ''}`}>
          <CardHeader className="p-0">
            <CardTitle className="font-headline text-2xl md:text-3xl text-primary">{project.title}</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <CardDescription className="font-body text-muted-foreground mb-4 text-base">
              {project.description}
            </CardDescription>
            {project.details && <p className="font-body text-sm text-foreground mb-4">{project.details}</p>}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="font-body bg-accent/20 text-accent border-accent/30 hover:bg-accent/30">
                  {tag}
                </Badge>
              ))}
            </div>
          </CardContent>
          <CardFooter className="p-0 flex gap-4">
            {project.liveUrl && (
              <Button asChild variant="default" className="font-body bg-primary hover:bg-primary/90 text-primary-foreground shadow-md hover:shadow-lg">
                <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" /> View Live
                </Link>
              </Button>
            )}
            {project.sourceUrl && (
              <Button asChild variant="outline" className="font-body text-primary border-primary hover:bg-primary/10 hover:text-primary shadow-md hover:shadow-lg">
                <Link href={project.sourceUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" /> View Source
                </Link>
              </Button>
            )}
          </CardFooter>
        </div>
      </div>
    </Card>
  );
}
