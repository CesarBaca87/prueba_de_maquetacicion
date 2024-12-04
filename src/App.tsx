import { Header } from './components/Header/Header';
import { Hero } from './components/Hero/Hero';
import { GiftForm } from './components/GiftForm/GiftForm';
import { Footer } from './components/Footer/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <Hero
          title="DESCUBRE TU REGALO"
          subtitle="Una experiencia única te espera"
        />
        <GiftForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;