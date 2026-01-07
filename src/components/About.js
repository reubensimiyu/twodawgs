// Import the image at the top
import aboutImage from "../assets/about-us.jpg";

const About = () => (
  <div className="container py-5 text-dark">
    {/* Heading above everything */}
    <h2 className="mb-4 text-center">About Us</h2>

    {/* Text and Image side by side */}
    <div className="row align-items-center">
      {/* Text */}
      <div className="col-md-6">
        <p style={{ maxWidth: "700px", fontSize: "20px" }}>
  We’re Reuben and Tommy, the duo behind Two Dawgs DJ, founded and based in Columbus, Ohio. What started in 2022 as a college side hustle with Nicky and Tommy has grown into a full-blown passion for bringing music, fun, and unforgettable experiences to weddings, parties, and events of all kinds. When Reuben joined and Nicky moved on, the two of us took over—mixing our experience, energy, and love for the crowd to make every event a true celebration.
</p>
      </div>

      {/* Image */}
      <div className="col-md-6 text-center">
        <img 
          src={aboutImage} 
          alt="Two Dawgs DJ" 
          className="img-fluid rounded"
          style={{ maxWidth: "400px" }}
        />
      </div>
    </div>
  </div>
);

export default About;



