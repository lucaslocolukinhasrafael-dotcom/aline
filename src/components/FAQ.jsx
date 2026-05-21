import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import './FAQ.css';

const faqs = [
  {
    question: "Quanto custa para analisar o meu caso?",
    answer: "O nosso diagnóstico inicial é 100% gratuito. Nele, vamos entender a viabilidade do seu caso e, se houver necessidade de uma ação, passaremos os honorários de forma transparente antes de qualquer compromisso."
  },
  {
    question: "O atendimento é presencial ou online?",
    answer: "Atendemos de forma totalmente online em todo o estado do Rio de Janeiro e no Brasil, com a mesma segurança e sigilo de um atendimento presencial. Se preferir ou precisar, podemos agendar uma reunião presencial."
  },
  {
    question: "Quanto tempo demora um processo imobiliário ou de consumidor?",
    answer: "Cada caso tem suas particularidades. No entanto, nossa atuação inicial é sempre focada na resolução extrajudicial (acordos e negociações), o que costuma resolver o problema em semanas, sem precisar esperar anos no judiciário."
  },
  {
    question: "Quais documentos vou precisar separar?",
    answer: "Para o diagnóstico inicial, basta nos contar o que aconteceu. Posteriormente, podemos solicitar contratos, e-mails, prints de conversas, faturas ou qualquer documento que comprove o seu direito."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section section-padding">
      <div className="container">
        <div className="text-center mb-lg">
          <h2>Perguntas Frequentes</h2>
          <p>Tire suas dúvidas antes de dar o próximo passo.</p>
        </div>

        <div className="faq-container">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`faq-item ${openIndex === index ? 'open' : ''}`}
              onClick={() => toggleFaq(index)}
            >
              <div className="faq-question">
                <h3>{faq.question}</h3>
                {openIndex === index ? <ChevronUp size={24} className="faq-icon" /> : <ChevronDown size={24} className="faq-icon" />}
              </div>
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
