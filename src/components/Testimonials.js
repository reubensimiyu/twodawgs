const Testimonials = () => {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">What Our Clients Say</h2>
      <p className="text-center text-muted mb-5">
        Real experiences from couples and clients who trusted Two Dawgs DJ on their special days.
      </p>

      <div className="row">
        {/* Testimonial 1 */}
        <div className="col-md-4 mb-4">
          <div className="card h-100 shadow-sm">
            <div className="card-body d-flex flex-column">
              <p className="card-text fst-italic">
                “Two Dawgs DJs were incredible from start to finish. They were professional and organized throughout the entire planning process, which made everything leading up to the wedding feel stress-free. On the day of, they were confident on the mic, kept everything running smoothly, and did an amazing job reading the room and keeping the energy up. We genuinely have nothing but great things to say and would highly recommend Two Dawgs DJs to everyone we know.”
              </p>
              <h6 className="mt-auto fw-bold text-end">— Sarah & Nathan P.</h6>
            </div>
          </div>
        </div>

        {/* Testimonial 2 */}
        <div className="col-md-4 mb-4">
          <div className="card h-100 shadow-sm">
            <div className="card-body d-flex flex-column">
              <p className="card-text fst-italic">
                “I’ve been married almost four years, and TwoDawgsDJ did our wedding—and people still tell us how much fun they had on the dance floor. My husband is Greek, so we mixed in Greek dancing with classic party songs and it was unreal. Hands down the best party I’ve ever been to.”
              </p>
              <h6 className="mt-auto fw-bold text-end">— McDaniel and Colin P.</h6>
            </div>
          </div>
        </div>

        {/* Testimonial 3 */}
        <div className="col-md-4 mb-4">
          <div className="card h-100 shadow-sm">
            <div className="card-body d-flex flex-column">
              <p className="card-text fst-italic">
                “I can’t say enough great things about Two Dawgs DJ! They handled everything for my 30th birthday with such professionalism. Their communication was spot on, they were punctual, and they understood exactly what I wanted from the energy of the night. They took the direction I gave and brought it to life even better than I imagined. They knew just the right songs to play when Santa came to town and when it started snowing on the dance floor. People kept coming to the dance floor and it stayed full until we were booted off! Truly the best experience overall!”
              </p>
              <h6 className="mt-auto fw-bold text-end">— Meghan M.</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
