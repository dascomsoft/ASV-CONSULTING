


import { useEffect } from "react";
import { Link } from "react-router-dom";
import React from "react";

const About = () => {
    useEffect(() => {
    // Faire défiler vers le haut au chargement de la page
    window.scrollTo(0, 0);
}, []);
  return (
    <div className="min-h-screen">

    {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-500 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">À Propos de AVS Consulting</h1>
            <p className="text-xl opacity-90 mb-8">
              Votre partenaire de confiance pour la gestion de patrimoine et les solutions business au Cameroun
            </p>
          </div>
        </div>
      </section>
  <section id="apropos" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            À propos de nous
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Contenu */}
          <div>
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Notre Histoire</h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                AVS Consulting est une entreprise créée en 2019, par un groupe de spécialistes de la finance 
                diplômés des meilleures écoles de commerce en Europe et au Royaume-Uni. Cabinet de conseils 
                qui a pour but d'accroître et de sécuriser les avoirs de ses clients.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Spécialisés dans le conseil en investissements dans les zones CEMAC, nous servons beaucoup 
                de clients de la diaspora comme porte d'entrée pour investir en Afrique. Une approche 
                personnalisée nous a permis de saisir les meilleures opportunités afin de garantir à nos 
                clients un rendement optimal et une sécurité de leur capital.
              </p>
              <p className="text-xl font-semibold text-blue-600">
                Notre seul souci : accroître et sécuriser le portefeuille de nos clients.
              </p>
            </div>

            {/* Statistiques */}
            <div className="grid grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">2019</div>
                <div className="text-sm text-gray-600">Année de création</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">CEMAC</div>
                <div className="text-sm text-gray-600">Zone d'expertise</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
                <div className="text-sm text-gray-600">Approche personnalisée</div>
              </div>
            </div>
          </div>

          {/* Valeurs */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Nos Valeurs</h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Confidentialité</h4>
                  <p className="text-gray-600">Protection absolue de vos informations et transactions</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Rigueur</h4>
                  <p className="text-gray-600">Analyse minutieuse et méthodologie éprouvée</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Proximité</h4>
                  <p className="text-gray-600">Accompagnement personnalisé et relation de confiance</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 011-1h1a2 2 0 100-4H7a1 1 0 01-1-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Personnalisation</h4>
                  <p className="text-gray-600">Solutions sur mesure adaptées à vos besoins spécifiques</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>





      {/* Notre Histoire */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-blue-600 mb-6">Notre Histoire</h2>
              <p className="text-lg text-gray-600 mb-6">
                AVS Consulting est née de la volonté de proposer des services financiers et de conseil 
                de qualité internationale au Cameroun. Fondée par une équipe d'experts passionnés, 
                notre entreprise s'est rapidement imposée comme un acteur incontournable dans 
                l'accompagnement patrimonial et business.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Nous croyons fermement que chaque client mérite une approche personnalisée et des 
                solutions adaptées à ses besoins spécifiques. Notre expertise nous permet d'offrir 
                des conseils avisés dans un environnement en constante évolution.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-yellow-50 rounded-lg p-8 h-96 flex items-center justify-center">
              <div className="text-center">
                {/* <div className="w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <span className="text-2xl font-bold text-white">🏢</span>
                </div> */}
                    <img 
                src="/images/cabinet3.jpeg" 
                alt="Étudiant avec ordinateur portable"
                className="rounded-lg shadow-xl w-full max-w-4xl mx-auto h-[300px] object-cover"
              />
                <p className="text-gray-600 pt-4">Excellence depuis notre création</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Valeurs */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-blue-600 mb-16">Nos Fondements</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white rounded-lg shadow-sm">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-6 mx-auto">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-2xl font-bold text-blue-600 mb-4">Notre Mission</h3>
              <p className="text-gray-600">
                Accompagner nos clients dans l'optimisation et la protection de leur patrimoine, 
                tout en développant leurs opportunités d'investissement et de croissance business.
              </p>
            </div>

            <div className="text-center p-8 bg-white rounded-lg shadow-sm">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mb-6 mx-auto">
                <span className="text-2xl">👁️</span>
              </div>
              <h3 className="text-2xl font-bold text-blue-600 mb-4">Notre Vision</h3>
              <p className="text-gray-600">
                Devenir la référence en matière de conseil patrimonial et business au Cameroun, 
                en offrant des solutions innovantes et personnalisées à chaque client.
              </p>
            </div>

            <div className="text-center p-8 bg-white rounded-lg shadow-sm">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-6 mx-auto">
                <span className="text-2xl">⭐</span>
              </div>
              <h3 className="text-2xl font-bold text-blue-600 mb-4">Nos Valeurs</h3>
              <p className="text-gray-600">
                Intégrité, excellence, innovation et proximité client sont les piliers qui guident 
                chacune de nos actions et décisions au quotidien.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Nos Engagements */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-blue-600 mb-16">Nos Engagements</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-sm font-bold text-gray-900">✓</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-blue-600 mb-2">Transparence totale</h3>
                  <p className="text-gray-600">
                    Nous croyons en une communication claire et transparente avec nos clients, 
                    sans frais cachés ni surprises.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-sm font-bold text-gray-900">✓</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-blue-600 mb-2">Expertise reconnue</h3>
                  <p className="text-gray-600">
                    Notre équipe possède une expertise approfondie dans tous nos domaines d'intervention.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-sm font-bold text-gray-900">✓</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-blue-600 mb-2">Accompagnement personnalisé</h3>
                  <p className="text-gray-600">
                    Chaque client bénéficie d'un suivi personnalisé adapté à sa situation et ses objectifs.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-sm font-bold text-gray-900">✓</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-blue-600 mb-2">Innovation continue</h3>
                  <p className="text-gray-600">
                    Nous restons à la pointe des innovations pour offrir les meilleures solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Téléchargement Brochure */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Découvrez notre brochure</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Téléchargez notre brochure complète pour en savoir plus sur nos services 
            et notre approche unique du conseil patrimonial.
          </p>
          <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-yellow-500 text-gray-900 hover:bg-yellow-400 h-10 px-4 py-2">
            📄 Télécharger la brochure PDF
          </button>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-200">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-blue-600 mb-6">Prêt à nous faire confiance ?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Contactez-nous dès aujourd'hui pour discuter de vos projets et découvrir 
            comment nous pouvons vous accompagner.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-blue-600 text-white hover:bg-blue-700 h-10 px-4 py-2"
            >
              Nous contacter
            </Link>
            <Link
              to="/team"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-gray-300 bg-white hover:bg-gray-50 text-blue-600 h-10 px-4 py-2"
            >
              Rencontrer l'équipe
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;