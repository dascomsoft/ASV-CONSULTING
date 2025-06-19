
import { useEffect } from "react";
import React from "react";
import { Link } from "react-router-dom";
import ServicesContent from "../../helper/ServicesContent";

const Services = () => {
    useEffect(() => {
    // Faire défiler vers le haut au chargement de la page
    window.scrollTo(0, 0);
}, []);
  const services = [
    {
      icon: "💰",
      title: "Gestion de patrimoine",
      description: "Optimisation et protection de vos actifs financiers pour un avenir serein",
      features: [
        "Analyse patrimoniale complète",
        "Stratégies de diversification",
        "Optimisation fiscale",
        "Planification successorale",
        "Suivi personnalisé"
      ],
      image: "bg-gradient-to-br from-blue-100 to-blue-50"
    },
    {
      icon: "🏢",
      title: "Business solution",
      description: "Conseils stratégiques pour développer et optimiser votre entreprise",
      features: [
        "Analyse de marché",
        "Stratégie de développement",
        "Optimisation des processus",
        "Conseil en financement",
        "Accompagnement projet"
      ],
      image: "bg-gradient-to-br from-yellow-100 to-yellow-50"
    },
    {
      icon: "📊",
      title: "Conseil en investissement",
      description: "Stratégies d'investissement personnalisées et rentables",
      features: [
        "Profil investisseur personnalisé",
        "Sélection d'opportunités",
        "Gestion des risques",
        "Suivi de performance",
        "Réajustements stratégiques"
      ],
      image: "bg-gradient-to-br from-blue-50 to-yellow-50"
    },
    {
      icon: "📋",
      title: "Facilitation administrative & comptable",
      description: "Simplification de vos démarches administratives et comptables",
      features: [
        "Création d'entreprise",
        "Tenue comptable",
        "Déclarations fiscales",
        "Formalités administratives",
        "Conseil juridique"
      ],
      image: "bg-gradient-to-br from-yellow-50 to-blue-50"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-slate-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Nos Services</h1>
            <p className="text-xl opacity-90 mb-8">
              Des solutions complètes et personnalisées pour optimiser votre patrimoine et développer votre activité
            </p>
          </div>
        </div>
      </section>

     <ServicesContent />



















  <section id="domiciliation" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Domiciliation d'Entreprise
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto">
            Vous souhaitez créer ou gérer une entreprise au Cameroun sans être physiquement présent ? 
            Donnez une adresse légale et professionnelle à votre activité, vos rendez-vous professionnels 
            sans charges d'un local.
          </p>
        </div>

        {/* Avantages */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Adresse Prestigieuse</h3>
            <p className="text-gray-600">Yaoundé - Mvog ada, adresse professionnelle pour votre entreprise</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Économies</h3>
            <p className="text-gray-600">Évitez les coûts de loyer exorbitants d'un bureau physique</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Conformité Légale</h3>
            <p className="text-gray-600">Respectez toutes les obligations légales de domiciliation</p>
          </div>
        </div>

        {/* Offres de domiciliation */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Offre Basique */}
          <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Basique</h3>
              <div className="text-4xl font-bold text-blue-600 mb-1">20 000</div>
              <div className="text-gray-600">FCFA/mois</div>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Adresse officielle</span>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Réception de courrier</span>
              </li>
            </ul>
            <button className="w-full bg-gray-600 text-white py-3 rounded-lg hover:bg-gray-700 transition-colors font-semibold">
              Choisir cette offre
            </button>
          </div>

          {/* Offre Standard */}
          <div className="bg-blue-50 rounded-xl p-8 border-2 border-blue-200 hover:shadow-lg transition-shadow relative">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">Populaire</span>
            </div>
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Standard</h3>
              <div className="text-4xl font-bold text-blue-600 mb-1">30 000</div>
              <div className="text-gray-600">FCFA/mois</div>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Adresse officielle</span>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Réception de courrier</span>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Notification WhatsApp</span>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Scan email</span>
              </li>
            </ul>
            <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold">
              Choisir cette offre
            </button>
          </div>

          {/* Offre Premium */}
          <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-xl p-8 hover:shadow-lg transition-shadow">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Premium</h3>
              <div className="text-4xl font-bold text-yellow-600 mb-1">50 000</div>
              <div className="text-gray-600">FCFA/mois</div>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Adresse officielle</span>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Réception de courrier</span>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Notification + Scan</span>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">1 accès bureau/mois</span>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Assistance administrative</span>
              </li>
            </ul>
            <button className="w-full bg-yellow-600 text-white py-3 rounded-lg hover:bg-yellow-700 transition-colors font-semibold">
              Choisir cette offre
            </button>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-blue-600 rounded-xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-4">Prêt à domicilier votre entreprise ?</h3>
          <p className="text-xl mb-6 opacity-90">
            Contactez-nous dès maintenant pour plus d'informations et commencer votre domiciliation
          </p>
          <a 
            href="https://wa.me/237652280125" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold text-lg shadow-lg inline-block"
          >
            Demander votre domiciliation
          </a>
        </div>
      </div>
    </section>










      {/* Processus de travail */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-600 mb-6">Notre Processus</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Une approche structurée pour garantir les meilleurs résultats
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Écoute", description: "Analyse de vos besoins et objectifs" },
              { step: "02", title: "Stratégie", description: "Élaboration d'une solution personnalisée" },
              { step: "03", title: "Mise en œuvre", description: "Déploiement des solutions recommandées" },
              { step: "04", title: "Suivi", description: "Accompagnement continu et ajustements" }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <span className="text-xl font-bold text-white">{item.step}</span>
                </div>
                <h3 className="text-xl font-semibold text-blue-600 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Avantages */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-blue-600 mb-6">Pourquoi choisir nos services ?</h2>
              
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
            
            <div className="bg-gradient-to-br from-blue-50 to-yellow-50 rounded-lg p-8 h-96 flex items-center justify-center">
              <div className="text-center">
                {/* <div className="w-32 h-32 bg-blue-600 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <span className="text-4xl font-bold text-white">AVS</span>
                </div> */}
                      <img 
                src="/images/cabinet10.jpg" 
                alt="Étudiant avec ordinateur portable"
                className="rounded-lg shadow-xl w-full max-w-4xl mx-auto h-[300px] object-cover"
              />
                <p className="text-gray-600 py-3">Au service de votre réussite</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Prêt à optimiser votre patrimoine ?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Contactez-nous dès aujourd'hui pour une consultation gratuite et personnalisée.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-yellow-500 text-gray-900 hover:bg-yellow-400 h-10 px-4 py-2"
            >
              Consultation gratuite
            </Link>
            <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-white/20 bg-transparent hover:bg-white/10 text-white h-10 px-4 py-2">
              📄 Télécharger la brochure
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;