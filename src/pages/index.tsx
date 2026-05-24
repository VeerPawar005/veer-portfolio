import Head from 'next/head'
import dynamic from 'next/dynamic'
import Navbar from '@/components/Navbar'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Skills from '@/components/sections/Skills'
import Experience from '@/components/sections/Experience'
import Projects from '@/components/sections/Projects'
import Certifications from '@/components/sections/Certifications'
import Contact from '@/components/sections/Contact'
import Footer from '@/components/Footer'

// Dynamic imports for heavy components
const ParticleBackground = dynamic(() => import('@/components/ParticleBackground'), { ssr: false })
const CursorAndProgress = dynamic(() => import('@/components/CursorAndProgress'), { ssr: false })
const LoadingScreen = dynamic(() => import('@/components/LoadingScreen'), { ssr: false })

export default function Home() {
  return (
    <>
      <Head>
        <title>Veer Pawar | AI Engineer — RAG Pipelines · Agentic AI · Computer Vision</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* Loading */}
      <LoadingScreen />

      {/* Background effects */}
      <ParticleBackground />
      <div className="noise-overlay" />

      {/* Scroll progress + cursor */}
      <CursorAndProgress />

      {/* Main layout */}
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Certifications />
        <Contact />
      </main>

      <Footer />
    </>
  )
}
