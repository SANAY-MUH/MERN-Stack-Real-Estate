import { Link } from 'react-router'

export default function Signup() {
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semiboldm my-7'>Signup</h1>
      <form className='flex flex-col gap-4 '>
        <input type="text" placeholder='username' required className='border p-3 rounded-lg' id = 'username'/>
        <input type="email" placeholder='email' required className='border p-3 rounded-lg' id = 'email'/>
        <input type="password" placeholder='password' required className='border p-3 rounded-lg' id = 'password'/>
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
