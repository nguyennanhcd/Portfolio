'use client'

const MotionDiv = dynamic(() =>
  import('framer-motion').then((mod) => mod.motion.div),
)

const AnimatePresence = dynamic(() =>
  import('framer-motion').then(
    (mod) => mod.AnimatePresence,
  ),
)
import { usePathname } from 'next/navigation'

//components
import Stairs from './Stairs'
import dynamic from 'next/dynamic'

const StairTransition = () => {
  const pathname = usePathname()
  return (
    <>
      <AnimatePresence mode='wait'>
        <div key={pathname}>
          <div className='h-screen w-screen fixed top-0 left-0 right-0 pointer-events-none z-40 flex'>
            <Stairs />
          </div>
          <MotionDiv
            className='h-screen w-screen fixed bg-primary top-0 pointer-events-none'
            initial={{ opacity: 1 }}
            animate={{
              opacity: 0,
              transition: {
                delay: 1,
                duration: 0.4,
                ease: 'easeInOut',
              },
            }}
          />
        </div>
      </AnimatePresence>
    </>
  )
}

export default StairTransition
