import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center bg-gray-100 p-4'>
      <p>Logo</p>

      <div className='flex gap-4'>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/department">Departments</Link>
        <Link href="/services">Services</Link>
      </div>

      <div className='flex gap-4'>
        <button className='bg-blue-500 text-white px-4 py-2 rounded'>Login</button>
        <button className='bg-blue-500 text-white px-4 py-2 rounded'>Sign Up</button>
      </div>
    </div>
  )
}

export default Navbar
