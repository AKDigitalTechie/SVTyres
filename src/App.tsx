import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Brands from './components/Brands';
import Services from './components/Services';
import Products from './components/Products';
import Gallery from './components/Gallery';
import Reviews from './components/Reviews';
import Offers from './components/Offers';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import FloatingButtons from './components/FloatingButtons';
import InstagramPopup from './components/InstagramPopup';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <About />
      <Brands />
      <Services />
      <Products />
      <Gallery />
      <Reviews />
      <Offers />
      <FAQ />
      <Contact />
      <Footer />
      <FloatingButtons />
      <InstagramPopup />
    </div>
  );
}

export default App;
