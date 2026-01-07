import "../index.css";
import logo from "../assets/logo.jpg";

const Hero = () => {
  return (
    <div className="hero-container position-relative text-center text-white">
      {/* Full-width responsive video */}
      <video
        className="hero-video w-100"
        autoPlay
        loop
        muted
        playsInline
        style={{ objectFit: "cover"}}
        src="https://twodawgs-assets.s3.us-east-2.amazonaws.com/hero-video.mp4"
      />

      {/* Overlay */}
      <div className="hero-overlay d-flex flex-column justify-content-center align-items-center px-3 text-center">
        <img
          src={logo}
          alt="Two Dawgs DJ"
          className="hero-logo mb-3 img-fluid"
          style={{ maxWidth: "200px" }}
        />
        <h1 className="fw-bold display-4">
          Two Dawgs DJing
        </h1>
        <p className="lead fs-5">
          For All Your DJing Needs
        </p>
        <a href="#contact" className="btn btn-primary btn-lg mt-3">
          Book Us
        </a>
      </div>
    </div>
  );
};

export default Hero;
