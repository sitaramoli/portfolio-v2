import HeroSection from '@/components/sections/HeroSection';
import AboutMeSection from '@/components/sections/AboutMeSection';
import EducationSection from '@/components/sections/EducationSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import ContactSection from '@/components/sections/ContactSection';

export default function HomePage() {
    return (
        <>
            <HeroSection/>
            <AboutMeSection/>
            <EducationSection/>
            <ProjectsSection/>
            <ContactSection/>
        </>
    );
}
