import React from 'react';
import { ArrowRight, Scale, ShieldCheck } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-overlay"></div>
      <div className="container hero-content">
        <div className="hero-text animate-fade-in">
          <div className="hero-badge delay-100">
            <Scale size={16} /> Especialista em Direito Imobiliário e Consumidor
          </div>
          <h1 className="hero-title delay-200">
            Tranquilidade e Segurança Jurídica para o seu Patrimônio
          </h1>
          <p className="hero-subtitle delay-300">
            Defenda seus direitos com uma advocacia estratégica, transparente e focada em resultados reais. Não deixe que problemas jurídicos tirem a sua paz.
          </p>
          <div className="hero-actions delay-400">
            <a href="#diagnostico" className="btn-primary">
              Fazer Diagnóstico Gratuito <ArrowRight size={20} />
            </a>
          </div>
          
          <div className="hero-trust delay-400">
            <div className="trust-item">
              <ShieldCheck size={24} color="var(--color-secondary)" />
              <span>Atendimento Personalizado</span>
            </div>
            <div className="trust-item">
              <ShieldCheck size={24} color="var(--color-secondary)" />
              <span>Sigilo Absoluto</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
