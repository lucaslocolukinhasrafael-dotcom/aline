import React from 'react';
import './AboutSection.css';

const AboutSection = () => {
  return (
    <section className="about-section section-padding">
      <div className="container">
        <div className="about-grid">
          <div className="about-image-wrapper">
            {/* Placeholder for Aline's photo */}
            <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1000&auto=format&fit=crop" alt="Dra. Aline Rodrigues" className="about-image" />
            <div className="about-badge">
              <span>+10 Anos</span>
              <small>de Experiência</small>
            </div>
          </div>
          
          <div className="about-content">
            <h2 className="mb-sm">Quem é Aline Rodrigues?</h2>
            <h3 className="about-subtitle mb-md">Advogada Especialista em Direito Imobiliário e Consumidor</h3>
            
            <p className="mb-sm">
              Sou responsável pelo escritório Aline Rodrigues Advocacia e Consultoria, atuando de forma consultiva, contenciosa e preventiva. 
            </p>
            <p className="mb-sm">
              Com ampla expertise e conhecimento profundo nestas áreas, meu foco é oferecer soluções jurídicas <strong>completas e personalizadas</strong> para cada cliente. Entendo que por trás de cada processo existe um patrimônio suado, uma família ou um direito que não pode ser ignorado.
            </p>
            <p className="mb-md">
              Estou sempre atualizada com as novas tendências legislativas para garantir um atendimento de altíssima qualidade, eficiência e transparência.
            </p>
            
            <a href="#diagnostico" className="btn-outline">
              Falar com a Dra. Aline
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
