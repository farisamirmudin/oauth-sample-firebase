import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../firebase'

const Home: NextPage = () => {
  const [user, loading] = useAuthState(auth)
  return (
    <div className="">
      <Head>
        <title>Auth Using Firebase</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex p-6 justify-between">
        <h1>Welcome</h1>
        {!user && <Link href={'/auth/login'} className='px-4 py-2 bg-gray-300 rounded-lg'>Login</Link>}
        {user && <Link href={'/dashboard'}><Image className='rounded-full' priority src={user.photoURL!} alt='Profile Photo' width={40} height={40} /></Link>}
      </main>
    </div>
  )
}

export default Home
