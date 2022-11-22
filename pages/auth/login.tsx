import { FcGoogle } from 'react-icons/fc'
import { BsFacebook } from 'react-icons/bs'
import { GoogleAuthProvider, signInWithPopup, FacebookAuthProvider } from 'firebase/auth'
import { auth } from '../../firebase'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

const login = () => {
  useEffect
  const router = useRouter()
  const googleProvider = new GoogleAuthProvider()
  const googleLogin = async () => {
    try {
      const user = await signInWithPopup(auth, googleProvider)
      router.push('/')
    } catch (error) {
      console.log(error)
    }
  }
  const facebookProvider = new FacebookAuthProvider()
  const facebookLogin = async () => {
    try {
      const user = await signInWithPopup(auth, facebookProvider)
      router.push('/')
    } catch (error) {
      console.log(error)
    }
  }
  
  return (
    <div className="flex justify-center items-center min-h-screen">
    <div className='p-6 gap-y-2  flex flex-col border border-gray-300 rounded-lg'>
      <p className='text-lg'>Sign in with one of the providers</p>
      <button onClick={googleLogin} className='border rounded-lg border-gray-300 px-4 py-2 flex items-center gap-x-2'><FcGoogle /> Sign in with google</button>
      <button onClick={facebookLogin} className='border rounded-lg border-gray-300 px-4 py-2 flex items-center gap-x-2'><BsFacebook className=' text-blue-500'/> Sign in with facebook</button>
    </div>
    </div>
  )
}

export default login