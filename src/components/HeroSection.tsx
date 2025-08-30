import { Button } from '@/components/ui/button';
import { FileText, Mail } from 'lucide-react';

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openResume = () => {
    window.open('Liam_Shaw_Resume.pdf', '_blank');
  };

  return (
    <section id="hero" className="min-h-screen flex items-center hero-gradient">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl font-heading font-bold text-foreground mb-6 fade-in-up">
            Hi, I'm{' '}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Liam Shaw
            </span>
          </h1>

          {/* Subtitle */}
          <h2 className="text-xl md:text-2xl font-medium text-muted-foreground mb-8 fade-in-up stagger-1">
            Computer Science & Business Analytics student aspiring to become a{' '}
            <span className="text-primary font-semibold">Software Engineer</span>{' '}
            or{' '}
            <span className="text-primary font-semibold">Product Manager</span>
          </h2>

          {/* Description */}
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed fade-in-up stagger-2">
            I'm passionate about solving real-world business and technical problems with efficient, 
            sustainable, and data-driven solutions. I started out in web and game development, 
            but my focus is now on machine learning, analytics, and building impactful solutions 
            for real-world business requirements.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 fade-in-up stagger-3">
            <Button
              onClick={openResume}
              className="btn-hero px-8 py-3 text-lg font-medium"
              size="lg"
            >
              <FileText className="mr-2 h-5 w-5" />
              View Resume
            </Button>
            
            <Button
              onClick={() => scrollToSection('contact')}
              variant="outline"
              size="lg"
              className="px-8 py-3 text-lg font-medium border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              <Mail className="mr-2 h-5 w-5" />
              Contact Me
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;