'use client'

import { whyMe } from '@/constants/whyme'
import React from 'react'

const WhyMe = () => {
  return (
    <section className='mb-10 xl:mb-24'>
      <div className='bg-accent-default/90 pt-8 pb-12 xl:pt-16 xl:pb-20 xl:px-10 xl:h-[600px]'>
        <div className='container mx-auto px-4'>
          <h2 className='text-3xl font-bold text-center text-primary/90 mb-8 xl:mb-12'>
            Why Choose Me?
          </h2>
          <div className='flex flex-col lg:flex-row gap-8 xl:gap-12 justify-center items-center xl:mt-12'>
            {whyMe.map((item, index) => (
              <div
                key={index}
                className='xl:h-[300px] flex flex-col items-center text-center p-6 rounded-lg hover:bg-accent-hover/50 hover:cursor-pointer transition-colors duration-300'
              >
                <span className='text-5xl text-primary font-extralight mb-6'>
                  {item.icon}
                </span>
                <h3 className='text-lg font-semibold text-primary mb-3'>
                  {item.whyMe}
                </h3>
                <p className='text-primary/80 text-base leading-relaxed'>
                  {item.briefDesc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyMe
