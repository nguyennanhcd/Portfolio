'use client'

import { projects } from '@/constants/projects'
import { motion } from 'framer-motion'
import { useState } from 'react'

const Work = () => {
  const [project, setProject] = useState(projects[0])

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className='min-h-[80vh] flex flex-col justify-center py-12 xl:py-0'
    >
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row xl:gap-[30px]'>
          <div className='w-full xl:w-[50%] xl:h-[460px] flex flex-col xl: justify'>
            text
          </div>
          <div className='w-full xl:w-[50%]'>slider</div>
        </div>
      </div>
    </motion.section>
  )
}

export default Work
