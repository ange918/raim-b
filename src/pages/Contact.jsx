import { useState, useEffect, useRef } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const observerRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.fade-in').forEach((el) => {
      observerRef.current.observe(el);
    });

    return () => observerRef.current.disconnect();
  }, []);

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Le nom est requis';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Le téléphone est requis';
    } else if (!/^[+]?[\d\s-]{8,}$/.test(formData.phone)) {
      newErrors.phone = 'Numéro de téléphone invalide';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'L\'email est requis';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email invalide';
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'L\'objet est requis';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Le message est requis';
    } else if (formData.message.length < 20) {
      newErrors.message = 'Le message doit contenir au moins 20 caractères';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setSubmitted(true);
      setFormData({ name: '', phone: '', email: '', subject: '', message: '' });
    }
  };

  return (
    <main className="contact">
      <section className="page-hero">
        <div className="page-hero-overlay"></div>
        <div className="page-hero-content">
          <h1>Contact</h1>
          <p>Restons en contact</p>
        </div>
      </section>

      <section className="contact-section section">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info fade-in">
              <h2>Contactez-nous</h2>
              <p>
                Vous souhaitez rejoindre le réseau, proposer un partenariat ou 
                simplement en savoir plus ? N'hésitez pas à nous écrire.
              </p>
              
              <div className="info-items">
                <div className="info-item">
                  <MapPin size={24} />
                  <div>
                    <h4>Adresse</h4>
                    <p>Cotonou, Bénin</p>
                  </div>
                </div>
                <div className="info-item">
                  <Phone size={24} />
                  <div>
                    <h4>Téléphone</h4>
                    <p>+229 XX XX XX XX</p>
                  </div>
                </div>
                <div className="info-item">
                  <Mail size={24} />
                  <div>
                    <h4>Email</h4>
                    <p>contact@raimbenin.com</p>
                  </div>
                </div>
              </div>

              <div className="partnership-cta">
                <h3>Proposer un partenariat</h3>
                <p>Vous êtes une entreprise ou une organisation intéressée par une collaboration ?</p>
                <button className="btn btn-dark">Proposer un partenariat</button>
              </div>
            </div>

            <div className="contact-form-wrapper fade-in">
              {submitted ? (
                <div className="success-message">
                  <CheckCircle size={60} />
                  <h3>Message envoyé !</h3>
                  <p>Merci pour votre message. Nous vous répondrons dans les plus brefs délais.</p>
                  <button className="btn btn-primary" onClick={() => setSubmitted(false)}>
                    Envoyer un autre message
                  </button>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit}>
                  <h3>Envoyez-nous un message</h3>
                  
                  <div className="form-group">
                    <label htmlFor="name">Nom complet *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={errors.name ? 'error' : ''}
                    />
                    {errors.name && <span className="error-text">{errors.name}</span>}
                  </div>
                  
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="phone">Téléphone *</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className={errors.phone ? 'error' : ''}
                      />
                      {errors.phone && <span className="error-text">{errors.phone}</span>}
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="email">Email *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={errors.email ? 'error' : ''}
                      />
                      {errors.email && <span className="error-text">{errors.email}</span>}
                    </div>
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="subject">Objet *</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className={errors.subject ? 'error' : ''}
                    />
                    {errors.subject && <span className="error-text">{errors.subject}</span>}
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="message">Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      rows="5"
                      value={formData.message}
                      onChange={handleChange}
                      className={errors.message ? 'error' : ''}
                    ></textarea>
                    {errors.message && <span className="error-text">{errors.message}</span>}
                  </div>
                  
                  <button type="submit" className="btn btn-primary submit-btn">
                    <Send size={18} /> Envoyer le message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
