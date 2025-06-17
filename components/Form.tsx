// react
import { useRef } from 'react'

// components
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'

const Form = () => {
  const formRef = useRef<HTMLFormElement>(null)

  return (
    <div className='xl:w-[70%] order-2 xl:order-none'>
      <form
        ref={formRef}
        action=''
        className='flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl'
      >
        <h3 className='text-4xl text-accent-default'>
          Let&rsquo;s work together
        </h3>
        <p className='text-white/60'>
          Ready to bring your vision to life? Whether you
          need a stunning website, personalized tutoring,
          English mastery, or top-tier SEO, I’m here to
          deliver exceptional results. With expertise in
          crafting dynamic digital solutions and tailored
          learning experiences, I partner with you to
          achieve your goals. Let’s connect and create
          something extraordinary!
        </p>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          <Input
            name='firstName'
            type='firstName'
            placeholder='First name'
          />
          <Input
            type='lastName'
            placeholder='Last name'
            name='lastName'
          />
          <Input
            type='email'
            placeholder='Email'
            name='email'
          />
          <Input
            type='phone'
            placeholder='Phone'
            name='phone'
          />
        </div>
        {/* select */}
        <Select name='service' autoComplete='on'>
          <SelectTrigger className='w-full'>
            <SelectValue placeholder='Select a service' />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Select a service</SelectLabel>
              <SelectItem value='est'>
                Web Development
              </SelectItem>
              <SelectItem value='cst'>SEO </SelectItem>
              <SelectItem value='mst'>MMO Tools</SelectItem>
              <SelectItem value='mst'>
                Private Tutor
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        {/*text area */}
        <Textarea
          className='h-[200px]'
          placeholder='Type your message here...'
        />
        {/*button */}
        <Button
          className='max-w-40 cursor-pointer'
          size='md'
        >
          Send message
        </Button>
      </form>
    </div>
  )
}

export default Form
