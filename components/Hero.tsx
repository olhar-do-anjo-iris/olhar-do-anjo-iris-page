export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 md:pt-20">
      {/* Background com imagem */}
      <div className="absolute inset-0">
        {/* Imagem para mobile */}
        <img 
          src="/images/page-images/bgHero2.png"
          alt="Background"
          className="w-full h-full object-cover object-[75%_center] block md:hidden"
        />
        {/* Imagem para desktop */}
        <img 
          src="/images/page-images/bgHero.png"
          alt="Background"
          className="w-full h-full object-cover object-[75%_center] hidden md:block"
        />
        {/* Overlay escuro para melhorar legibilidade do texto - quando o texto está centralizado */}
        <div className="absolute inset-0 bg-black/30 lg:bg-transparent"></div>
      </div>

      {/* Conteúdo */}
      {/* Ajuste o valor pt-[X] abaixo para alterar a posição vertical no mobile (ex: pt-[120px] = 120px do topo) */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-[30px] md:pt-32 pb-20 md:pb-32 flex flex-col">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Texto */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6">
              Olhar do anjo íris
            </h1>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white mb-4 md:mb-6">
              Transformando esperança em ação:
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl text-white/90 leading-relaxed">
              juntos, mudamos o destino de crianças e famílias que mais precisam.
            </p>
          </div>
        </div>
        {/* Subdiv invisível para empurrar o texto para cima no mobile - ajuste h-[X] para alterar a altura */}
        <div className="h-[200px] md:h-0"></div>
      </div>
    </section>
  )
}



