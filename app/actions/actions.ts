'use server'

import ContactResponseEmail from '@/components/EmailTemplate';
import { Resend } from 'resend'

export async function sendEmail(formData: FormData) {
    const resend = new Resend(process.env.RESEND_API_KEY)
    const email = formData.get('email') as string | null

    if (!email) {
        return 'Error: Something went wrong';
    }

    try {
        await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: email,
            subject: 'Hello World',
            react: ContactResponseEmail()
        });

        console.log('Email sent successfully')   
        return {
            email
        }
    } catch(error) {
        return error

    } 
}