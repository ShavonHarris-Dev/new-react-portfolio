export default function Navigation() {
  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    document.querySelector(sectionId)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };

  return (
    <nav>
      <a href="#work" onClick={(e) => scrollToSection(e, '#work')}>Work</a>
      <a href="#background" onClick={(e) => scrollToSection(e, '#background')}>Background</a>
      <a href="#contact" onClick={(e) => scrollToSection(e, '#contact')}>Contact</a>
    </nav>
  );
}
