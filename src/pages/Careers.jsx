
import React from 'react';

const CareersPage = () => {
  return (
    <div className="min-h-screen bg-slate-800">
      
      {/* Hero Section */}
      <section className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Rejoins nos Équipes
            </h1>
            <div className="w-24 h-1 bg-blue-400 mx-auto mb-8"></div>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Développe ton potentiel au sein d'une équipe dynamique et passionnée
            </p>
          </div>
        </div>
      </section>

      {/* Stage Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-700 rounded-2xl p-8 md:p-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-4">
                Opportunités de Stage
              </h2>
              <p className="text-slate-300 text-lg">
                Nous encourageons les jeunes talents à rejoindre notre équipe
              </p>
            </div>

            <div className="bg-slate-600 rounded-xl p-6 mb-8">
              <h3 className="text-xl font-bold text-white mb-4">📧 Comment postuler ?</h3>
              <p className="text-slate-200 mb-4">
                Nous vous encourageons à envoyer vos demandes de stage à l'adresse suivante :
              </p>
              <div className="bg-slate-800 p-4 rounded-lg">
                <p className="text-blue-400 font-mono text-lg">info@avscam.com</p>
                <p className="text-slate-300 mt-2">
                  <strong>Objet :</strong> demande de stage-[VOTRE NOM]
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-slate-600 rounded-xl p-6">
                <h4 className="text-lg font-bold text-white mb-3">📋 Documents requis</h4>
                <ul className="text-slate-300 space-y-2">
                  <li>• CV actualisé</li>
                  <li>• Lettre de motivation</li>
                  <li>• Copie de la CNI</li>
                </ul>
              </div>
              
              <div className="bg-slate-600 rounded-xl p-6">
                <h4 className="text-lg font-bold text-white mb-3">🎯 Domaines de stage</h4>
                <ul className="text-slate-300 space-y-2">
                  <li>• Gestion de patrimoine</li>
                  <li>• Conseil en investissement</li>
                  <li>• Administration</li>
                  <li>• Marketing digital</li>
                </ul>
              </div>
            </div>

            <div className="text-center">
              <a 
                href="mailto:info@avscam.com?subject=demande de stage-[VOTRE NOM]"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors font-semibold text-lg shadow-lg inline-block"
              >
                Envoyer ma candidature
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Pourquoi nous rejoindre */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Pourquoi rejoindre AVS Consulting ?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-700 rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Innovation</h3>
              <p className="text-slate-300">
                Travaillez sur des projets innovants dans le secteur financier
              </p>
            </div>

            <div className="bg-slate-700 rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Équipe</h3>
              <p className="text-slate-300">
                Rejoignez une équipe de professionnels passionnés et expérimentés
              </p>
            </div>

            <div className="bg-slate-700 rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Formation</h3>
              <p className="text-slate-300">
                Bénéficiez d'une formation de qualité et développez vos compétences
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default CareersPage;