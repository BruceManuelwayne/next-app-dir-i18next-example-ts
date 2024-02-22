import './global.css'

import { dir } from 'i18next'
import { languages } from '../i18n/settings'
import Navbar from './components/Navbar';
import Hero from './components/Hero';

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }))
}

export default function RootLayout({
  children,
  params: {
    lng
  }
}: {
  children: React.ReactNode;
  params: {
    lng: string;
  };
}) {
  return (
    <html lang={lng} dir={dir(lng)}>
      <head />
      
      <body className=''>

      <Navbar/>
      <Hero/>
 
        {children}
      </body>
    </html>
  )
}
