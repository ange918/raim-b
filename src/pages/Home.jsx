import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Star, Award, Shield, Globe, BookOpen, Users, Eye, Briefcase, Calendar, Building2, TrendingUp, CheckCircle, ArrowRight } from 'lucide-react';
import logo from '../assets/logo.jpg';
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

  const stats = [
    { icon: <Calendar size={40} />, number: '2+', label: "Années d'existence" },
    { icon: <Building2 size={40} />, number: '6', label: 'Agences membres' },
    { icon: <Users size={40} />, number: '100+', label: 'Mannequins formés' },
    { icon: <TrendingUp size={40} />, number: '50+', label: 'Événements organisés' },
  ];

  const advantages = [
    { icon: <BookOpen size={32} />, title: 'Formation Professionnelle', description: 'Programmes de formation certifiés pour les mannequins débutants et confirmés' },
    { icon: <Users size={32} />, title: 'Réseau Professionnel', description: 'Accès à un réseau d\'agences et de professionnels établis dans le secteur' },
    { icon: <Shield size={32} />, title: 'Protection des Droits', description: 'Défense des droits et intérêts des mannequins face aux abus' },
    { icon: <Globe size={32} />, title: 'Visibilité Internationale', description: 'Opportunités de carrière sur la scène mondiale de la mode' },
  ];

  const blogPosts = [
    {
      title: 'Les tendances de la mode africaine en 2024',
      excerpt: 'Découvrez les dernières tendances qui façonnent l\'industrie de la mode sur le continent africain.',
      date: '15 Nov 2024',
      category: 'Mode'
    },
    {
      title: 'Formation : Comment devenir mannequin professionnel',
      excerpt: 'Les étapes essentielles pour démarrer une carrière réussie dans le mannequinat.',
      date: '08 Nov 2024',
      category: 'Formation'
    },
    {
      title: 'RAIM Bénin participe à la Fashion Week de Lagos',
      excerpt: 'Nos mannequins représentent fièrement le Bénin lors de cet événement majeur.',
      date: '25 Oct 2024',
      category: 'Événements'
    },
  ];

  return (
    <main className="home">
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">RAIM Bénin</h1>
          <p className="hero-definition">Réseau des Agences & Instituts du Mannequinat du Bénin</p>
          <p className="hero-subtitle">
            Professionnaliser et valoriser le mannequinat au Bénin
          </p>
          <div className="hero-buttons">
            <Link to="/contact" className="btn btn-primary">
              Rejoindre le réseau
            </Link>
            <Link to="/a-propos" className="btn btn-secondary">
              Découvrir nos actions
            </Link>
          </div>
        </div>
      </section>

      <section className="about-preview section">
        <div className="container">
          <div className="about-preview-grid">
            <div className="about-preview-content fade-in">
              <h2 className="section-title-left">Qui sommes-nous ?</h2>
              <p className="about-preview-text">
                Le <strong>RAIM Bénin</strong> (Réseau des Agences & Instituts du Mannequinat du Bénin) 
                est une organisation professionnelle qui fédère les agences et instituts de mannequinat 
                du Bénin. Notre mission est de structurer, professionnaliser et promouvoir le secteur 
                du mannequinat béninois sur la scène nationale et internationale.
              </p>
              <p className="about-preview-text">
                Créé pour répondre aux défis du secteur, le RAIM s'engage à former les talents, 
                défendre les droits des mannequins et établir des standards de qualité reconnus 
                par l'industrie de la mode.
              </p>
              <Link to="/a-propos" className="btn btn-outline">
                En savoir plus <ArrowRight size={18} />
              </Link>
            </div>
            <div className="about-preview-image fade-in">
              <img src={logo} alt="RAIM Bénin" className="about-logo" />
            </div>
          </div>
        </div>
      </section>

      <section className="stats section">
        <div className="container">
          <h2 className="section-title fade-in">RAIM en Chiffres</h2>
          <p className="section-subtitle fade-in">
            Notre impact dans le secteur du mannequinat béninois
          </p>
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card fade-in">
                <div className="stat-icon">{stat.icon}</div>
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="advantages section">
        <div className="container">
          <h2 className="section-title fade-in">Avantages</h2>
          <p className="section-subtitle fade-in">
            Pourquoi rejoindre le réseau RAIM Bénin ?
          </p>
          <div className="advantages-grid">
            {advantages.map((advantage, index) => (
              <div key={index} className="advantage-card fade-in">
                <div className="advantage-icon">{advantage.icon}</div>
                <div className="advantage-content">
                  <h3>{advantage.title}</h3>
                  <p>{advantage.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="blog section">
        <div className="container">
          <h2 className="section-title fade-in">Blog & Actualités</h2>
          <p className="section-subtitle fade-in">
            Restez informé des dernières nouvelles du mannequinat béninois
          </p>
          <div className="blog-grid">
            {blogPosts.map((post, index) => (
              <div key={index} className="blog-card fade-in">
                <div className="blog-image">
                  <span className="blog-category">{post.category}</span>
                </div>
                <div className="blog-content">
                  <span className="blog-date">{post.date}</span>
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                  <Link to="/blog" className="blog-link">
                    Lire la suite <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="blog-cta fade-in">
            <Link to="/blog" className="btn btn-outline">
              Voir tous les articles <ArrowRight size={18} />
            </Link>
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
