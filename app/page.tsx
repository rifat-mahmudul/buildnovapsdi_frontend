import RegistrationForm from "@/components/RegistrationForm";
import Footer from "@/components/Footer";
import StickyBar from "@/components/StickyBar";
import Hero from "@/components/HeroSection";
import Curriculum from "@/components/curriculam";
import Mentor from "@/components/MentorSection";
import FAQ from "@/components/FAQSection";
import CompanyMarquee from "@/components/company marque";
import CourseProjects from "@/components/course-project";
import UrgentCTA from "@/components/urgent-cta";
import WhatsAppFloatingButton from "@/components/whats-app-button";

export default function Home() {
  return (
    <main>
      <Hero />
      <Curriculum />
      <Mentor />
      <CompanyMarquee />
      <CourseProjects />
      <UrgentCTA />
      <FAQ />
      <RegistrationForm />
      <Footer />
      <StickyBar />
      <WhatsAppFloatingButton />
    </main>
  );
}
