import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {

  return (
    <div className="flex flex-row">
      <Image src="/../public/ilimitados.jpg" alt="logo" width={150} height={150} />
    </div>
  )
}

export default Home
