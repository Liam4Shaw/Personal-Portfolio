import { Award, ExternalLink, Trophy, GraduationCap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const AchievementsSection = () => {
  const achievements = [
    {
      title: 'Responsive Web Design Developer Certification',
      organization: 'freeCodeCamp',
      year: '2021',
      type: 'certification',
      link: 'https://freecodecamp.org/certification',
      description: 'Comprehensive web development certification covering HTML, CSS, and responsive design principles.'
    },
    {
      title: 'CS50x - Introduction to Computer Science',
      organization: 'Harvard University via edX',
      year: '2021',
      type: 'course',
      link: 'https://edx.org/course/cs50x',
      description: '20+ mini-projects completed covering algorithms, data structures, and software engineering.'
    },
    {
      title: 'Digital Marketing Certification',
      organization: 'Google Digital Garage',
      year: '2020',
      type: 'certification',
      link: 'https://learndigital.withgoogle.com/',
      description: 'Comprehensive digital marketing fundamentals and strategy certification.'
    },
    {
      title: 'Machine Learning - Top of Class',
      organization: 'University',
      year: '2024',
      type: 'academic',
      link: null,
      description: 'Achieved highest performance in Machine Learning course during 3rd year of college.'
    },
    {
      title: 'Design & Analysis of Algorithms - Top of Class',
      organization: 'University',
      year: '2024',
      type: 'academic',
      link: null,
      description: 'Topped the class in advanced algorithms and complexity analysis course.'
    }
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case 'certification':
        return <Award className="h-5 w-5" />;
      case 'course':
        return <GraduationCap className="h-5 w-5" />;
      case 'academic':
        return <Trophy className="h-5 w-5" />;
      default:
        return <Award className="h-5 w-5" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'certification':
        return 'bg-primary/10 text-primary';
      case 'course':
        return 'bg-accent/10 text-accent';
      case 'academic':
        return 'bg-orange-100 text-orange-700';
      default:
        return 'bg-primary/10 text-primary';
    }
  };

  return (
    <section id="achievements" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
              Achievements & Certifications
            </h2>
            <p className="text-lg text-muted-foreground">
              Recognition of continuous learning and academic excellence
            </p>
          </div>

          {/* Achievements Grid */}
          <div className="space-y-6">
            {achievements.map((achievement, index) => (
              <div key={index} className={`card-gradient rounded-xl p-8 card-hover border border-border/50 fade-in-up stagger-${index + 1}`}>
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <div className="mr-3 text-primary">
                        {getIcon(achievement.type)}
                      </div>
                      <h3 className="text-xl font-heading font-bold text-foreground">
                        {achievement.title}
                      </h3>
                    </div>
                    
                    <div className="flex items-center space-x-3 mb-3">
                      <span className="font-semibold text-primary">
                        {achievement.organization}
                      </span>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(achievement.type)}`}>
                        {achievement.type}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        {achievement.year}
                      </span>
                    </div>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      {achievement.description}
                    </p>
                  </div>
                  
                  {achievement.link && (
                    <Button
                      onClick={() => window.open(achievement.link, '_blank')}
                      size="sm"
                      variant="outline"
                      className="ml-4 flex items-center"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;