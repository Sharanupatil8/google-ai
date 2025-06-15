import { Suspense } from "react";
import { TestDriveForm } from "@/components/forms/TestDriveForm";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Book a Test Drive - Sai Motors',
  description: 'Schedule a test drive for your favorite car model at Sai Motors. Fill out the form to get started.',
};

export default function TestDrivePage() {
  return (
    <div className="max-w-2xl mx-auto">
      <Card className="shadow-xl">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl text-primary">Book a Test Drive</CardTitle>
          <CardDescription className="text-md text-muted-foreground pt-2">
            Experience your chosen car firsthand. Fill in your details below, and we'll get in touch to confirm your appointment.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Suspense fallback={<p className="text-muted-foreground">Loading form...</p>}>
            <TestDriveForm />
          </Suspense>
        </CardContent>
      </Card>
    </div>
  );
}
