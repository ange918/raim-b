import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Star, Award, Shield, Globe, BookOpen, Users, Eye, Briefcase } from 'lucide-react';
import './Home.css';

const Home = () => {
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

  const values = [
    { icon: <Star size={40} />, title: 'Excellence', description: 'Viser les plus hauts standards de qualité' },
    { icon: <Award size={40} />, title: 'Discipline', description: 'Rigueur et professionnalisme en toutes circonstances' },
    { icon: <Eye size={40} />, title: 'Talent', description: 'Révéler et cultiver les dons naturels' },
    { icon: <Briefcase size={40} />, title: 'Leadership', description: 'Inspirer et guider la nouvelle génération' },
  ];

  const benefits = [
    { icon: <BookOpen size={32} />, title: 'Formation', description: 'Programmes de formation professionnelle certifiés' },
    { icon: <Users size={32} />, title: 'Registre Professionnel', description: 'Inscription au registre national des mannequins' },
    { icon: <Shield size={32} />, title: 'Protection', description: 'Défense des droits et intérêts des mannequins' },
    { icon: <Globe size={32} />, title: 'Visibilité Internationale', description: 'Opportunités sur la scène mondiale de la mode' },
  ];

  return (
    <main className="home">
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">RAIM Bénin</h1>
          <p className="hero-subtitle">
            Professionnaliser et valoriser le mannequinat au Bénin
          </p>
          <div className="hero-buttons">
            <Link to="/contact" className="btn btn-primary">
              Rejoindre le réseau
            </Link>
            <Link to="/about" className="btn btn-secondary">
              Découvrir nos actions
            </Link>
          </div>
        </div>
      </section>

      <section className="values section">
        <div className="container">
          <h2 className="section-title fade-in">Nos Valeurs</h2>
          <p className="section-subtitle fade-in">
            Les piliers qui fondent notre engagement
          </p>
          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className="value-card fade-in">
                <div className="value-icon">{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="benefits section">
        <div className="container">
          <h2 className="section-title fade-in">Pourquoi rejoindre RAIM ?</h2>
          <p className="section-subtitle fade-in">
            Des avantages concrets pour votre carrière
          </p>
          <div className="benefits-grid">
            {benefits.map((benefit, index) => (
              <div key={index} className="benefit-card fade-in">
                <div className="benefit-icon">{benefit.icon}</div>
                <div className="benefit-content">
                  <h3>{benefit.title}</h3>
                  <p>{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta section">
        <div className="container">
          <div className="cta-content fade-in">
            <h2>Prêt à faire partie de l'élite du mannequinat béninois ?</h2>
            <p>Rejoignez un réseau de professionnels engagés pour l'excellence</p>
            <Link to="/contact" className="btn btn-dark">
              Nous contacter
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
