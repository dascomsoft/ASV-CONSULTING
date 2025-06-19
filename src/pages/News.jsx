
import React from 'react';




const NewsPage = () => {
  return (
    <div className="min-h-screen bg-slate-800">
      
      {/* Hero Section */}
      <section className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">
              News & Analyses
            </h1>
            <div className="w-24 h-1 bg-blue-400 mx-auto mb-8"></div>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Découvrez nos analyses financières, rapports d'entreprises et insights du marché africain
            </p>
          </div>
        </div>
      </section>

      {/* Coming Soon Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-700 rounded-2xl p-8 md:p-12 text-center">
            <div className="mb-8">
              <div className="w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">
                Contenu à venir
              </h2>
              <p className="text-xl text-slate-300 mb-8">
                Nous préparons du contenu de qualité pour vous
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-slate-600 rounded-xl p-6">
                <h3 className="text-lg font-bold text-white mb-3">📊 Rapports Financiers</h3>
                <p className="text-slate-300">
                  Analyses approfondies des grandes entreprises africaines et leurs performances financières
                </p>
              </div>
              
              <div className="bg-slate-600 rounded-xl p-6">
                <h3 className="text-lg font-bold text-white mb-3">📈 Insights Marché</h3>
                <p className="text-slate-300">
                  Tendances et opportunités d'investissement dans la zone CEMAC et au-delà
                </p>
              </div>
              
              <div className="bg-slate-600 rounded-xl p-6">
                <h3 className="text-lg font-bold text-white mb-3">💡 Articles Finance</h3>
                <p className="text-slate-300">
                  Papers exclusifs sur la finance, gestion de patrimoine et stratégies d'investissement
                </p>
              </div>
              
              <div className="bg-slate-600 rounded-xl p-6">
                <h3 className="text-lg font-bold text-white mb-3">🌍 Focus Diaspora</h3>
                <p className="text-slate-300">
                  Conseils spécialisés pour les investisseurs de la diaspora camerounaise
                </p>
              </div>
            </div>

            <div className="bg-slate-600 p-6 rounded-xl">
              <p className="text-white text-lg mb-4">
                📧 Soyez notifié de nos nouvelles publications
              </p>
              <a 
                href="mailto:info@avscam.com?subject=Inscription newsletter"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold inline-block"
              >
                S'abonner aux actualités
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default NewsPage;