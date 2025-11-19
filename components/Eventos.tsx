'use client'

import { useState, useRef } from 'react'

interface Evento {
  id: number
  titulo: string
  descricao: string
  imagem: string
}

const eventos: Evento[] = [
  {
    id: 1,
    titulo: 'Páscoa',
    descricao: 'Celebre a Páscoa com esperança e solidariedade, distribuindo alegria para crianças.',
    imagem: '🐰',
  },
  {
    id: 2,
    titulo: 'Inverno',
    descricao: 'Ajude a aquecer corações neste inverno com doações de agasalhos e alimentos.',
    imagem: '❄️',
  },
  {
    id: 3,
    titulo: 'Dia das Crianças',
    descricao: 'Um dia especial repleto de brincadeiras, presentes e sorrisos para todas as crianças.',
    imagem: '🎁',
  },
  {
    id: 4,
    titulo: 'Natal',
    descricao: 'Celebre o espírito natalino espalhando esperança. Um momento especial para iluminar vidas com gestos de carinho e generosidade.',
    imagem: '🎄',
  },
]

export default function Eventos() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const carouselRef = useRef<HTMLDivElement>(null)

  const nextEvent = () => {
    setCurrentIndex((prev) => (prev + 1) % eventos.length)
  }

  const prevEvent = () => {
    setCurrentIndex((prev) => (prev - 1 + eventos.length) % eventos.length)
  }

  // Handlers para drag/swipe
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true)
    setStartX(e.pageX)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return
    e.preventDefault()
  }

  const handleMouseUp = (e: React.MouseEvent) => {
    if (!isDragging) return
    const x = e.pageX
    const walk = x - startX
    
    // Se arrastou mais de 50px, muda o card
    if (Math.abs(walk) > 50) {
      if (walk > 0) {
        prevEvent()
      } else {
        nextEvent()
      }
    }
    setIsDragging(false)
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true)
    setStartX(e.touches[0].pageX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return
    const x = e.touches[0].pageX
    const walk = x - startX
    
    // Se arrastou mais de 50px, muda o card
    if (Math.abs(walk) > 50) {
      if (walk > 0) {
        prevEvent()
      } else {
        nextEvent()
      }
      setIsDragging(false)
    }
  }

  const handleTouchEnd = () => {
    setIsDragging(false)
  }

  return (
    <section id="eventos" className="bg-blue-900 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* Conteúdo à esquerda */}
          <div>
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-blue-700 rounded-full flex items-center justify-center mr-4">
                <span className="text-white text-xl md:text-2xl">📅</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                Eventos
              </h2>
            </div>
            <p className="text-white/90 text-base md:text-lg leading-relaxed mb-6 md:mb-8">
              Nossos eventos são a chance de você se conectar diretamente com a nossa causa e fazer a diferença. Seja participando de uma ação de arrecadação, um evento de voluntariado ou uma celebração especial, cada passo seu nos ajuda a transformar a vida de uma criança.
            </p>
            <a href='#doacoes'>
              <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center space-x-2">
                <span>Seja voluntário</span>
                <span>❤️</span>
              </button>
            </a>
          </div>

          {/* Cards de eventos à direita */}
          <div className="relative">
            <div 
              ref={carouselRef}
              className="overflow-hidden"
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <div
                className={`flex transition-transform duration-500 ease-in-out ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {eventos.map((evento) => (
                  <div
                    key={evento.id}
                    className="min-w-full px-2 select-none"
                  >
                    <div className="bg-blue-800 rounded-xl overflow-hidden shadow-xl">
                      <div className="h-48 md:h-64 bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center">
                        <span className="text-8xl md:text-9xl">{evento.imagem}</span>
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                          {evento.titulo}
                        </h3>
                        <p className="text-white/80 text-sm md:text-base mb-4">
                          {evento.descricao}
                        </p>
                        <a href='#galeria'>
                          <button className="text-white hover:text-green-400 transition-colors flex items-center space-x-2">
                            <span>Veja mais</span>
                            <span>→</span>
                          </button>
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navegação do carrossel */}
            <div className="flex justify-center items-center space-x-4 mt-6">
              <button
                onClick={prevEvent}
                className="text-white hover:text-green-400 transition-colors"
                aria-label="Evento anterior"
              >
                <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <div className="flex space-x-2">
                {eventos.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${index === currentIndex ? 'bg-green-500' : 'bg-white/50'
                      }`}
                    aria-label={`Ir para evento ${index + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={nextEvent}
                className="text-white hover:text-green-400 transition-colors"
                aria-label="Próximo evento"
              >
                <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}



