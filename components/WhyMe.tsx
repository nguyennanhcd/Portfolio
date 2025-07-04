'use client'

import { whyMe } from '@/constants/whyme'
import React from 'react'

const WhyMe = () => {
  return (
    <section className='xl:mb-30 mb-10'>
      <div className='bg-accent-hover/82 rounded-xl pt-10 xl:p-20'>
        <div className='container mx-auto'>
          <h2 className='h2 mb-6 text-center text-primary/80'>
            Why Choose Me?
          </h2>
          <div className='flex justify-center flex-col lg:flex-row xl:gap-20 gap-12 xl:mt-20 mt-17'>
            {whyMe.map((item, index) => (
              <div key={index}>
                <span className='block text-5xl text-primary text-center'>
                  {item.icon}
                </span>
                <span className='block text-center text-lg font-semibold text-primary'>
                  {item.whyMe}
                </span>
                <p className='text-left mb-8 xl:mt-5 text-primary/80'>
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
