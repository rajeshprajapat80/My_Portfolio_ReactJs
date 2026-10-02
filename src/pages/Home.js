import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="page hero">
      <div>
        <p className="eyebrow">HELLO, I'M</p>
        <h1>
          Rajesh <span>Prajapat</span>
        </h1>
        <h2>Full Stack Web Developer</h2>
        <p className="hero-text">
          I build clean, responsive and user-friendly websites using HTML, CSS,
          JavaScript and React.
        </p>

        <div className="hero-buttons">
          <Link to="/projects" className="btn primary">
            View Projects
          </Link>
          <Link to="/contact" className="btn secondary">
            Contact Me
          </Link>
        </div>

        <div className="quick-info">
          <div>
            <b>HTML</b>
            <small>Structure</small>
          </div>
          <div>
            <b>CSS</b>
            <small>Design</small>
          </div>
          <div>
            <b>JavaScript</b>
            <small>Logic</small>
          </div>
          <div>
            <b>React JS</b>
            <small>UI</small>
          </div>
        </div>
      </div>

      <div className="hero-card">
        <div className="avatar">RP</div>
        <div className="availability">● Available for opportunities</div>
        <h3>Full Stack Web Developer</h3>
        <p>React • JavaScript • Responsive UI</p>
      </div>
    </section>
  );
}

export default Home;
