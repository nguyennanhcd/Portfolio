import { Button } from '@/components/ui/button'
import { FiDownload } from 'react-icons/fi'

// Components
import Social from '@/components/Social'
import Stats from '@/components/Stats'
import TypeWriter from '@/components/TypeWriter'

// Constants
import { mySelf } from '@/constants/mySelf'
import { stats } from '@/constants/stats'

// Utils
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
    <section className='h-full xl:pt-20 xl:pb-4'>
      <div className='container mx-auto px-2 xl:px-0'>
        <div className='flex flex-col items-center justify-center text-center'>
          {/* Text */}
          <div className='w-full max-w-3xl'>
            <h1 className='h1 mb-6'>
              Hi, I&apos;m <br />{' '}
              <TypeWriter mySelf={mySelf} />
            </h1>
            <p className='mx-auto max-w-2xl mb-9 text-white/80'>
              I excel at crafting elegant digital
              experiences and I am proficient in various
              programming languages and technologies
            </p>

            {/* Button and socials */}
            <div className='flex flex-col items-center gap-8 m-10'>
              <Button
                variant='outline'
                size='lg'
                className='uppercase flex items-center gap-2'
              >
                <span>Download CV</span>
                <FiDownload className='text-xl cursor-pointer' />
              </Button>
              <div>
                <Social
                  containerStyles='flex gap-6 justify-center m-8'
                  iconStyles='w-9 h-9 border border-accent-default rounded-full flex justify-center items-center text-accent text-base hover:bg-accent-default hover:text-primary hover:transition-all duration-500'
                />
              </div>
            </div>
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
