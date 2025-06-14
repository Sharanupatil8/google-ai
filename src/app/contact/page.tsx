
import { InquiryForm } from "@/components/forms/InquiryForm";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us - Sai Motors',
  description: 'Get in touch with Sai Motors. Find our address, phone number, email, and use the inquiry form for any questions.',
};


export default function ContactPage() {
  const address = "Hospet Rd, near J K S Hotel, Diwator Nagar, Koppal, Karnataka 583231";
  const email = "info@saimotors.example.com"; // Placeholder email
  const phone = "+91-9876543210"; // Placeholder phone
  const openingHours = "Mon - Sat: 9:00 AM - 7:00 PM, Sun: 10:00 AM - 5:00 PM";

  return (
    <div className="space-y-12">
      <section className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-primary">Get In Touch</h1>
        <p className="mt-3 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
          We're here to assist you. Whether you have questions, need support, or want to visit our showroom, find all the ways to connect with us below.
        </p>
      </section>

      <div className="grid md:grid-cols-2 gap-10 items-start">
        <section className="space-y-8">
          <Card className="shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">Our Showroom</CardTitle>
            </CardHeader>
            <CardContent className="space-y-5">
              <div className="flex items-start gap-4">
                <MapPin className="h-7 w-7 text-accent mt-1 shrink-0" />
                <div>
                  <p className="font-semibold text-lg">Sai Motors</p>
                  <p className="text-muted-foreground">{address}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="h-6 w-6 text-accent shrink-0" />
                <a href={`tel:${phone}`} className="text-foreground hover:text-primary transition-colors">{phone}</a>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="h-6 w-6 text-accent shrink-0" />
                <a href={`mailto:${email}`} className="text-foreground hover:text-primary transition-colors">{email}</a>
              </div>
               <div className="flex items-start gap-4">
                <Clock className="h-6 w-6 text-accent mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold">Opening Hours</p>
                  <p className="text-muted-foreground">{openingHours}</p>
                </div>
              </div>
              <div className="aspect-video w-full rounded-lg overflow-hidden border-2 border-primary/20 mt-4">
                <iframe
                    src={`https://maps.google.com/maps?q=${encodeURIComponent(address)}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`Map of ${address}`}
                    className="w-full h-full"
                ></iframe>
              </div>
            </CardContent>
          </Card>
        </section>

        <section>
          <Card className="shadow-xl hover:shadow-2xl transition-shadow">
            <CardHeader>
              <CardTitle className="text-2xl md:text-3xl text-primary">Send us an Inquiry</CardTitle>
              <CardDescription className="text-md text-muted-foreground pt-2">
                Have a specific question or request? Fill out the form below, and our team will get back to you promptly.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <InquiryForm />
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}
