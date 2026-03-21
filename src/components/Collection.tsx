import { useState } from 'react';
import './Collection.css';
import { IMAGES } from '../assets/images';
import ConnectModal from './ConnectModal';

const Collection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="collection" className="collection section-padding">
      <div className="container">
        <div className="collection-header">
          <h2 className="section-title">
            CYBER<span className="text-gradient">RONIN</span> IS A LIMITED <br />
            COLLECTION OF 5,000 WARRIORS.
          </h2>
        </div>

        <div className="collection-showcase-split">
          <div className="collection-split-item glass-panel">
            <img src={IMAGES.collection1} alt="Collection Sneak Peek 1" className="wide-showcase-img" />
          </div>
          <div className="collection-split-item glass-panel">
            <img src={IMAGES.collection2} alt="Collection Sneak Peek 2" className="wide-showcase-img" />
          </div>
        </div>

        <div className="collection-footer">
          <p className="subtitle">
            EACH RONIN IS UNIQUELY CRAFTED <span className="text-gradient">WITH RARE TRAITS</span> AND HIDDEN POWER.
          </p>
          <button 
            className="btn-outline"
            onClick={() => setIsModalOpen(true)}
          >
            VIEW FULL COLLECTION
          </button>
        </div>
      </div>

      <ConnectModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </section>
  );
};

export default Collection;
