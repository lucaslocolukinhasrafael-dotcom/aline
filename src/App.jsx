import React, { useState, useRef, useEffect } from 'react';
import logoUrl from './assets/logo.svg';
import heroImgUrl from './assets/aline-hero2.jpeg';
import sobreImgUrl from './assets/aline-sobre.webp';

const FadeIn = ({ children, delay = 0, direction = 'up', className = '' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    if (domRef.current) observer.observe(domRef.current);
    return () => observer.disconnect();
  }, []);

  const getTranslate = () => {
    if (isVisible) return 'translate-y-0 translate-x-0';
    switch (direction) {
      case 'up': return 'translate-y-10';
      case 'down': return '-translate-y-10';
      case 'left': return 'translate-x-10';
      case 'right': return '-translate-x-10';
      default: return 'translate-y-10';
    }
  };

  return (
    <div
      ref={domRef}
      className={`transition-all duration-1000 ease-out ${
        isVisible ? 'opacity-100' : 'opacity-0'
      } ${getTranslate()} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border border-stone-200 rounded-xl bg-white shadow-sm overflow-hidden transition-all duration-300">
      <button onClick={() => setIsOpen(!isOpen)} className="w-full text-left p-6 flex justify-between items-center focus:outline-none">
        <h4 className="text-xl font-bold text-aline-dark font-title pr-8">{question}</h4>
        <iconify-icon icon={isOpen ? "solar:alt-arrow-up-linear" : "solar:alt-arrow-down-linear"} class="text-2xl text-aline-light min-w-[24px]"></iconify-icon>
      </button>
      <div className={`px-6 overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}>
        <p className="text-stone-600 font-body text-sm leading-relaxed">{answer}</p>
      </div>
    </div>
  );
};

const googleReviews = [
  { name: 'Verônica Machado', time: '3 meses atrás', text: 'Aline é uma advogada abençoada por Deus. Em um momento tão difícil, foi luz, acolhimento e segurança para mim. Seu trabalho foi essencial para o sucesso do meu processo. Sou profundamente grata e peço que Deus continue abençoando sua vida.' },
  { name: 'Eduardo Maxsuel', time: '6 meses atrás', text: 'Fui muito bem atendido pela Dra. Aline. Sempre demonstrou profissionalismo, clareza nas explicações e atenção com o meu caso. Resolveu tudo com rapidez e me manteve informado o tempo todo. Recomendo de olhos fechados!' },
  { name: 'vanessa mendes', time: '3 meses atrás', text: 'Tive um atendimento maravilhoso com minha advogada. Muito profissional, humana e sempre disposta a esclarecer todas as dúvidas. Me senti segura e bem orientada em todo o processo. Recomendo!' },
  { name: 'Bete e Silvio', time: '3 meses atrás', text: 'Excelente advogada! Muito atenciosa e atende os clientes com muito carinho. Super recomendo a todos!' },
  { name: 'Roberta Bruna Bruna', time: '3 meses atrás', text: 'Excelente Profissional.. Resolutiva e atenciosa , desempenha o trabalho com seriedade em todos os casos❤️' },
  { name: 'Micheli Ferenzini', time: '3 meses atrás', text: 'A Dra Aline me deu o suporte necessário e me auxiliou em todas as etapas do meu processo.' },
  { name: 'Heitor Machado', time: '3 meses atrás', text: 'Aline é uma advogada extremamente competente, atenciosa e humana. Esteve comigo em cada etapa do processo, esclarecendo dúvidas e transmitindo segurança.' },
  { name: 'Casca Daniel', time: '3 meses atrás', text: 'A doutora Aline me deu todo suporte , me explicou passo a passo e cuidou do meu caso com muita paciência e empenho , graças a Deus tivemos sucesso🙌 obrigado doutora.' },
  { name: 'MENEZES ASSESSORIA CONTÁBIL', time: '3 meses atrás', text: '"Profissional extremamente competente, atenciosa e dedicada. Sempre esclarece as dúvidas com paciência, transmite confiança e busca as melhores soluções para seus clientes. Atendimento ágil, humano e de alta qualidade. Recomendo fortemente os serviços da Dra Aline' },
  { name: 'Edson Pedro', time: '3 meses atrás', text: 'Excelente profissional... segura, comprometida, justa e de carater... essa eu indico.' },
  { name: 'silvio paula', time: '3 meses atrás', text: 'Excelente advogada! Muito solícita nos esclarecimentos e preparada. Nota 1000' },
  { name: 'Gabrielle Abreu', time: '3 meses atrás', text: 'Uma profissional de excelência, sempre disposta a ajudar dentro do possível, atenciosa e extremamente determinada, recomendaria seu trabalho a todos' },
  { name: 'Carolina Araújo', time: '3 meses atrás', text: 'Uma ótima Advogada, indico . Trata os clientes com total atenção e dedicação' },
  { name: 'Vanessa Barros', time: '3 meses atrás', text: 'A Dra. Aline é extremamente atenciosa e competente. Eu indico.' },
  { name: 'Rodrigo Menezes', time: '7 meses atrás', text: 'Excelente trabalho no meu caso. Foi super atenciosa e me explicou todos os detalhes' },
  { name: 'Thais Almeida', time: '3 meses atrás', text: 'Excelente profissional, muito solícita e competente' },
  { name: 'Rubis Abreu', time: '3 meses atrás', text: 'Ótimo atendimento, agilidade e conhecimento no. Eu recomendo.' },
  { name: 'RISO 2000 ODONTO', time: '8 meses atrás', text: 'Excelente profissional. Ajudou nossa empresa a trabalhar melhor, muito eficaz' },
  { name: 'Aldney Santos', time: 'um mês atrás', text: 'Dra. Aline foi um ótimo atendimento obrigado.' },
  { name: 'Sophia Vitória Souza Abreu', time: '3 meses atrás', text: 'Muito atenciosa e profissional.' },
  { name: 'Ana Carolina', time: '3 meses atrás', text: 'Recomendo muito o trabalho da Dra. Aline.' }
];

const DiagnosticQuiz = () => {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({ theme: '', time: '', concern: '', document: '', name: '', phone: '' });
  const [formErrors, setFormErrors] = useState({ name: '', phone: '' });
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleNext = (key, value) => {
    setFormData({ ...formData, [key]: value });
    setStep(step + 1);
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: 'quiz_step_completed', step_number: step + 1, step_name: key });
  };

  const maskPhone = (value) => {
    let v = value.replace(/\D/g, ''); 
    if (v.length > 11) v = v.substring(0, 11);
    
    if (v.length === 0) return '';
    if (v.length <= 2) return `(${v}`;
    if (v.length <= 6) return `(${v.substring(0, 2)}) ${v.substring(2)}`;
    if (v.length <= 10) return `(${v.substring(0, 2)}) ${v.substring(2, 6)}-${v.substring(6)}`;
    return `(${v.substring(0, 2)}) ${v.substring(2, 7)}-${v.substring(7)}`;
  };

  const handlePhoneChange = (e) => {
    const masked = maskPhone(e.target.value);
    setFormData({ ...formData, phone: masked });
    if (formErrors.phone) setFormErrors({ ...formErrors, phone: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let hasError = false;
    let errors = { name: '', phone: '' };

    if (formData.name.trim().length < 3) {
      errors.name = 'Por favor, insira seu nome e sobrenome.';
      hasError = true;
    }
    
    const rawPhone = formData.phone.replace(/\D/g, '');
    if (rawPhone.length < 10) {
      errors.phone = 'Insira um número de WhatsApp válido com DDD.';
      hasError = true;
    }

    if (hasError) {
      setFormErrors(errors);
      return;
    }

    setStep(step + 1);
    setIsAnalyzing(true);

    try {
      await fetch('https://hook.us2.make.com/itscznuozrsmv6at7rg82anx5kga85x6', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nome: formData.name,
          whatsapp: formData.phone,
          tema: formData.theme,
          tempo: formData.time,
          dor: formData.concern,
          documento: formData.document,
          data_hora: new Date().toLocaleString('pt-BR')
        })
      });
    } catch (error) {
      console.error("Erro ao enviar webhook:", error);
    }

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: 'generate_lead' });

    setTimeout(() => {
      setIsAnalyzing(false);
      setStep(step + 2);
    }, 3000);
  };

  const generateWhatsAppUrl = () => {
    const text = `Olá Dra. Aline! Meu nome é ${formData.name}. Gostaria de um diagnóstico jurídico.
Tema: ${formData.theme}
Tempo: ${formData.time}
Preocupação principal: ${formData.concern}
Possui documentos: ${formData.document}`;
    return `https://wa.me/5521966509969?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="diagnostico" className="py-24 px-6 md:px-12 bg-aline-dark text-aline-bg relative overflow-hidden rounded-t-[3rem] shadow-2xl">
      {/* Background shapes */}
      <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-aline-dark via-[#2a1c12] to-black -z-10"></div>
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center z-10 relative">
        {/* PAS Copy Block */}
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 text-red-400 text-sm font-bold tracking-wide border border-red-500/20">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
            Aviso de Risco Iminente
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-title font-bold leading-tight">
            Seu patrimônio está em risco. O tempo está <span className="text-red-400">contra você.</span>
          </h2>
          <p className="text-lg md:text-xl text-stone-300 font-body leading-relaxed">
            Construtoras, bancos e leiloeiros possuem exércitos de advogados trabalhando para proteger o lucro <strong className="text-white font-bold">deles</strong>, não os seus direitos. Esperar para ver o que acontece é a receita certa para perder o que você demorou uma vida para construir.
          </p>
          
          <ul className="space-y-4 pt-4">
            <li className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-aline-light/20 flex items-center justify-center text-aline-light mt-1">
                <iconify-icon icon="solar:target-linear" class="text-xl"></iconify-icon>
              </div>
              <div>
                <strong className="text-white block text-lg font-bold">Clareza Imediata</strong>
                <span className="text-stone-400 font-medium">Descubra a gravidade real do seu problema hoje, sem jargões jurídicos.</span>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-aline-light/20 flex items-center justify-center text-aline-light mt-1">
                <iconify-icon icon="solar:stopwatch-linear" class="text-xl"></iconify-icon>
              </div>
              <div>
                <strong className="text-white block text-lg font-bold">Análise de Urgência</strong>
                <span className="text-stone-400 font-medium">Saiba exatamente se o seu caso exige uma liminar nas próximas 24 horas.</span>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-aline-light/20 flex items-center justify-center text-aline-light mt-1">
                <iconify-icon icon="solar:shield-check-linear" class="text-xl"></iconify-icon>
              </div>
              <div>
                <strong className="text-white block text-lg font-bold">Estratégia de Blindagem</strong>
                <span className="text-stone-400 font-medium">Entenda o caminho exato para proteger seus bens e recuperar seu dinheiro.</span>
              </div>
            </li>
          </ul>
        </div>

        {/* Action Box */}
        <div className="bg-aline-bg text-aline-dark p-8 md:p-12 rounded-3xl shadow-2xl relative border border-aline-light/20">
          <div className="absolute -top-6 -right-6 w-24 h-24 bg-aline-light rounded-full opacity-20 blur-2xl"></div>
          <div className="text-center space-y-6 relative z-10">
            <div className="w-16 h-16 bg-aline-dark text-aline-light rounded-full flex items-center justify-center mx-auto mb-2 shadow-lg shadow-aline-light/20">
              <iconify-icon icon="solar:document-text-linear" class="text-3xl"></iconify-icon>
            </div>
            <h3 className="text-3xl font-title font-bold">Diagnóstico Estratégico Gratuito</h3>
            <p className="text-stone-600 font-medium font-body leading-relaxed">
              Responda a 4 perguntas rápidas (menos de 1 minuto) e descubra as chances reais do seu caso.
            </p>
            <div className="pt-4">
              <button onClick={() => { setStep(1); window.dataLayer = window.dataLayer || []; window.dataLayer.push({ event: 'quiz_started' }); }} className="w-full py-5 bg-gradient-to-r from-aline-dark to-[#8a723b] text-white font-bold rounded-xl hover:shadow-xl hover:shadow-aline-light/20 transition-all transform hover:-translate-y-1 text-xl flex items-center justify-center gap-2">
                Iniciar Diagnóstico Agora
                <iconify-icon icon="solar:arrow-right-linear" class="text-2xl"></iconify-icon>
              </button>
            </div>
            <p className="text-xs text-stone-500 uppercase tracking-widest font-bold mt-4 flex items-center justify-center gap-1">
              <iconify-icon icon="solar:lock-linear" class="text-sm"></iconify-icon> 100% Sigiloso e Seguro
            </p>
          </div>
        </div>
      </div>

      {/* Modal Wrapper para o Quiz Ativo */}
      {step > 0 && (
        <div className="fixed inset-0 z-[100] bg-aline-dark/90 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in overflow-y-auto">
          <div className="relative w-full max-w-2xl bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden border border-white/50 my-8">
            <button onClick={() => setStep(0)} className="absolute top-6 right-6 text-stone-400 hover:text-aline-dark transition-colors z-10">
              <iconify-icon icon="solar:close-circle-linear" class="text-3xl"></iconify-icon>
            </button>
            <div className="p-8 md:p-12">

          {step === 1 && (
            <div className="space-y-6 animate-fade-in">
              <span className="text-sm font-bold tracking-widest text-aline-light uppercase">Passo 1 de 5</span>
              <h3 className="text-3xl font-title text-aline-dark">Qual destas ameaças ao seu patrimônio está tirando o seu sono hoje?</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                {['Imóvel Irregular (Insegurança da posse)', 'Construtora cobrando juros/taxas abusivas', 'Ameaça de Leilão ou Perda do Imóvel', 'Medo de cair em golpe ao comprar imóvel', 'Outro risco urgente'].map((theme) => (
                  <button key={theme} onClick={() => handleNext('theme', theme)} className="p-4 text-left border-2 border-stone-200 rounded-xl hover:border-aline-dark hover:bg-aline-bgDark transition-all text-stone-700 font-medium">
                    {theme}
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6 animate-fade-in">
              <span className="text-sm font-bold tracking-widest text-aline-light uppercase">Passo 2 de 5</span>
              <h3 className="text-3xl font-title text-aline-dark">A Justiça não perdoa quem dorme no ponto. Há quanto tempo você corre esse risco?</h3>
              <div className="flex flex-col gap-4 mt-6">
                {['Menos de 3 meses', 'O tempo está passando (3 a 12 meses)', 'Há anos (Risco Máximo)'].map((time) => (
                  <button key={time} onClick={() => handleNext('time', time)} className="p-4 text-left border-2 border-stone-200 rounded-xl hover:border-aline-dark hover:bg-aline-bgDark transition-all text-stone-700 font-medium">
                    {time}
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-6 animate-fade-in">
              <span className="text-sm font-bold tracking-widest text-aline-light uppercase">Passo 3 de 5</span>
              <h3 className="text-3xl font-title text-aline-dark">Como essa situação de incerteza está impactando a sua vida hoje?</h3>
              <div className="flex flex-col gap-4 mt-6">
                {['Medo constante de perder o dinheiro que investi', 'Sensação de estar sendo enganado ou passado para trás', 'Estou travado: não consigo vender ou aproveitar o que é meu', 'Insegurança total: não sei nem por onde começar a resolver'].map((concern) => (
                  <button key={concern} onClick={() => handleNext('concern', concern)} className="p-4 text-left border-2 border-stone-200 rounded-xl hover:border-aline-dark hover:bg-aline-bgDark transition-all text-stone-700 font-medium">
                    {concern}
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="space-y-6 animate-fade-in">
              <span className="text-sm font-bold tracking-widest text-aline-light uppercase">Passo 4 de 5</span>
              <h3 className="text-3xl font-title text-aline-dark">Para entendermos o seu momento: você já buscou alguma orientação profissional sobre este caso?</h3>
              <div className="flex flex-col gap-4 mt-6">
                {['Sim, mas ainda não sinto total segurança na estratégia', 'Ainda não, estou buscando a orientação correta agora'].map((doc) => (
                  <button key={doc} onClick={() => handleNext('document', doc)} className="p-4 text-left border-2 border-stone-200 rounded-xl hover:border-aline-dark hover:bg-aline-bgDark transition-all text-stone-700 font-medium">
                    {doc}
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 5 && (
            <div className="space-y-6 animate-fade-in">
              <span className="text-sm font-bold tracking-widest text-aline-light uppercase">Último Passo</span>
              <h3 className="text-3xl font-title text-aline-dark">Onde enviamos a análise inicial?</h3>
              <p className="text-stone-500 font-body">Seus dados estão protegidos. Vamos gerar a análise imediatamente.</p>
              
              <form onSubmit={handleSubmit} className="space-y-4 mt-6">
                <div>
                  <label className="block text-sm font-bold text-aline-dark mb-1">Nome Completo</label>
                  <input required type="text" value={formData.name} onChange={e => { setFormData({...formData, name: e.target.value}); if(formErrors.name) setFormErrors({...formErrors, name: ''}); }} className={`w-full p-4 border-2 ${formErrors.name ? 'border-red-500' : 'border-stone-200'} rounded-xl focus:outline-none focus:border-aline-dark transition-colors bg-stone-50 text-stone-800 placeholder-stone-400`} placeholder="Ex: João da Silva" />
                  {formErrors.name && <p className="text-red-500 text-xs mt-1 font-semibold">{formErrors.name}</p>}
                </div>
                <div>
                  <label className="block text-sm font-bold text-aline-dark mb-1">WhatsApp com DDD</label>
                  <input required type="text" value={formData.phone} onChange={handlePhoneChange} className={`w-full p-4 border-2 ${formErrors.phone ? 'border-red-500' : 'border-stone-200'} rounded-xl focus:outline-none focus:border-aline-dark transition-colors bg-stone-50 text-stone-800 placeholder-stone-400`} placeholder="(11) 99999-9999" />
                  {formErrors.phone && <p className="text-red-500 text-xs mt-1 font-semibold">{formErrors.phone}</p>}
                </div>
                <button type="submit" className="w-full mt-4 px-10 py-4 bg-aline-dark text-aline-bg font-bold rounded-xl hover:bg-aline-light transition-all duration-300">
                  Gerar Minha Análise Jurídica
                </button>
              </form>
            </div>
          )}

          {step === 6 && (
            <div className="text-center py-12 space-y-6">
              {isAnalyzing ? (
                <div className="flex flex-col items-center justify-center space-y-4">
                   <div className="w-16 h-16 border-4 border-aline-bgDark border-t-aline-dark rounded-full animate-spin"></div>
                   <h3 className="text-2xl font-title text-aline-dark mt-4 animate-pulse">Avaliando viabilidade do caso...</h3>
                   <p className="text-stone-500">Cruzando seus dados com nosso banco de teses jurídicas.</p>
                </div>
              ) : null}
            </div>
          )}

          {step === 7 && (
            <div className="text-center space-y-6 animate-fade-in">
              <div className="w-20 h-20 bg-aline-light/20 text-aline-dark rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner">
                <iconify-icon icon="solar:shield-check-bold-duotone" class="text-5xl"></iconify-icon>
              </div>
              <h3 className="text-4xl font-title font-bold text-aline-dark">Análise Concluída: É Possível Proteger Seu Patrimônio.</h3>
              <p className="text-lg text-stone-600 font-body">
                Compreendemos a sua preocupação. Nossa análise indica que a situação de <strong className="text-aline-dark">{formData.theme.toLowerCase()}</strong> exige atenção, mas existem caminhos jurídicos sólidos para resguardar os seus direitos. 
              </p>
              <div className="p-6 bg-stone-50 border border-stone-200 rounded-xl mt-6 mb-6 text-left shadow-sm">
                <p className="text-sm text-stone-800 leading-relaxed font-medium mb-3">
                  No direito imobiliário, o tempo é um fator decisivo. Adiar a resolução costuma limitar as opções de defesa e agravar o cenário. É fundamental agir com estratégia.
                </p>
                <p className="text-sm text-stone-800 leading-relaxed font-bold">
                  A Dra. Aline já estruturou a proteção de diversos clientes em situações semelhantes à sua, aplicando teses jurídicas precisas para trazer segurança e previsibilidade.
                </p>
              </div>
              <p className="text-md text-stone-600 font-body mb-2">O próximo passo é realizar um alinhamento direto para traçar o seu plano de ação.</p>
              <a href={generateWhatsAppUrl()} target="_blank" rel="noreferrer" className="inline-block mt-4 w-full px-10 py-5 bg-aline-dark text-aline-bg font-bold rounded-xl shadow-xl hover:bg-aline-light transition-all duration-300 flex items-center justify-center gap-3 text-lg hover:-translate-y-1">
                <iconify-icon icon="mdi:whatsapp" class="text-3xl"></iconify-icon>
                Falar com a Dra. Aline Agora
              </a>
            </div>
          )}

            </div>
          </div>
        </div>
      )}
    </section>
  );
};

function App() {
  const whatsappUrl = "https://wa.me/5521966509969?text=Olá Dra. Aline, gostaria de realizar um diagnóstico gratuito do meu caso.";
  const carouselRef = useRef(null);
  const [userCity, setUserCity] = useState('');
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    let interval;
    if (!isHovered) {
      interval = setInterval(() => {
        if (carouselRef.current) {
          const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
          // If we reached the end, loop back to start
          if (scrollLeft + clientWidth >= scrollWidth - 10) {
            carouselRef.current.scrollTo({ left: 0, behavior: 'smooth' });
          } else {
            carouselRef.current.scrollBy({ left: 350, behavior: 'smooth' });
          }
        }
      }, 3000);
    }
    return () => clearInterval(interval);
  }, [isHovered]);

  useEffect(() => {
    fetch('https://ipapi.co/json/')
      .then(res => res.json())
      .then(data => {
        if (data.city) setUserCity(data.city);
      })
      .catch(err => console.error(err));
  }, []);

  const scrollCarousel = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = 350;
      carouselRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      {/* Navigation */}
      <nav className="flex sticky top-0 z-50 w-full px-6 md:px-8 py-4 justify-between items-center bg-aline-dark border-b border-aline-dark shadow-sm transition-all duration-300 relative">
        <div className="flex items-center gap-3">
          <img src={logoUrl} alt="Aline Rodrigues Logo" className="h-10 md:h-12 w-auto brightness-0 invert opacity-90" />
        </div>

        <div className="hidden md:flex items-center space-x-10 text-sm font-bold tracking-wide text-white absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <a href="#solucoes" className="hover:text-aline-secondary transition-colors">Serviços</a>
          <a href="#sobre" className="hover:text-aline-secondary transition-colors">Visão</a>
          <a href="#sobre" className="hover:text-aline-secondary transition-colors">A Advogada</a>
          <a href="#depoimentos" className="hover:text-aline-secondary transition-colors">Localização</a>
        </div>

        <div className="flex items-center">
          <a href="#diagnostico" className="px-5 md:px-6 py-2.5 bg-aline-secondary border border-aline-secondary text-aline-dark font-bold rounded-full hover:bg-aline-light hover:border-aline-light transition-colors duration-300 shadow-sm flex items-center gap-2 text-xs md:text-sm">
            Diagnóstico
            <iconify-icon icon="solar:arrow-right-linear" class="text-lg"></iconify-icon>
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-10 pb-20 md:pt-16 md:pb-24 px-6 md:px-12 bg-aline-cream overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center relative z-10">
            {/* Text Column */}
            <div className="flex flex-col items-start text-left lg:pr-8">
              <FadeIn delay={100}>
                <h1 className="text-[2.2rem] md:text-[3.5rem] leading-[1.1] font-title text-aline-dark mb-4 md:mb-6 max-w-lg">
                  Advocacia full service com atendimento próximo e estratégico.
                </h1>
              </FadeIn>
              <FadeIn delay={300}>
                <p className="text-base md:text-lg text-stone-600 mb-8 max-w-lg font-body leading-relaxed">
                  Adaptado às necessidades de quem busca segurança jurídica em questões imobiliárias e de consumo.
                </p>
              </FadeIn>
              
              <FadeIn delay={500}>
                <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
                  <a href="#diagnostico" className="w-full sm:w-auto px-8 py-4 bg-aline-secondary text-aline-dark rounded-full font-bold text-sm hover:shadow-lg hover:scale-105 transition-all flex items-center justify-center gap-2">
                    Fazer Diagnóstico
                    <iconify-icon icon="solar:arrow-right-linear" class="text-lg"></iconify-icon>
                  </a>
                  <a href={whatsappUrl} target="_blank" rel="noreferrer" className="w-full sm:w-auto px-6 py-4 text-aline-dark font-bold text-sm hover:text-aline-primary transition-colors flex items-center justify-center gap-2">
                    <iconify-icon icon="ic:baseline-whatsapp" class="text-2xl text-green-600"></iconify-icon>
                    Atendimento Online
                  </a>
                </div>
              </FadeIn>
            </div>

            {/* Image Column */}
            <div className="relative w-full h-[450px] lg:h-[700px] mt-8 lg:mt-0 flex justify-center lg:justify-end items-end pb-8 lg:pb-0">
              <FadeIn direction="left" delay={200} className="w-full lg:w-[90%] h-full">
                <div className="relative w-full h-full rounded-tl-[6rem] rounded-br-[6rem] lg:rounded-tl-[8rem] lg:rounded-br-[8rem] overflow-hidden shadow-2xl ml-auto">
                  <img 
                    src={heroImgUrl} 
                    alt="Dra. Aline Rodrigues" 
                    width="600"
                    height="800"
                    className="w-full h-full object-cover object-[center_top]"
                  />
                </div>
              </FadeIn>
              
              {/* Glassmorphism Card */}
              <div className="absolute -bottom-4 left-2 lg:bottom-16 lg:-left-12 z-30">
                <FadeIn delay={700} direction="up">
                  <div className="bg-white/95 backdrop-blur-md border border-white p-5 md:p-6 rounded-2xl shadow-2xl w-60 md:w-72">
                    <span className="text-xs md:text-sm font-bold text-aline-dark mb-1 block">Atendimento focado em</span>
                    <span className="text-2xl md:text-3xl font-title text-aline-primary font-bold">Resultados</span>
                    <p className="text-[11px] md:text-xs text-stone-700 mt-2 font-medium leading-relaxed">Mais de 100 casos atendidos com estratégia e proteção do seu patrimônio.</p>
                  </div>
                </FadeIn>
              </div>
            </div>
        </div>
      </section>

      {/* Marquee */}
      <section className="border-y border-stone-300 py-4 bg-aline-bgDark overflow-hidden">
        <div className="marquee-container w-full whitespace-nowrap overflow-hidden">
            <div className="animate-scroll inline-block">
                <span className="text-2xl md:text-4xl font-title italic px-8 text-aline-light">•</span>
                <span className="text-sm md:text-base font-medium tracking-widest uppercase text-aline-dark">Direito Imobiliário</span>
                <span className="text-2xl md:text-4xl font-title italic px-8 text-aline-light">•</span>
                <span className="text-sm md:text-base font-medium tracking-widest uppercase text-aline-dark">Direito do Consumidor</span>
                <span className="text-2xl md:text-4xl font-title italic px-8 text-aline-light">•</span>
                <span className="text-sm md:text-base font-medium tracking-widest uppercase text-aline-dark">Usucapião</span>
                <span className="text-2xl md:text-4xl font-title italic px-8 text-aline-light">•</span>
                <span className="text-sm md:text-base font-medium tracking-widest uppercase text-aline-dark">Distrato de Imóveis</span>
                <span className="text-2xl md:text-4xl font-title italic px-8 text-aline-light">•</span>
                <span className="text-sm md:text-base font-medium tracking-widest uppercase text-aline-dark">Indenizações</span>
                 <span className="text-2xl md:text-4xl font-title italic px-8 text-aline-light">•</span>
                <span className="text-sm md:text-base font-medium tracking-widest uppercase text-aline-dark">Direito Imobiliário</span>
                <span className="text-2xl md:text-4xl font-title italic px-8 text-aline-light">•</span>
                <span className="text-sm md:text-base font-medium tracking-widest uppercase text-aline-dark">Direito do Consumidor</span>
                <span className="text-2xl md:text-4xl font-title italic px-8 text-aline-light">•</span>
                <span className="text-sm md:text-base font-medium tracking-widest uppercase text-aline-dark">Usucapião</span>
                <span className="text-2xl md:text-4xl font-title italic px-8 text-aline-light">•</span>
                <span className="text-sm md:text-base font-medium tracking-widest uppercase text-aline-dark">Distrato de Imóveis</span>
                <span className="text-2xl md:text-4xl font-title italic px-8 text-aline-light">•</span>
                <span className="text-sm md:text-base font-medium tracking-widest uppercase text-aline-dark">Indenizações</span>
            </div>
        </div>
      </section>

      {/* Intro / Philosophy (Epiphany Bridge - Moodboard Style) */}
      <section className="relative py-32 px-6 md:px-12 overflow-hidden bg-aline-dark">
        {/* Architectural / Scale Background matching Moodboard */}
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" alt="Building Architecture" className="w-full h-full object-cover opacity-[0.15] grayscale" />
          <div className="absolute inset-0 bg-gradient-to-t from-aline-dark via-aline-dark/80 to-transparent"></div>
          {/* Golden Silk overlay hint */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-aline-light/10 to-transparent mix-blend-overlay"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
            <iconify-icon icon="solar:scale-linear" class="text-5xl text-aline-light mb-4 drop-shadow-md"></iconify-icon>
            <h2 className="text-4xl md:text-6xl text-white leading-tight font-bold">
                Tornamos a justiça <span className="italic font-title text-aline-light drop-shadow-sm">acessível</span> para que você volte a ter paz.
            </h2>
            <div className="w-24 h-px bg-aline-light/50 mx-auto"></div>
            <p className="text-lg md:text-xl text-stone-300 leading-relaxed font-light">
                Você não precisa entender de leis complexas ou perder noites de sono preocupado(a) com contratos mal feitos ou abusos de grandes empresas. Nossa missão é assumir esse fardo por você, traduzindo o "juridiquês" em soluções claras e devolvendo o que é seu por direito.
            </p>
        </div>
      </section>

      {/* 2. Belief Reinforcement & News Section (Agitation) */}
      <section className="py-24 px-6 md:px-12 bg-white border-t border-stone-200">
        <div className="max-w-7xl mx-auto">
            {/* The Belief / The Enemy */}
            <div className="text-center max-w-4xl mx-auto mb-16 space-y-6">
                <span className="text-red-700 font-bold tracking-widest uppercase text-sm bg-red-50 px-4 py-2 rounded-full">A Realidade do Mercado</span>
                <h2 className="text-4xl md:text-5xl font-title text-aline-dark font-bold leading-tight">
                    O sistema não foi desenhado para proteger você. <span className="text-stone-400 font-light italic">Foi desenhado para proteger as empresas.</span>
                </h2>
                <p className="text-xl text-stone-600 font-body leading-relaxed">
                    Construtoras blindam seus contratos. Bancos executam leilões de forma implacável. E quem tenta resolver as coisas de forma "amigável" ou sem assessoria especializada acaba pagando a conta mais alta de todas: <strong className="text-aline-dark">a perda do próprio lar.</strong>
                </p>
            </div>

            {/* News / Statistics (Social Proof of the Problem) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
                <div className="border-l-4 border-red-700 bg-stone-50 p-6 rounded-r-xl shadow-sm flex flex-col justify-between">
                    <div>
                        <p className="text-sm text-red-700 font-bold mb-2">Manchete G1</p>
                        <h4 className="font-title font-bold text-aline-dark text-lg mb-3">"Leilões de imóveis por dívidas crescem mais de 40% no último ano"</h4>
                        <p className="text-sm text-stone-600 mb-4">Bancos estão acelerando as execuções extrajudiciais. A falta de ação rápida impede a defesa do devedor.</p>
                    </div>
                </div>
                <div className="border-l-4 border-aline-dark bg-stone-50 p-6 rounded-r-xl shadow-sm flex flex-col justify-between">
                    <div>
                        <p className="text-sm text-aline-dark font-bold mb-2">Dado Estatístico</p>
                        <h4 className="font-title font-bold text-aline-dark text-lg mb-3">50% dos imóveis no Brasil possuem alguma irregularidade</h4>
                        <p className="text-sm text-stone-600 mb-4">Ter apenas o "contrato de gaveta" significa que, perante a lei, você ainda não é o dono verdadeiro do seu imóvel.</p>
                    </div>
                </div>
                <div className="border-l-4 border-stone-400 bg-stone-50 p-6 rounded-r-xl shadow-sm flex flex-col justify-between">
                    <div>
                        <p className="text-sm text-stone-500 font-bold mb-2">Portal R7</p>
                        <h4 className="font-title font-bold text-aline-dark text-lg mb-3">"Atraso em obras bate recorde e gera explosão de distratos"</h4>
                        <p className="text-sm text-stone-600 mb-4">Construtoras tentam reter até 50% dos valores pagos ilegalmente quando o cliente decide cancelar a compra.</p>
                    </div>
                </div>
            </div>

            {/* Social Proof (Cases) - OAB Compliant Anonymized Proof */}
            <div className="bg-aline-bgDark rounded-3xl p-8 md:p-12 shadow-inner border border-stone-200">
                <div className="text-center mb-10">
                    <h3 className="text-3xl font-title font-bold text-aline-dark mb-4">A intervenção certa muda o jogo.</h3>
                    <p className="text-stone-600 font-body">Enquanto a maioria aceita os abusos calada, nossos clientes tomam o controle da situação.</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-white/60 backdrop-blur-md p-8 rounded-2xl shadow-lg border border-white/60 flex flex-col justify-between hover:-translate-y-1 transition-all duration-300">
                        <div>
                            <div className="w-12 h-12 bg-green-100 text-green-700 rounded-full flex items-center justify-center mb-6">
                                <iconify-icon icon="solar:shield-check-bold" class="text-2xl"></iconify-icon>
                            </div>
                            <h4 className="font-bold text-aline-dark mb-2">Suspensão de Leilão</h4>
                            <p className="text-stone-600 text-sm leading-relaxed mb-6">"Faltavam 48 horas para a minha casa ir a leilão por uma dívida abusiva. A atuação liminar suspendeu o processo e forçou o banco a renegociar."</p>
                        </div>
                        <span className="text-xs font-bold text-stone-400 uppercase tracking-wider">— Caso de Sucesso Omitido*</span>
                    </div>

                    <div className="bg-white/60 backdrop-blur-md p-8 rounded-2xl shadow-lg border border-white/60 flex flex-col justify-between hover:-translate-y-1 transition-all duration-300">
                        <div>
                            <div className="w-12 h-12 bg-aline-light/20 text-aline-dark rounded-full flex items-center justify-center mb-6">
                                <iconify-icon icon="solar:wad-of-money-bold" class="text-2xl"></iconify-icon>
                            </div>
                            <h4 className="font-bold text-aline-dark mb-2">Distrato de Imóvel</h4>
                            <p className="text-stone-600 text-sm leading-relaxed mb-6">"A construtora atrasou 1 ano a obra e queria me devolver só 60%. Entramos com a ação e garantimos a devolução de 100% dos valores pagos, com juros."</p>
                        </div>
                        <span className="text-xs font-bold text-stone-400 uppercase tracking-wider">— Caso de Sucesso Omitido*</span>
                    </div>

                    <div className="bg-white/60 backdrop-blur-md p-8 rounded-2xl shadow-lg border border-white/60 flex flex-col justify-between hover:-translate-y-1 transition-all duration-300">
                        <div>
                            <div className="w-12 h-12 bg-stone-100 text-stone-700 rounded-full flex items-center justify-center mb-6">
                                <iconify-icon icon="solar:home-bold" class="text-2xl"></iconify-icon>
                            </div>
                            <h4 className="font-bold text-aline-dark mb-2">Segurança Definitiva</h4>
                            <p className="text-stone-600 text-sm leading-relaxed mb-6">"Comprei o terreno há 15 anos mas nunca tive a escritura. Através da Usucapião, agora a matrícula está no meu nome. Ninguém tira."</p>
                        </div>
                        <span className="text-xs font-bold text-stone-400 uppercase tracking-wider">— Caso de Sucesso Omitido*</span>
                    </div>
                </div>
                <p className="text-center text-xs text-stone-400 mt-8 italic">*Resultados baseados em atuações reais. Nomes preservados em respeito ao sigilo profissional (OAB).</p>
            </div>
        </div>
      </section>

      {/* 3. Services Section (Bento Grid + Detalhamento) */}
      <section id="solucoes" className="bg-aline-bg py-24 px-6 md:px-12 border-t border-stone-200">
        <div className="max-w-6xl mx-auto">
            {/* Bento Grid */}
            <FadeIn>
              <div className="text-center mb-16">
                  <h3 className="text-4xl md:text-5xl font-title text-aline-dark leading-tight max-w-3xl mx-auto font-bold mb-4">
                      Áreas de Atuação
                  </h3>
                  <p className="text-stone-600 text-lg max-w-2xl mx-auto">Soluções seguras e estratégicas para proteger o seu patrimônio com foco em resultados.</p>
              </div>
            </FadeIn>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Imobiliário Card */}
                <FadeIn delay={100}>
                  <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-lg transition-all border border-stone-100 h-full flex flex-col justify-between group">
                      <div>
                          <div className="flex justify-between items-start mb-6">
                              <iconify-icon icon="solar:home-bold" class="text-4xl text-aline-dark"></iconify-icon>
                              <span className="text-stone-300 font-medium text-lg">01</span>
                          </div>
                          <h4 className="text-xl font-bold text-aline-dark mb-3">Direito Imobiliário</h4>
                          <p className="text-stone-600 text-sm leading-relaxed mb-6">
                              Assessoria em compra e venda, regularização de imóveis, usucapião, leilões, distratos e proteção do seu patrimônio com segurança jurídica.
                          </p>
                      </div>
                      <a href={whatsappUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-aline-primary font-bold text-sm hover:text-aline-light transition-colors">
                          Saber mais <iconify-icon icon="solar:arrow-right-linear" class="text-lg group-hover:translate-x-1 transition-transform"></iconify-icon>
                      </a>
                  </div>
                </FadeIn>
                
                {/* Consumidor Card */}
                <FadeIn delay={200}>
                  <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-lg transition-all border border-stone-100 h-full flex flex-col justify-between group">
                      <div>
                          <div className="flex justify-between items-start mb-6">
                              <iconify-icon icon="solar:cart-large-bold" class="text-4xl text-aline-dark"></iconify-icon>
                              <span className="text-stone-300 font-medium text-lg">02</span>
                          </div>
                          <h4 className="text-xl font-bold text-aline-dark mb-3">Direito do Consumidor</h4>
                          <p className="text-stone-600 text-sm leading-relaxed mb-6">
                              Defesa firme contra abusos de empresas, problemas com construtoras, atrasos de obra, indenizações e cobranças indevidas.
                          </p>
                      </div>
                      <a href={whatsappUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-aline-primary font-bold text-sm hover:text-aline-light transition-colors">
                          Saber mais <iconify-icon icon="solar:arrow-right-linear" class="text-lg group-hover:translate-x-1 transition-transform"></iconify-icon>
                      </a>
                  </div>
                </FadeIn>

                {/* Consultoria Card */}
                <FadeIn delay={300}>
                  <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-lg transition-all border border-stone-100 h-full flex flex-col justify-between group">
                      <div>
                          <div className="flex justify-between items-start mb-6">
                              <iconify-icon icon="solar:shield-check-bold" class="text-4xl text-aline-dark"></iconify-icon>
                              <span className="text-stone-300 font-medium text-lg">03</span>
                          </div>
                          <h4 className="text-xl font-bold text-aline-dark mb-3">Consultoria Preventiva</h4>
                          <p className="text-stone-600 text-sm leading-relaxed mb-6">
                              Análise detalhada de contratos e due diligence para evitar que você assine documentos abusivos que gerem prejuízos no futuro.
                          </p>
                      </div>
                      <a href={whatsappUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-aline-primary font-bold text-sm hover:text-aline-light transition-colors">
                          Saber mais <iconify-icon icon="solar:arrow-right-linear" class="text-lg group-hover:translate-x-1 transition-transform"></iconify-icon>
                      </a>
                  </div>
                </FadeIn>
            </div>

            {/* Detalhamento dos Serviços (Lists) */}
            <div className="mt-24 space-y-12">
               
               {/* Imobiliário Detail */}
               <FadeIn delay={100} direction="up">
                 <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-sm border border-stone-100">
                    <div className="flex flex-col md:flex-row gap-8 lg:gap-16">
                      <div className="md:w-1/3">
                        <iconify-icon icon="solar:home-bold" class="text-5xl text-aline-primary mb-4"></iconify-icon>
                        <h4 className="text-2xl md:text-3xl font-bold text-aline-dark font-title">Direito Imobiliário</h4>
                      </div>
                      <div className="md:w-2/3">
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                          <li className="flex items-start gap-3">
                              <span className="text-aline-primary mt-1 font-bold text-lg">•</span>
                              <p className="text-stone-600 text-sm font-medium">Consultoria e análise de contratos de compra e venda.</p>
                          </li>
                          <li className="flex items-start gap-3">
                              <span className="text-aline-primary mt-1 font-bold text-lg">•</span>
                              <p className="text-stone-600 text-sm font-medium">Regularização de imóveis (judicial e extrajudicial).</p>
                          </li>
                          <li className="flex items-start gap-3">
                              <span className="text-aline-primary mt-1 font-bold text-lg">•</span>
                              <p className="text-stone-600 text-sm font-medium">Usucapião para garantir a propriedade definitiva.</p>
                          </li>
                          <li className="flex items-start gap-3">
                              <span className="text-aline-primary mt-1 font-bold text-lg">•</span>
                              <p className="text-stone-600 text-sm font-medium">Defesa estratégica contra execuções e leilões.</p>
                          </li>
                          <li className="flex items-start gap-3">
                              <span className="text-aline-primary mt-1 font-bold text-lg">•</span>
                              <p className="text-stone-600 text-sm font-medium">Resolução de problemas de locação e despejo.</p>
                          </li>
                          <li className="flex items-start gap-3">
                              <span className="text-aline-primary mt-1 font-bold text-lg">•</span>
                              <p className="text-stone-600 text-sm font-medium">Assessoria jurídica para investidores imobiliários.</p>
                          </li>
                        </ul>
                      </div>
                    </div>
                 </div>
               </FadeIn>

               {/* Consumidor Detail */}
               <FadeIn delay={200} direction="up">
                 <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-sm border border-stone-100">
                    <div className="flex flex-col md:flex-row gap-8 lg:gap-16">
                      <div className="md:w-1/3">
                        <iconify-icon icon="solar:cart-large-bold" class="text-5xl text-aline-primary mb-4"></iconify-icon>
                        <h4 className="text-2xl md:text-3xl font-bold text-aline-dark font-title">Direito do Consumidor</h4>
                      </div>
                      <div className="md:w-2/3">
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                          <li className="flex items-start gap-3">
                              <span className="text-aline-primary mt-1 font-bold text-lg">•</span>
                              <p className="text-stone-600 text-sm font-medium">Ações contra atraso na entrega de imóveis na planta.</p>
                          </li>
                          <li className="flex items-start gap-3">
                              <span className="text-aline-primary mt-1 font-bold text-lg">•</span>
                              <p className="text-stone-600 text-sm font-medium">Distrato imobiliário (cancelamento de compra).</p>
                          </li>
                          <li className="flex items-start gap-3">
                              <span className="text-aline-primary mt-1 font-bold text-lg">•</span>
                              <p className="text-stone-600 text-sm font-medium">Revisão de contratos com cláusulas e juros abusivos.</p>
                          </li>
                          <li className="flex items-start gap-3">
                              <span className="text-aline-primary mt-1 font-bold text-lg">•</span>
                              <p className="text-stone-600 text-sm font-medium">Cobranças indevidas de condomínio ou banco.</p>
                          </li>
                          <li className="flex items-start gap-3">
                              <span className="text-aline-primary mt-1 font-bold text-lg">•</span>
                              <p className="text-stone-600 text-sm font-medium">Indenizações por danos materiais e morais.</p>
                          </li>
                        </ul>
                      </div>
                    </div>
                 </div>
               </FadeIn>

            </div>

        </div>
      </section>

      {/* GMB Reviews Section (Prova Social - CARROSSEL) */}
      <section id="depoimentos" className="py-24 bg-stone-50 border-t border-stone-200 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
            <div className="text-center mb-12">
                <div className="flex items-center justify-center gap-2 mb-4">
                    <iconify-icon icon="logos:google-icon" class="text-3xl"></iconify-icon>
                    <div className="flex gap-1 text-[#FBBC05] text-2xl">
                        <iconify-icon icon="solar:star-bold"></iconify-icon>
                        <iconify-icon icon="solar:star-bold"></iconify-icon>
                        <iconify-icon icon="solar:star-bold"></iconify-icon>
                        <iconify-icon icon="solar:star-bold"></iconify-icon>
                        <iconify-icon icon="solar:star-bold"></iconify-icon>
                    </div>
                </div>
                <h2 className="text-4xl md:text-5xl font-title text-aline-dark font-bold leading-tight">Autoridade Comprovada</h2>
                <p className="text-lg text-stone-600 mt-4">Veja o que alguns de nossos clientes dizem sobre nós.</p>
            </div>
        </div>

        {/* Carousel Container */}
        <div 
          className="relative group w-full"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onTouchStart={() => setIsHovered(true)}
          onTouchEnd={() => setIsHovered(false)}
        >
            {/* Left Button */}
            <button 
              onClick={() => scrollCarousel('left')}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 backdrop-blur shadow-xl border border-stone-100 text-aline-dark hover:text-white hover:bg-aline-light w-12 h-12 rounded-full flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 md:left-12"
                >
                  <iconify-icon icon="solar:alt-arrow-left-linear" class="text-2xl"></iconify-icon>
                </button>

                {/* Tracks */}
                <div 
                  ref={carouselRef}
                  className="flex gap-6 overflow-x-auto snap-x snap-mandatory py-8 px-6 md:px-12 xl:px-24 2xl:px-48 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] scroll-smooth"
                >
                    {googleReviews.map((review, idx) => {
                        // Determine random background colors for avatars based on index to keep it colorful
                        const bgColors = ['bd9f57', '25D366', '1c1917', 'D32F2F', '1976D2', 'F57C00', '7B1FA2'];
                        const bgColor = bgColors[idx % bgColors.length];
                        const encodedName = encodeURIComponent(review.name);

                        return (
                          <div 
                            key={idx} 
                            className="min-w-[300px] max-w-[300px] md:min-w-[380px] md:max-w-[380px] snap-center bg-white/70 backdrop-blur-md p-6 md:p-8 rounded-2xl shadow-xl shadow-stone-200/30 border border-white/60 flex flex-col justify-between shrink-0 transform transition-transform hover:-translate-y-2"
                          >
                              <div>
                                  <div className="flex items-center gap-4 mb-5">
                                      <img 
                                        src={`https://ui-avatars.com/api/?name=${encodedName}&background=${bgColor}&color=fff&rounded=true&font-size=0.33`} 
                                        alt={review.name} 
                                        className="w-12 h-12 rounded-full border-2 border-stone-100 shadow-sm" 
                                      />
                                      <div>
                                          <p className="font-bold text-stone-800 text-sm md:text-base leading-tight">{review.name}</p>
                                          <p className="text-xs text-stone-400 mt-1">{review.time}</p>
                                      </div>
                                  </div>
                                  <div className="flex gap-1 text-[#FBBC05] text-sm mb-4">
                                      <iconify-icon icon="solar:star-bold"></iconify-icon>
                                      <iconify-icon icon="solar:star-bold"></iconify-icon>
                                      <iconify-icon icon="solar:star-bold"></iconify-icon>
                                      <iconify-icon icon="solar:star-bold"></iconify-icon>
                                      <iconify-icon icon="solar:star-bold"></iconify-icon>
                                  </div>
                                  {review.text && (
                                    <p className="text-stone-700 font-body text-sm leading-relaxed italic line-clamp-6">"{review.text}"</p>
                                  )}
                              </div>
                          </div>
                        );
                    })}
                </div>

                {/* Right Button */}
                <button 
                  onClick={() => scrollCarousel('right')}
                  className="absolute right-4 md:right-12 top-1/2 -translate-y-1/2 z-10 bg-white/90 backdrop-blur shadow-xl border border-stone-100 text-aline-dark hover:text-white hover:bg-aline-light w-12 h-12 rounded-full flex items-center justify-center transition-all opacity-0 group-hover:opacity-100"
                >
                  <iconify-icon icon="solar:alt-arrow-right-linear" class="text-2xl"></iconify-icon>
                </button>
            </div>
            
            <div className="text-center mt-10">
                <a href={whatsappUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 font-bold text-aline-dark hover:text-aline-light transition-colors uppercase tracking-wider text-sm">
                    Quero Me Tornar Um Caso De Sucesso <iconify-icon icon="solar:arrow-right-linear" class="text-xl"></iconify-icon>
                </a>
            </div>
      </section>

      <DiagnosticQuiz />

      {/* Founder Section */}
      <section id="sobre" className="py-24 px-6 md:px-12 bg-aline-cream text-aline-dark relative overflow-hidden">
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-aline-light/10 rounded-full blur-3xl"></div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
            <div className="relative">
                <div className="absolute -bottom-6 -left-6 w-full h-full bg-aline-light rounded-2xl opacity-20"></div>
                <img 
                  src={sobreImgUrl} 
                  alt="Aline Rodrigues" 
                  width="600"
                  height="800"
                  loading="lazy"
                  className="relative rounded-2xl shadow-2xl hover:grayscale-0 transition-all duration-700 w-full object-cover h-[500px] md:h-[600px] grayscale-[30%]" 
                />
            </div>
            
            <div className="space-y-6">
                <span className="text-aline-light uppercase tracking-widest text-sm font-semibold font-body">Por trás da Advocacia</span>
                <h2 className="text-4xl md:text-5xl font-title leading-tight font-bold">Muito prazer, sou <br/><span className="italic text-aline-primary font-light">Aline Rodrigues.</span></h2>
                
                <div className="text-lg text-stone-700 font-body leading-relaxed space-y-5 bg-white/50 p-8 rounded-2xl border border-stone-200 shadow-sm backdrop-blur-sm relative">
                    <iconify-icon icon="solar:pen-new-square-linear" class="absolute top-4 right-4 text-3xl text-aline-light/30"></iconify-icon>
                    <p>
                        Eu acredito que a justiça não deve ser distante e nem fria. Quando você me procura, sei que ali existe uma preocupação real com o seu patrimônio, com a sua família e com o seu futuro.
                    </p>
                    <p>
                        Minha atuação em <strong>Direito Imobiliário e do Consumidor</strong> nasceu exatamente disso: da vontade de trazer <em>segurança</em> e <em>tranquilidade</em> para pessoas que muitas vezes estão prestes a assinar o contrato de suas vidas ou enfrentando problemas desgastantes com construtoras e bancos.
                    </p>
                    <p>
                        Aqui, você não é apenas mais um número de processo. Meu foco é entender o seu problema a fundo, evitar o "juridiquês" desnecessário e desenhar uma <strong>estratégia clara, humana e altamente técnica</strong> para proteger aquilo que é seu por direito.
                    </p>
                    <p className="font-bold text-aline-dark pt-2 font-title italic text-xl">
                        Conte comigo para blindar o seu patrimônio.
                    </p>
                </div>

                <div className="pt-4">
                    <a href={whatsappUrl} target="_blank" rel="noreferrer" className="inline-flex bg-aline-primary text-white px-8 py-4 rounded-full font-bold hover:bg-aline-dark shadow-md transition-colors items-center gap-2">
                        Falar Diretamente com Aline <iconify-icon icon="ic:baseline-whatsapp" class="text-xl text-green-400"></iconify-icon>
                    </a>
                </div>
            </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6 md:px-12 bg-aline-bg">
        <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-title text-aline-dark font-bold text-center mb-12">Perguntas Frequentes</h2>
            <div className="space-y-4">
                <FAQItem 
                  question="Por que eu preciso de um advogado para fechar um contrato de imóvel?"
                  answer="Contratos padronizados (de construtoras e imobiliárias) são feitos para proteger a empresa, não você. Uma análise preventiva identifica juros abusivos, cláusulas de retenção ilegais e problemas na matrícula do imóvel antes que você assine."
                />
                <FAQItem 
                  question="Meu imóvel está irregular. Posso perder a posse?"
                  answer="Sim. Imóveis sem registro no cartório (apenas com contrato de gaveta) são vulneráveis a dívidas do antigo dono e disputas de herdeiros. Atuamos com Usucapião e regularização extrajudicial para garantir que a propriedade seja legalmente sua."
                />
                <FAQItem 
                  question="Atraso na entrega de obra gera indenização?"
                  answer="Sim. Se a construtora ultrapassar o prazo de tolerância (geralmente 180 dias), você tem direito a receber multas contratuais, lucros cessantes (aluguéis que deixou de ganhar) ou até mesmo rescindir o contrato recebendo 100% dos valores pagos."
                />
                <FAQItem 
                  question="Como funciona o atendimento da Dra. Aline?"
                  answer="O primeiro passo é realizar nosso Diagnóstico Online gratuito. Após entender a complexidade do seu caso, agendamos uma consultoria jurídica estratégica (online ou presencial) para desenhar o plano de ação exato para proteger seu patrimônio."
                />
            </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-aline-dark text-aline-bg pt-20 pb-10 px-6 md:px-12 font-body">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-stone-700/50 pb-16">
            <div className="md:col-span-1 space-y-6">
                <div className="flex items-center gap-2">
                  <div className="inline-block">
                    <img src={logoUrl} alt="Aline Rodrigues Logo" className="h-20 md:h-24 w-auto drop-shadow-sm brightness-0 invert opacity-90" />
                  </div>
                </div>
                <p className="text-stone-300 text-sm leading-relaxed">
                    Aline Rodrigues Advocacia e Consultoria.<br/>Proteção patrimonial com segurança jurídica e credibilidade.
                </p>
                <div className="flex space-x-4 pt-2">
                    <a href="https://instagram.com/dra.daobra" target="_blank" rel="noreferrer" aria-label="Instagram" className="flex items-center gap-3 group text-stone-300 hover:text-white transition-colors">
                        <div className="w-12 h-12 border border-stone-700 rounded-full flex items-center justify-center group-hover:bg-aline-light transition-colors">
                            <iconify-icon icon="mdi:instagram" class="text-xl"></iconify-icon>
                        </div>
                        <span className="font-medium tracking-wide">@dra.daobra</span>
                    </a>
                </div>
            </div>
            
            <div className="col-span-1">
                <h3 className="font-title text-xl mb-6 text-aline-light font-bold">Links Rápidos</h3>
                <ul className="space-y-1 text-sm text-stone-300">
                    <li><a href="#sobre" className="hover:text-white transition-colors block py-3">A Advogada</a></li>
                    <li><a href="#solucoes" className="hover:text-white transition-colors block py-3">Soluções Jurídicas</a></li>
                    <li><a href={whatsappUrl} target="_blank" rel="noreferrer" className="hover:text-white transition-colors block py-3">Diagnóstico Gratuito</a></li>
                </ul>
            </div>

            <div className="col-span-1 md:col-span-2">
                <h3 className="font-title text-xl mb-6 text-aline-light font-bold">Contato & Localização</h3>
                <ul className="space-y-3 text-sm text-stone-300 mb-6">
                    <li className="flex items-center"><iconify-icon icon="solar:phone-linear" class="mr-2 text-lg"></iconify-icon> (21) 96650-9969</li>
                    <li className="flex items-center"><iconify-icon icon="solar:letter-linear" class="mr-2 text-lg"></iconify-icon> aline.elem.adv@gmail.com</li>
                    <li className="flex items-start"><iconify-icon icon="solar:map-point-linear" class="mr-2 mt-1 text-lg"></iconify-icon> 
                        <span>Av das Americas 4200 – Bloco 01<br/>Sala 305 – Barra da Tijuca – RJ<br/>CEP: 22.640-907</span>
                    </li>
                </ul>
                <div className="w-full h-40 rounded-xl overflow-hidden shadow-lg border border-stone-700/50">
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3673.131102949704!2d-43.34430262468305!3d-22.98218107920387!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bda2c219614f1%3A0x67399bd66c6de8f0!2sAv.%20das%20Am%C3%A9ricas%2C%204200%20-%20Barra%20da%20Tijuca%2C%20Rio%20de%20Janeiro%20-%20RJ%2C%2022640-102!5e0!3m2!1spt-BR!2sbr!4v1716315509935!5m2!1spt-BR!2sbr" 
                        width="100%" 
                        height="100%" 
                        style={{ border: 0 }} 
                        allowFullScreen="" 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Mapa do Escritório"
                    ></iframe>
                </div>
            </div>

        </div>

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-center items-center text-sm text-stone-500 font-medium">
            <p>&copy; {new Date().getFullYear()} Aline Rodrigues Advocacia. Todos os direitos reservados. | OAB/RJ 243.682</p>
        </div>
        <div className="max-w-7xl mx-auto pt-4 text-xs text-stone-600 text-center">
            <p className="opacity-60">Este site tem propósito informativo e captação de acordo com as normas da OAB.</p>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a 
        href={whatsappUrl} 
        target="_blank" 
        rel="noreferrer" 
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-16 h-16 bg-[#25D366] text-white rounded-full shadow-[0_4px_14px_0_rgba(37,211,102,0.39)] hover:scale-110 hover:shadow-[0_6px_20px_rgba(37,211,102,0.23)] transition-all duration-300 group animate-bounce"
        style={{ animationDuration: '3s' }}
      >
        <div className="absolute inset-0 w-full h-full rounded-full border-2 border-[#25D366] animate-ping opacity-75"></div>
        <iconify-icon icon="ic:baseline-whatsapp" class="text-4xl relative z-10"></iconify-icon>
      </a>
    </>
  );
}

export default App;
