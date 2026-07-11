import { useState } from 'react'
import { Link } from 'react-router'

export default function Signup() {

  const [formData, setFormData] = useState({})

  const handleChange = (e) => {
    setFormData(
      {
        ...formData,
        [e.target.id]: e.target.value
      }
    )
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const res = await fetch('/api/auth/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
    })
    const data = await res.json()
    console.log(data)
  }

  console.log(formData)

  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semiboldm my-7'>Signup</h1>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4 '>
        <input type="text" placeholder='username' required className='border p-3 rounded-lg' id = 'username' onChange={handleChange}/>
        <input type="email" placeholder='email' required className='border p-3 rounded-lg' id = 'email' onChange={handleChange}/>
        <input type="password" placeholder='password' required className='border p-3 rounded-lg' id = 'password' onChange={handleChange}/>
        <button className='uppercase bg-slate-700 text-white rounded-lg p-3 hover:opacity-85 disabled:opacity-95'>Sign up</button>
      </form>
      <div className='flex gap-2 mt-5'>
        <p>Have an Account?</p>
        <Link to = {"/sign-in"}>
        <span className='text-blue-700'>Sign-in</span>
        </Link>
      </div>
    </div>
  )
}
