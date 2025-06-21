import {
  Tooltip,
  TooltipTrigger,
  TooltipProvider,
  TooltipContent,
} from '@/components/ui/tooltip'
import { projects } from '@/constants/projects'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'
import { BsArrowUpRight, BsGithub } from 'react-icons/bs'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import Image from 'next/image'

import { createMetadata } from '@/lib/metadata'

export const metadata = createMetadata({
  title: 'Work',
  description:
    'Discover my portfolio of projects, showcasing innovative web development and creative solutions.',
  keywords: [
    'projects',
    'portfolio',
    'web development',
    'freelance',
  ],
  ogImage:
    'https://gitlab.com/nguyennanhcd1/image-container/-/raw/main/portfolio-image/Screenshot%202025-06-21%20073315.png?ref_type=heads',
})

//components
import WorkSliderBtns from '@/components/WorkSliderBtns'

const Work = () => {
  const [project, setProject] = useState(projects[0])

  const handleSlideChange = (swiper: {
    activeIndex: number
  }) => {
    // get current slide index
    const currentIndex: number = swiper.activeIndex
    //update project state based on current slide index
    setProject(projects[currentIndex])
  }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 2.4,
          duration: 0.4,
          ease: 'easeInOut',
        },
      }}
      className='min-h-[80vh] flex flex-col justify-center py-12 xl:py-0 '
    >
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row xl:gap-[30px]'>
          <div className='w-[95%] container mx-auto xl:w-[50%] xl:h-[460px] flex flex-col xl: justify-between order-2 xl:order-none '>
            <div className='flex flex-col gap-[30px] h-[50%'>
              {/*outline number */}
              <div className='text-8xl leading-none font-extrabold text-transparent text-outline'>
                {project.num}
              </div>
              {/* project category */}
              <h2 className='text-[42px] font-bold leading-none text-white group-hover:text-accent-default transition-all duration-500 capitalize'>
                {project.category} project
              </h2>
              {/* project description */}
              <p className='text-white/60'>
                {project.description}
              </p>
              {/* stack */}
              <ul className='flex gap-4'>
                {project.stack.map((item, index) => (
                  <li
                    key={index}
                    className='text-xl text-accent-default'
                  >
                    {item.name}

                    {/* comma */}
                    {index !== project.stack.length - 1 &&
                      ','}
                  </li>
                ))}
              </ul>
              {/* border */}
              <div className='border border-white/20'></div>

              {/* buttons */}
              <div className='flex items-center gap-4'>
                {/* live project button */}
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className='w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group cursor-pointer'>
                        <BsArrowUpRight className='text-white text-xl group-hover:text-accent-default group-hover:scale-130  transition-all duration-500' />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>

                {/* github project button */}
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className='w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group cursor-pointer'>
                        <BsGithub className='text-white text-xl group-hover:text-accent-default group-hover:scale-130  transition-all duration-500' />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className='w-[95%] xl:w-[50%] container mx-auto '>
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className='xl:h-[520px] mb-12'
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => (
                <SwiperSlide key={index} className='w-full'>
                  <div className='h-[460px] relative group flex justify-center items-center bg-pink-50/20'>
                    {/* overlay */}
                    <div className='absolute top-0 bottom-0 w-full h-full bg-black/10 z-10'></div>

                    {/* image */}
                    <div className='relative w-full h-full'>
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className='object-cover'
                      ></Image>
                    </div>
                  </div>
                </SwiperSlide>
              ))}

              {/* slider button */}
              <WorkSliderBtns
                containerStyles='flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none'
                btnStyles='bg-accent-default hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all'
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Work
