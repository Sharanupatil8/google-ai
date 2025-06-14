"use server";

import { z } from "zod";
import type { TestDriveFormValues } from "@/components/forms/TestDriveForm";

const testDriveFormSchema = z.object({
  name: z.string().min(2),
  phone: z.string().regex(/^\d{10}$/),
  email: z.string().email(),
  preferredModel: z.string().min(1),
  preferredDate: z.date(),
  preferredTime: z.string().min(1),
});

export async function bookTestDrive(data: TestDriveFormValues) {
  const validatedFields = testDriveFormSchema.safeParse(data);

  if (!validatedFields.success) {
    return {
      success: false,
      message: "Invalid data provided. Please check your inputs.",
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  // Simulate API call or database interaction
  console.log("Test Drive Booking Request:", validatedFields.data);
  await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate network delay

  // In a real application, you would save this to a database
  // and handle potential errors from that process.

  return {
    success: true,
    message: "Test drive booked successfully!",
  };
}
