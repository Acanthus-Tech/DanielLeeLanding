import './globals.css'

export const metadata = {
  title: 'Daniel Lee for Cook County Commissioner | Citizens for Daniel Lee',
  description: 'Daniel Lee for Cook County Commissioner - God, Family, and Country. A 25-year Cook County resident bringing conservative values and fiscal responsibility to our community.',
  openGraph: {
    title: 'Daniel Lee for Cook County Commissioner',
    description: 'Support Daniel Lee\'s campaign for Cook County Commissioner. Conservative values, fiscal responsibility, and community leadership.',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  )
}
