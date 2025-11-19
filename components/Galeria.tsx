'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'

interface Evento {
  id: number
  titulo: string
  descricao: string
  emoji: string
  pasta: string
}

const eventos: Evento[] = [
  { id: 1, titulo: 'Páscoa', descricao: 'Para as crianças', emoji: '🐰', pasta: 'pascoa' },
  { id: 2, titulo: 'Inverno', descricao: 'Para as crianças', emoji: '❄️', pasta: 'inverno' },
  { id: 3, titulo: 'Dia das Crianças', descricao: 'Para as crianças', emoji: '🎁', pasta: 'dia-das-criancas' },
  { id: 4, titulo: 'Natal', descricao: 'Celebração de Natal', emoji: '🎄', pasta: 'natal' },
]

export default function Galeria() {
  const [eventoSelecionado, setEventoSelecionado] = useState<Evento | null>(null)
  const [imagens, setImagens] = useState<string[]>([])
  const [indiceAtual, setIndiceAtual] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const carouselRef = useRef<HTMLDivElement>(null)

  // Carregar imagens quando um evento for selecionado
  useEffect(() => {
    if (eventoSelecionado) {
      const carregarImagens = async () => {
        const imagensEvento = await carregarImagensDoEvento(eventoSelecionado.pasta)
        setImagens(imagensEvento)
        setIndiceAtual(0)
      }
      carregarImagens()
    }
  }, [eventoSelecionado])

  const carregarImagensDoEvento = async (pasta: string): Promise<string[]> => {
    // Esta função carrega as imagens da pasta public/images/[pasta]/
    // Você precisa definir manualmente as imagens para cada evento abaixo
    // Adicione os nomes reais das suas imagens nas pastas correspondentes
    
    const imagensPorEvento: Record<string, string[]> = {
      pascoa: [
        // Adicione aqui os nomes reais das imagens da pasta public/images/pascoa/
        // Exemplo: '/images/pascoa/foto1.jpg'
        '/images/pascoa/P (1).webp',
        '/images/pascoa/P (2).webp',
        '/images/pascoa/P (3).webp',
        '/images/pascoa/P (4).webp',
        '/images/pascoa/P (5).webp',
        '/images/pascoa/P (6).webp',
        '/images/pascoa/P (7).webp',
        '/images/pascoa/P (8).webp',
        '/images/pascoa/P (9).webp',
        '/images/pascoa/P (10).webp',
        '/images/pascoa/P (11).webp',
        '/images/pascoa/P (12).webp',
        '/images/pascoa/P (13).webp',
        '/images/pascoa/P (14).webp',
        '/images/pascoa/P (15).webp',
        '/images/pascoa/P (16).webp'
      ],
      inverno: [
        // Adicione aqui os nomes reais das imagens da pasta public/images/inverno/
        'images/inverno/I (1).webp',
        'images/inverno/I (2).webp',
        'images/inverno/I (3).webp',
        'images/inverno/I (4).webp',
        'images/inverno/I (5).webp',
        'images/inverno/I (6).webp',
        'images/inverno/I (7).webp',
        'images/inverno/I (8).webp',
        'images/inverno/I (9).webp',
        'images/inverno/I (10).webp',
        'images/inverno/I (11).webp',
        'images/inverno/I (12).webp',
        'images/inverno/I (13).webp',
        'images/inverno/I (14).webp',
        'images/inverno/I (15).webp',
        'images/inverno/I (16).webp'
      ],
      'dia-das-criancas': [
        // Adicione aqui os nomes reais das imagens da pasta public/images/dia-das-criancas/
        '/images/dia-das-criancas/C (1).jpeg',
        '/images/dia-das-criancas/C (2).jpeg',
        '/images/dia-das-criancas/C (3).jpeg',
        '/images/dia-das-criancas/C (4).jpeg',
        '/images/dia-das-criancas/C (5).jpeg',
        '/images/dia-das-criancas/C (6).jpeg',
        '/images/dia-das-criancas/C (7).jpeg',
        '/images/dia-das-criancas/C (8).jpeg',
        '/images/dia-das-criancas/C (9).jpeg',
        '/images/dia-das-criancas/C (10).jpeg',
        '/images/dia-das-criancas/C (11).jpeg',
        '/images/dia-das-criancas/C (12).jpeg',
        '/images/dia-das-criancas/C (13).jpeg',
        '/images/dia-das-criancas/C (14).jpeg'
      ],
      natal: [
        // Adicione aqui os nomes reais das imagens da pasta public/images/natal/
        '/images/natal/N (1).webp',
        '/images/natal/N (2).webp',
        '/images/natal/N (3).webp',
        '/images/natal/N (4).webp',
        '/images/natal/N (5).webp',
        '/images/natal/N (6).webp',
        '/images/natal/N (7).webp',
        '/images/natal/N (8).webp',
        '/images/natal/N (9).webp',
        '/images/natal/N (10).webp',
        '/images/natal/N (11).webp',
        '/images/natal/N (12).webp',
        '/images/natal/N (13).webp',
        '/images/natal/N (14).webp',
        '/images/natal/N (15).webp',
        '/images/natal/N (16).webp'
      ],
    }

    // Retorna as imagens definidas para o evento
    return imagensPorEvento[pasta] || []
  }

  const abrirGaleria = (evento: Evento) => {
    setEventoSelecionado(evento)
  }

  const fecharGaleria = () => {
    setEventoSelecionado(null)
    setImagens([])
    setIndiceAtual(0)
  }

  const proximaImagem = () => {
    if (imagens.length > 0) {
      setIndiceAtual((prev) => (prev + 1) % imagens.length)
    }
  }

  const imagemAnterior = () => {
    if (imagens.length > 0) {
      setIndiceAtual((prev) => (prev - 1 + imagens.length) % imagens.length)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      fecharGaleria()
    } else if (e.key === 'ArrowLeft') {
      imagemAnterior()
    } else if (e.key === 'ArrowRight') {
      proximaImagem()
    }
  }

  // Handlers para drag/swipe no carrossel
  const handleMouseDown = (e: React.MouseEvent) => {
    e.stopPropagation()
    setIsDragging(true)
    setStartX(e.pageX)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return
    e.preventDefault()
    e.stopPropagation()
  }

  const handleMouseUp = (e: React.MouseEvent) => {
    if (!isDragging) return
    e.stopPropagation()
    const x = e.pageX
    const walk = x - startX
    
    // Se arrastou mais de 50px, muda a imagem
    if (Math.abs(walk) > 50) {
      if (walk > 0) {
        imagemAnterior()
      } else {
        proximaImagem()
      }
    }
    setIsDragging(false)
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    e.stopPropagation()
    setIsDragging(true)
    setStartX(e.touches[0].pageX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return
    e.stopPropagation()
    const x = e.touches[0].pageX
    const walk = x - startX
    
    // Se arrastou mais de 50px, muda a imagem
    if (Math.abs(walk) > 50) {
      if (walk > 0) {
        imagemAnterior()
      } else {
        proximaImagem()
      }
      setIsDragging(false)
    }
  }

  const handleTouchEnd = () => {
    setIsDragging(false)
  }

  return (
    <>
      <section id="galeria" className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-12 md:mb-16 text-center">
            Galeria de Fotos
          </h2>

          {/* Grid responsivo: 4 colunas no desktop, 2x2 quando não houver espaço */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-7xl mx-auto">
            {eventos.map((evento) => (
              <div
                key={evento.id}
                onClick={() => abrirGaleria(evento)}
                className="group relative aspect-square rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:scale-105 select-none"
              >
                {/* Imagem de fundo */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-200 via-purple-200 to-pink-200 flex items-center justify-center">
                  <span className="text-6xl md:text-8xl group-hover:scale-110 transition-transform duration-300">
                    {evento.emoji}
                  </span>
                </div>

                {/* Overlay com legenda */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 text-center">
                    {evento.titulo}
                  </h3>
                  <p className="text-white/90 text-sm md:text-base text-center">
                    {evento.descricao}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal/Popup com Carrossel */}
      {eventoSelecionado && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={fecharGaleria}
          onKeyDown={handleKeyDown}
          tabIndex={-1}
        >
          <div
            className="relative max-w-6xl w-full max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header do Modal */}
            <div className="flex justify-between items-center mb-4 text-white">
              <h3 className="text-2xl md:text-3xl font-bold">
                {eventoSelecionado.titulo}
              </h3>
              <button
                onClick={fecharGaleria}
                className="text-white hover:text-gray-300 transition-colors text-3xl font-bold"
                aria-label="Fechar"
              >
                ×
              </button>
            </div>

            {/* Carrossel */}
            {imagens.length > 0 ? (
              <div 
                ref={carouselRef}
                className="relative flex-1 flex flex-col items-center justify-center bg-black/50 rounded-lg overflow-hidden"
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
              >
                {/* Imagem Atual */}
                <div className={`relative w-full h-full min-h-[300px] md:min-h-[500px] flex items-center justify-center ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}>
                  <Image
                    src={imagens[indiceAtual]}
                    alt={`${eventoSelecionado.titulo} - Imagem ${indiceAtual + 1}`}
                    fill
                    className="object-contain select-none"
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
                    unoptimized
                    draggable={false}
                  />
                </div>

                {/* Botões de navegação - Desktop: nas laterais, Mobile: embaixo */}
                {imagens.length > 1 && (
                  <>
                    {/* Botões laterais - apenas desktop */}
                    <button
                      onClick={imagemAnterior}
                      className="hidden md:flex absolute left-4 z-10 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all hover:scale-110 shadow-lg"
                      aria-label="Imagem anterior"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>

                    <button
                      onClick={proximaImagem}
                      className="hidden md:flex absolute right-4 z-10 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all hover:scale-110 shadow-lg"
                      aria-label="Próxima imagem"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>

                    {/* Botões embaixo - apenas mobile */}
                    <div className="md:hidden flex flex-col items-center justify-center gap-4 py-4 w-full bg-black/30">
                      {/* Indicador de posição - mobile (acima) */}
                      <div className="flex gap-2">
                        {imagens.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => setIndiceAtual(index)}
                            className={`rounded-full transition-all ${
                              index === indiceAtual ? 'bg-white w-8 h-2' : 'bg-white/50 w-2 h-2'
                            }`}
                            aria-label={`Ir para imagem ${index + 1}`}
                          />
                        ))}
                      </div>

                      {/* Botões de navegação - mobile (embaixo) */}
                      <div className="flex items-center justify-center gap-4">
                        <button
                          onClick={imagemAnterior}
                          className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all active:scale-95 shadow-lg"
                          aria-label="Imagem anterior"
                        >
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                          </svg>
                        </button>

                        <button
                          onClick={proximaImagem}
                          className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all active:scale-95 shadow-lg"
                          aria-label="Próxima imagem"
                        >
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </button>
                      </div>
                    </div>

                    {/* Indicador de posição - desktop */}
                    <div className="hidden md:flex absolute bottom-4 left-1/2 transform -translate-x-1/2 gap-2">
                      {imagens.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setIndiceAtual(index)}
                          className={`rounded-full transition-all ${
                            index === indiceAtual ? 'bg-white w-8 h-2' : 'bg-white/50 w-2 h-2'
                          }`}
                          aria-label={`Ir para imagem ${index + 1}`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>
            ) : (
              <div className="flex-1 flex items-center justify-center bg-black/50 rounded-lg min-h-[400px]">
                <p className="text-white text-lg">
                  Nenhuma imagem encontrada para este evento.
                </p>
              </div>
            )}

            {/* Contador de imagens */}
            {imagens.length > 0 && (
              <div className="mt-4 text-white text-center">
                <span className="text-sm">
                  {indiceAtual + 1} / {imagens.length}
                </span>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  )
}



