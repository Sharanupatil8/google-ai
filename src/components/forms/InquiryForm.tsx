
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { submitInquiry } from "@/app/contact/actions";
import { carModels } from "@/lib/data";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import { Loader2 } from "lucide-react";


const inquiryFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().optional().refine(val => !val || /^\d{10}$/.test(val), {
    message: "Phone number must be 10 digits if provided.",
  }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters." }),
  carModel: z.string().optional(),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }).max(500, { message: "Message cannot exceed 500 characters." }),
});

export type InquiryFormValues = z.infer<typeof inquiryFormSchema>;

const NONE_NOT_APPLICABLE_VALUE = "none_not_applicable";

export function InquiryForm() {
  const { toast } = useToast();
  const searchParams = useSearchParams();
  const modelFromQuery = searchParams.get('model');

  const form = useForm<InquiryFormValues>({
    resolver: zodResolver(inquiryFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      carModel: modelFromQuery || "",
      message: "",
    },
  });
  
  useEffect(() => {
    if (modelFromQuery) {
      form.setValue('carModel', modelFromQuery);
      if (!form.getValues('subject')) { // Only set subject if not already set by user
        form.setValue('subject', `Inquiry about ${modelFromQuery}`);
      }
    }
  }, [modelFromQuery, form]);


  async function onSubmit(data: InquiryFormValues) {
    const submittedData = {
      ...data,
      carModel: data.carModel === NONE_NOT_APPLICABLE_VALUE ? undefined : data.carModel,
    };

     try {
      const result = await submitInquiry(submittedData);
      if (result.success) {
        toast({
          title: "Inquiry Sent!",
          description: "Thank you for your message. We will get back to you soon.",
          variant: "default",
        });
        form.reset({ name: "", email: "", phone: "", subject: "", carModel: "", message: "" });
         if (modelFromQuery) { // Re-apply model from query after reset if it was there
            form.setValue('carModel', modelFromQuery);
            form.setValue('subject', `Inquiry about ${modelFromQuery}`);
        }
      } else {
        toast({
          title: "Submission Failed",
          description: result.message || "Could not process your inquiry. Please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
       toast({
          title: "Error",
          description: "An unexpected error occurred. Please try again later.",
          variant: "destructive",
        });
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name</FormLabel>
                <FormControl>
                  <Input placeholder="e.g. John Doe" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email Address</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="e.g. john.doe@example.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
         <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone Number (Optional)</FormLabel>
                <FormControl>
                  <Input type="tel" placeholder="e.g. 9876543210" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        <FormField
          control={form.control}
          name="carModel"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Car Model (If applicable)</FormLabel>
              <Select 
                onValueChange={(value) => field.onChange(value === NONE_NOT_APPLICABLE_VALUE ? NONE_NOT_APPLICABLE_VALUE : value)} 
                value={field.value || ""}
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a car model" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value={NONE_NOT_APPLICABLE_VALUE}>None / Not Applicable</SelectItem>
                  {carModels.map(model => (
                    <SelectItem key={model.id} value={model.name}>
                      {model.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Subject</FormLabel>
              <FormControl>
                <Input placeholder="e.g. Question about City Sedan X1 features" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Your Message</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Please provide details about your inquiry..."
                  className="min-h-[120px] resize-y"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full md:w-auto bg-primary hover:bg-primary/90 text-primary-foreground text-base px-8 py-3" disabled={form.formState.isSubmitting}>
          {form.formState.isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending...
            </>
          ) : "Send Inquiry"}
        </Button>
      </form>
    </Form>
  );
}

