'use client'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { CiMenuFries } from 'react-icons/ci'
import { links } from '@/constants/navLinks'

const MobileNav = () => {
  const pathname: string = usePathname()
  return (
    <Sheet>
      <SheetTitle className='sr-only'></SheetTitle>
      <SheetTrigger className='flex justify-center items-center'>
        <CiMenuFries
          aria-label='Open navigation menu'
          className='text-[32px] text-accent-default'
        />
      </SheetTrigger>

      <SheetContent className='flex flex-col'>
        {/*Logo*/}
        <div className='mt-42 mb-40 text-center text-2xl'>
          <Link href='/'>
            <h1 className='font-semibold text-4xl'>
              Hoàng Anh
              <span className='text-accent-default'>.</span>
            </h1>
          </Link>
        </div>

        {/*nav*/}
        <nav className='flex flex-col justify-center items-center gap-8'>
          {links.map((link, index) => {
            return (
              <SheetClose asChild key={index}>
                <Link
                  href={link.path}
                  className={`${
                    link.path === pathname &&
                    'text-accent-default border-b-2 border-accent-default'
                  } text-xl capitalize hover:text-accent-hover transition-all`}
                >
                  {link.name}
                </Link>
              </SheetClose>
            )
          })}
        </nav>
      </SheetContent>
    </Sheet>
  )
}

export default MobileNav
