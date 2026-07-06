import './ShadowEconomy.css';
import { IMAGES } from '../assets/images';

/** Shadow Economy section — tokenomics, staking, and ecosystem mechanics for $SHADOW token. */
const ShadowEconomy = () => {
  return (
    <section id="economy" className="economy section-padding">
      <div className="container">
        <div className="economy-header">
          <h2 className="section-title">THE SHADOW <span className="text-gradient">ECONOMY</span></h2>
          <p className="section-subtitle">
            Earn $SHADOW tokens daily by staking your Ronin. Participate in clan governance and the exclusive merchandise store.
          </p>
        </div>

        <div className="tokenomics-container">
          <div className="center-figure">
            <div className="figure-glow"></div>
            <img src={IMAGES.shadow} alt="Shadow Master" className="floating-animation" />
          </div>

          <div className="stats-circle">
            <div className="stat-node node-top-left glass-panel glow-primary">
              <h4>COMMUNITY</h4>
              <p className="text-gradient">40%</p>
            </div>
            
            <div className="stat-node node-top-right glass-panel">
              <h4>STAKING REWARDS</h4>
              <p className="text-gradient">30%</p>
            </div>
            
            <div className="stat-node node-bottom-left glass-panel">
              <h4>TREASURY</h4>
              <p className="text-gradient">15%</p>
            </div>
            
            <div className="stat-node node-bottom-right glass-panel glow-secondary">
              <h4>TEAM & ADVISORS</h4>
              <p className="text-gradient">15%</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShadowEconomy;
