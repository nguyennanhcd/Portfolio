'use client'

import React from 'react'
import { skills } from '@/constants/skill'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const BriefInfo = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Animation triggers only once
    threshold: 0.5, // Trigger when 20% of the component is visible
  })

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeInOut' },
    },
  }

  const textVariants = {
    hidden: { opacity: 0, scale: 0.4 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: 'easeInOut',
        delay: i * 0.2,
      },
    }),
  }

  return (
    <motion.section
      ref={ref}
      initial='hidden'
      animate={inView ? 'visible' : 'hidden'}
      variants={sectionVariants}
      className='xl:pt-20 pt-10 mb-10'
    >
      <div className='container mx-auto bg-[#232329] rounded-xl p-10 xl:p-20'>
        <motion.h2
          className='text-5xl font-bold mb-3 text-center'
          initial='hidden'
          animate={inView ? 'visible' : 'hidden'}
          variants={textVariants}
          custom={0} // No delay for h2
        >
          What I Do ?
        </motion.h2>
        <motion.p
          className='mt-10 text-base text-muted-foreground text-center'
          initial='hidden'
          animate={inView ? 'visible' : 'hidden'}
          variants={textVariants}
          custom={1} // 0.2s delay for p
        >
          Find out who am I and what actually I good at
        </motion.p>
        <div className='grid grid-cols-1 xl:grid-cols-4 xl:gap-8 xl:mt-40 mt-33 gap-30'>
          {skills.map((skill) => (
            <div key={skill.key}>
              <div className='flex items-center text-center flex-row'>
                <span
                  aria-hidden
                  className='-translate-y-12 text-[160px] leading-none 
                   font-extrabold text-gray-300 pointer-events-none select-none'
                >
                  {skill.key}
                </span>
                <h3 className='text-lg font-semibold tracking-tight'>
                  {skill.title}
                </h3>
              </div>
              <p className='-mt-6 pl-2 text-gray-500 text-left'>
                {skill.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

export default BriefInfo
