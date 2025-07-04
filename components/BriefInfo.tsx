import React from 'react'
import { skills } from '@/constants/skill'

const BriefInfo = () => {
  return (
    <section className='xl:pt-20 pt-10'>
      <div className='container mx-auto bg-[#232329] rounded-xl p-10 xl:p-20'>
        <h2 className='text-5xl font-bold mb-3 text-center'>
          What I Do ?
        </h2>
        <p className='mt-10 text-base text-muted-foreground text-center'>
          Find out who am I and what actually I good at
        </p>
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
    </section>
  )
}

export default BriefInfo
