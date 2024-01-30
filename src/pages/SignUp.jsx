import { useState } from 'react'
import { Link, useNavigate} from 'react-router-dom'

export default function SignUp() {
  const [formData, setFormData] = useState({})
  const [error, setError] = useState(null)
  const [loading, setLoding] = useState(false)
  const navigate = useNavigate();
  console.log(formData)
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value, 
    })
    
  }
  const handleSubmit =async (e) => {
    e.preventDefault()
    try {
      setLoding(true)
      const res = await fetch('/api/auth/signup', {
        method: "POST",
        headers: {
          'Content-Type' : 'application/json',  
        },
        body: JSON.stringify(formData)
      });
        const data = await res.json();
        if(data.success === false){
         setLoding(false); 
         setError(data.message);
          return;
        }
        setLoding(false)
        setError(null)
        navigate('/sign-in')
        // console.log(data)
    
    } catch (error) {
      setLoding(false)
      setError(error.message)
    }
    
}  
  
  console.log(formData)
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'>Sign up</h1>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
        <input type ='text' placeholder='username' className='border p-3 rounded-lg' id='username' onChange={handleChange}/>
        <input type ='text' placeholder='email' className='border p-3 rounded-lg' id='email' onChange={handleChange}/>
        <input type ='text' placeholder='password' className='border p-3 rounded-lg' id='password' onChange={handleChange}/>
        <button disabled={loading} className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opasity-95 disabled:opasity-80'>{loading ? 'Loading.....' : 'Sign up'}</button>
      </form>
      <div className='flex gap-2 mt-5'>
        <p>Have an account?</p>
        <Link to="/sign-in">
          <span className='text-blue-700'>Sign in</span>
        </Link>
      </div>
      {error && <p className='text-red-500 mt-5'>{error}</p>}
    </div>
  )
}
