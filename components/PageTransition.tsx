'use client'

const MotionDiv = dynamic(() =>
  import('framer-motion').then((mod) => mod.motion.div),
)

const AnimatePresence = dynamic(() =>
  import('framer-motion').then(
    (mod) => mod.AnimatePresence,
  ),
)

import dynamic from 'next/dynamic'
import { usePathname } from 'next/navigation'

const PageTransition = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const pathname = usePathname()
  return (
    <AnimatePresence>
      <div key={pathname}>
        <MotionDiv
          initial={{ opacity: 1 }}
          animate={{
            opacity: 0,
            transition: {
              delay: 1,
              duration: 0.4,
              ease: 'easeInOut',
            },
          }}
          className='h-screen w-screen fixed bg-primary top-0 pointer-events-none'
        />
        {children}
      </div>
    </AnimatePresence>
  )
}

export default PageTransition
