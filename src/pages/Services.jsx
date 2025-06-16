

import React from "react";
import { Link } from "react-router-dom";

const Services = () => {
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
      <section className="bg-gradient-to-br from-blue-600 to-blue-500 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Nos Services</h1>
            <p className="text-xl opacity-90 mb-8">
              Des solutions complètes et personnalisées pour optimiser votre patrimoine et développer votre activité
            </p>
          </div>
        </div>
      </section>

 <section id="services" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Nos Services
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Découvrez notre gamme complète de services conçus pour accompagner votre réussite financière et entrepreneuriale
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Gestion de Patrimoine */}
          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mr-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800">Gestion de Patrimoine</h3>
            </div>
            <p className="text-gray-600 leading-relaxed mb-6">
              Sécuriser et capitaliser vos avoirs. Nous abordons votre patrimoine dans sa globalité, 
              sous l'angle juridique, financier, fiscal et social. Nous vous accompagnons tout au long 
              de vos projets et vous apportons nos conseils en matière d'optimisation patrimoniale.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Optimisation fiscale</span>
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Sécurisation</span>
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Capitalisation</span>
            </div>
          </div>

          {/* Business Solution */}
          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mr-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800">Business Solution</h3>
            </div>
            <p className="text-gray-600 leading-relaxed mb-6">
              Déjà dans une activité, vous souhaitez faire croître votre rentabilité, diversifier votre entreprise. 
              Audit et accompagnement dans la mise en place de solutions adaptées à votre secteur d'activité.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Audit</span>
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Croissance</span>
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Diversification</span>
            </div>
          </div>

          {/* Conseil en investissement */}
          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-yellow-100 rounded-xl flex items-center justify-center mr-4">
                <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800">Conseil en Investissement</h3>
            </div>
            <p className="text-gray-600 leading-relaxed mb-6">
              À la recherche d'une activité génératrice de revenu, comment fructifier vos avoirs, 
              peu importe la taille de votre portefeuille. Nous vous aidons à trouver des solutions 
              adaptées à votre profil de risque et vos objectifs.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm">Profil adapté</span>
              <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm">Revenus passifs</span>
              <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm">Diversification</span>
            </div>
          </div>

          {/* Facilitation administrative */}
          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mr-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800">Facilitation Administrative et Comptable</h3>
            </div>
            <p className="text-gray-600 leading-relaxed mb-6">
              Vous n'avez pas le temps d'effectuer vos démarches administratives, comptabilité et archivage 
              de vos documents personnels ou d'entreprise, domiciliation de votre activité chez nous pour 
              éviter des coûts de loyer exorbitants. Confiez-nous toutes ces tâches.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">Démarches</span>
              <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">Comptabilité</span>
              <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">Archivage</span>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-lg text-gray-600 mb-6">
            Prêt à faire fructifier votre patrimoine ?
          </p>
          <a 
            href="https://wa.me/237652280125" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors font-semibold text-lg shadow-lg inline-block"
          >
            Demander un Conseil Personnalisé
          </a>
        </div>
      </div>
    </section>




















      {/* Services détaillés */}

{/*       
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}>
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="flex items-center mb-6">
                    <div className="text-4xl mr-4">{service.icon}</div>
                    <h2 className="text-4xl font-bold text-blue-600">{service.title}</h2>
                  </div>
                  <p className="text-lg text-gray-600 mb-8">
                    {service.description}
                  </p>
                  
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-blue-600 mb-4">Ce que nous proposons :</h3>
                    <ul className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-blue-600 text-white hover:bg-blue-700 h-10 px-4 py-2"
                  >
                    En savoir plus
                  </Link>
                </div>
                
                <div className={`${service.image} rounded-lg p-8 h-96 flex items-center justify-center ${
                  index % 2 === 1 ? 'lg:col-start-1' : ''
                }`}>
                  <div className="text-center">
                    <div className="text-6xl mb-4">{service.icon}</div>
                    <h3 className="text-2xl font-bold text-blue-600">{service.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}





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