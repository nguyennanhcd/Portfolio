'use server'

import ContactResponseEmail from '@/components/EmailTemplate';
import { Resend } from 'resend'

export async function sendEmail(formData: FormData) : Promise<void> {
    const resend = new Resend(process.env.RESEND_API_KEY)
    const email = formData.get('email') as string
    const firstName = formData.get('firstName') as string
    const lastName = formData.get('lastName') as string
    const service = formData.get('service') as string

    if (!email) {
        console.log('Email not found')
        return
    }

    try {
        await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: email,
            subject: 'Thanks for contacting me!',
            react: ContactResponseEmail({firstName, lastName, service})
        });

        console.log('Email sent successfully')   
    } catch(error) {
        console.log(error)
    } 
}