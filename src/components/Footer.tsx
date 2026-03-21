import './Footer.css';
import { Twitter, DiscIcon as Discord, Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="logo">
              <span className="logo-icon"></span>
              <h2>CYBER<span className="text-gradient">RONIN</span></h2>
            </div>
            <p className="footer-desc">
              Unmask the future of NFTs. Join the most exclusive Web3 clan and dominate the shadow economy.
            </p>
          </div>
          
          <div className="footer-links-group">
            <h4>EXPLORE</h4>
            <ul className="footer-links">
              <li><a href="#about">About</a></li>
              <li><a href="#collection">Collection</a></li>
              <li><a href="#perks">Perks</a></li>
              <li><a href="#economy">Economy</a></li>
            </ul>
          </div>
          
          <div className="footer-links-group">
            <h4>RESOURCES</h4>
            <ul className="footer-links">
              <li><a href="#faq">FAQ</a></li>
              <li><a href="#">Whitepaper</a></li>
              <li><a href="#">Smart Contract</a></li>
              <li><a href="#">Terms & Conditions</a></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p className="copyright">&copy; {new Date().getFullYear()} CyberRonin NFT. All rights reserved.</p>
          <div className="footer-socials">
            <a href="#" className="social-icon-footer"><Twitter size={20} /></a>
            <a href="#" className="social-icon-footer"><Discord size={20} /></a>
            <a href="#" className="social-icon-footer"><Github size={20} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
