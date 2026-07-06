import './Roadmap.css';

/** Project roadmap timeline — 3-step process for minting a CyberRonin warrior. */
const Roadmap = () => {
  return (
    <section id="roadmap" className="roadmap section-padding">
      <div className="container">
        <div className="roadmap-header">
          <h2 className="section-title">IN <span className="text-gradient">3 STEPS</span></h2>
          <p className="section-subtitle">
            Walk the path of the Ronin. Minting your exclusive warrior is simple.
          </p>
        </div>

        <div className="timeline">
          <div className="timeline-item left">
            <div className="timeline-content glass-panel">
              <h3>STEP 1: CONNECT WALLET</h3>
              <p>Link your MetaMask or preferred Web3 wallet to our secure application. Ensure you have sufficient ETH for the transaction.</p>
            </div>
            <div className="timeline-dot">1</div>
          </div>
          
          <div className="timeline-item right">
            <div className="timeline-dot">2</div>
            <div className="timeline-content glass-panel">
              <h3>STEP 2: PREPARE MINT</h3>
              <p>Select the amount of CyberRonins you wish to summon. Gas optimizing contracts ensure you pay the lowest fees possible.</p>
            </div>
          </div>
          
          <div className="timeline-item left">
            <div className="timeline-content glass-panel glow-primary">
              <h3 className="text-gradient">STEP 3: AWAKEN RONIN</h3>
              <p>Confirm the transaction and wait for the awakening. Your unique 3D CyberRonin will instantly reveal in your wallet.</p>
            </div>
            <div className="timeline-dot active">3</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
