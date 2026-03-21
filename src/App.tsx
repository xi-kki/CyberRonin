import Header from './components/Header';
import Hero from './components/Hero';
import Collection from './components/Collection';
import Perks from './components/Perks';
import ShadowEconomy from './components/ShadowEconomy';
import Roadmap from './components/Roadmap';
import Team from './components/Team';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <Collection />
        <Perks />
        <ShadowEconomy />
        <Roadmap />
        <Team />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

export default App;
