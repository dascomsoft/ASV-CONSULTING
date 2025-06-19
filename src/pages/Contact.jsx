// import { useState } from 'react';
// import React from 'react';
// import { useEffect } from 'react';

// const Contact = () => {


//     useEffect(() => {
//     // Faire défiler vers le haut au chargement de la page
//     window.scrollTo(0, 0);
// }, []);


//   const [formData, setFormData] = useState({
//     nom: '',
//     email: '',
//     telephone: '',
//     service: '',
//     message: ''
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
    
//     // Créer le message WhatsApp
//     const message = `Bonjour AVS Consulting,

// Nom: ${formData.nom}
// Email: ${formData.email}
// Téléphone: ${formData.telephone}
// Service d'intérêt: ${formData.service}

// Message:
// ${formData.message}

// Merci de me recontacter.`;

//     const whatsappUrl = `https://wa.me/237652280125?text=${encodeURIComponent(message)}`;
//     window.open(whatsappUrl, '_blank');
//   };

//   return (
//     <section id="contact" className="py-16 bg-gray-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-12">
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
//             Contactez-nous
//           </h2>
//           <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
//           <p className="text-lg text-gray-600 max-w-3xl mx-auto">
//             Prêt à faire fructifier votre patrimoine ? Notre équipe d'experts est là pour vous accompagner
//           </p>
//         </div>

//         <div className="grid lg:grid-cols-2 gap-12">
//           {/* Informations de contact */}
//           <div>
//             <h3 className="text-2xl font-bold text-gray-800 mb-6">Nos Coordonnées</h3>
            
//             <div className="space-y-6">
//               <div className="flex items-start">
//                 <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
//                   <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
//                   </svg>
//                 </div>
//                 <div>
//                   <h4 className="font-semibold text-gray-800 mb-1">Téléphone</h4>
//                   <p className="text-gray-600">+237 652 280 125</p>
//                   <a 
//                     href="https://wa.me/237652280125" 
//                     target="_blank" 
//                     rel="noopener noreferrer"
//                     className="text-green-600 hover:text-green-700 font-medium"
//                   >
//                     Contacter via WhatsApp
//                   </a>
//                 </div>
//               </div>

//               <div className="flex items-start">
//                 <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
//                   <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
//                   </svg>
//                 </div>
//                 <div>
//                   <h4 className="font-semibold text-gray-800 mb-1">Email</h4>
//                   <p className="text-gray-600">messtell@gmail.com</p>
//                   <a 
//                     href="mailto:messtell@gmail.com"
//                     className="text-blue-600 hover:text-blue-700 font-medium"
//                   >
//                     Envoyer un email
//                   </a>
//                 </div>
//               </div>

//               <div className="flex items-start">
//                 <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
//                   <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
//                   </svg>
//                 </div>
//                 <div>
//                   <h4 className="font-semibold text-gray-800 mb-1">Adresse</h4>
//                   <p className="text-gray-600">Yaoundé - Mvog ada, Cameroun</p>
//                 </div>
//               </div>
//             </div>

//             {/* Horaires */}
//             <div className="mt-8 bg-white p-6 rounded-xl shadow-md">
//               <h4 className="font-semibold text-gray-800 mb-4">Horaires d'ouverture</h4>
//               <div className="space-y-2 text-gray-600">
//                 <div className="flex justify-between">
//                   <span>Lundi - Vendredi</span>
//                   <span>8h00 - 18h00</span>
//                 </div>
//                 <div className="flex justify-between">
//                   <span>Samedi</span>
//                   <span>9h00 - 14h00</span>
//                 </div>
//                 <div className="flex justify-between">
//                   <span>Dimanche</span>
//                   <span>Fermé</span>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Formulaire de contact */}
//           <div className="bg-white rounded-xl shadow-lg p-8">
//             <h3 className="text-2xl font-bold text-gray-800 mb-6">Envoyez-nous un message</h3>
            
//             <form onSubmit={handleSubmit} className="space-y-6">
//               <div>
//                 <label htmlFor="nom" className="block text-sm font-medium text-gray-700 mb-2">
//                   Nom complet *
//                 </label>
//                 <input
//                   type="text"
//                   id="nom"
//                   name="nom"
//                   required
//                   value={formData.nom}
//                   onChange={handleChange}
//                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
//                   placeholder="Votre nom complet"
//                 />
//               </div>

//               <div>
//                 <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
//                   Email *
//                 </label>
//                 <input
//                   type="email"
//                   id="email"
//                   name="email"
//                   required
//                   value={formData.email}
//                   onChange={handleChange}
//                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
//                   placeholder="votre@email.com"
//                 />
//               </div>

//               <div>
//                 <label htmlFor="telephone" className="block text-sm font-medium text-gray-700 mb-2">
//                   Téléphone
//                 </label>
//                 <input
//                   type="tel"
//                   id="telephone"
//                   name="telephone"
//                   value={formData.telephone}
//                   onChange={handleChange}
//                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
//                   placeholder="+237 xxx xxx xxx"
//                 />
//               </div>

//               <div>
//                 <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
//                   Service d'intérêt
//                 </label>
//                 <select
//                   id="service"
//                   name="service"
//                   value={formData.service}
//                   onChange={handleChange}
//                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
//                 >
//                   <option value="">Sélectionnez un service</option>
//                   <option value="Gestion de Patrimoine">Gestion de Patrimoine</option>
//                   <option value="Business Solution">Business Solution</option>
//                   <option value="Conseil en Investissement">Conseil en Investissement</option>
//                   <option value="Facilitation Administrative">Facilitation Administrative</option>
//                   <option value="Domiciliation d'Entreprise">Domiciliation d'Entreprise</option>
//                 </select>
//               </div>

//               <div>
//                 <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
//                   Message *
//                 </label>
//                 <textarea
//                   id="message"
//                   name="message"
//                   rows={5}
//                   required
//                   value={formData.message}
//                   onChange={handleChange}
//                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
//                   placeholder="Décrivez votre projet ou vos besoins..."
//                 ></textarea>
//               </div>

//               <button
//                 type="submit"
//                 className="w-full bg-blue-600 text-white py-4 rounded-lg hover:bg-blue-700 transition-colors font-semibold text-lg shadow-lg"
//               >
//                 Envoyer le message via WhatsApp
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;







































import React from 'react';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    telephone: '',
    service: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Créer le message WhatsApp
    const message = `Bonjour AVS Consulting,

Nom: ${formData.nom}
Email: ${formData.email}
Téléphone: ${formData.telephone}
Service d'intérêt: ${formData.service}

Message:
${formData.message}

Merci de me recontacter.`;

    const whatsappUrl = `https://wa.me/237652280125?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Contactez-nous
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Prêt à faire fructifier votre patrimoine ? Notre équipe d'experts est là pour vous accompagner
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Informations de contact */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Nos Coordonnées</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Téléphone</h4>
                  <p className="text-gray-600">+237 652 280 125</p>
                  <a 
                    href="https://wa.me/237652280125" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-green-600 hover:text-green-700 font-medium"
                  >
                    Contacter via WhatsApp
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Email</h4>
                  <p className="text-gray-600">info@avscam.com</p>
                  <a 
                    href="mailto:info@avscam.com"
                    className="text-blue-600 hover:text-blue-700 font-medium"
                  >
                    Envoyer un email
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9V3m0 0a9 9 0 00-9 9m9-9l-3 3m0-3l-3-3" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Site Web</h4>
                  <p className="text-gray-600">www.avscam.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div className="w-full">
                  <h4 className="font-semibold text-gray-800 mb-1">Adresse</h4>
                  <p className="text-gray-600 mb-3">Yaoundé - Mvog Ada, Cameroun</p>
                  
                  {/* Géolocalisation Google Maps */}
                  <div className="mt-4">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3980.5756089866567!2d11.5213!3d3.8480!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x108bcf7a309aabcd%3A0x8e7c8c7e8c7e8c7e!2sMvog-Ada%2C%20Yaound%C3%A9%2C%20Cameroon!5e0!3m2!1sen!2s!4v1640000000000!5m2!1sen!2s"
                      width="100%"
                      height="200"
                      className="border-0 rounded-lg shadow-md"
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                  
                  <a 
                    href="https://maps.google.com/?q=Yaoundé+Mvog+Ada" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-700 font-medium mt-3 inline-block"
                  >
                    Voir sur Google Maps
                  </a>
                </div>
              </div>
            </div>

            {/* Horaires */}
            <div className="mt-8 bg-white p-6 rounded-xl shadow-md">
              <h4 className="font-semibold text-gray-800 mb-4">Horaires d'ouverture</h4>
              <div className="space-y-2 text-gray-600">
                <div className="flex justify-between">
                  <span>Lundi - Vendredi</span>
                  <span>8h00 - 17h00</span>
                </div>
              </div>
            </div>
          </div>

          {/* Formulaire de contact */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Envoyez-nous un message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="nom" className="block text-sm font-medium text-gray-700 mb-2">
                  Nom complet *
                </label>
                <input
                  type="text"
                  id="nom"
                  name="nom"
                  required
                  value={formData.nom}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="Votre nom complet"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="votre@email.com"
                />
              </div>

              <div>
                <label htmlFor="telephone" className="block text-sm font-medium text-gray-700 mb-2">
                  Téléphone
                </label>
                <input
                  type="tel"
                  id="telephone"
                  name="telephone"
                  value={formData.telephone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="+237 xxx xxx xxx"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                  Service d'intérêt
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                >
                  <option value="">Sélectionnez un service</option>
                  <option value="Gestion de Patrimoine">Gestion de Patrimoine</option>
                  <option value="Business Solution">Business Solution</option>
                  <option value="Conseil en Investissement">Conseil en Investissement</option>
                  <option value="Facilitation Administrative">Facilitation Administrative</option>
                  <option value="Domiciliation d'Entreprise">Domiciliation d'Entreprise</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="Décrivez votre projet ou vos besoins..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-4 rounded-lg hover:bg-blue-700 transition-colors font-semibold text-lg shadow-lg"
              >
                Envoyer le message via WhatsApp
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;









