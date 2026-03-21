import { useState, useEffect } from 'react';
import './Header.css';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const [isWalletDropdownOpen, setIsWalletDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleWalletDropdown = () => {
    setIsWalletDropdownOpen(!isWalletDropdownOpen);
  };

  const wallets = [
    { name: 'MetaMask', icon: '🦊' },
    { name: 'Coinbase Wallet', icon: '🛡️' },
    { name: 'WalletConnect', icon: '🔌' },
    { name: 'Phantom', icon: '👻' },
  ];

  return (
    <header className={`header ${isScrolled ? 'header-scrolled' : ''}`}>
      <div className="container header-container">
        <div className="logo">
          <span className="logo-icon"></span>
          <h2>CYBER<span className="text-gradient">RONIN</span></h2>
        </div>
        
        <nav className={`desktop-nav ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
          <ul className="nav-links">
            <li><a href="#about" onClick={() => setIsMobileMenuOpen(false)}>About</a></li>
            <li><a href="#collection" onClick={() => setIsMobileMenuOpen(false)}>Collection</a></li>
            <li><a href="#perks" onClick={() => setIsMobileMenuOpen(false)}>Perks</a></li>
            <li><a href="#economy" onClick={() => setIsMobileMenuOpen(false)}>Economy</a></li>
            <li><a href="#team" onClick={() => setIsMobileMenuOpen(false)}>Team</a></li>
          </ul>
          
          <div className="wallet-container">
            <button 
              className="btn-primary connect-btn"
              onClick={toggleWalletDropdown}
            >
              Connect Wallet
            </button>
            {isWalletDropdownOpen && (
              <div className="wallet-dropdown glass-panel">
                <div className="dropdown-header">Select Provider</div>
                <ul className="wallet-list">
                  {wallets.map((wallet) => (
                    <li 
                      key={wallet.name} 
                      className="wallet-item"
                      onClick={() => {
                        alert(`Searching for ${wallet.name} extension...`);
                        setIsWalletDropdownOpen(false);
                      }}
                    >
                      <span className="wallet-icon">{wallet.icon}</span>
                      <span className="wallet-name">{wallet.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </nav>

        <button 
          className="mobile-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} color="#fff" /> : <Menu size={24} color="#fff" />}
        </button>
      </div>
    </header>
  );
};

export default Header;
