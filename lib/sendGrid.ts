type Props = {
    to: string,
    templateName: string,
    dynamicTemplateData: Record<string, string>
}

export const sendEmail = async ({to, templateName, dynamicTemplateData}: Props) =>{
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
}