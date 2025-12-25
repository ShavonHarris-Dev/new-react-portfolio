export default function BackgroundSection() {
  return (
    <section id="background">
      <div className="section-header">
        <h2>Background</h2>
        <span className="section-label">About</span>
      </div>

      <div className="background-content">
        <p>
          I'm a full-stack engineer who works across enterprise systems, AI applications, and client 
          projects. I focus on making complex interfaces actually usable—whether that's a dashboard, 
          a workflow tool, or something AI-powered.
        </p>

        <p>
          I came from education, so I care about designing for real people: clear interactions, accessible 
          components, systems that make sense. Right now I'm learning a lot about how AI fits into products 
          without making them harder to use.
        </p>

        <p>
          At Trellix, I specialize in frontend technologies and design systems, building reusable components 
          and user interfaces that enhance user experience and product quality. I work mostly in TypeScript 
          and React, but I'm more interested in architecture that scales and details that matter—good error 
          states, keyboard navigation, APIs that don't lie.
        </p>

        <p>
          Outside work: reading, traveling, thinking about how films and stories shape how we build systems.
        </p>

        <a href="/resume.pdf" className="resume-link" target="_blank" rel="noopener noreferrer">
          View Resume →
        </a>
      </div>
    </section>
  );
}



