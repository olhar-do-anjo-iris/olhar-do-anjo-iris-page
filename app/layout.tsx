import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Olhar do Anjo Íris',
  description: 'Transformando esperança em ação: juntos, mudamos o destino de crianças e famílias que mais precisam.',
  icons: {
    icon: '/images/page-images/logo.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}



