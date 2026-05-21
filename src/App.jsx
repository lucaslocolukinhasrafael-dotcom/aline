import React, { useState, useRef, useEffect } from 'react';
import logoUrl from './assets/logo.svg';
import heroImgUrl from './assets/aline-hero.webp';
import sobreImgUrl from './assets/aline-sobre.webp';

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
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleNext = (key, value) => {
    setFormData({ ...formData, [key]: value });
    setStep(step + 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStep(step + 1);
    setIsAnalyzing(true);
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
              <button onClick={() => setStep(1)} className="w-full py-5 bg-gradient-to-r from-aline-dark to-[#8a723b] text-white font-bold rounded-xl hover:shadow-xl hover:shadow-aline-light/20 transition-all transform hover:-translate-y-1 text-xl flex items-center justify-center gap-2">
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
          <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-aline-light/30 my-8">
            <button onClick={() => setStep(0)} className="absolute top-6 right-6 text-stone-400 hover:text-aline-dark transition-colors z-10">
              <iconify-icon icon="solar:close-circle-linear" class="text-3xl"></iconify-icon>
            </button>
            <div className="p-8 md:p-12">

          {step === 1 && (
            <div className="space-y-6 animate-fade-in">
              <span className="text-sm font-bold tracking-widest text-aline-light uppercase">Passo 1 de 5</span>
              <h3 className="text-3xl font-title text-aline-dark">Qual é o tema principal do seu caso?</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                {['Regularização / Usucapião', 'Conflito com Construtora (Atraso/Distrato)', 'Problemas com Leilão', 'Compra e Venda Segura (Preventivo)', 'Direito do Consumidor', 'Outro (Família/Inventário)'].map((theme) => (
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
              <h3 className="text-3xl font-title text-aline-dark">Há quanto tempo esse problema existe?</h3>
              <div className="flex flex-col gap-4 mt-6">
                {['Menos de 3 meses', 'De 3 meses a 1 ano', 'Mais de 1 ano', 'Ainda é preventivo (fechando negócio)'].map((time) => (
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
              <h3 className="text-3xl font-title text-aline-dark">Qual a sua maior preocupação hoje?</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                {['Perder o imóvel / patrimônio', 'Pagar taxas abusivas', 'Ficar com o nome sujo', 'Não conseguir documentar a posse', 'Assinar um contrato ruim'].map((concern) => (
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
              <h3 className="text-3xl font-title text-aline-dark">Você possui documentos ou contratos relacionados ao caso?</h3>
              <div className="flex flex-col gap-4 mt-6">
                {['Sim, tenho tudo documentado', 'Tenho apenas conversas (WhatsApp/Email)', 'Não tenho documentos', 'Não sei avaliar'].map((doc) => (
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
                  <input required type="text" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className="w-full p-4 border-2 border-stone-200 rounded-xl focus:outline-none focus:border-aline-dark transition-colors bg-stone-50" placeholder="Ex: João da Silva" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-aline-dark mb-1">WhatsApp com DDD</label>
                  <input required type="text" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} className="w-full p-4 border-2 border-stone-200 rounded-xl focus:outline-none focus:border-aline-dark transition-colors bg-stone-50" placeholder="(11) 99999-9999" />
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
              <h3 className="text-4xl font-title font-bold text-aline-dark">Seu Patrimônio Pode Ser Salvo.</h3>
              <p className="text-lg text-stone-600 font-body">
                Com base no seu cenário sobre <strong>{formData.theme}</strong>, nossa análise indica que <strong className="text-aline-dark">é possível reverter os riscos e proteger seus direitos</strong> se agirmos estrategicamente agora.
              </p>
              <div className="p-6 bg-stone-50 border border-stone-200 rounded-xl mt-6 mb-6 text-left">
                <p className="text-sm text-stone-800 leading-relaxed font-medium">A Dra. Aline já estruturou a proteção de dezenas de clientes em situações idênticas à sua. Não perca prazos decisivos. Fale diretamente com ela agora para executar o seu plano de ação.</p>
              </div>
              <a href={generateWhatsAppUrl()} target="_blank" rel="noreferrer" className="inline-block mt-4 w-full px-10 py-5 bg-[#25D366] text-white font-bold rounded-xl shadow-xl hover:bg-[#1ebd5a] transition-all duration-300 flex items-center justify-center gap-3 text-lg hover:-translate-y-1">
                <iconify-icon icon="mdi:whatsapp" class="text-3xl"></iconify-icon>
                Quero Falar com a Dra. Aline
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
      {/* Announcement Bar */}
      <div className="bg-aline-dark text-aline-bg text-xs font-medium py-3 text-center tracking-wide uppercase px-4">
        <span>Atenção{userCity ? ` ${userCity}` : ''}: Vagas abertas para diagnóstico gratuito esta semana. <strong className="underline decoration-1 underline-offset-2">Agende Agora!</strong></span>
      </div>

      {/* Navigation */}
      <nav className="hidden md:flex sticky top-0 z-50 w-full px-8 py-5 justify-between items-center bg-aline-bg/90 backdrop-blur-sm border-b border-stone-200/50 transition-all duration-300 relative">
        <div className="flex items-center gap-3">
          <img src={logoUrl} alt="Aline Rodrigues Logo" className="h-20 md:h-24 w-auto drop-shadow-sm" />
        </div>

        <div className="hidden md:flex items-center space-x-8 text-sm font-medium tracking-wide text-stone-600 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <a href="#solucoes" className="hover:text-aline-dark transition-colors">Soluções</a>
          <a href="#sobre" className="hover:text-aline-dark transition-colors">A Advogada</a>
          <a href="#depoimentos" className="hover:text-aline-dark transition-colors">Resultados</a>
        </div>

        <div className="hidden md:flex items-center">
          <a href={whatsappUrl} target="_blank" rel="noreferrer" className="px-6 py-3 bg-aline-dark text-aline-bg font-bold rounded-full hover:bg-aline-light transition-colors duration-300 shadow-lg">
            Diagnóstico Gratuito
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 px-6 md:px-12 overflow-hidden">
        {/* Background elements */}
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-stone-100 via-stone-50 to-white -z-10"></div>
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-aline-light/10 rounded-full blur-3xl -z-10"></div>
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10 mt-10">
            {/* Text Column */}
            <div className="flex flex-col items-start text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-aline-light/10 text-aline-dark text-sm font-bold tracking-wide mb-8 border border-aline-light/20">
                <span className="w-2 h-2 rounded-full bg-aline-dark animate-pulse"></span>
                Atendimento Jurídico Especializado
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-title font-bold text-aline-dark leading-[1.1] tracking-tight mb-6">
                Proteja seu patrimônio com <span className="text-transparent bg-clip-text bg-gradient-to-r from-aline-dark to-aline-light">Segurança e Estratégia</span>
              </h1>
              <p className="text-lg md:text-xl text-stone-600 mb-10 max-w-2xl font-body leading-relaxed">
                Consultoria e atuação estratégica em conflitos imobiliários, leilões, usucapião e problemas com construtoras. Evite prejuízos antes mesmo que eles aconteçam.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <a href={whatsappUrl} target="_blank" rel="noreferrer" className="px-8 py-4 bg-gradient-to-r from-aline-dark to-[#8a723b] text-white rounded-xl font-bold text-lg hover:shadow-xl hover:shadow-aline-light/30 transition-all transform hover:-translate-y-1 text-center flex items-center justify-center gap-2">
                  <iconify-icon icon="ic:baseline-whatsapp" class="text-2xl"></iconify-icon>
                  Falar com a Dra. Aline
                </a>
                <a href="#diagnostico" className="px-8 py-4 bg-white border-2 border-stone-200 text-stone-700 rounded-xl font-bold text-lg hover:border-aline-light hover:text-aline-dark transition-all text-center flex items-center justify-center">
                  Diagnóstico Gratuito
                </a>
              </div>
            </div>

            {/* Image Column */}
            <div className="relative w-full h-[500px] lg:h-[650px] rounded-3xl opacity-95 shadow-2xl shadow-aline-light/20 overflow-hidden transform lg:translate-x-4 mt-12 lg:mt-0">
              <img 
                src={heroImgUrl} 
                alt="Dra. Aline Rodrigues" 
                width="600"
                height="800"
                fetchpriority="high"
                className="w-full h-full object-cover object-[center_top] absolute inset-0 grayscale-[10%] sepia-[5%]"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-aline-dark/20 to-transparent"></div>
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
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100 flex flex-col justify-between">
                        <div>
                            <div className="w-12 h-12 bg-green-100 text-green-700 rounded-full flex items-center justify-center mb-6">
                                <iconify-icon icon="solar:shield-check-bold" class="text-2xl"></iconify-icon>
                            </div>
                            <h4 className="font-bold text-aline-dark mb-2">Suspensão de Leilão</h4>
                            <p className="text-stone-600 text-sm leading-relaxed mb-6">"Faltavam 48 horas para a minha casa ir a leilão por uma dívida abusiva. A atuação liminar suspendeu o processo e forçou o banco a renegociar."</p>
                        </div>
                        <span className="text-xs font-bold text-stone-400 uppercase tracking-wider">— Caso de Sucesso Omitido*</span>
                    </div>

                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100 flex flex-col justify-between">
                        <div>
                            <div className="w-12 h-12 bg-aline-light/20 text-aline-dark rounded-full flex items-center justify-center mb-6">
                                <iconify-icon icon="solar:wad-of-money-bold" class="text-2xl"></iconify-icon>
                            </div>
                            <h4 className="font-bold text-aline-dark mb-2">Distrato de Imóvel</h4>
                            <p className="text-stone-600 text-sm leading-relaxed mb-6">"A construtora atrasou 1 ano a obra e queria me devolver só 60%. Entramos com a ação e garantimos a devolução de 100% dos valores pagos, com juros."</p>
                        </div>
                        <span className="text-xs font-bold text-stone-400 uppercase tracking-wider">— Caso de Sucesso Omitido*</span>
                    </div>

                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100 flex flex-col justify-between">
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

      {/* 3. Services Grid (The Offer) */}
      <section id="solucoes" className="py-20 px-6 md:px-12 border-t border-stone-200">
        <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                <div>
                    <h3 className="text-4xl md:text-5xl text-aline-dark mb-2">Atuação Estratégica</h3>
                    <p className="text-stone-500">Soluções imobiliárias voltadas para a proteção total do seu patrimônio.</p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Card 1 */}
                <div className="group bg-aline-bgDark p-8 md:p-10 rounded-2xl hover:bg-[#E5E1D8] transition-colors duration-300 cursor-pointer">
                    <div className="w-12 h-12 bg-aline-dark text-aline-bg rounded-full flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                        <iconify-icon icon="solar:home-angle-linear" class="text-2xl"></iconify-icon>
                    </div>
                    <h4 className="text-3xl font-title text-aline-dark mb-4 font-bold">Regularização e Usucapião</h4>
                    <p className="text-stone-600 mb-8 leading-relaxed font-body text-sm">
                        Um imóvel irregular perde até 40% do seu valor e não pode ser financiado. Atuamos com regularização registral e usucapião judicial/extrajudicial para garantir que você seja o verdadeiro dono.
                    </p>
                    <a href={whatsappUrl} target="_blank" rel="noreferrer" className="inline-flex items-center text-sm font-semibold uppercase tracking-wider text-aline-dark">
                        Analisar Meu Caso <iconify-icon icon="solar:arrow-right-up-linear" class="ml-1"></iconify-icon>
                    </a>
                </div>

                {/* Card 2 */}
                <div className="group bg-aline-bgDark p-8 md:p-10 rounded-2xl hover:bg-[#E5E1D8] transition-colors duration-300 cursor-pointer">
                    <div className="w-12 h-12 bg-aline-dark text-aline-bg rounded-full flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                        <iconify-icon icon="solar:danger-triangle-linear" class="text-2xl"></iconify-icon>
                    </div>
                    <h4 className="text-3xl font-title text-aline-dark mb-4 font-bold">Leilões e Construtoras</h4>
                    <p className="text-stone-600 mb-8 leading-relaxed font-body text-sm">
                        Defesa especializada contra leilões extrajudiciais e resolução de problemas complexos com construtoras (atraso de obra, distrato e cobranças abusivas).
                    </p>
                    <a href={whatsappUrl} target="_blank" rel="noreferrer" className="inline-flex items-center text-sm font-semibold uppercase tracking-wider text-aline-dark">
                        Analisar Meu Caso <iconify-icon icon="solar:arrow-right-up-linear" class="ml-1"></iconify-icon>
                    </a>
                </div>

                {/* Card 3 (Action Oriented) */}
                <div className="group bg-aline-dark p-8 md:p-10 rounded-2xl hover:bg-[#3a2818] transition-colors duration-300 cursor-pointer text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-aline-light opacity-10 rounded-full blur-2xl"></div>
                    <div className="w-12 h-12 bg-aline-light text-aline-dark rounded-full flex items-center justify-center mb-8 group-hover:scale-110 transition-transform relative z-10">
                        <iconify-icon icon="solar:document-add-linear" class="text-2xl"></iconify-icon>
                    </div>
                    <h4 className="text-3xl font-title text-white mb-4 font-bold relative z-10">Consultoria de Negócios</h4>
                    <p className="text-stone-300 mb-8 leading-relaxed font-body text-sm relative z-10">
                        A due diligence imobiliária garante que você não compre um problema. Analisamos contratos de compra e venda, matrículas e certidões antes de você fechar o negócio.
                    </p>
                    <a href={whatsappUrl} target="_blank" rel="noreferrer" className="inline-flex items-center text-sm font-semibold uppercase tracking-wider text-aline-light relative z-10">
                        Agendar Consultoria <iconify-icon icon="solar:arrow-right-up-linear" class="ml-1"></iconify-icon>
                    </a>
                </div>
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
                <h3 className="text-4xl md:text-5xl font-title font-bold text-aline-dark">Avaliações Reais de Clientes</h3>
                <p className="text-lg text-stone-600 mt-4">As 21 pessoas que confiaram e tiveram seu patrimônio protegido pela Dra. Aline.</p>
            </div>
        </div>

        {/* Carousel Container */}
        <div className="relative group w-full">
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
                            className="min-w-[300px] max-w-[300px] md:min-w-[380px] md:max-w-[380px] snap-center bg-white p-6 md:p-8 rounded-2xl shadow-md shadow-stone-200/50 border border-stone-200 flex flex-col justify-between shrink-0 transform transition-transform hover:-translate-y-2"
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
      <section id="sobre" className="py-20 px-6 md:px-12 bg-aline-dark text-aline-bg">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
                <div className="absolute inset-0 bg-aline-light rounded-2xl rotate-3 opacity-30"></div>
                <img 
                  src={sobreImgUrl} 
                  alt="Aline Rodrigues" 
                  width="600"
                  height="800"
                  loading="lazy"
                  className="relative rounded-2xl shadow-2xl hover:grayscale-0 transition-all duration-700 w-full object-cover h-[500px] md:h-[600px] grayscale-[30%]" 
                />
            </div>
            
            <div className="space-y-8">
                <span className="text-aline-light uppercase tracking-widest text-sm font-semibold font-body">Sua Advogada</span>
                <h2 className="text-5xl md:text-6xl font-title leading-tight font-bold">Conheça Aline Rodrigues</h2>
                <p className="text-lg md:text-xl text-stone-300 font-light leading-relaxed">
                    Com a experiência de mais de 100 casos atendidos, Aline percebeu que as pessoas não buscam apenas um processo judicial, mas sim recuperar a tranquilidade e a segurança sobre o seu patrimônio.
                </p>
                <p className="text-lg text-stone-400 font-light">
                    O meu foco não é apenas "processar", mas orientar você de forma clara, acessível e preventiva, garantindo segurança jurídica em cada decisão. O mercado está cheio de armadilhas, e o meu trabalho é ser o seu escudo com uma advocacia sofisticada, mas com linguagem que você entende.
                </p>
                <div className="pt-6">
                    <a href={whatsappUrl} target="_blank" rel="noreferrer" className="inline-block bg-aline-bg text-aline-dark px-8 py-4 rounded-full font-medium hover:bg-aline-light hover:text-white transition-colors">
                        Falar Diretamente com Aline
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
                <div className="flex space-x-4">
                    <a href="https://instagram.com/dra.daobra" target="_blank" rel="noreferrer" aria-label="Instagram" className="w-12 h-12 border border-stone-700 rounded-full flex items-center justify-center hover:bg-aline-light hover:text-white transition-colors">
                        <iconify-icon icon="mdi:instagram" class="text-xl"></iconify-icon>
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

        <div className="max-w-7xl mx-auto pt-10 flex flex-col md:flex-row justify-between items-center text-xs text-stone-500">
            <div className="space-y-1 text-center md:text-left">
                <p>© {new Date().getFullYear()} Aline Rodrigues Advocacia. Todos os direitos reservados.</p>
                <p className="opacity-60">Este site tem propósito informativo e captação de acordo com as normas da OAB.</p>
            </div>
        </div>
      </footer>
    </>
  );
}

export default App;
