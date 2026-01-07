import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./index.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <section id="home"><Hero /></section>
      <section id="about"><About /></section>
      <section id="services"><Services /></section>
      <section id="contact"><Contact /></section>
      <Footer />
    </>
  );
}

export default App;
