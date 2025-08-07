import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="homepage">
      {/* Header */}
      <header className="header">
        <div className="header-container">
          <a href="#learn" className="nav-left">Learn</a>
          <div className="nav-center">
            <Link to="/form">Register</Link>
            <div className="logo">
              <div className="logo-icon">
                <img 
                  src="/images/Logo.png" 
                  alt="The Greennovative Lab Logo" 
                  className="logo-image"
                />
              </div>
            </div>
            <a href="#translight">Translight</a>
            <a href="#residential">Residential</a>
          </div>
          <a href="#commercial" className="nav-right">Commercial</a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-video-container">
          <video 
            className="hero-video" 
            autoPlay 
            muted 
            loop 
            playsInline
          >
            <source src="/images/solar-farm.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="hero-overlay"></div>
        </div>
        <div className="hero-content">
          <h1>Leading Africa's future energy needs and goals</h1>
          <div className="hero-buttons">
            <Link to="/form" className="btn btn-orange">Register Now</Link>
            <Link to="/form" className="btn btn-blue">Contact Sales</Link>
          </div>
        </div>
      </section>

      {/* Renewable Energy Keynote */}
      <section className="keynote-section">
        <div className="container">
          <div className="keynote-content">
            <div className="keynote-text">
              <h2>Renewable Energy Keynote</h2>
              <p>In 30 minutes, discover all you need to know as a corporate worker about the renewable energy ecosystem, ESG goals, solar offers available to you and your company, its impact and benefits</p>
              <p className="airing-date">Airing live on 25th August</p>
              <Link to="/form" className="btn btn-white">Register now</Link>
            </div>
            <div className="keynote-image">
              <div className="ceo-photo">
                <img 
                  src="/images/ceo-picture.jpg" 
                  alt="CEO of Translight Solar" 
                  className="ceo-image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Understand What Solar is */}
      <section className="solar-section">
        <div className="container">
          <div className="section-header">
            <h3 className="section-subtitle">Learn</h3>
            <h2>Understand What Solar is</h2>
          </div>
          <div className="solar-content">
            <div className="solar-left">
              <div className="house-image-small">
                <img 
                  src="/images/how-solar-works.jpg" 
                  alt="House with solar panels" 
                  className="small-house-image"
                />
              </div>
            </div>
            <div className="solar-center">
              <div className="house-render">
                <img 
                  src="/images/House.png" 
                  alt="Modern house with solar panels" 
                  className="house-image"
                />
              </div>
            </div>
            <div className="solar-right">
              <div className="aerial-image">
                <img 
                  src="/images/read-solar guide.jpg" 
                  alt="Aerial view of solar panels" 
                  className="aerial-house-image"
                />
              </div>
              <div className="solar-guide">
                <h3>Read our solar guide</h3>
                <p>A lot of people know just about solar panels and have very limited idea of how solar works. Lets walk you through how solar works, what it offers and the prospects of solar power!</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Renewable Energy Partner */}
      <section className="partner-section">
        <div className="container">
          <h2>Your Renewable Energy Partner</h2>
          <div className="partner-content">
            <div className="partner-left">
              <div className="project-image">
                <div className="industrial-placeholder">🏭</div>
                <span>Rocksters Roofing</span>
              </div>
              <p>Translight is a leading energy service provider, specializing heavily in rural locations and towns, to ensure accessibility of medium and large scale solutions, in a bid to ensure cost savings, efficiency, sustainability goals.</p>
            </div>
            <div className="partner-right">
              <h3>Our projects</h3>
              <p>We lead commercial and industrial green goals</p>
              <div className="project-grid">
                <div className="project-item">
                  <div className="solar-array">⚡</div>
                </div>
                <div className="project-item">
                  <div className="university">🎓</div>
                  <span>Driving green sustainability goals for Ashesi University</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Go Solar Section */}
      <section className="go-solar-section">
        <div className="container">
          <h2>You can Go Solar So Easily!</h2>
          <div className="solar-steps">
            <div className="step">
              <h3>Get yourself a system</h3>
              <p>With very very, flexible financing</p>
              <div className="step-image">
                <div className="workers-placeholder">👷‍♂️</div>
                <span>Our seasoned team</span>
              </div>
            </div>
            <div className="step">
              <h3>Equipment</h3>
              <div className="equipment">
                <div className="inverter">🔌</div>
                <div className="panels">☀️</div>
              </div>
            </div>
            <div className="step">
              <h3>Management System</h3>
              <div className="management">
                <div className="phone-app">📱</div>
                <span>Our smart energy management system</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="projects-section">
        <div className="container">
          <h2>Projects</h2>
          <div className="projects-grid">
            {[...Array(9)].map((_, i) => (
              <div key={i} className="project-thumbnail">
                <div className="project-placeholder">🏠</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="partners-section">
        <div className="container">
          <h2>Top global companies trust and work with us.</h2>
          <p>Our partners and clients</p>
          <div className="partners-grid">
            {[
              'Translight', 'Ghana Airports', 'Rocksters', 'The Church of Jesus Christ of Latter-day Saints',
              'Ashesi University', 'Cloud Solar', 'JW.org', 'RIFE International', 'GreenTech HQ',
              'Danadams', 'GFZA', 'Newmont', 'Standard Chartered', 'Ecobank', 'First National Bank',
              'Stanbic Bank', 'Fidelity Bank'
            ].map((partner, i) => (
              <div key={i} className="partner-logo">
                <span>{partner}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Partners Section */}
      <section className="join-section">
        <div className="container">
          <h2>Join the 4000+ partners and customers powered by Translight Solar</h2>
          <div className="join-buttons">
            <Link to="/form" className="btn btn-white">Register Now</Link>
            <Link to="/form" className="btn btn-orange">Contact Sales</Link>
          </div>
        </div>
      </section>

      {/* Learn More Section */}
      <section className="learn-section">
        <div className="container">
          <h2>Learn more about Solar</h2>
          <p>Ask the solarman anything about solar</p>
          <div className="question-form">
            <input 
              type="text" 
              placeholder="Type your question here" 
              className="question-input"
            />
            <button className="btn btn-orange">Ask translight</button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-column">
              <h4>Pages</h4>
              <Link to="/">Home</Link>
              <a href="#translight">Translight</a>
              <a href="#projects">Projects</a>
              <a href="#residential">Residential</a>
              <a href="#commercial">Commercial</a>
              <a href="#contact">Contact</a>
            </div>
            <div className="footer-column">
              <h4>Packages</h4>
              <a href="#eco">Eco</a>
              <a href="#bronze">Bronze</a>
              <a href="#silver">Silver</a>
              <a href="#gold">Gold</a>
              <a href="#platinum">Platinum</a>
              <a href="#titanium">Titanium</a>
            </div>
            <div className="footer-column">
              <h4>Videos</h4>
              <a href="#totalenergies">Totalenergies partnership</a>
              <a href="#gfza">GFZA installation</a>
              <a href="#how-solar">How solar works</a>
              <a href="#flexipay">Translight Flexipay</a>
              <a href="#podcasts">TSL Podcasts</a>
            </div>
            <div className="footer-column">
              <h4>Reach us</h4>
              <a href="#phone">Phone</a>
              <a href="#facebook">Facebook</a>
              <a href="#linkedin">LinkedIn</a>
            </div>
          </div>
          <div className="footer-bottom">
            <p>Greennovative Labs 2025</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage; 