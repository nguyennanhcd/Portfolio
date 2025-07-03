'use client'

import Link from 'next/link'
import { Button } from './ui/button'

// components
import Nav from './Nav'
import MobileNav from './MobileNav'
import { useEffect, useState } from 'react'

const Header = () => {
  const [hasScrolled, setHasScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setHasScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', onScroll)
    return () =>
      window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={` transition-all duration-300 ease-in-out ${hasScrolled ? 'sticky top-0 left-0 w-full z-50 bg-accent-default shadow-lg backdrop-blur-md py-4 xl:py-8 text-primary/80' : 'bg-transparent py-8 xl:py-12 text-white'}`}
    >
      <div className='container mx-auto flex justify-between items-center'>
        {/* Logo */}
        <Link href='/'>
          <h1 className='font-semibold text-4xl'>
            Hoàng Anh
            <span className='text-accent-default'>.</span>
          </h1>
        </Link>

        {/* desktop nav & hire me button */}
        <div className='hidden xl:flex items-center gap-8'>
          <Nav scrolled={hasScrolled} />
          <Link href='/contact'>
            <Button className=''>Hire me</Button>
          </Link>
        </div>

        {/* mobile nav */}
        <div className='xl:hidden'>
          <MobileNav />
        </div>
      </div>
    </header>
  )
}

export default Header
