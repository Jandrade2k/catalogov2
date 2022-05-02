import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Select from 'react-select';

const campeonatos = [
  { value: '1', label: 'brasileirão' },
  { value: '2', label: 'campeonato argentino' },
  { value: '3', label: 'campeonato uruguayo' },
  { value: '4', label: 'copa de primera' },
  { value: '5', label: 'liga pro' },
  { value: '6', label: 'liga nos' },
  { value: '7', label: 'la liga' },
  { value: '8', label: 'bundesliga' },
  { value: '9', label: 'ligue 1' },
  { value: '10', label: 'premier league' },
  { value: '11', label: 'eredivise' },
  { value: '12', label: 'Primeira Liga Ucraniana' },
  { value: '13', label: 'MLS' },
  { value: '14', label: 'CSL' },
]

const Home: NextPage = () => {

  return (
    <div>

      <div className="flex flex-row justify-between">
        <Image src="/../public/ilimitados.jpg" alt="logo" width={100} height={100} />
        <div className="w-8/12 pt-6">
          <Select options={campeonatos} />
        </div>

      </div>

      

    </div>
  )
}

export default Home
 