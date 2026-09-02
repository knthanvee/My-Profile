import './AboutSection.css';

function AboutSection() {
  return (
    <section id='about' className='about-section'>
      <div className='about-wrapper container'>
        <div className='about-image'>
          <img src=' /myphoto.jpeg' alt='Thanvee' />
        </div>
        <div className='about-copy'>
          <h1>About Me</h1>
          <p>Hi! I'm Thanvee, a computer science student passionate about buliding creative and useful web applications. I am always excited to explore new opportunities and grow as a developer.</p>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
