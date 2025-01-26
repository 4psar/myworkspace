
import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Services from './components/Services';
import Destinations from './components/Destinations';
import BookingSteps from './components/BookingSteps';
import Testimonials from './components/Testimonials';
import Subscribe from './components/subscribe';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <Services />
      <Destinations />
      <BookingSteps />
      <Testimonials />
      <Subscribe />
      <Footer />
    </div>
  );
}

export default App;
