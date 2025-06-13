'use client'

import { ScrollArea } from '@/components/ui/scroll-area'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { experience } from '@/constants/about'
import { motion } from 'framer-motion'

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 2.4,
          duration: 0.4,
          ease: 'easeInOut',
        },
      }}
      className='min-h-[80vh] flex items-center justify-center py-12 xl:py-0'
    >
      <div className='container mx-auto'>
        <Tabs
          defaultValue='experience'
          className='flex flex-col xl:flex-row gap-[60px]'
        >
          <TabsList className='flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6'>
            <TabsTrigger value={'experience'}>Experience</TabsTrigger>
            <TabsTrigger value={'education'}>Education</TabsTrigger>
            <TabsTrigger value={'skills'}>Skills</TabsTrigger>
            <TabsTrigger value={'about'}>About me</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className='min-h-[70vh] w-full'>
            {/*experience */}
            <TabsContent value={'experience'}>
              <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                <h3 className='text-4xl font-bold'>{experience.title}</h3>
                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>
                  {experience.description}
                </p>
                <ScrollArea className='h-[400px]'>
                  <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className='bg-[#232329] h-[148px] py-6 px-10 rounded-xl flex flex-col justify-center items-center xl:items-start gap-1'
                        >
                          <span className='text-accent-default'>
                            {item.duration}
                          </span>
                          <h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left'>
                            {item.position}
                          </h3>
                          <div>
                            {/* dot */}
                            <span className='w-[6px] h-[6px] rounded-full bg-accent-default'></span>
                            <p className='text-white/60'>{item.company}</p>
                          </div>
                        </li>
                      )
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value={'education'}>Education</TabsContent>
            <TabsContent value={'skills'}>Skills</TabsContent>
            <TabsContent value={'about'}>About me</TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  )
}

export default Resume
