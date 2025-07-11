'use client'

import { ScrollArea } from '@/components/ui/scroll-area'
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import {
  about,
  education,
  experience,
  skills,
} from '@/constants/about'
import {
  domAnimation,
  LazyMotion,
  motion,
} from 'framer-motion'

const ResumeClient = () => {
  return (
    <LazyMotion features={domAnimation}>
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
        <div className='container mx-auto  px-2 xl:px-0'>
          <Tabs
            defaultValue='experience'
            className='flex flex-col xl:flex-row gap-[60px]'
          >
            <TabsList className='flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6'>
              <TabsTrigger value={'experience'}>
                Experience
              </TabsTrigger>
              <TabsTrigger value={'education'}>
                Education
              </TabsTrigger>
              <TabsTrigger value={'skills'}>
                Skills
              </TabsTrigger>
              <TabsTrigger value={'about'}>
                About me
              </TabsTrigger>
            </TabsList>

            {/* content */}
            <div className='min-h-[70vh] w-full'>
              {/*experience */}
              <TabsContent value={'experience'}>
                <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                  <p className='text-4xl font-bold'>
                    {experience.title}
                  </p>
                  <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>
                    {experience.description}
                  </p>
                  <ScrollArea className='h-[400px]'>
                    <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                      {experience.items.map(
                        (item, index) => {
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
                                <p className='text-white/60'>
                                  {item.company}
                                </p>
                              </div>
                            </li>
                          )
                        },
                      )}
                    </ul>
                  </ScrollArea>
                </div>
              </TabsContent>

              {/*education */}
              <TabsContent value={'education'}>
                <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                  <h3 className='text-4xl font-bold'>
                    {education.title}
                  </h3>
                  <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>
                    {education.description}
                  </p>
                  <ScrollArea className='h-[400px]'>
                    <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                      {education.items.map(
                        (item, index) => {
                          return (
                            <li
                              key={index}
                              className='bg-[#232329] h-[148px] py-6 px-10 rounded-xl flex flex-col justify-center items-center xl:items-start gap-1'
                            >
                              <span className='text-accent-default'>
                                {item.duration}
                              </span>
                              <h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left'>
                                {item.degree}
                              </h3>
                              <div>
                                {/* dot */}
                                <span className='w-[6px] h-[6px] rounded-full bg-accent-default'></span>
                                <p className='text-white/60'>
                                  {item.institution}
                                </p>
                              </div>
                            </li>
                          )
                        },
                      )}
                    </ul>
                  </ScrollArea>
                </div>
              </TabsContent>

              {/*Skills */}
              <TabsContent
                value={'skills'}
                className='w-full h-full'
              >
                <div className='flex flex-col gap-[30px]'>
                  <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                    <h3 className='text-4xl font-bold'>
                      {skills.title}
                    </h3>
                    <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>
                      {skills.description}
                    </p>
                  </div>
                  <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px] gap-4 sm:ml-2 sm:mr-2'>
                    {skills.skillList.map(
                      (skill, index) => {
                        return (
                          <li key={index}>
                            <TooltipProvider
                              delayDuration={100}
                            >
                              <Tooltip>
                                <TooltipTrigger className='w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group'>
                                  <div className='text-5xl group-hover:text-accent-default transition-all duration-500'>
                                    {skill.icon}
                                  </div>
                                </TooltipTrigger>
                                <TooltipContent>
                                  <p className='capitalize'>
                                    {skill.name}
                                  </p>
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>
                          </li>
                        )
                      },
                    )}
                  </ul>
                </div>
              </TabsContent>

              {/*About */}
              <TabsContent
                value='about'
                className='w-full text-center xl:text-left'
              >
                <div className='flex flex-col gap-[30px]'>
                  <h3 className='text-4xl font-bold'>
                    {about.title}
                  </h3>
                  <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0 '>
                    {about.description}
                  </p>
                  <ul className='grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0'>
                    {about.info.map((item, index) => (
                      <li
                        key={index}
                        className='flex items-center justify-center xl:justify-start gap-4'
                      >
                        <span className='text-white/60'>
                          {item.fieldName}
                        </span>
                        <span className='text-xl'>
                          {item.fieldValue}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </motion.div>
    </LazyMotion>
  )
}

export default ResumeClient
