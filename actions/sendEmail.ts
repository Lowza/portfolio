'use server'

import React from "react"
import { Resend } from "resend"
import { getErrorMessage, validateString } from "@/lib/utils"
import ContactFormEmail from "@/email/contact-form-email"

const resend = new Resend(process.env.RESEND_API_KEY)

const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get('senderEmail')
  const message = formData.get('message')

  if (!validateString(senderEmail, 500)) {
    return {
      error: 'Invalid sender email'
    }
  }

  if (!validateString(message, 5000)) {
    return {
      error: 'Invalid message'
    }
  }

  let data;
  try {
    data = await resend.emails.send({
      from: 'Portfolio Contact Form<onboarding@resend.dev>',
      to: 'jackrlomax@gmail.com',
      subject: 'Message from contact form',
      reply_to: senderEmail as string,
      react: React.createElement(ContactFormEmail, {
        message: message as string,
        senderEmail: senderEmail as string,
      })
    })
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error)
    }
  }

  return {
    data,
  }
}

export default sendEmail