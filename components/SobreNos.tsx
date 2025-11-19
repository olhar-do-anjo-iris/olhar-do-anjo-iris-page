export default function SobreNos() {
  return (
    <section id="quem-somos" className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título da seção */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-orange-500">
            Sobre nós
          </h2>
        </div>

        {/* Card centralizado */}
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-10 lg:p-12 mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Texto à esquerda */}
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 md:mb-8">
                Proporcionar acolhimento, carinho e dignidade a crianças
              </h2>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-4">
                A ONG 'Olhar do Anjo Íris' é uma organização sem fins lucrativos dedicada a transformar a vida de crianças e famílias em situação de vulnerabilidade. Nossa missão é proporcionar acolhimento, carinho e dignidade, garantindo que cada criança tenha acesso a recursos essenciais, um ambiente seguro e oportunidades para viver uma infância plena.
              </p>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                Através de eventos e ações solidárias, trabalhamos incansavelmente para criar um impacto positivo e duradouro na comunidade, oferecendo esperança e um futuro melhor para aqueles que mais precisam.
              </p>
            </div>

            {/* Imagem à direita */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full max-w-md h-64 md:h-80 lg:h-96 rounded-xl overflow-hidden shadow-lg">
                <div className="w-full h-full bg-gradient-to-br from-yellow-200 via-orange-200 to-red-200 flex items-center justify-center">
                  <img 
                    src="/images/page-images/image 38.png"
                    alt="Sobre nós"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Cards de estatísticas */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          <div className="bg-gray-50 rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow">
            <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-900 mb-2">
              16
            </div>
            <div className="text-sm md:text-base text-gray-600">
              Eventos feitos
            </div>
          </div>
          <div className="bg-gray-50 rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow">
            <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-900 mb-2">
              +100
            </div>
            <div className="text-sm md:text-base text-gray-600">
              Famílias atendidas
            </div>
          </div>
          <div className="bg-gray-50 rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow">
            <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-900 mb-2">
              +2.000
            </div>
            <div className="text-sm md:text-base text-gray-600">
              Doações realizadas
            </div>
          </div>
          <div className="bg-gray-50 rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow">
            <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-900 mb-2">
              4
            </div>
            <div className="text-sm md:text-base text-gray-600">
              Anos de solidariedade
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}



