import React, { useState } from 'react';
import { Home, ShoppingCart, ArrowRight, CheckCircle2 } from 'lucide-react';
import './DiagnosticFlow.css';

const questions = {
  initial: {
    question: "Qual área o seu problema se encaixa?",
    options: [
      { id: 'imob', label: "Imóvel / Propriedade", icon: <Home size={32} /> },
      { id: 'cons', label: "Problema de Consumidor", icon: <ShoppingCart size={32} /> }
    ]
  },
  imob: {
    question: "Qual é a situação exata?",
    options: [
      { id: 'compra', label: "Atraso na entrega / Distrato" },
      { id: 'aluguel', label: "Problemas com Aluguel / Despejo" },
      { id: 'usucapiao', label: "Usucapião / Regularização" },
      { id: 'outro', label: "Outros problemas imobiliários" }
    ]
  },
  cons: {
    question: "O que aconteceu?",
    options: [
      { id: 'voo', label: "Voo cancelado / Atraso" },
      { id: 'nome', label: "Nome negativado indevidamente" },
      { id: 'plano', label: "Problema com Plano de Saúde" },
      { id: 'outro', label: "Outros problemas com empresas" }
    ]
  }
};

const DiagnosticFlow = () => {
  const [step, setStep] = useState(1);
  const [data, setData] = useState({ area: '', detail: '', name: '', phone: '' });

  const handleAreaSelect = (areaId) => {
    setData({ ...data, area: areaId });
    setStep(2);
  };

  const handleDetailSelect = (detailLabel) => {
    setData({ ...data, detail: detailLabel });
    setStep(3);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, area, detail } = data;
    const areaText = area === 'imob' ? 'Direito Imobiliário' : 'Direito do Consumidor';
    const message = `Olá Dra. Aline, meu nome é ${name}. Preciso de ajuda na área de ${areaText}. A situação é: ${detail}. Gostaria de um atendimento.`;
    
    // Format for WhatsApp API
    const whatsappUrl = `https://wa.me/5511999999999?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="diagnostico" className="diagnostic-section section-padding">
      <div className="container">
        <div className="text-center mb-lg">
          <h2>Faça seu Diagnóstico Gratuito</h2>
          <p>Descubra em menos de 1 minuto se o seu caso tem solução jurídica viável e fale diretamente comigo.</p>
        </div>

        <div className="diagnostic-card glass-panel">
          {/* Progress Bar */}
          <div className="progress-bar-container">
            <div className="progress-bar" style={{ width: `${(step / 3) * 100}%` }}></div>
          </div>
          
          <div className="diagnostic-content">
            {step === 1 && (
              <div className="step-fade-in">
                <h3>{questions.initial.question}</h3>
                <div className="options-grid-lg">
                  {questions.initial.options.map((opt) => (
                    <button key={opt.id} className="option-card" onClick={() => handleAreaSelect(opt.id)}>
                      <span className="icon-wrapper">{opt.icon}</span>
                      <span className="option-label">{opt.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="step-fade-in">
                <h3>{questions[data.area].question}</h3>
                <div className="options-list">
                  {questions[data.area].options.map((opt) => (
                    <button key={opt.id} className="option-row" onClick={() => handleDetailSelect(opt.label)}>
                      {opt.label} <ArrowRight size={20} className="arrow-icon" />
                    </button>
                  ))}
                </div>
                <button className="btn-back" onClick={() => setStep(1)}>Voltar</button>
              </div>
            )}

            {step === 3 && (
              <div className="step-fade-in">
                <div className="success-icon-wrapper mb-sm">
                  <CheckCircle2 size={48} color="var(--color-secondary)" />
                </div>
                <h3>Seu caso pode ter solução!</h3>
                <p className="mb-md text-center">Para darmos o próximo passo, preencha os dados abaixo. Você será direcionado para o meu WhatsApp pessoal.</p>
                
                <form className="lead-form" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label>Nome Completo</label>
                    <input 
                      type="text" 
                      required 
                      placeholder="Como gostaria de ser chamado?"
                      value={data.name}
                      onChange={(e) => setData({ ...data, name: e.target.value })}
                    />
                  </div>
                  <div className="form-group">
                    <label>WhatsApp</label>
                    <input 
                      type="tel" 
                      required 
                      placeholder="(DD) 99999-9999"
                      value={data.phone}
                      onChange={(e) => setData({ ...data, phone: e.target.value })}
                    />
                  </div>
                  <button type="submit" className="btn-primary w-100">
                    Enviar e Falar no WhatsApp
                  </button>
                </form>
                <button className="btn-back mt-sm text-center w-100" onClick={() => setStep(2)}>Voltar</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiagnosticFlow;
