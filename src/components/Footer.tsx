import { Github, Instagram, Linkedin, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/Liam4Shaw'
    },
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://www.instagram.com/liam4shaw'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: '#'
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-muted/50 border-t border-border/50">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand Section */}
            <div>
              <button 
                onClick={scrollToTop}
                className="font-heading font-bold text-2xl text-foreground hover:text-primary transition-colors duration-300 mb-4"
              >
                Liam Shaw
              </button>
              <p className="text-muted-foreground leading-relaxed">
                Computer Science & Business Analytics student passionate about solving 
                real-world problems with data-driven solutions.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-heading font-semibold text-foreground mb-4">
                Quick Links
              </h3>
              <div className="space-y-2">
                {[
                  { label: 'About', id: 'hero' },
                  { label: 'Experience', id: 'experience' },
                  { label: 'Projects', id: 'projects' },
                  { label: 'Contact', id: 'contact' }
                ].map((link) => (
                  <button
                    key={link.id}
                    onClick={() => {
                      const element = document.getElementById(link.id);
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="block text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {link.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Social & Contact */}
            <div>
              <h3 className="font-heading font-semibold text-foreground mb-4">
                Connect
              </h3>
              <div className="flex space-x-3 mb-4">
                {socialLinks.map((social) => (
                  <button
                    key={social.name}
                    onClick={() => window.open(social.url, '_blank')}
                    className="p-2 rounded-lg bg-background hover:bg-primary hover:text-primary-foreground text-muted-foreground transition-all duration-300 hover:scale-110"
                    aria-label={social.name}
                  >
                    <social.icon className="h-5 w-5" />
                  </button>
                ))}
              </div>
              <p className="text-sm text-muted-foreground">
                Phone: <span className="font-medium">+91 93303 77645</span>
              </p>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="pt-8 border-t border-border/50">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <p className="text-sm text-muted-foreground flex items-center">
                © {currentYear} Liam Shaw. All Rights Reserved.
              </p>
              
              <button
                onClick={scrollToTop}
                className="mt-4 md:mt-0 text-sm text-muted-foreground hover:text-primary transition-colors duration-300 font-medium"
              >
                Back to Top ↑
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;