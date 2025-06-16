



import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import React from 'react';

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: "Notre vision est de mieux grandir",
      subtitle: "Performance • Détermination • Excellence",
      description: "Nous accompagnons votre croissance avec expertise et détermination pour atteindre vos objectifs financiers.",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: 2,
      title: "Le travail en équipe, notre force",
      subtitle: "Compétences • Collaboration • Résultats",
      description: "Notre équipe d'experts combine ses compétences pour vous offrir des solutions sur mesure et des résultats exceptionnels.",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: 3,
      title: "Des clients toujours satisfaits",
      subtitle: "Simplicité • Confiance • Satisfaction",
      description: "Votre satisfaction est notre priorité. Nous simplifions les processus pour bâtir une relation de confiance durable.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=1200&q=80"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section id="accueil" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Images */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <div className="space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            {slides[currentSlide].title}
          </h1>
          <p className="text-xl md:text-2xl text-yellow-400 font-medium">
            {slides[currentSlide].subtitle}
          </p>
          <p className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            {slides[currentSlide].description}
          </p>

          {/* Links instead of buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
            <Link
              to="/services"
              className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-4 text-lg rounded-md transition duration-300"
            >
              Découvrir nos services
            </Link>
            <Link
              to="/contact"
              className="border border-white text-white hover:bg-white hover:text-blue-700 px-8 py-4 text-lg rounded-md transition duration-300"
            >
              Nous contacter
            </Link>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="flex space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'bg-yellow-500 scale-125'
                  : 'bg-yellow-300 hover:bg-yellow-400'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSlider;
