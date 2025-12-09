import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import logo from '../assets/logo.jpg';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-brand">
            <img src={logo} alt="RAIM Bénin" className="footer-logo" />
            <p>Réseau des Agences et Instituts du Mannequinat du Bénin</p>
            <div className="social-links">
              <a href="#" aria-label="Facebook"><Facebook size={20} /></a>
              <a href="#" aria-label="Instagram"><Instagram size={20} /></a>
              <a href="#" aria-label="Twitter"><Twitter size={20} /></a>
              <a href="#" aria-label="LinkedIn"><Linkedin size={20} /></a>
            </div>
          </div>

          <div className="footer-links">
            <h4>Navigation</h4>
            <Link to="/">Accueil</Link>
            <Link to="/about">Qui sommes-nous ?</Link>
            <Link to="/leadership">Bureau</Link>
            <Link to="/agencies">Agences</Link>
            <Link to="/activities">Activités</Link>
            <Link to="/contact">Contact</Link>
          </div>

          <div className="footer-links">
            <h4>Ressources</h4>
            <a href="#">Devenir membre</a>
            <a href="#">Formation mannequin</a>
            <a href="#">Certification</a>
            <a href="#">Partenariats</a>
          </div>

          <div className="footer-contact">
            <h4>Contact</h4>
            <p><MapPin size={16} /> Cotonou, Bénin</p>
            <p><Phone size={16} /> +229 XX XX XX XX</p>
            <p><Mail size={16} /> contact@raimbenin.com</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} RAIM Bénin. Tous droits réservés.</p>
          <div className="footer-legal">
            <a href="#">Mentions légales</a>
            <a href="#">Politique de confidentialité</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
