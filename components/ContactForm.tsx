'use client'

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
import { sendEmail } from '@/app/actions/actions'
import { useState } from 'react'

const ContactForm = () => {
  const [service, setService] = useState('')

  return (
    <div className='xl:w-[70%] order-2 xl:order-none'>
      <form
        action={async (formData: FormData) => {
          formData.set('service', service) // 👈 manually set selected service
          await sendEmail(formData)
        }}
        className='flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl'
      >
        <h3 className='text-4xl text-accent-default'>
          Let&rsquo;s work together
        </h3>
        <p className='text-white/60'>
          Ready to bring your vision to life? Whether you
          need a stunning website, personalized tutoring,
          English mastery, or top-tier SEO, I’m here to
          deliver exceptional results. Let’s connect and
          create something extraordinary!
        </p>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          <Input
            name='firstName'
            type='text'
            placeholder='First name'
            defaultValue=''
          />
          <Input
            name='lastName'
            type='text'
            placeholder='Last name'
            defaultValue=''
          />
          <Input
            name='email'
            type='email'
            placeholder='Email'
            defaultValue=''
          />
          <Input
            name='phone'
            type='text'
            placeholder='Phone'
            defaultValue=''
          />
        </div>

        {/* Service select */}
        <Select value={service} onValueChange={setService}>
          <SelectTrigger className='w-full'>
            <SelectValue placeholder='Select a service' />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Choose a service</SelectLabel>
              <SelectItem value='Web Development'>
                Web Development
              </SelectItem>
              <SelectItem value='SEO'>SEO</SelectItem>
              <SelectItem value='English Teacher'>
                English Teacher
              </SelectItem>
              <SelectItem value='Private Tutor'>
                Private Tutor
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>

        {/* Message */}
        <Textarea
          name='message'
          className='h-[200px]'
          placeholder='Type your message here...'
        />

        <Button type='submit' className='max-w-40'>
          Send
        </Button>
      </form>
    </div>
  )
}

export default ContactForm
