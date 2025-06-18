'use server'

import ContactResponseEmail from '@/components/EmailTemplate';
import { NextResponse } from 'next/server';
import { Resend } from 'resend'

export async function sendEmail(formData: FormData) {
    const resend = new Resend(process.env.RESEND_API_KEY)
    const email = formData.get('email') as string | null

    if (!email) {
        return NextResponse.json({ error: 'Email is required' });
    }

    try {
        await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: email,
            subject: 'Hello World',
            react: ContactResponseEmail()
        });

        console.log('Email sent successfully')    
        } catch (error) {
            console.log(error)
        }

}