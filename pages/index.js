import Head from 'next/head'
import { Inter } from 'next/font/google'
import {BiUserPlus, BiEditAlt} from 'react-icons/bi'
import Table from '@/components/table'
import Form from '@/components/form'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const[visible, setVisible] = useState(false)

  const handler = () => {
    setVisible(!visible)
  }

  return (
    <section>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="py-5">
        <h1 className="text-xl md:text-5xl text-center font-bold py-10">Employee Management</h1>
        
        <div className="container mx-auto flex justify-between py-5 border-b">
          <div className='left flex gap-3'>
            <button onClick={handler} className='ring ring-pink-500 ring-offset-0 flex bg-indigo-500 text-white ml-2 px-4 py-2 border rounded-md hover:bg-gray-50 hover:border-indigo-500 hover:text-indigo-500 hover:text-gray-800'>
              Add Employee <span className='px-1'><BiUserPlus size={25}></BiUserPlus></span>
            </button>
          </div>
        </div>

        {/* Form */}
        {visible ? <Form></Form> : <></>}

        {/* Table */}
        <div className='container mx-auto'>
          <Table></Table>
        </div>
      </main>
    </section>
  )
}
