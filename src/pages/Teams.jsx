import React from "react"


const Team = () => {
  const teamMembers = [
    {
      name: "Jean Nkengfack",
      position: "Directeur Général",
      description: "Expert en stratégie financière avec 15 ans d'expérience en banque d'investissement.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
    },
    {
      name: "Amina Diallo",
      position: "Responsable Gestion de Patrimoine",
      description: "Diplômée de HEC Paris, spécialiste en gestion d'actifs et planification successorale.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80"
    },
    {
      name: "Samuel Enow",
      position: "Chef de Service Conseil",
      description: "Expert en analyse de marché et stratégie d'investissement en Afrique subsaharienne.",
      image: "https://images.unsplash.com/photo-1482192596544-9eb780fc7f66?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=710&q=80"
    },
    {
      name: "Fatou Mbaye",
      position: "Responsable Clients Diaspora",
      description: "Spécialiste des investissements transfrontaliers et des besoins spécifiques de la diaspora africaine.",
      image: "https://images.unsplash.com/photo-1540569014875-5d156833362f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
    }
  ]

  return (
    <section id="team" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-accent mb-4">Notre équipe</h2>
          <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">Rencontrez notre équipe d'experts dévoués à votre succès financier.</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden relative group">
              <div className="h-64 overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover hover:scale-105 transition duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-dark mb-1">{member.name}</h3>
                <p className="text-primary font-medium mb-3">{member.position}</p>
                <div className="team-overlay absolute inset-0 bg-primary bg-opacity-80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 p-6">
                  <p className="text-white text-center">{member.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Team