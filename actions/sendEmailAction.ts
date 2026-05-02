"use server";

import React from "react";
import { Resend } from "resend";
import { validateString, getErrorMessage } from "@lib/utils";
import EmailContactForm from "../email/EmailContactForm";

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

const defaultFrom = "Portfolio Contact <onboarding@resend.dev>";

export async function sendEmail(formData: FormData) {
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");

  if (!resend) {
    return {
      error:
        "Email is not configured on this deployment. Please use the mail link below or contact directly.",
    };
  }

  if (!validateString(senderEmail, 500)) {
    return { error: "Invalid sender email" };
  }
  if (!validateString(message, 5000)) {
    return { error: "Invalid message" };
  }

  const from = process.env.RESEND_FROM_EMAIL ?? defaultFrom;
  const to = process.env.RESEND_TO_EMAIL ?? "engrahmadaya@gmail.com";

  try {
    await resend.emails.send({
      from,
      to,
      subject: "Message from portfolio contact form",
      reply_to: senderEmail,
      react: React.createElement(EmailContactForm, {
        message,
        senderEmail,
      }),
    });
  } catch (error: unknown) {
    return { error: getErrorMessage(error) };
  }

  return { success: true as const };
}
