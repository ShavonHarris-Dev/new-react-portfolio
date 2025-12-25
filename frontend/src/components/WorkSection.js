import FeaturedProject from './FeauturedProject';
import StandardProject from './StandardSection';

function WorkSection() {
  const featuredProjects = [
    {
      label: "Professional · AI Integration",
      title: "AI-Powered Digital Business Card",
      description: "An interactive digital business card powered by AI, allowing visitors to ask questions and learn about my work as a developer. Built with conversational AI to provide an engaging, personalized way to showcase skills and experience.",
      tech: ["React", "TypeScript", "React DOM", "Node.js", "AWS SDK", "OpenAI API", "Serverless"],
      liveLink: "#",
      codeLink: "#"
    },
    {
      label: "Professional · Wellness Tech",
      title: "Breathe",
      description: "A mindfulness app designed to help users manage anxiety through guided breathing exercises, AI-powered affirmations, and real-time insights. Built as a PWA with offline support for daily habit building.",
      tech: ["React", "Flask", "JWT", "SQLAlchemy", "PWA"],
      liveLink: "#",
      codeLink: "#"
    }
  ];

  const otherProjects = [
    {
      title: "BollyBot",
      description: "A randomized Bollywood movie picker that solved a personal problem: deciding what to watch. Lists movie titles, release years, and ratings.",
      tech: ["JavaScript", "CSS3", "MongoDB", "Node.js"],
      codeLink: "#"
    },
    {
      title: "React Recipe Book",
      description: "A recipe tracking app that allows users to save and manage recipes over time.",
      tech: ["JavaScript", "React", "CSS"],
      codeLink: "#"
    }
  ];

  return (
    <section id="work">
      <div className="section-header">
        <h2>Featured Work</h2>
        <span className="section-label">Selected Projects</span>
      </div>

      <div className="work-grid">
        {featuredProjects.map((project, index) => (
          <FeaturedProject key={index} {...project} />
        ))}

        <div style={{ marginTop: '2rem' }}>
          <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', marginBottom: '1.5rem', opacity: 0.9 }}>
            Other Projects
          </h3>
          
          {otherProjects.map((project, index) => (
            <StandardProject key={index} {...project} />
          ))}
        </div>
      </div>

      <p style={{ marginTop: '3rem', textAlign: 'center', opacity: 0.9, fontSize: '14px' }}>
        More projects on <a href="https://github.com/ShavonHarris-Dev" style={{ color: '#5c1f0d', textDecoration: 'underline', textDecorationColor: 'transparent', textUnderlineOffset: '3px' }}>GitHub</a>
      </p>
    </section>
  );
}

export default WorkSection;

