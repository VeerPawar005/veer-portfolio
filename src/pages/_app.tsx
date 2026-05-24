import type { AppProps } from 'next/app'
import '@/styles/globals.css'
import { Toaster } from 'react-hot-toast'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: '#0D1120',
            color: '#E8EAF0',
            border: '1px solid rgba(0,212,255,0.2)',
            fontFamily: 'var(--font-jetbrains)',
            fontSize: '0.85rem',
          },
        }}
      />
    </>
  )
}
