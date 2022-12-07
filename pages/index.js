import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import JobCard from '../components/JobCard'
import BidsCard from '../components/BidsCard'


export default function Home() {

  
  return (
    <div className="bg-slate-100">
      <Head>
        <title>Craft Exercise</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div class="flex flex-col justify-center max-w-md md:max-w-4xl mx-auto p-6">
        <JobCard />
        <BidsCard />
        <a href='/form' className=' text-center bg-gray-900 text-white font-bold py-2 px-4 rounded-full p-5 m-5'>
          Check form
        </a>
      </div>
    </div>
  )
}
