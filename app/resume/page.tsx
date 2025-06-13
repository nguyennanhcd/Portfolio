'use client'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
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
            <TabsContent value={'experience'}>Experience</TabsContent>
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
