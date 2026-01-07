import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    eventDate: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Submitting...");

    try {
      const response = await fetch(
        "https://a6fzqdn1i3.execute-api.us-east-2.amazonaws.com/prod/inquiries",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (response.ok) {
        setStatus("Inquiry submitted successfully! We'll be in touch soon.");
        setFormData({
          name: "",
          email: "",
          phone: "",
          eventType: "",
          eventDate: "",
          message: "",
        });
      } else {
        setStatus("Error: " + (data.error || "Something went wrong"));
      }
    } catch (err) {
      console.error(err);
      setStatus("Network error");
    }
  };

  return (
    <div className="container py-5 text-center text-dark">
      <h2 className="mb-4">Inquire</h2>
      <form
        className="mx-auto"
        style={{ maxWidth: "600px" }}
        onSubmit={handleSubmit}
      >
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Your Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="email"
            className="form-control"
            placeholder="Your Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Event Type"
            name="eventType"
            value={formData.eventType}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <input
            type="date"
            className="form-control"
            name="eventDate"
            value={formData.eventDate}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <textarea
            className="form-control"
            rows="4"
            placeholder="Your Message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Send Message
        </button>
      </form>

      <p className="mt-3">{status}</p>

      <div className="mt-4 d-flex justify-content-center gap-4">
        <a
          href="https://www.instagram.com/TwoDawgsDJ/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-dark fs-1"
        >
          <i className="bi bi-instagram"></i>
        </a>
        <a href="mailto:twodawgsdj@gmail.com" className="text-dark fs-1">
          <i className="bi bi-envelope-fill"></i>
        </a>
      </div>
    </div>
  );
};

export default Contact;
