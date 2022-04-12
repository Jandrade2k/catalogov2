import '../styles/globals.css'
import Head from 'next/head';
import Link from "next/link";
import "tailwindcss/tailwind.css";
import {FaInstagram} from 'react-icons/fa';
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>ilimitados imports</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="py-15 bg-[#F25A38]">
        <div className="flex justify-center items-center p-1.5 space-x-1.5">
          <a href="https://www.instagram.com/ilimitadosports/" target="_blank"><FaInstagram /></a>
          <a href="https://www.instagram.com/ilimitadosports/" target="_blank">Siga-nos no instagram</a>
        </div>
      </header>
      <main className="m-0 p-6 bg-black">
        <Component {...pageProps} />
      </main>
    </>
  )
}

export default MyApp
