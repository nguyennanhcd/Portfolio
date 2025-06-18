import { NextResponse } from 'next/server';
import { Resend} from 'resend'
import { GithubAccessTokenEmail } from '@/components/EmailTemplate';

export async function GET() {
    const resend = new Resend(process.env.RESEND_API_KEY)
    try {
        const {data} = await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: 'anh487303@gmail.com',
            subject: 'Hello World',
            react: GithubAccessTokenEmail({username: 'anhnguyen'})
        });
        return NextResponse.json(data)

    } catch (error) {
        return NextResponse.json({error})
    }
}