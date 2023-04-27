'use client'

import React from 'react'
import { signIn } from "next-auth/react"

function Login() {
  return (
<li className='list-none font-bold text-blue-700'>
    <button onClick={() => signIn()} className='text-sm bg-blue-500 hover:bg-blue-700 font-bold py-2 px-4 rounded text-white'> 
        Sign In
    </button>
</li>  )
}

export default Login