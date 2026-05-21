import React from 'react';
import { Target, TrendingUp, ShieldAlert, Award } from 'lucide-react';
import './Benefits.css';

const Benefits = () => {
  const benefits = [
    {
      icon: <Target size={40} />,
      title: "Direto ao Ponto",
      desc: "Sem juridiquês. Você entenderá cada passo do seu processo de forma clara e transparente."
    },
    {
      icon: <TrendingUp size={40} />,
      title: "Agilidade",
      desc: "Atuamos de forma estratégica para que a resolução do seu problema seja a mais rápida possível."
    },
    {
      icon: <ShieldAlert size={40} />,
      title: "Atuação Preventiva",
      desc: "Evitamos que pequenos problemas se tornem grandes dores de cabeça no futuro."
    },
    {
      icon: <Award size={40} />,
      title: "Experiência Comprovada",
      desc: "Anos de experiência lidando com casos complexos no mercado imobiliário e direitos do consumidor."
    }
  ];

  return (
    <section className="benefits-section section-padding">
      <div className="container">
        <div className="text-center mb-lg">
          <h2>Por que escolher a nossa assessoria?</h2>
          <p>Resultados que protegem o seu patrimônio e garantem a sua paz.</p>
        </div>
        
        <div className="benefits-grid">
          {benefits.map((b, idx) => (
            <div key={idx} className="benefit-card">
              <div className="benefit-icon">{b.icon}</div>
              <h4>{b.title}</h4>
              <p>{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
