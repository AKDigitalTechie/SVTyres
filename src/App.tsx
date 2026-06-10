import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Stats from './components/Stats';
import Brands from './components/Brands';
import Services from './components/Services';
import Products from './components/Products';
import Gallery from './components/Gallery';
import Reviews from './components/Reviews';
import Offers from './components/Offers';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';
import InstagramPopup from './components/InstagramPopup';
import BackToTop from './components/BackToTop';
import ScrollProgress from './components/ScrollProgress';
import LoadingScreen from './components/LoadingScreen';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <LoadingScreen />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Stats />
        <Brands />
        <Services />
        <Products />
        <Gallery />
        <Reviews />
        <Offers />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <FloatingButtons />
      <BackToTop />
      <InstagramPopup />
    </div>
  );
}

export default App;
