'use client'

import React from 'react'
import { skills } from '@/constants/skill'
import { motion } from 'framer-motion'

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

const skillVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeInOut',
      delay: 0.4 + i * 0.1,
    },
  }),
}

export default function BriefInfo() {
  return (
    <motion.section
      initial='hidden'
      whileInView='visible'
      viewport={{ amount: 0.3, once: false }}
      variants={sectionVariants}
      className='xl:pt-50 pt-10 xl:pb-50 pb-10'
    >
      <div className='p-10 xl:p-20 bg-[#202020]'>
        <motion.h2
          className='text-5xl font-bold mb-3 text-center text-accent-default'
          variants={textVariants}
          custom={0}
        >
          What I Do ?
        </motion.h2>

        <motion.p
          className='mt-10 text-base text-muted-foreground text-center'
          variants={textVariants}
          custom={1}
        >
          Find out who I am and what I’m good at
        </motion.p>

        <div className='grid grid-cols-1 xl:grid-cols-4 xl:gap-8 xl:mt-40 mt-33 gap-30'>
          {skills.map((skill, i) => (
            <motion.div
              key={skill.key}
              variants={skillVariants}
              custom={i}
            >
              <div className='flex items-center text-center flex-row'>
                <span
                  aria-hidden
                  className='-translate-y-12 text-[160px] leading-none font-extrabold text-accent-default pointer-events-none select-none'
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
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
