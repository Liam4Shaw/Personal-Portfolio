import { Calendar, MapPin } from 'lucide-react';

const ExperienceSection = () => {
  const experiences = [
    {
      role: 'Analytics & CRM Intern',
      company: 'ACEplus',
      period: 'May 2025 – Jul 2025',
      location: 'Kolkata',
      description: 'Worked with CleverTap to design consistent event tracking and improve campaign reliability. Automated data cleaning using Python (FuzzyWuzzy), improving accuracy of weekly reports. Analyzed user cohorts and showed that workshop-driven users earned ~2x points, directly shaping engagement strategy.',
      technologies: ['CleverTap', 'Python', 'FuzzyWuzzy', 'Data Analysis', 'Jira']
    },
    {
      role: 'Software Intern',
      company: 'Mandrake Tech',
      period: 'Oct 2024 – Jan 2025',
      location: 'Remote',
      description: 'Built a Dockerized URL shortener with Spring Boot and PostgreSQL. Integrated REST APIs with a frontend and eliminated environment inconsistencies through Docker. Contributed to production-ready code with Maven builds and authentication.',
      technologies: ['Java', 'Spring Boot', 'PostgreSQL', 'Docker', 'Maven', 'REST APIs']
    },
    {
      role: 'Software Tester & Developer Intern',
      company: 'Willwali',
      period: 'May 2024 – Jul 2024',
      location: 'Remote',
      description: 'Developed CRUD microservices using Flask & Jinja, achieving 90%+ unit test coverage. Found and fixed 30+ bugs in a Bubble.io demo app, while improving team workflows with Git branching and PR reviews.',
      technologies: ['Python', 'Flask', 'Jinja', 'Bubble.io', 'Git', 'Unit Testing']
    }
  ];

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
              Professional Experience
            </h2>
            <p className="text-lg text-muted-foreground">
              Building impactful solutions through hands-on experience
            </p>
          </div>

          {/* Experience Timeline */}
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className={`card-gradient rounded-xl p-8 card-hover border border-border/50 fade-in-up stagger-${index + 1}`}>
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-heading font-bold text-foreground mb-1">
                      {exp.role}
                    </h3>
                    <h4 className="text-lg font-semibold text-primary mb-2">
                      {exp.company}
                    </h4>
                  </div>
                  
                  <div className="flex flex-col lg:items-end text-sm text-muted-foreground space-y-1">
                    <div className="flex items-center">
                      <Calendar className="mr-2 h-4 w-4" />
                      {exp.period}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="mr-2 h-4 w-4" />
                      {exp.location}
                    </div>
                  </div>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {exp.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="skill-badge px-3 py-1 rounded-md text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;