function About() {
  return (
    <section className="page content-page about">
      <p className="eyebrow">ABOUT ME</p>
      <h1 className="page-title">
        A little about <span>me</span>
      </h1>

      <div className="about-grid">
        <div className="glass-card">
          <h2>Who I Am</h2>
          <p>
            Hello, my name is Rajesh Prajapat. I am a Full Stack Web
            Development learner.
          </p>
          <p>
            I am interested in building modern, responsive and user-friendly
            websites.
          </p>
        </div>

        <div className="info-card">
          <div>
            <small>Name</small>
            <b>Rajesh Prajapat</b>
          </div>
          <div>
            <small>Role</small>
            <b>Full Stack Web Developer</b>
          </div>
          <div>
            <small>Location</small>
            <b>Rajasthan, India</b>
          </div>
          <div>
            <small>Focus</small>
            <b>React & Web Development</b>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
