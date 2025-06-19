/* eslint-disable @typescript-eslint/no-explicit-any */
'use server'

import ContactResponseEmail from '@/components/EmailTemplate'
import { Resend } from 'resend'
import { z } from 'zod'

const ContactFormSchema = z.object({
  email: z.string().email(),
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  service: z.string().min(1),
  phone: z.string().regex(/^\d{10,15}$/, {
    message: 'Phone number must be 10 to 15 digits',
  }),
})

export async function sendEmail(prevState: any, formData: FormData) {
  
  const raw = {
    email: formData.get('email'),
    firstName: formData.get('firstName'),
    lastName: formData.get('lastName'),
    service: formData.get('service'),
    phone: formData.get('phone'),
    message: formData.get('message'),
  }

  const result = ContactFormSchema.safeParse(raw)

  if (!result.success) {
    const errorMessages = result.error.flatten().fieldErrors
    console.log('Validation failed:', errorMessages)
    return {
      status: 'error',
      message: 'Validation failed: Please check your inputs.',
      timestamp: Date.now(),
    }
  }

  const { email, firstName, lastName, service, phone } = result.data

  try {
    const resend = new Resend(process.env.RESEND_API_KEY)

    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'anh487303@gmail.com',
      subject: `New Contact Request from ${firstName} ${lastName}`,
      react: ContactResponseEmail({
        firstName,
        lastName,
        email,
        service,
        phone,
      }),
    })

    return {
      status: 'success',
      message: 'Email sent successfully',
      timestamp: Date.now(),
    }
  } catch (error) {
    console.log(error)
    return {
      status: 'error',
      message: 'Failed to send email. Please try again.',
      timestamp: Date.now(),
    }
  }
}

