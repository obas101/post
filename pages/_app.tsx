import '@/styles/globals.css'
import Nav from '@/components/Nav'
import type { AppProps } from 'next/app'
import React from 'react'

export default function App({ Component, pageProps }: AppProps) {
  return (
   
  <div className='mx-5 xl:mx-56 md:mx-24'>
  <Nav />
   <Component {...pageProps} />
  </div>
  )
}
