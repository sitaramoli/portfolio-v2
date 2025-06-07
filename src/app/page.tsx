import HeroSection from '@/components/sections/HeroSection';
import AboutMeSection from '@/components/sections/AboutMeSection';
import EducationSection from '@/components/sections/EducationSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import BlogSection from '@/components/sections/BlogSection';
import ContactSection from '@/components/sections/ContactSection';

export default function HomePage() {
    return (
        <>
            <HeroSection/>
            <AboutMeSection/>
            <EducationSection/>
            <ProjectsSection/>
            <BlogSection/>
            <ContactSection/>
        </>
    );
}
