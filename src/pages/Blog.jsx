import { useEffect, useRef } from 'react';
import { ArrowRight, Calendar, User, Tag } from 'lucide-react';
import './Blog.css';

const Blog = () => {
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

  const featuredPost = {
    title: 'Les tendances de la mode africaine en 2024',
    excerpt: 'Découvrez les dernières tendances qui façonnent l\'industrie de la mode sur le continent africain. De la haute couture aux créateurs émergents, l\'Afrique s\'impose comme une référence mondiale.',
    date: '15 Nov 2024',
    author: 'RAIM Bénin',
    category: 'Mode'
  };

  const blogPosts = [
    {
      title: 'Formation : Comment devenir mannequin professionnel',
      excerpt: 'Les étapes essentielles pour démarrer une carrière réussie dans le mannequinat. Conseils d\'experts et parcours recommandés.',
      date: '08 Nov 2024',
      author: 'RAIM Bénin',
      category: 'Formation'
    },
    {
      title: 'RAIM Bénin participe à la Fashion Week de Lagos',
      excerpt: 'Nos mannequins représentent fièrement le Bénin lors de cet événement majeur de la mode africaine.',
      date: '25 Oct 2024',
      author: 'RAIM Bénin',
      category: 'Événements'
    },
    {
      title: 'Interview : Kpessèton Bienvenu BADOU, Président du RAIM',
      excerpt: 'Le président du RAIM Bénin partage sa vision pour le mannequinat béninois et les projets à venir.',
      date: '18 Oct 2024',
      author: 'RAIM Bénin',
      category: 'Interview'
    },
    {
      title: 'Conseils beauté : Prendre soin de sa peau en saison sèche',
      excerpt: 'Les meilleures pratiques pour maintenir une peau éclatante pendant la saison sèche au Bénin.',
      date: '10 Oct 2024',
      author: 'RAIM Bénin',
      category: 'Beauté'
    },
    {
      title: 'Le mannequinat africain sur la scène internationale',
      excerpt: 'Comment les mannequins africains conquièrent les podiums internationaux et redéfinissent les standards de beauté.',
      date: '02 Oct 2024',
      author: 'RAIM Bénin',
      category: 'Mode'
    },
    {
      title: 'Retour sur le défilé annuel RAIM 2024',
      excerpt: 'Un événement mémorable qui a réuni les plus grands talents du mannequinat béninois.',
      date: '25 Sep 2024',
      author: 'RAIM Bénin',
      category: 'Événements'
    },
  ];

  const categories = ['Tous', 'Mode', 'Formation', 'Événements', 'Interview', 'Beauté'];

  return (
    <main className="blog-page">
      <section className="page-hero blog-hero">
        <div className="page-hero-overlay"></div>
        <div className="page-hero-content">
          <h1>Blog & Actualités</h1>
          <p>Restez informé des dernières nouvelles du mannequinat béninois</p>
        </div>
      </section>

      <section className="featured-post section">
        <div className="container">
          <div className="featured-card fade-in">
            <div className="featured-image">
              <span className="featured-badge">À la une</span>
            </div>
            <div className="featured-content">
              <span className="blog-category-tag">{featuredPost.category}</span>
              <h2>{featuredPost.title}</h2>
              <p>{featuredPost.excerpt}</p>
              <div className="post-meta">
                <span><Calendar size={16} /> {featuredPost.date}</span>
                <span><User size={16} /> {featuredPost.author}</span>
              </div>
              <a href="#" className="btn btn-primary">
                Lire l'article <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="blog-list section">
        <div className="container">
          <div className="blog-layout">
            <aside className="blog-sidebar fade-in">
              <div className="sidebar-section">
                <h3>Catégories</h3>
                <ul className="category-list">
                  {categories.map((cat, index) => (
                    <li key={index}>
                      <a href="#" className={index === 0 ? 'active' : ''}>{cat}</a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="sidebar-section">
                <h3>Newsletter</h3>
                <p>Recevez nos derniers articles directement dans votre boîte mail.</p>
                <form className="newsletter-form">
                  <input type="email" placeholder="Votre email" />
                  <button type="submit" className="btn btn-primary">S'abonner</button>
                </form>
              </div>
            </aside>
            <div className="blog-articles">
              {blogPosts.map((post, index) => (
                <article key={index} className="blog-article-card fade-in">
                  <div className="article-image">
                    <span className="blog-category-tag">{post.category}</span>
                  </div>
                  <div className="article-content">
                    <h3>{post.title}</h3>
                    <p>{post.excerpt}</p>
                    <div className="post-meta">
                      <span><Calendar size={14} /> {post.date}</span>
                    </div>
                    <a href="#" className="article-link">
                      Lire la suite <ArrowRight size={14} />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Blog;
