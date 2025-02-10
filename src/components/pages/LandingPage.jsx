import PropTypes from "prop-types";
import wowImage from '/WOW.jpeg';

function LandingPage({handleNavigate}) {
  return (
    <section className="principal">
      <div className="landing">
        <h2 className="landing__welcome">Welcome to</h2>
        <h1 className="landing__title1">Owen Wilson's</h1>
        <h1 className="landing__title2">WOW</h1>
        <img
          className="landing__img"
          src={wowImage}
          alt="Owen Wilson meme"
        />
        <button className="landing__btn" onClick={handleNavigate}>
          Let's start!
        </button>
      </div>
      <footer className="footer">
        <p className="footer__text">Adalab®2025 // Marta Chacartegui</p>
      </footer>
    </section>
  );
}

LandingPage.propTypes = {
  handleNavigate: PropTypes.func.isRequired,
};

export default LandingPage;
