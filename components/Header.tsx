'use client';
import Link from 'next/link';

export default function Header() {
  return (
    <header className='bg-[#efefef] py-4 '>
      <nav className='container px-5 mx-auto space-x-3'>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/services">Services</Link>
      </nav>
    </header>
  );
}
