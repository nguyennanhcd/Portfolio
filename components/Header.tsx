import Link from 'next/link'
import React from 'react'

// components
import Nav from './Nav'
import { Button } from './ui/button'

const Header = () => {
  return (
    <header className='py-8 xl:py-12 text-white'>
      <div className='container mx-auto flex justify-between items-center'>
        {/* Logo */}
        <Link href='/'>
          <h1 className='font-semibold text-4xl'>
            NgocDung<span className='text-accent-default'>.</span>
          </h1>
        </Link>

        {/* desktop nav & hire me button */}
        <div className='hidden xl:flex items-center gap-8'>
          <Nav />
          <Link href='/contact'>
            <Button>Hire me</Button>
          </Link>
        </div>

        {/* mobile nav */}
        <div className='xl:hidden'>mobile nav</div>
      </div>
    </header>
  )
}

export default Header
