import { Link } from "react-scroll";
import "../index.css";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const hero = document.querySelector(".hero-container");
      if (hero) {
        const heroHeight = hero.offsetHeight;
        setScrolled(window.scrollY > heroHeight);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <nav className={`navbar navbar-expand-lg navbar-dark fixed-top shadow-sm ${scrolled ? "scrolled" : ""}`}>
      <div className="container">
        <a className="navbar-brand fw-bold logo-fun" href="#home">
          Two Dawgs DJ
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto text-center">
            {["home", "about", "services", "contact"].map(
              (section) => (
                <li className="nav-item" key={section}>
                  <Link
                    className="nav-link nav-link-fun"
                    activeClass="active"
                    to={section}
                    smooth={true}
                    duration={500}
                    offset={-70}
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </Link>
                </li>
              )
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

