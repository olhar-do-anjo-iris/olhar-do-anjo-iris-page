export default function PorQueAjudar() {
  return (
    <section id="doacoes" className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
            Precisamos de sua Ajuda!
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
            Sua ajuda transforma vidas. Seja como voluntário dedicando seu tempo ou como doador, com sua contribuição, você oferece afeto, esperança e uma infância digna para crianças que mais precisam.
          </p>
        </div>

        {/* Card Voluntário */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="h-64 md:h-80 bg-gradient-to-br from-blue-200 to-blue-400 flex items-center justify-center relative overflow-hidden">
              <img 
                src="/images/page-images/img_voluntario.png"
                alt="Voluntário"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                Seja Voluntário
              </h3>
              <p className="text-gray-600 text-base md:text-lg mb-6">
                Dedicar seu tempo e energia para fazer a diferença na vida de crianças e famílias. Cada hora de voluntariado é um gesto de amor e esperança.
              </p>
              <a
                href="https://www.instagram.com/olhardoanjoiris/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center space-x-2 w-full justify-center">
                  <span>Entre em contato</span>
                  <span>→</span>
                </button>
              </a>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}



