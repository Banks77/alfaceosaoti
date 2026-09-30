import { useRef, useState } from "react";
import "./App.css";

import ceo1 from "./assets/ceo.jpeg";
import ceo2 from "./assets/ceo2.jpeg";
import ceo3 from "./assets/ceo3.jpeg";
import ceo4 from "./assets/ceo4.jpeg";
import ceo5 from "./assets/ceo5.jpeg";
import ceo06 from "./assets/ceo6.jpeg";
import ceofoods from "./assets/ceofoods.jpeg";
import ceo9 from "./assets/ceo9.jpeg";
import ceo12 from "./assets/ceo12.jpeg";

const WHATSAPP = "2349135822704";
const PHONE = "+234 913 582 2704";

const waLink = (msg) =>
  `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`;

const services = [
  {
    name: "Grace Booster",
    label: "Personal Guidance",
    img: ceo06,
  },
  {
    name: "Energy Healing",
    label: "Balance & Renewal",
    img: ceo4,
  },
  {
    name: "Herbal Treatments",
    label: "Natural Wellness",
    img: ceo3,
  },
  {
    name: "Herbal Wellness Foods",
    label: "Natural Nutrition",
    img: ceofoods,
  },
  {
    name: "Wellness Consultation",
    label: "Personal Wellness",
    img: ceo9,
  },
  {
    name: "Spiritual Guidance",
    label: "Inner Clarity",
    img: ceo2,
  },
  {
    name: "Spiritual Body Boost",
    label: "Peace & Focus",
    img: ceo4,
  },
  {
    name: "Grace Booster Soap",
    label: "Personal Care",
    img: ceo5,
  },
  {
    name: "Personalized Soul Alignment",
    label: "Spiritual Solutions",
    img: ceo1,
  },
  {
    name: "Holistic Renewal",
    label: "Mind & Body Care",
    img: ceo12,
  },
];

const nav = [
  { name: "Home", id: "home" },
  { name: "Services", id: "services" },
  { name: "Wellness", id: "spiritualwellness" },
  { name: "Contact", id: "contactus" },
];

function Slider() {
  const ref = useRef(null);

  const scroll = (dir) => {
    ref.current?.scrollBy({
      left: dir * 300,
      behavior: "smooth",
    });
  };

  return (
    <div className="slider-wrap">
      <button
        type="button"
        className="slider-btn prev"
        onClick={() => scroll(-1)}
        aria-label="Previous services"
      >
        ‹
      </button>

      <div className="slider" ref={ref}>
        {services.map((service) => (
          <article className="card" key={service.name}>
            <div className="card-image">
              <img src={service.img} alt={service.name} loading="lazy" />
            </div>

            <div className="card-body">
              <span className="service-label">{service.label}</span>
              <h3>{service.name}</h3>

              <a
                className="btn small"
                href={waLink(
                  `Hello Alfa CEO Saoti, I would like to know more about ${service.name}.`
                )}
                target="_blank"
                rel="noreferrer"
              >
                Inquire on WhatsApp →
              </a>
            </div>
          </article>
        ))}
      </div>

      <button
        type="button"
        className="slider-btn next"
        onClick={() => scroll(1)}
        aria-label="Next services"
      >
        ›
      </button>
    </div>
  );
}

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      {/* NAVIGATION */}
      <header className="nav">
        <a className="brand" href="#home" onClick={closeMenu}>
          <span className="brand-icon">✦</span>
          <span>
            ALFA CEO SAOTI
            <small>SPIRITUAL WELLNESS</small>
          </span>
        </a>

        {/* Hamburger Menu Button */}
        <button
          type="button"
          className={`menu-toggle ${isMenuOpen ? "open" : ""}`}
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={isMenuOpen}
          aria-controls="primary-navigation"
        >
          <span className="hamburger"></span>
        </button>

        <nav
          id="primary-navigation"
          className={isMenuOpen ? "nav-active" : ""}
        >
          {nav.map((n) => (
            <a key={n.id} href={`#${n.id}`} onClick={closeMenu}>
              {n.name}
            </a>
          ))}
          <a
            className="btn nav-cta mobile-only"
            href={waLink("Hello Alfa CEO Saoti, I would like to book a consultation.")}
            target="_blank"
            rel="noreferrer"
            onClick={closeMenu}
          >
            Book a Session
          </a>
        </nav>

        <a
          className="btn nav-cta desktop-only"
          href={waLink("Hello Alfa CEO Saoti, I would like to book a consultation.")}
          target="_blank"
          rel="noreferrer"
        >
          Book a Session
        </a>
      </header>

      <main>
        {/* HERO */}
        <section id="home" className="hero">
          <div className="hero-content">
            <span className="eyebrow">✦ WELCOME TO ALFA CEO SAOTI ✦</span>

            <h1>
              Discover Your Inner Light.
              <span>Heal, Grow & Rise.</span>
            </h1>

            <p className="tagline">
              Your Partner in Spiritual Growth and Empowerment.
            </p>

            <p>
              Discover a welcoming space for spiritual guidance, personal
              reflection, inner peace, and self-discovery. Through compassionate
              consultations and personalized support, we help you explore your
              journey with clarity and purpose.
            </p>

            <div className="btn-row">
              <a className="btn" href="#services">
                Explore Our Services →
              </a>

              <a
                className="btn outline"
                href={waLink("Hello, I would like to begin my spiritual journey.")}
                target="_blank"
                rel="noreferrer"
              >
                Book a Consultation
              </a>
            </div>

            <div className="hero-note">
              <span>✦ Compassionate Guidance</span>
              <span>✦ Personal Attention</span>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section id="services" className="section services-section">
          <div className="section-heading">
            <span className="eyebrow">WHAT WE OFFER</span>
            <h2>Our Spiritual Services</h2>
            <p>
              Explore our personalized spiritual consultations, wellness
              offerings, and products.
            </p>
          </div>

          <Slider />

          <div className="center-action">
            <a
              className="btn"
              href={waLink("Hello, please tell me more about your services and products.")}
              target="_blank"
              rel="noreferrer"
            >
              View All Services →
            </a>
          </div>
        </section>

        {/* WELLNESS */}
        <section id="spiritualwellness" className="section wellness-section">
          <div className="section-heading">
            <span className="eyebrow">WHY CHOOSE US</span>
            <h2>A Space for Growth & Renewal</h2>
            <p>
              Our approach is centered on care, personal attention, and
              respectful spiritual support.
            </p>
          </div>

          <div className="grid-3">
            <article className="feature-card">
              <span className="feature-icon">✦</span>
              <h3>Compassionate Guidance</h3>
              <p>
                A welcoming, non-judgmental environment where your concerns
                are heard and respected.
              </p>
            </article>

            <article className="feature-card">
              <span className="feature-icon">☯</span>
              <h3>Intuitive Insight</h3>
              <p>
                Spiritual reflection and guidance to support personal
                awareness and clarity.
              </p>
            </article>

            <article className="feature-card">
              <span className="feature-icon">♡</span>
              <h3>Personalized Support</h3>
              <p>
                Consultations tailored to your personal questions, goals,
                and individual journey.
              </p>
            </article>

            <article className="feature-card">
              <span className="feature-icon">✺</span>
              <h3>Holistic Wellness</h3>
              <p>
                Encouraging balance through spiritual reflection and
                responsible wellness practices.
              </p>
            </article>

            <article className="feature-card">
              <span className="feature-icon">🌿</span>
              <h3>Herbal Wellness</h3>
              <p>
                Natural wellness products and guidance, with appropriate
                professional advice where needed.
              </p>
            </article>

            <article className="feature-card">
              <span className="feature-icon">✧</span>
              <h3>A Supportive Community</h3>
              <p>
                A place to explore personal development, confidence, and
                meaningful spiritual growth.
              </p>
            </article>
          </div>
        </section>

        {/* COMMITMENT */}
        <section className="dark commitment">
          <span className="eyebrow">OUR COMMITMENT</span>
          <center>
            <h2>Every Journey Deserves Care, Respect & Understanding.</h2>
          </center>
          <p>
            At Alfa CEO Saoti, we are committed to creating a supportive
            environment where every person can explore their spiritual
            journey with dignity, encouragement, and compassion.
          </p>

          <a
            className="btn light-btn"
            href={waLink("Hello Alfa CEO Saoti, I would like to speak with you.")}
            target="_blank"
            rel="noreferrer"
          >
            Speak With Us →
          </a>
        </section>

        {/* HOW IT WORKS */}
        <section id="howtoorder" className="section">
          <div className="section-heading">
            <span className="eyebrow">GET STARTED</span>
            <h2>How to Begin Your Journey</h2>
          </div>

          <div className="steps">
            {[
              ["01", "Reach Out", "Send us a message and tell us what you need."],
              ["02", "Book a Consultation", "Discuss your interests and arrange a session."],
              ["03", "Receive Guidance", "Explore personalized spiritual support."],
              ["04", "Move Forward", "Continue your journey with clarity and intention."],
            ].map(([number, title, description]) => (
              <div className="step" key={number}>
                <span className="step-num">{number}</span>
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            ))}
          </div>

          <div className="center-action">
            <a
              className="btn"
              href={waLink("Hello, I am ready to begin my spiritual journey.")}
              target="_blank"
              rel="noreferrer"
            >
              Start Your Journey →
            </a>
          </div>
        </section>

        {/* SOCIAL MEDIA */}
        <section id="contactus" className="section social-section">
          <div className="section-heading">
            <span className="eyebrow">STAY CONNECTED</span>
            <h2>Connect With Alfa CEO Saoti</h2>
            <p>
              Have a question or want to learn more? Reach us through your
              preferred platform.
            </p>
          </div>

          <div className="social-grid">
            <a
              className="social-card"
              href={waLink("Hello Alfa CEO Saoti, I would like to make an inquiry.")}
              target="_blank"
              rel="noreferrer"
            >
              <span>💬</span>
              <h3>WhatsApp</h3>
              <p>09135822704</p>
              <strong>Chat Now →</strong>
            </a>

            <a className="social-card" href={`tel:${PHONE.replace(/\s/g, "")}`}>
              <span>☎</span>
              <h3>Phone Call</h3>
              <p>{PHONE}</p>
              <strong>Call Us →</strong>
            </a>

            <a
              className="social-card"
              href="https://snapchat.com/t/kk2irQai"
              target="_blank"
              rel="noreferrer"
            >
              <span>👻</span>
              <h3>Snapchat</h3>
              <p>@ceo_saoti</p>
              <strong>Follow Us →</strong>
            </a>

            <a
              className="social-card"
              href="https://www.instagram.com/ceo_saoti001/"
              target="_blank"
              rel="noreferrer"
            >
              <span>◎</span>
              <h3>Instagram</h3>
              <p>@ceo_saoti001</p>
              <strong>Follow Us →</strong>
            </a>
          </div>
        </section>

        
      </main>

      {/* FOOTER */}
      <footer className="footer">
        <a className="brand footer-brand" href="#home">
          ✦ ALFA CEO SAOTI
        </a>

        <p>Your Partner in Spiritual Growth and Empowerment.</p>

        <nav aria-label="Footer navigation">
          {nav.map((n) => (
            <a key={n.id} href={`#${n.id}`}>
              {n.name}
            </a>
          ))}
        </nav>

        <div className="footer-social">
          <a href={waLink("Hello Alfa CEO Saoti.")} target="_blank" rel="noreferrer">
            WhatsApp
          </a>
          <a href="https://www.instagram.com/ceo_saoti001/" target="_blank" rel="noreferrer">
            Instagram
          </a>
          <a href="https://snapchat.com/t/kk2irQai" target="_blank" rel="noreferrer">
            Snapchat
          </a>
        </div>

        <p className="copyright">
          © {new Date().getFullYear()} Alfa CEO Saoti. All rights reserved.
          {" · "}
          <a
            href="https://towoju-portfolio.web.app/"
            target="_blank"
            rel="noreferrer"
          >
            Website by ABWebTech
          </a>
        </p>
      </footer>

      {/* FLOATING WHATSAPP */}
      <a
        className="floating-wa"
        href={waLink("Hello Alfa CEO Saoti, I need more information.")}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
      >
        💬
      </a>
    </>
  );
}