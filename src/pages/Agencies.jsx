import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Building2, Users, MapPin, ExternalLink } from 'lucide-react';
import './Agencies.css';

const Agencies = () => {
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

  const agencies = [
    {
      name: '7 Marvel Agency',
      description: 'Agence de mannequins professionnels spécialisée dans la mode haute couture',
      location: 'Cotonou',
      members: '25+',
    },
    {
      name: 'DD Style Africa',
      description: 'Institut de formation et agence de mannequinat panafricaine',
      location: 'Cotonou',
      members: '30+',
    },
    {
      name: 'Models Academy & Management',
      description: 'Académie de formation complète pour mannequins débutants et confirmés',
      location: 'Porto-Novo',
      members: '40+',
    },
  ];

  return (
    <main className="agencies">
      <section className="page-hero">
        <div className="page-hero-overlay"></div>
        <div className="page-hero-content">
          <h1>Agences Membres</h1>
          <p>Les piliers de notre réseau professionnel</p>
        </div>
      </section>

      <section className="agencies-list section">
        <div className="container">
          <h2 className="section-title fade-in">Nos Agences Partenaires</h2>
          <p className="section-subtitle fade-in">
            Des structures engagées pour l'excellence du mannequinat béninois
          </p>
          <div className="agencies-grid">
            {agencies.map((agency, index) => (
              <div key={index} className="agency-card fade-in">
                <div className="agency-icon">
                  <Building2 size={48} />
                </div>
                <div className="agency-content">
                  <h3>{agency.name}</h3>
                  <p className="agency-description">{agency.description}</p>
                  <div className="agency-meta">
                    <span><MapPin size={16} /> {agency.location}</span>
                    <span><Users size={16} /> {agency.members} mannequins</span>
                  </div>
                  <a href="#" className="agency-link">
                    En savoir plus <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="join-section section">
        <div className="container">
          <div className="join-content fade-in">
            <h2>Votre agence souhaite rejoindre le réseau ?</h2>
            <p>
              Rejoignez RAIM Bénin et bénéficiez d'un réseau professionnel structuré, 
              d'opportunités de collaboration et d'une visibilité accrue.
            </p>
            <Link to="/contact" className="btn btn-primary">
              Demander affiliation
            </Link>
          </div>
        </div>
      </section>

      <section className="benefits-join section">
        <div className="container">
          <h2 className="section-title fade-in">Avantages de l'Affiliation</h2>
          <div className="benefits-grid fade-in">
            <div className="benefit-item">
              <h3>Réseau Professionnel</h3>
              <p>Accès à un réseau d'agences et de professionnels établis</p>
            </div>
            <div className="benefit-item">
              <h3>Formations</h3>
              <p>Programmes de formation et de perfectionnement pour vos mannequins</p>
            </div>
            <div className="benefit-item">
              <h3>Visibilité</h3>
              <p>Promotion sur nos canaux officiels et lors de nos événements</p>
            </div>
            <div className="benefit-item">
              <h3>Certification</h3>
              <p>Label qualité reconnu par les professionnels du secteur</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Agencies;
