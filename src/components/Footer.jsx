import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <h2 className="footer-logo">AR</h2>
            <h3>Aline Rodrigues</h3>
            <p>Advocacia e Consultoria</p>
            <p className="mt-sm footer-desc">Especialista em defender o seu patrimônio e os seus direitos, com estratégia e transparência.</p>
          </div>
          
          <div className="footer-contact">
            <h4 className="footer-title">Contato</h4>
            <div className="contact-item">
              <Phone size={18} />
              <span>(21) 96650-9969</span>
            </div>
            <div className="contact-item">
              <Mail size={18} />
              <span>aline.elem.adv@gmail.com</span>
            </div>
            <div className="contact-item">
              <MapPin size={18} />
              <span>Atendimento Digital em todo o Brasil.</span>
            </div>
          </div>
          
          <div className="footer-social">
            <h4 className="footer-title">Redes Sociais</h4>
            <div className="social-links">
              <a href="https://instagram.com/alinem_adv" target="_blank" rel="noopener noreferrer" className="social-link">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg> @alinem_adv
              </a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Aline Rodrigues Advocacia. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
