import { Button } from '@/components/ui/button'
import { FiDownload } from 'react-icons/fi'

// Components
import Social from '@/components/Social'
import Photo from '@/components/Photo'
import Stats from '@/components/Stats'
import TypeWriter from '@/components/TypeWriter'

// Constants
import { mySelf } from '@/constants/mySelf'
import { stats } from '@/constants/stats'

//utils
import { createMetadata } from '@/lib/metadata'
import BriefInfo from '@/components/BriefInfo'
import WhyMe from '@/components/WhyMe'

// Export revalidate to enable ISR for 10 days
export const revalidate = 864000 // 10*24*60*60

export const metadata = createMetadata({
  title: 'Web Developer Portfolio of Nguyen Hoang Anh ',

  description:
    "Welcome to Nguyen's Portfolio! I'm a passionate web developer and educator offering innovative web solutions and personalized tutoring.",
  keywords: [
    'web developer',
    'portfolio',
    'introduction',
    'freelance',
    'english teacher',
    'private tutor',
    'web development',
    'tutoring',
    'seo',
  ],
  ogImage:
    'https://gitlab.com/nguyennanhcd1/image-container/-/raw/main/portfolio-image/Screenshot%202025-06-21%20072326.png?ref_type=heads',
})

export default async function Home() {
  const statsData = stats

  return (
    <section className='h-full xl:-mt-10'>
      <div className='container mx-auto px-2 xl:px-0'>
        <div className='flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-4'>
          {/* Text */}
          <div className='text-center xl:text-left order-2 xl:order-none'>
            <h1 className='h1 mb-6'>
              Hi, I’m <br /> <TypeWriter mySelf={mySelf} />
            </h1>
            <p className='max-w-[500px] mb-9 text-white/80'>
              I excel at crafting elegant digital
              experiences and I am proficient in various
              programming languages and technologies
            </p>
            {/* Button and socials */}
            <div className='flex flex-col xl:flex-row items-center gap-8'>
              <Button
                variant='outline'
                size='lg'
                className='uppercase flex items-center gap-2'
              >
                <span>Download CV</span>
                <FiDownload className='text-xl cursor-pointer' />
              </Button>
              <div className='mb-8 xl:mb-0'>
                <Social
                  containerStyles='flex gap-6'
                  iconStyles='w-9 h-9 border border-accent-default rounded-full flex justify-center items-center text-accent text-base hover:bg-accent-default hover:text-primary hover:transition-all duration-500'
                />
              </div>
            </div>
          </div>

          {/* Photo */}
          <div className='order-1 xl:order-none mb-8 xl:mb-0'>
            <Photo />
          </div>
        </div>
      </div>
      {/* Pass statsData to Stats component */}
      <Stats statsData={statsData} />
      <BriefInfo />
      <WhyMe />
    </section>
  )
}
