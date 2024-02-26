import './Hero.css';

const Hero = () => {
  return (
    <>
      <section className="hero--img-section">
        <img
          className="hero--img"
          src="/assets/photo-grid.png"
          alt="Photo grid with 9 photos of people doing various fun activities"
        />
      </section>
      <section className="hero--intro-section">
        <h1 className="hero--title">Online Experiences</h1>
        <p className="hero--text">
          Join unique interactive activities led by one-of-a-kind hosts—all
          without leaving home.
        </p>
      </section>
    </>
  );
};

export default Hero;
