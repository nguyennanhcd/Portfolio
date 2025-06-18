'use server'

import GithubAccessTokenEmail from '@/components/EmailTemplate';
import { NextResponse } from 'next/server';
import { Resend } from 'resend'

export async function sendEmail(formRef: JSON) {
    const resend = new Resend(process.env.RESEND_API_KEY)

    console.log(formRef)
    try {
            await resend.emails.send({
                from: 'onboarding@resend.dev',
                to: 'anh487303@gmail.com',
                subject: 'Hello World',
                react: GithubAccessTokenEmail()
            });
            return NextResponse.json('You have sent your information for me successfully')
    
        } catch (error) {
            return NextResponse.json({error})
        }

}