const SkillsSection = () => {
  const skillCategories = [
    {
      title: 'Languages & Tools',
      skills: ['Python', 'Java', 'C', 'C++', 'JavaScript', 'SQL', 'HTML', 'CSS', 'Git', 'GitHub', 'Docker', 'Maven', 'React', 'Node.js']
    },
    {
      title: 'Frameworks & Data',
      skills: ['Spring Boot', 'Flask', 'PostgreSQL', 'pandas', 'numpy', 'scikit-learn', 'Matplotlib', 'XGBoost']
    },
    {
      title: 'Other Tools',
      skills: ['CleverTap', 'Jira', 'FuzzyWuzzy', 'Excel', 'Bubble.io']
    }
  ];

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
              Technical Skills
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive toolkit for solving complex problems across different domains
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <div key={category.title} className={`fade-in-up stagger-${index + 1}`}>
                <div className="card-gradient rounded-xl p-8 h-full card-hover border border-border/50">
                  <h3 className="text-xl font-heading font-semibold text-foreground mb-6">
                    {category.title}
                  </h3>
                  
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <span
                        key={skill}
                        className="skill-badge px-3 py-1.5 rounded-lg text-sm font-medium"
                        style={{ animationDelay: `${(index * 0.1) + (skillIndex * 0.05)}s` }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;