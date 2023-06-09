import Head from 'next/head'
import Image from 'next/image'
import NavBar from '@/pages/NavBar'
import Hero from '@/pages/Hero'
import About from '@/pages/About';



export default function Home() {
  return (
    <>
      <Head>
        <title>Eloise & George</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='font-barlow'>
        <NavBar/>
        <Hero/>
        <About/>
      </main>
    </>
  )
}
