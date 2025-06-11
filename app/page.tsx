import { Button } from '@/components/ui/button'
import { FiDownload } from 'react-icons/fi'

export default function Home() {
  return (
    <section className='h-full'>
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-4'>
          {/*text */}
          <div className='text-center xl:text-left'>
            <span>Software Developer</span>
            <h1 className='h1 mb-6'>
              Hello I&rsquo;m <br />{' '}
              <span className='text-accent-default'> Nguyễn Hoàng Anh</span>
            </h1>
            <p className='max-w-[500px] mb-9 text-white/80'>
              I excel at crafting elegant digital experiences and I am
              proficient in various programming languages and technologies
            </p>
          </div>

          {/*photo */}
          <div>photo</div>
        </div>
      </div>
    </section>
  )
}
