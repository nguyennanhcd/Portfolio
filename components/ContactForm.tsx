'use client'

import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { sendEmail } from '@/app/actions/actions'
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

const contactSchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  email: z.string().email('Invalid email'),
  phone: z.string().min(6, 'Phone is required'),
  service: z.string().min(1, 'Please select a service'),
  message: z
    .string()
    .min(10, 'Message must be at least 10 characters'),
})

type ContactFormData = z.infer<typeof contactSchema>

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  const [selectedService, setSelectedService] = useState('')

  const onSubmit = async (data: ContactFormData) => {
    const formData = new FormData()
    for (const [key, value] of Object.entries(data)) {
      formData.append(key, value)
    }
    await sendEmail(formData)
  }

  return (
    <div className='xl:w-[70%] order-2 xl:order-none'>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl'
      >
        <h3 className='text-4xl text-accent-default'>
          Let&rsquo;s work together
        </h3>
        <p className='text-white/60'>
          Ready to bring your vision to life? Let’s connect
          and create something extraordinary!
        </p>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          <div>
            <Input
              className='w-full'
              {...register('firstName')}
              placeholder='First name'
            />
            {errors.firstName && (
              <p className='text-red-500 text-sm'>
                {errors.firstName.message}
              </p>
            )}
          </div>
          <div>
            <Input
              className='w-full'
              {...register('lastName')}
              placeholder='Last name'
            />
            {errors.lastName && (
              <p className='text-red-500 text-sm'>
                {errors.lastName.message}
              </p>
            )}
          </div>
          <div>
            <Input
              className='w-full'
              {...register('email')}
              placeholder='Email'
              type='email'
            />
            {errors.email && (
              <p className='text-red-500 text-sm'>
                {errors.email.message}
              </p>
            )}
          </div>
          <div>
            <Input
              className='w-full'
              {...register('phone')}
              placeholder='Phone'
              type='text'
            />
            {errors.phone && (
              <p className='text-red-500 text-sm'>
                {errors.phone.message}
              </p>
            )}
          </div>
        </div>

        {/* Custom select for service */}
        <div>
          <Select
            onValueChange={(value) => {
              setValue('service', value)
              setSelectedService(value)
            }}
            value={selectedService}
          >
            <SelectTrigger className='w-full'>
              <SelectValue placeholder='Select a service' />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Service</SelectLabel>
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
          {errors.service && (
            <p className='text-red-500 text-sm'>
              {errors.service.message}
            </p>
          )}
        </div>

        <div>
          <Textarea
            {...register('message')}
            placeholder='Type your message here...'
            className='h-[200px]'
          />
          {errors.message && (
            <p className='text-red-500 text-sm'>
              {errors.message.message}
            </p>
          )}
        </div>

        <Button type='submit' className='max-w-40'>
          Send
        </Button>
      </form>
    </div>
  )
}
