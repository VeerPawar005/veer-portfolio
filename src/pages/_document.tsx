import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="description" content="Veer Pawar — AI Engineer specializing in RAG Pipelines, Agentic AI, Computer Vision. SIH 2025 National Finalist." />
        <meta name="keywords" content="AI Engineer, ML Engineer, RAG, LLM, Computer Vision, Python, FastAPI, YOLOv8, India" />
        <meta name="author" content="Veer Pawar" />
        <meta property="og:title" content="Veer Pawar | AI Engineer" />
        <meta property="og:description" content="AI Engineer with production experience in agentic systems, voice AI, and computer vision." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=JetBrains+Mono:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
