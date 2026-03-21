import './ConnectModal.css';
import { X, ExternalLink } from 'lucide-react';

interface ConnectModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ConnectModal = ({ isOpen, onClose }: ConnectModalProps) => {
  if (!isOpen) return null;

  const wallets = [
    { name: 'MetaMask', icon: '🦊', description: 'Connect using your browser extension' },
    { name: 'Coinbase Wallet', icon: '🛡️', description: 'Connect with Coinbase Wallet' },
    { name: 'WalletConnect', icon: '🔌', description: 'Connect with a mobile wallet' },
    { name: 'Phantom', icon: '👻', description: 'Solana wallet support (Coming Soon)' },
  ];

  const handleWalletClick = (name: string) => {
    alert(`Connecting to ${name}... This is a demo version.`);
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-container glass-panel animate-scale-up">
        <button className="modal-close" onClick={onClose}>
          <X size={24} color="#fff" />
        </button>

        <div className="modal-content">
          <div className="modal-header">
            <h2 className="modal-title">CONNECT <span className="text-gradient">YOUR WALLET</span></h2>
            <p className="modal-subtitle">Select your preferred provider to join the shadow economy.</p>
          </div>

          <div className="wallet-grid">
            {wallets.map((wallet) => (
              <div 
                key={wallet.name} 
                className="wallet-card"
                onClick={() => handleWalletClick(wallet.name)}
              >
                <div className="wallet-card-icon">{wallet.icon}</div>
                <div className="wallet-card-info">
                  <h3>{wallet.name}</h3>
                  <p>{wallet.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="modal-footer">
            <p>New to Web3? <a href="https://metamask.io" target="_blank" rel="noreferrer">Learn how to setup a wallet <ExternalLink size={14} /></a></p>
          </div>
        </div>

        <div className="modal-qr-section">
          <div className="qr-container">
            {/* Placeholder for QR Code */}
            <div className="qr-placeholder">
              <div className="qr-inner"></div>
            </div>
            <p>Scan with your phone to connect</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConnectModal;
