


// export default home
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import React from "react";
import ServicesContent from "../../helper/ServicesContent";

const Index = () => {


  useEffect(() => {
    // Faire défiler vers le haut au chargement de la page
    window.scrollTo(0, 0);
  }, []);

  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      title: "Pour une diaspora au controle meme a distance",
      subtitle: "Vous restez connectés à vos projets et vos engagements au pays",
      description: "Nous accompagnons votre croissance avec expertise et engagement.",
      imageUrl: "/images/cabinet1.jpeg"
    },
    {
      title: "Le travail en équipe, notre force",
      subtitle: "Compétences et résultats à travers la collaboration",
      description: "Une équipe soudée pour des solutions innovantes et efficaces.",
      imageUrl: "/images/cabinet2.jpg"
    },
    {
      title: "Des clients toujours satisfaits",
      subtitle: "Simplicité, confiance et satisfaction garantie",
      description: "Votre réussite est notre priorité absolue.",
      imageUrl: "/images/cabinet3.jpeg"
    }
  ];




  const testimonials = [
    {
      name: "Pierre Mvondo",
      position: "CEO, Groupe Mvondo",
      quote: "AVS Consulting a transformé notre gestion financière. Leurs conseils ont permis à notre entreprise de croître de 40% en deux ans.",
      rating: 5,
      image: "images/pic4.jpg"
    },
    {
      name: "Aïssatou Ndiaye",
      position: "Investisseuse, Paris",
      quote: "En tant que membre de la diaspora, j'apprécie particulièrement l'accompagnement personnalisé d'AVS pour investir au Cameroun en toute confiance.",
      rating: 5,
      image: "/images/pic1.png"
    },
    {
      name: "Olivier Kenfack",
      position: "Directeur, Banque Atlantique",
      quote: "Le professionnalisme et l'expertise de l'équipe AVS en font un partenaire incontournable pour tous les besoins en conseil financier.",
      rating: 4.5,
      image: "images/pic2.png"
    }
  ]




  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const services = [
    {
      icon: "💰",
      title: "Gestion de patrimoine",
      description: "Optimisation et protection de vos actifs financiers"
    },
    {
      icon: "🏢",
      title: "Business solution",
      description: "Conseils stratégiques pour développer votre entreprise"
    },
    {
      icon: "📊",
      title: "Conseil en investissement",
      description: "Stratégies d'investissement personnalisées et rentables"
    },
    {
      icon: "📋",
      title: "Facilitation administrative",
      description: "Simplification de vos démarches administratives et comptables"
    }
  ];

  return (
    <div className="min-h-scree">
      {/* Hero Slider */}
      <section className="relative h-screen overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 flex items-center justify-center transition-transform duration-1000 ${index === currentSlide ? 'translate-x-0' : index < currentSlide ? '-translate-x-full' : 'translate-x-full'
              }`}
            style={{
              backgroundImage: `url(${slide.imageUrl})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              // filter: 'blur(3px)', // flou appliqué sur l’image entière
            }}
          >
            {/* Overlay pour améliorer la lisibilité */}
            <div className="absolute inset-0 bg-black/50"></div>

            {/* Texte centré au-dessus */}
            <div className="relative text-center text-white max-w-4xl mx-auto px-4">
              <h1 className="text-5xl md:text-7xl font-bold mb-6">{slide.title}</h1>
              <p className="text-xl md:text-2xl mb-4 opacity-90">{slide.subtitle}</p>
              <p className="text-lg md:text-xl mb-8 opacity-80">{slide.description}</p>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-white text-blue-600 hover:bg-gray-100 h-12 px-8 py-3"
              >
                Découvrir nos services
              </Link>
            </div>
          </div>
        ))}

        {/* Slider Controls */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${index === currentSlide ? 'bg-white' : 'bg-white/50'
                }`}
            />
          ))}
        </div>
      </section>



































































































    {/*Hero*/}
    <section id="accueil" className="bg-gradient-to-br from-slate-100 to-gray-200 pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Logo Principal */}
          <div className="flex justify-center mb-8">
            <div className="bg-gradient-to-r from-blue-800 to-blue-900 text-white px-8 py-4 rounded-2xl shadow-lg">
              <h1 className="text-4xl md:text-6xl font-bold">AVS</h1>
              <p className="text-xl md:text-2xl font-light">Consulting</p>
            </div>
          </div>

          {/* Slogan Principal */}
          <h2 className="text-3xl md:text-5xl font-bold text-slate-800 mb-4">
            INVESTIR EN AFRIQUE
          </h2>
          <p className="text-xl md:text-2xl text-blue-600 font-semibold mb-8">
            Votre patrimoine, notre priorité
          </p>

          {/* Description */}
          <div className="max-w-4xl mx-auto mb-12">
            <p className="text-lg md:text-xl text-slate-700 leading-relaxed mb-6">
              Cabinet de conseil spécialisé dans la gestion de patrimoine, les investissements 
              et la domiciliation d'entreprise. Nous accompagnons entrepreneurs, investisseurs 
              et particuliers dans la sécurisation et la croissance de leurs avoirs.
            </p>
            <div className="bg-blue-800 text-white p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-2">POUR UNE DIASPORA AU CONTRÔLE MÊME À DISTANCE</h3>
              <p className="text-slate-200">Vous restez connectés à vos projets et vos engagements au pays</p>
            </div>
          </div>

          {/* Services Phares */}
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Gestion de Patrimoine</h3>
              <p className="text-sm text-gray-600">Optimisation et sécurisation de vos avoirs</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Conseil en Investissement</h3>
              <p className="text-sm text-gray-600">Solutions adaptées à votre profil</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Business Solution</h3>
              <p className="text-sm text-gray-600">Adresse légale pour votre activité</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Facilitation administrative et comptable</h3>
              <p className="text-sm text-gray-600">Gestion complète de vos démarches</p>
            </div>
          </div>

          {/* Boutons CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to='/contact'
              className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors font-semibold text-lg shadow-lg"
            >
              Prendre Contact
            </Link>
            <Link 
              to='/about'
              className="bg-white text-blue-600 border-2 border-blue-600 px-8 py-4 rounded-lg hover:bg-blue-50 transition-colors font-semibold text-lg"
            >
              En savoir plus
            </Link>
          </div>
        </div>
      </div>
    </section>





















      {/* About Preview */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-blue-600 mb-6">Pourquoi choisir AVS Consulting ?</h2>
              <p className="text-lg text-gray-600 mb-6">
                Avec une expertise reconnue dans la gestion de patrimoine et le conseil en investissement,
                nous accompagnons particuliers et entreprises vers la réussite.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
                  <span>Équipe expérimentée et qualifiée</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
                  <span>Solutions personnalisées et adaptées</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
                  <span>Accompagnement de proximité</span>
                </li>
              </ul>
              <Link
                to="/about"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-blue-600 text-white hover:bg-blue-700 h-10 px-4 py-2"
              >
                En savoir plus
              </Link>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-yellow-100 rounded-lg p-8 h-96 flex items-center justify-center">
              <div className="text-center">
                {/* <div className="w-32 h-32 bg-blue-600 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <span className="text-4xl font-bold text-white">AVS</span>
                </div> */}
                <img
                  src="/images/cabinet4.webp"
                  alt="Étudiant avec ordinateur portable"
                  className="rounded-lg shadow-xl w-full max-w-4xl mx-auto h-[300px] object-cover"
                />
                <p className="text-gray-600 pt-3">Excellence • Innovation • Confiance</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ServicesContent />





     
               

      {/* Avantages */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-blue-600 mb-6">Notre Engagement</h2>

              <div className="space-y-6">
                {[
                  { icon: "🎯", title: "Expertise reconnue", description: "Plus de 10 ans d'expérience dans le conseil patrimonial" },
                  { icon: "🤝", title: "Approche personnalisée", description: "Chaque solution est adaptée à votre situation unique" },
                  { icon: "📈", title: "Résultats mesurables", description: "Nous vous accompagnons vers l'atteinte de vos objectifs" },
                  { icon: "🔒", title: "Confidentialité garantie", description: "Vos informations sont protégées et sécurisées" }
                ].map((advantage, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="text-2xl">{advantage.icon}</div>
                    <div>
                      <h3 className="text-xl font-semibold text-blue-600 mb-2">{advantage.title}</h3>
                      <p className="text-gray-600">{advantage.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-yellow-50 rounded-lg p-10 h-96 flex items-center justify-center">
              <div className="text-center">
                {/* <div className="w-32 h-32 bg-blue-600 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <span className="text-4xl font-bold text-white">AVS</span>
                </div> */}
                <img
                  src="/images/cabinet11.jpg"
                  alt="Étudiant avec ordinateur portable"
                  className="rounded-lg shadow-xl w-full max-w-4xl mx-auto h-[300px] object-cover"
                />
                <p className="text-gray-600 pt-2">Au service de votre réussite</p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Testimonials section */}

      <section className="py-16 bg-primary text-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ce que disent nos clients</h2>
            <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
            <p className="max-w-3xl mx-auto">Découvrez les témoignages de nos clients satisfaits.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white bg-opacity-10 p-8 rounded-lg shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-gray-300 overflow-hidden mr-4">
                    <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-sm opacity-75">{testimonial.position}</p>
                  </div>
                </div>
                <p className="italic">"{testimonial.quote}"</p>

              </div>
            ))}
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Prêt à faire grandir votre patrimoine ?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Contactez-nous dès aujourd'hui pour une consultation personnalisée et découvrez comment
            nous pouvons vous accompagner vers le succès.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-yellow-500 text-gray-900 hover:bg-yellow-400 h-10 px-4 py-2"
            >
              Nous contacter
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-white/20 bg-transparent hover:bg-white/10 text-white h-10 px-4 py-2"
            >
              Nos services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index