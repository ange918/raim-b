import { useEffect, useRef } from 'react';
import { User } from 'lucide-react';
import './Leadership.css';

const Leadership = () => {
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

  const leaders = [
    {
      name: 'Stephins Wegbe',
      role: 'Président',
      description: 'Visionnaire et leader engagé pour le développement du mannequinat au Bénin',
      color: 'green',
    },
    {
      name: 'Romaric Mongazi',
      role: 'Secrétaire Général',
      description: 'Expert en organisation et coordination des activités du réseau',
      color: 'yellow',
    },
    {
      name: 'Hanelore Codjia',
      role: 'Trésorière',
      description: 'Gestionnaire rigoureuse des ressources financières du réseau',
      color: 'red',
    },
    {
      name: 'Franck Te Koffi',
      role: 'Chargé de l\'Organisation',
      description: 'Responsable de la planification et de l\'exécution des événements',
      color: 'green',
    },
  ];

  return (
    <main className="leadership">
      <section className="page-hero">
        <div className="page-hero-overlay"></div>
        <div className="page-hero-content">
          <h1>Bureau & Organisation</h1>
          <p>Les visages de notre engagement</p>
        </div>
      </section>

      <section className="team section">
        <div className="container">
          <h2 className="section-title fade-in">Notre Équipe Dirigeante</h2>
          <p className="section-subtitle fade-in">
            Des professionnels dévoués à l'excellence du mannequinat béninois
          </p>
          <div className="team-grid">
            {leaders.map((leader, index) => (
              <div key={index} className={`team-card fade-in color-${leader.color}`}>
                <div className="team-photo">
                  <User size={80} />
                </div>
                <div className="team-info">
                  <h3>{leader.name}</h3>
                  <span className="team-role">{leader.role}</span>
                  <p>{leader.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="org-structure section">
        <div className="container">
          <h2 className="section-title fade-in">Structure Organisationnelle</h2>
          <div className="org-content fade-in">
            <div className="org-item">
              <h3>Assemblée Générale</h3>
              <p>Instance suprême regroupant toutes les agences et instituts membres</p>
            </div>
            <div className="org-item">
              <h3>Bureau Exécutif</h3>
              <p>Organe de direction et d'administration courante du réseau</p>
            </div>
            <div className="org-item">
              <h3>Commissions Spécialisées</h3>
              <p>Groupes de travail thématiques pour les projets spécifiques</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Leadership;
