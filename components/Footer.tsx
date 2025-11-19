export default function Footer() {
  return (
    <footer className="bg-blue-900 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Logo e nome */}
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center">
              <img src="/images/page-images/logo.png"/>
              </div>
              <span className="text-lg md:text-xl font-bold text-white">
                Olhar do Anjo Íris
              </span>
            </div>
            <p className="text-white/80 text-sm md:text-base text-center md:text-left">
              Transformando esperança em ação
            </p>
          </div>

          {/* Redes sociais */}
          <div className="flex flex-col items-center md:items-end space-y-4">
            <div className="flex items-center space-x-6">
              <a
                href="https://instagram.com/olhardoanjoiris"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-white hover:text-green-400 transition-colors"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                <span className="text-base md:text-lg">Instagram</span>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 md:mt-12 pt-8 border-t border-blue-800">
          <p className="text-white/60 text-xs md:text-sm text-center">
            © {new Date().getFullYear()} Olhar do Anjo Íris. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}



