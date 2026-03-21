import './Hero.css';
import { IMAGES } from '../assets/images';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-glow background-glow"></div>
      
      <div className="container hero-container">
        <div className="hero-header">
          <h1 className="hero-title">
            UNMASK THE <br />
            <span className="text-gradient">FUTURE OF NFTs</span>
          </h1>
          <p className="hero-subtitle">
            Join the most advanced web3 ninja clan. The shadow economy is waiting for the chosen ones.
          </p>
          <button 
            className="btn-primary"
            onClick={() => document.getElementById('collection')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Explore Collection <ArrowRight size={18} />
          </button>
        </div>

        <div className="hero-content">
          <div className="hero-left-panel glass-panel">
            <div className="nft-preview">
              <img src={IMAGES.ghostRonin} alt="Ronin #01" />
              <div className="nft-info">
                <h3>Ghost Ronin #1337</h3>
                <p>Legendary Tier</p>
                <div className="price">
                  <span className="eth-icon">Ξ</span> 2.5
                </div>
              </div>
            </div>
          </div>

          <div className="hero-center-image">
            <div className="hero-image-wrapper">
              <div className="hero-glow center-glow"></div>
              <img src={IMAGES.hero} alt="Cyberpunk Ronin" className="main-character floating-animation" />
            </div>
          </div>

          <div className="hero-right-panels">
            <div className="stat-panel glass-panel">
              <h3 className="text-gradient">5000+</h3>
              <p>UNIQUE WARRIORS</p>
            </div>
            <div className="stat-panel glass-panel">
              <h3 className="text-gradient">40+</h3>
              <p>HOURS CRAFTSMANSHIP</p>
            </div>
            <div className="stat-panel glass-panel">
              <h3 className="text-gradient">0.55 Ξ</h3>
              <p>FLOOR PRICE</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative environment floor */}
      <div className="hero-floor"></div>
    </section>
  );
};

export default Hero;
