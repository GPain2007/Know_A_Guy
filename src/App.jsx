import { useState } from 'react'
import './App.css'

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Simulate form submission
    setIsSubmitted(true)
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: '', email: '', phone: '', message: '' })
    }, 3000)
  }

  const scrollToContact = () => {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="app">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <h1 className="nav-logo">Know A Guy</h1>
          <ul className="nav-menu">
            <li><a href="#home">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <h1>Professional Lawn Care Services</h1>
          <p>Your trusted local lawn mowing and landscaping experts</p>
          <button className="cta-button" onClick={scrollToContact}>Get Free Quote</button>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services">
        <div className="container">
          <h2>Our Services</h2>
          <div className="services-grid">
            <div className="service-card">
              <h3>Lawn Mowing</h3>
              <p>Professional grass cutting with precision and care for your property.</p>
            </div>
            <div className="service-card">
              <h3>Hedge Trimming</h3>
              <p>Expert hedge and shrub trimming to keep your landscape looking sharp.</p>
            </div>
            <div className="service-card">
              <h3>Garden Maintenance</h3>
              <p>Complete garden care including weeding, planting, and seasonal cleanup.</p>
            </div>
            <div className="service-card">
              <h3>Landscaping</h3>
              <p>Design and installation of beautiful outdoor spaces for your home.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <h2>About Know A Guy</h2>
          <p>
            With years of experience in lawn care and landscaping, Know A Guy is your reliable 
            partner for all outdoor maintenance needs. We pride ourselves on quality work, 
            affordable prices, and exceptional customer service.
          </p>
          <div className="stats">
            <div className="stat">
              <h3>5+</h3>
              <p>Years Experience</p>
            </div>
            <div className="stat">
              <h3>100+</h3>
              <p>Happy Customers</p>
            </div>
            <div className="stat">
              <h3>24/7</h3>
              <p>Support Available</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <h2>Get In Touch</h2>
          <div className="contact-content">
            <div className="contact-info">
              <h3>Contact Information</h3>
              <p>📞 Phone: (555) 123-4567</p>
              <p>📧 Email: info@knowaguy.com</p>
              <p>📍 Service Area: Local Metro Area</p>
            </div>
            <div className="contact-form">
              <h3>Request a Quote</h3>
              {isSubmitted ? (
                <div className="success-message">
                  <h4>Thank you for your message!</h4>
                  <p>We'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <input 
                    type="text" 
                    name="name"
                    placeholder="Your Name" 
                    value={formData.name}
                    onChange={handleInputChange}
                    required 
                  />
                  <input 
                    type="email" 
                    name="email"
                    placeholder="Your Email" 
                    value={formData.email}
                    onChange={handleInputChange}
                    required 
                  />
                  <input 
                    type="tel" 
                    name="phone"
                    placeholder="Your Phone" 
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                  <textarea 
                    name="message"
                    placeholder="Tell us about your project..." 
                    rows="4" 
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                  ></textarea>
                  <button type="submit">Send Message</button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2024 Know A Guy Lawn Care. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
