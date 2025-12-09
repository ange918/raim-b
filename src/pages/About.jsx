import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Target, Eye, CheckCircle, User, Building2, MapPin, Facebook, Instagram } from 'lucide-react';
import './About.css';

const About = () => {
  const observerRef = useRef(null);

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

  const timeline = [
    { year: '2023', title: 'Adoption des Statuts', description: 'Rédaction et adoption des statuts fondateurs du réseau' },
    { year: '2024', title: 'Lancement Officiel', description: 'Présentation publique du RAIM et premières adhésions' },
    { year: '2025', title: 'Formations & Certification', description: 'Début des programmes de formation et certification mannequin' },
  ];

  const objectives = [
    'Structurer et professionnaliser le secteur du mannequinat',
    'Créer un registre national des mannequins professionnels',
    'Développer des formations certifiantes',
    'Protéger les droits des mannequins',
    'Promouvoir le mannequinat béninois à l\'international',
    'Établir des standards éthiques pour l\'industrie',
  ];

  const leaders = [
    { name: 'Kpessèton Bienvenu BADOU', role: 'Président', color: 'green', facebook: '#', instagram: '#' },
    { name: 'Amand TANGNI', role: 'Secrétaire Général, Porte Parole', color: 'yellow', facebook: '#', instagram: '#' },
    { name: 'Hospice Hermann A. KEOUDA', role: 'Trésorier Général', color: 'red', facebook: '#', instagram: '#' },
    { name: 'Franck TEKOFFI', role: '1er Secrétaire à l\'Organisation', color: 'green', facebook: '#', instagram: '#' },
    { name: 'Sylvadine GOUGNIMENOU', role: '2è Secrétaire à l\'Organisation', color: 'yellow', facebook: '#', instagram: '#' },
    { name: 'Rediwane BISSIRIOU', role: '1er Commissaire aux Comptes', color: 'red', facebook: '#', instagram: '#' },
    { name: 'Tanguy AHOUANSOU', role: '2è Commissaire aux Comptes', color: 'green', facebook: '#', instagram: '#' },
  ];

  const agencies = [
    { name: '7 Marvel Agency', location: 'Cotonou, Bénin' },
    { name: 'DD Style Africa', location: 'Cotonou, Bénin' },
    { name: 'Models Academy', location: 'Cotonou, Bénin' },
    { name: 'Benin Fashion Management', location: 'Cotonou, Bénin' },
    { name: 'Elite Benin', location: 'Cotonou, Bénin' },
    { name: 'Onyx Models', location: 'Cotonou, Bénin' },
  ];

  return (
    <main className="about">
      <section className="page-hero about-hero">
        <div className="page-hero-overlay"></div>
        <div className="page-hero-content">
          <h1>À Propos</h1>
          <p>Découvrez notre histoire, notre équipe et nos agences membres</p>
        </div>
      </section>

      <section className="who-we-are section">
        <div className="container">
          <h2 className="section-title fade-in">Qui sommes-nous ?</h2>
          <div className="who-content fade-in">
            <p>
              Le <strong>RAIM Bénin</strong> (Réseau des Agences & Instituts du Mannequinat du Bénin) 
              est une organisation professionnelle qui fédère les agences et instituts de mannequinat 
              du Bénin. Notre mission est de structurer, professionnaliser et promouvoir le secteur 
              du mannequinat béninois sur la scène nationale et internationale.
            </p>
          </div>
        </div>
      </section>

      <section className="history section">
        <div className="container">
          <h2 className="section-title fade-in">Notre Histoire</h2>
          <div className="timeline">
            {timeline.map((item, index) => (
              <div key={index} className="timeline-item fade-in">
                <div className="timeline-year">{item.year}</div>
                <div className="timeline-content">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mission-vision section">
        <div className="container">
          <div className="mv-grid">
            <div className="mv-card fade-in">
              <div className="mv-icon">
                <Target size={48} />
              </div>
              <h3>Notre Mission</h3>
              <p>
                Fédérer les agences et instituts de mannequinat du Bénin pour créer 
                un écosystème professionnel, éthique et compétitif, capable de 
                former et promouvoir les talents béninois sur la scène internationale.
              </p>
            </div>
            <div className="mv-card fade-in">
              <div className="mv-icon vision">
                <Eye size={48} />
              </div>
              <h3>Notre Vision</h3>
              <p>
                Faire du Bénin une référence africaine en matière de mannequinat 
                professionnel, où chaque talent a accès à une formation de qualité 
                et à des opportunités de carrière dignes de son potentiel.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="objectives section">
        <div className="container">
          <h2 className="section-title fade-in">Nos Objectifs</h2>
          <div className="objectives-list">
            {objectives.map((objective, index) => (
              <div key={index} className="objective-item fade-in">
                <CheckCircle size={24} className="check-icon" />
                <span>{objective}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bureau section">
        <div className="container">
          <h2 className="section-title fade-in">Bureau & Organisation</h2>
          <p className="section-subtitle fade-in">
            Les membres du bureau exécutif du RAIM Bénin
          </p>
          <div className="bureau-grid">
            {leaders.map((leader, index) => (
              <div key={index} className={`bureau-card fade-in color-${leader.color}`}>
                <div className="bureau-photo">
                  <User size={60} />
                </div>
                <div className="bureau-info">
                  <h3>{leader.name}</h3>
                  <span className="bureau-role">{leader.role}</span>
                </div>
                <div className="bureau-social">
                  <a href={leader.facebook} className="social-link" aria-label="Facebook">
                    <Facebook size={18} />
                  </a>
                  <a href={leader.instagram} className="social-link" aria-label="Instagram">
                    <Instagram size={18} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="agencies-section section">
        <div className="container">
          <h2 className="section-title fade-in">Agences Membres</h2>
          <p className="section-subtitle fade-in">
            Les agences et instituts qui composent notre réseau
          </p>
          <div className="agencies-grid">
            {agencies.map((agency, index) => (
              <div key={index} className="agency-card fade-in">
                <div className="agency-logo">
                  <Building2 size={40} />
                </div>
                <div className="agency-info">
                  <h3>{agency.name}</h3>
                  <span className="agency-location">
                    <MapPin size={14} /> {agency.location}
                  </span>
                </div>
                <a href="#" className="btn btn-small">En savoir plus</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-cta section">
        <div className="container">
          <div className="about-cta-content fade-in">
            <h2>Rejoignez le réseau RAIM Bénin</h2>
            <p>
              Vous êtes une agence ou un institut de mannequinat au Bénin ? 
              Rejoignez notre réseau et bénéficiez d'un accompagnement professionnel.
            </p>
            <Link to="/contact" className="btn btn-dark">
              Demander affiliation
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
