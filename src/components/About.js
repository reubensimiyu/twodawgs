// Import the image at the top
import aboutImage from "../assets/about-us.jpg";

const About = () => (
  <div className="container py-5 text-dark">
    {/* Heading above everything */}
    <h2 className="mb-4 text-center">About Us</h2>

    {/* Text and Image side by side on desktop, stacked on mobile */}
    <div className="row align-items-center">
      {/* Text */}
      <div className="col-12 col-md-6 mb-4 mb-md-0">
        <p className="about-text">
          We’re Reuben and Tommy, the duo behind Two Dawgs DJ, founded and based in Columbus, Ohio. 
          What started in 2022 as a college side hustle with Nicky and Tommy has grown into a full-blown 
          passion for bringing music, fun, and unforgettable experiences to weddings, parties, and events of all kinds. 
          When Reuben joined and Nicky moved on, the two of us took over—mixing our experience, energy, and love for the crowd 
          to make every event a true celebration.
        </p>
      </div>

      {/* Image */}
      <div className="col-12 col-md-6 text-center">
        <img 
          src={aboutImage} 
          alt="Two Dawgs DJ" 
          className="img-fluid rounded"
          style={{ maxWidth: "100%", height: "auto" }}
        />
      </div>
    </div>

    {/* Extra CSS for responsive text */}
    <style jsx>{`
      .about-text {
        font-size: 18px;
        line-height: 1.6;
      }

      @media (max-width: 576px) {
        .about-text {
          font-size: 16px;
          padding: 0 15px;
        }
      }
    `}</style>
  </div>
);

export default About;




