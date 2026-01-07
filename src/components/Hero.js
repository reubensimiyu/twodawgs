import "../index.css";
import logo from "../assets/logo.jpg";

const Hero = () => {
  return (
    <div className="hero-container position-relative text-center text-white">
      <video
        className="hero-video"
        autoPlay
        loop
        muted
        playsInline
        src="https://twodawgs-assets.s3.us-east-2.amazonaws.com/hero-video.mp4"
      />
      <div className="hero-overlay d-flex flex-column justify-content-center align-items-center">
        <img src={logo} alt="Two Dawgs DJ" className="hero-logo mb-3" />
        <h1 className="display-4 fw-bold">Two Dawgs DJing</h1>
        <p className="lead">For All Your DJing Needs</p>
        <a href="#contact" className="btn btn-primary mt-3">
          Book Us
        </a>
      </div>
    </div>
  );
};

export default Hero;
