function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-badge">
        <span className="status-dot"></span>
        <span>Available for select projects</span>
      </div>
      
      <h1 className="hero-title">Hi! I'm Shavon Harris</h1>
      
      <p className="hero-intro">
        I'm a full-stack engineer who builds products around real user needs and real constraints. 
        I came to tech from education, so I care about systems that actually make sense to people.
      </p>

      <div className="currently">
        <div className="currently-label">Currently</div>
        <div className="currently-items">
          <div className="currently-item">Building AI-powered applications</div>
          <div className="currently-item">Developing client projects</div>
          <div className="currently-item">Exploring system design patterns</div>
        </div>
      </div>

      <div className="hero-cta">
        <a href="#work" className="btn btn-primary">View Work</a>
        <a href="mailto:shavonharrisdev@gmail.com" className="btn">Get in Touch</a>
      </div>
    </section>
  );
}


export default HeroSection;
