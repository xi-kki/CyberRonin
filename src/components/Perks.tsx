import './Perks.css';
import { IMAGES } from '../assets/images';

const Perks = () => {
  return (
    <section id="perks" className="perks section-padding">
      <div className="container">
        <div className="perks-header">
          <h2 className="section-title">UNLOCK <span className="text-gradient">THE PERKS</span></h2>
          <p className="section-subtitle">
            Holding a CyberRonin grants you access to unprecedented utility in the shadow economy and beyond.
          </p>
        </div>

        <div className="perks-grid">
          <div className="perk-card glass-panel">
            <div className="perk-content">
              <span className="perk-tag">PERK 01</span>
              <h3>COLLECTIBLE AWESOMENESS</h3>
              <p>Own a piece of high-quality 3D digital art designed by industry veterans with over 40 hours of craftsmanship per base model.</p>
            </div>
            <div className="perk-image">
              <img src={IMAGES.perks[0]} alt="Collectible" />
            </div>
          </div>

          <div className="perk-card glass-panel reverse">
            <div className="perk-content">
              <span className="perk-tag">PERK 02</span>
              <h3>STAKING REWARDS</h3>
              <p>Stake your Ronin in the shadow dojo to earn $SHADOW tokens daily. Use tokens to upgrade traits or mint future collections.</p>
            </div>
            <div className="perk-image">
              <img src={IMAGES.perks[1]} alt="Staking" />
            </div>
          </div>

          <div className="perk-card glass-panel">
            <div className="perk-content">
              <span className="perk-tag">PERK 03</span>
              <h3>CLAN METAVERSE ACCESS</h3>
              <p>Gain exclusive entry into the Neon District metaverse. Join clan wars, complete bounties, and socialize with other Ronins.</p>
              <button 
                className="btn-primary" 
                style={{ marginTop: '20px' }}
                onClick={() => alert('Downloading CyberRonin Whitepaper v1.0.2...')}
              >
                READ WHITEPAPER
              </button>
            </div>
            <div className="perk-image">
              <img src={IMAGES.perks[2]} alt="Metaverse" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Perks;
