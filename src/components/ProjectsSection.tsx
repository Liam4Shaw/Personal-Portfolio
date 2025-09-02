import { Button } from '@/components/ui/button';
import { Github, ExternalLink, Gamepad2 } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: 'Employee Churn Prediction',
      year: '2024',
      description: 'Built and compared multiple ML models (Decision Tree, Random Forest, KNN, AdaBoost, XGBoost). Random Forest achieved ROC-AUC 0.98 and F1-score 0.94.',
      technologies: ['Python', 'pandas', 'scikit-learn', 'XGBoost', 'Matplotlib'],
      github: 'https://github.com/Liam4Shaw/Employee-Churn-Prediction',
      demo: null,
      type: 'ml'
    },
    {
      title: 'Employee Salary Prediction',
      year: '2024',
      description: 'Engineered features and compared Linear Regression vs Random Forest for salary prediction, with Random Forest performing best.',
      technologies: ['Python', 'pandas', 'scikit-learn', 'Matplotlib'],
      github: 'https://github.com/Liam4Shaw/Employee-Salary-Prediction',
      demo: null,
      type: 'ml'
    },
    {
      title: 'Expense Reporting System',
      year: '2025',
      description: 'Developed a CLI tool in Python + SQLite supporting logins, role-based access, CSV import/export, budgeting, and visualizations with Matplotlib.',
      technologies: ['Python', 'SQLite', 'Matplotlib'],
      github: 'https://github.com/Liam4Shaw/expense_tracker_dbms',
      demo: null,
      type: 'software'
    },
    {
      title: 'Youth Tobacco Survey Analysis',
      year: '2023',
      description: 'Analyzed data from 1999–2017, visualized trends, and forecasted values for 2018–2022 using linear regression.',
      technologies: ['Python', 'pandas', 'Matplotlib'],
      github: 'https://github.com/Liam4Shaw',
      demo: null,
      type: 'analytics'
    }
  ];

  const games = [
    {
      title: 'Tic Tac Toe',
      description: 'Classic game with AI opponent',
      demo: 'https://codepen.io/Liam4Shaw/full/rNGZrEb'
    },
    {
      title: 'Block Stacker',
      description: 'Simple block-stacking game made with HTML, CSS (SCSS), and JS (TypeScript)',
      demo: 'https://codepen.io/Liam4Shaw/full/NWavprL'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
              Projects & Portfolio
            </h2>
            <p className="text-lg text-muted-foreground">
              Showcasing practical applications of technical skills
            </p>
          </div>

          {/* Main Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {projects.map((project, index) => (
              <div key={project.title} className={`card-gradient rounded-xl p-8 card-hover border border-border/50 fade-in-up stagger-${index + 1}`}>
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-heading font-bold text-foreground mb-2">
                      {project.title}
                    </h3>
                    <span className="text-sm text-muted-foreground bg-muted px-2 py-1 rounded">
                      {project.year}
                    </span>
                  </div>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="skill-badge px-2 py-1 rounded text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex space-x-3">
                  <Button
                    onClick={() => window.open(project.github, '_blank')}
                    size="sm"
                    variant="outline"
                    className="flex items-center"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </Button>
                  {project.demo && (
                    <Button
                      onClick={() => window.open(project.demo, '_blank')}
                      size="sm"
                      className="flex items-center"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Demo
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Games Section */}
          <div className="bg-background rounded-xl p-8 border border-border/50">
            <h3 className="text-2xl font-heading font-bold text-foreground mb-6 flex items-center">
              <Gamepad2 className="mr-3 h-6 w-6 text-primary" />
              Interactive Games
            </h3>
            
            <div className="grid sm:grid-cols-2 gap-4">
              {games.map((game, index) => (
                <div key={game.title} className="bg-muted/50 rounded-lg p-4 card-hover">
                  <h4 className="font-semibold text-foreground mb-2">{game.title}</h4>
                  <p className="text-sm text-muted-foreground mb-4">{game.description}</p>
                  <Button
                    onClick={() => window.open(game.demo, '_blank')}
                    size="sm"
                    className="w-full"
                  >
                    Play Game
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;