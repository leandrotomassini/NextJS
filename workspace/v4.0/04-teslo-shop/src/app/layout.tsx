import type { Metadata } from 'next';

import './globals.css';


export const metadata: Metadata = {
  title: 'Teslo | Shop',
  description: 'La tienda oficial de Teslo. Compre conectores de pared, cargadores, adaptadores, accesorios para vehículos y productos, artículos de colección y ropa de la marca Teslo.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}
