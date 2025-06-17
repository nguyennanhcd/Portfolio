'use server'

export const sendContactEmailAction = async (
  formData: FormData,
) => {
  const firstName = formData.get('firstName') as string
  const lastName = formData.get('lastName') as string
  const email = formData.get('email') as string
  const phone = formData.get('phone') as string
  const service = formData.get('service') as string

  await sendEmail({
    to: 'anh487303@gmail.com',
    templateName: 'Contact Submission',
    dynamicTemplateData: {
      firstName,
      lastName,
      email,
      phone,
      service,
    },
  })

  try {
    return { errorMessage: null }
  } catch (error) {
    console.log(error)
    return { errorMessage: 'Something went wrong!' }
  }
}
