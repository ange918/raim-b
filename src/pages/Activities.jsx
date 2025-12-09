import { useEffect, useRef, useState } from 'react';
import { Calendar, Newspaper, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import './Activities.css';

const Activities = () => {
  const observerRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

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

  const events = [
    {
      date: '2025',
      title: 'Lancement des Formations Certifiantes',
      description: 'Début du programme de certification professionnelle pour mannequins',
    },
    {
      date: '2024',
      title: 'Assemblée Générale Constitutive',
      description: 'Première assemblée officielle du réseau avec élection du bureau',
    },
    {
      date: '2024',
      title: 'Signature des Partenariats',
      description: 'Accords de collaboration avec les principales agences du Bénin',
    },
    {
      date: '2023',
      title: 'Adoption des Statuts',
      description: 'Rédaction et validation des textes fondateurs du RAIM',
    },
  ];

  const gallery = [
    { id: 1, title: 'Défilé RAIM 2024' },
    { id: 2, title: 'Formation Mannequins' },
    { id: 3, title: 'Assemblée Générale' },
    { id: 4, title: 'Shooting Photo' },
    { id: 5, title: 'Événement Mode' },
    { id: 6, title: 'Cérémonie Officielle' },
  ];

  const pressArticles = [
    {
      title: 'RAIM Bénin : Une nouvelle ère pour le mannequinat',
      source: 'La Nation',
      date: '15 Mars 2024',
    },
    {
      title: 'Les agences de mannequins s\'unissent au Bénin',
      source: 'Fraternité',
      date: '20 Février 2024',
    },
    {
      title: 'Formation professionnelle : RAIM lance ses certifications',
      source: 'L\'Événement Précis',
      date: '10 Janvier 2025',
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(gallery.length / 3));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.ceil(gallery.length / 3)) % Math.ceil(gallery.length / 3));
  };

  return (
    <main className="activities">
      <section className="page-hero">
        <div className="page-hero-overlay"></div>
        <div className="page-hero-content">
          <h1>Activités & Presse</h1>
          <p>Suivez l'actualité du réseau</p>
        </div>
      </section>

      <section className="events-timeline section">
        <div className="container">
          <h2 className="section-title fade-in">
            <Calendar className="section-icon" /> Nos Événements
          </h2>
          <div className="events-grid">
            {events.map((event, index) => (
              <div key={index} className="event-card fade-in">
                <div className="event-date">{event.date}</div>
                <h3>{event.title}</h3>
                <p>{event.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="gallery-section section">
        <div className="container">
          <h2 className="section-title fade-in">Galerie Photos</h2>
          <div className="gallery-slider fade-in">
            <button className="slider-btn prev" onClick={prevSlide}>
              <ChevronLeft size={24} />
            </button>
            <div className="gallery-track" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
              {gallery.map((item) => (
                <div key={item.id} className="gallery-item">
                  <div className="gallery-placeholder">
                    <span>{item.title}</span>
                  </div>
                </div>
              ))}
            </div>
            <button className="slider-btn next" onClick={nextSlide}>
              <ChevronRight size={24} />
            </button>
          </div>
          <div className="slider-dots">
            {Array.from({ length: Math.ceil(gallery.length / 3) }).map((_, index) => (
              <button
                key={index}
                className={`dot ${currentSlide === index ? 'active' : ''}`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="press-section section">
        <div className="container">
          <h2 className="section-title fade-in">
            <Newspaper className="section-icon" /> Revue de Presse
          </h2>
          <div className="press-grid">
            {pressArticles.map((article, index) => (
              <div key={index} className="press-card fade-in">
                <span className="press-source">{article.source}</span>
                <h3>{article.title}</h3>
                <div className="press-footer">
                  <span className="press-date">{article.date}</span>
                  <a href="#" className="press-link">
                    Lire l'article <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Activities;
