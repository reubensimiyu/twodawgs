// Import videos at the top
import weddingsVideo from "../assets/wedding.mp4";
import privatePartiesVideo from "../assets/party.mp4";
import corporateEventsVideo from "../assets/corporate.mp4";

const Services = () => {
  return (
    <div className="container py-5 text-center text-dark">
      <h2 className="mb-4">Our Services</h2>
      <div className="row">
        {/* Weddings */}
        <div className="col-md-4 mb-4">
          <div className="card bg-dark text-light border-light h-100">
            <video 
              className="card-img-top" 
              autoPlay 
              loop 
              muted
              playsInline
              src={weddingsVideo}
            >
              Your browser does not support the video tag.
            </video>
            <div className="card-body">
              <h5 className="card-title">Weddings</h5>
              <p className="card-text">
                Professional setups and specialized playlists to make your day unforgettable.
              </p>
            </div>
          </div>
        </div>

        {/* Private Parties */}
        <div className="col-md-4 mb-4">
          <div className="card bg-dark text-light border-light h-100">
            <video 
              className="card-img-top" 
              autoPlay 
              loop 
              muted
              playsInline
              src={privatePartiesVideo}
            >
              Your browser does not support the video tag.
            </video>
            <div className="card-body">
              <h5 className="card-title">Private Parties</h5>
              <p className="card-text">
                From birthdays to house parties — we keep the energy going all night.
              </p>
            </div>
          </div>
        </div>

        {/* Corporate Events */}
        <div className="col-md-4 mb-4">
          <div className="card bg-dark text-light border-light h-100">
            <video 
              className="card-img-top" 
              autoPlay 
              loop 
              muted
              playsInline
              src={corporateEventsVideo}
            >
              Your browser does not support the video tag.
            </video>
            <div className="card-body">
              <h5 className="card-title">Corporate Events</h5>
              <p className="card-text">
                Clean mixes, professional setups, and flawless execution for your event.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;



