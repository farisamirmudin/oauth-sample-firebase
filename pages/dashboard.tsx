import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../firebase'
import { useRouter } from 'next/navigation'

const dashboard = () => {
  const [user, loading] = useAuthState(auth)
  const router = useRouter()
  const logout = () => {
    auth.signOut()
    router.push('/')
  }
  
  return (
    <div className="p-6">
      <div className='my-4'>Welcome, {user?.displayName}</div>
      <button onClick={logout} className='px-4 py-2 bg-gray-300 rounded-lg'>Sign Out</button>
    </div>

  )
}

export default dashboard