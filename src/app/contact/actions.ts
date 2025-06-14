"use server";

import { z } from "zod";
import type { InquiryFormValues } from "@/components/forms/InquiryForm";

const inquiryFormSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional(),
  subject: z.string().min(5),
  carModel: z.string().optional(),
  message: z.string().min(10).max(500),
});

export async function submitInquiry(data: InquiryFormValues) {
  const validatedFields = inquiryFormSchema.safeParse(data);

  if (!validatedFields.success) {
    return {
      success: false,
      message: "Invalid data provided. Please check your inputs.",
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  // Simulate API call or database interaction
  console.log("Inquiry Received:", validatedFields.data);
  await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate network delay

  // In a real application, you would save this to a database or send an email.

  return {
    success: true,
    message: "Inquiry submitted successfully!",
  };
}
