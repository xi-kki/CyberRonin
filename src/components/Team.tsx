import './Team.css';
import { IMAGES } from '../assets/images';

const Team = () => {
  return (
    <section id="team" className="team section-padding">
      <div className="container">
        <div className="team-header">
          <h2 className="section-title">MEET <span className="text-gradient">THE TEAM</span></h2>
          <p className="section-subtitle">
            The minds behind the shadow economy and the CyberRonin clan.
          </p>
        </div>

        <div className="team-showcase-wide glass-panel">
          <img src={IMAGES.teamWide} alt="The Team" className="wide-showcase-img" />
          <div className="team-overlay-info">
            <div className="team-socials">
              <a href="#" className="social-icon">X</a>
              <a href="#" className="social-icon">IN</a>
              <a href="#" className="social-icon">DC</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
