import { useEffect, useRef } from 'react';
import { Target, Eye, CheckCircle } from 'lucide-react';
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

  return (
    <main className="about">
      <section className="page-hero">
        <div className="page-hero-overlay"></div>
        <div className="page-hero-content">
          <h1>Qui sommes-nous ?</h1>
          <p>Découvrez notre histoire et notre engagement</p>
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

      <section className="quote-section section">
        <div className="container">
          <blockquote className="quote fade-in">
            <p>
              "Le mannequinat africain porte en lui l'essence de notre identité, 
              la richesse de nos cultures et la beauté de notre diversité. 
              Notre mission est de le faire rayonner dans le monde entier."
            </p>
            <cite>— RAIM Bénin</cite>
          </blockquote>
        </div>
      </section>
    </main>
  );
};

export default About;
