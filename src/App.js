import React, { useRef } from 'react';
import { Route, Routes } from 'react-router-dom';

import Navbar from './Components/Navbar';
import HeroSection from './Pages/HeroSection';
import TestimonialsSection from './Components/Testimonials';
import GallerySection from './Components/GallerySection';
import Footer from './Components/Footer';
import ProductsPage from './Pages/ProductsPage';
import OurCommunity from './Pages/OurCommunity';

function App() {
  const heroRef = useRef(null);

  return (
    <div className="App flex flex-col min-h-screen">
      <Navbar heroRef={heroRef} />
      <main className="flex-grow">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeroSection ref={heroRef} />
                <TestimonialsSection />
                <GallerySection />
              </>
            }
          />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/ourcommunity" element={<OurCommunity />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;