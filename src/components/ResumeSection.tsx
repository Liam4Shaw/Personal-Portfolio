import { Button } from '@/components/ui/button';
import { Download, ExternalLink, FileText } from 'lucide-react';

const ResumeSection = () => {
  const openResume = () => {
    // This will be updated with actual resume link later
    window.open('/resume.pdf', '_blank');
  };

  const downloadResume = () => {
    // This will be updated with actual resume download link later
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Liam_Shaw_Resume.pdf';
    link.click();
  };

  return (
    <section id="resume" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
              Resume
            </h2>
            <p className="text-lg text-muted-foreground">
              Complete overview of my professional journey and qualifications
            </p>
          </div>

          {/* Resume Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button
              onClick={openResume}
              className="btn-hero px-6 py-3 text-lg font-medium"
              size="lg"
            >
              <ExternalLink className="mr-2 h-5 w-5" />
              View Resume
            </Button>
            
            <Button
              onClick={downloadResume}
              variant="outline"
              size="lg"
              className="px-6 py-3 text-lg font-medium border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              <Download className="mr-2 h-5 w-5" />
              Download PDF
            </Button>
          </div>

          {/* Resume Embed Container */}
          <div className="bg-background rounded-xl overflow-hidden border border-border/50 shadow-lg">
            <div className="bg-muted/50 px-6 py-4 border-b border-border/50">
              <div className="flex items-center">
                <FileText className="mr-2 h-5 w-5 text-primary" />
                <span className="font-semibold text-foreground">Liam_Shaw_Resume.pdf</span>
              </div>
            </div>
            
            {/* Resume Preview */}
            <div className="relative">
              <iframe
                src="/resume.pdf"
                className="w-full h-[800px] border-0"
                title="Liam Shaw Resume"
                loading="lazy"
              />
              
              {/* Fallback message if PDF doesn't load */}
              <div className="absolute inset-0 flex items-center justify-center bg-muted/80 opacity-0 hover:opacity-100 transition-opacity duration-300">
                <div className="text-center p-8">
                  <FileText className="mx-auto h-16 w-16 text-muted-foreground mb-4" />
                  <p className="text-lg font-semibold text-foreground mb-2">
                    Resume Preview
                  </p>
                  <p className="text-muted-foreground mb-6">
                    Click the buttons above to view or download the full resume
                  </p>
                  <div className="flex space-x-4">
                    <Button onClick={openResume} size="sm">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Open in New Tab
                    </Button>
                    <Button onClick={downloadResume} variant="outline" size="sm">
                      <Download className="mr-2 h-4 w-4" />
                      Download
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;