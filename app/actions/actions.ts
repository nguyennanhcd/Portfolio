'use server'

import ContactResponseEmail from '@/components/EmailTemplate'
import { Resend } from 'resend'
import { z } from 'zod'

// 1. Define schema for validation
const ContactFormSchema = z.object({
  email: z.string().email(),
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  service: z.string().min(1),
  phone: z.string().regex(/^\d{10,15}$/, {
  message: 'Phone number must be 10 to 15 digits',
}),
})

export async function sendEmail(formData: FormData): Promise<void> {
    
  const raw = {
    email: formData.get('email'),
    firstName: formData.get('firstName'),
    lastName: formData.get('lastName'),
    service: formData.get('service'),
    phone: formData.get('phone'),
  }

  // 2. Validate the extracted data
  const result = ContactFormSchema.safeParse(raw)

  if (!result.success) {
    console.log('Validation failed:', result.error.flatten())
    return
  }

  // 3. Use validated + typed data
  const { email, firstName, lastName, service, phone } = result.data

  try {
    const resend = new Resend(process.env.RESEND_API_KEY)

    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'anh487303@gmail.com',
      subject: `New Contact Request from ${firstName} ${lastName}`,
      react: ContactResponseEmail({ firstName, lastName, email, service, phone }),
    })

    console.log('Email sent successfully')
  } catch (error) {
    console.error('Failed to send email:', error)
  }
}
