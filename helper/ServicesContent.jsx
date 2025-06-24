
import React from "react";



const ServicesContent = () => {
  return (
    <section id="services" className="py-16 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Découvrir nos Services
          </h2>
          <div className="w-24 h-1 bg-blue-400 mx-auto mb-6"></div>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto">
            Découvrez notre gamme complète de services conçus pour accompagner votre réussite financière et entrepreneuriale
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Gestion de Patrimoine */}
          <div className="bg-slate-700 rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="white" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9.75L12 3l9 6.75V20a1 1 0 01-1 1h-5.25a.75.75 0 01-.75-.75v-5.25a.75.75 0 00-.75-.75h-2.5a.75.75 0 00-.75.75V20.25a.75.75 0 01-.75.75H4a1 1 0 01-1-1V9.75z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white">Gestion de Patrimoine</h3>
            </div>
            <p className="text-slate-300 leading-relaxed mb-6">
              Sécuriser et capitaliser vos avoirs. Nous abordons votre patrimoine dans sa globalité,
              sous l'angle juridique, financier, fiscal et social. Nous vous accompagnons tout au long
              de vos projets et vous apportons nos conseils en matière d'optimisation patrimoniale.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">Optimisation fiscale</span>
              <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">Gestion Locative</span>
              <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">Litige foncier conseil</span>

            </div>
          </div>

          {/* Business Solution */}
          <div className="bg-slate-700 rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-green-600 rounded-xl flex items-center justify-center mr-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white">Business Solution</h3>
            </div>
            <p className="text-slate-300 leading-relaxed mb-6">
              Déjà dans une activité, vous souhaitez faire croître votre rentabilité, diversifier votre entreprise.
              Audit et accompagnement dans la mise en place de solutions adaptées à votre secteur d'activité.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm">Audit</span>
              <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm">Croissance</span>
              <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm">Diversification</span>
              <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm">Contrôle</span>

            </div>
          </div>

          {/* Conseil en investissement */}
          <div className="bg-slate-700 rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-yellow-600 rounded-xl flex items-center justify-center mr-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white">Conseil en Investissement</h3>
            </div>
            <p className="text-slate-300 leading-relaxed mb-6">
              À la recherche d'une activité génératrice de revenu, comment fructifier vos avoirs,
              peu importe la taille de votre portefeuille. Nous vous aidons à trouver des solutions
              adaptées à votre profil de risque et vos objectifs.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="bg-yellow-600 text-white px-3 py-1 rounded-full text-sm">Business plan</span>
              <span className="bg-yellow-600 text-white px-3 py-1 rounded-full text-sm">Sécurisation</span>
              <span className="bg-yellow-600 text-white px-3 py-1 rounded-full text-sm">Recherches des capitaux</span>
            </div>
          </div>

          {/* Facilitation administrative */}
          <div className="bg-slate-700 rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-purple-600 rounded-xl flex items-center justify-center mr-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white">Facilitation Administrative et Comptable</h3>
            </div>
            <p className="text-slate-300 leading-relaxed mb-6">
              Domiciliation d'entreprise, archivage numérique de documents, préparation de voyage en Afrique,
              facilitation et intermédiation administrative. Vous n'avez pas le temps d'effectuer vos démarches ?
              Confiez-nous toutes ces tâches.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm">Domiciliation</span>
              <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm">Archivage numérique</span>
              <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm">Voyage en Afrique</span>
              <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm">Intermédiation</span>
            </div>
            <div className="bg-slate-600 p-4 rounded-lg">
              <p className="text-white text-center font-semibold">
                💼 Besoin d'un accompagnement personnalisé ? Envoyez-nous votre demande !
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-lg text-slate-300 mb-6">
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

        {/* Logos d'entreprises partenaires */}
        <div className="mt-16 text-center">
          <h3 className="text-xl font-bold text-white mb-8">Nos Partenaires</h3>
          <div className="bg-slate-700 p-8 rounded-xl">
            <p className="text-slate-400 italic">Logos des entreprises partenaires à venir...</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesContent;