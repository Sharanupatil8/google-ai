import Image from 'next/image';
import Link from 'next/link';
import type { CarModel } from '@/lib/data';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, Settings, Zap, Calendar, Fuel, Gauge, Users } from 'lucide-react';

interface CarCardProps {
  car: CarModel;
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  "Engine": Gauge,
  "Mileage": Fuel,
  "Transmission": Settings,
  "Power": Zap,
  "Drive Type": Settings, // Could be a specific AWD/FWD icon if available
  "Boot Space": Users, // Placeholder, could be luggage icon
  "Seating": Users,
  "Airbags": CheckCircle, // Placeholder, could be shield icon
};


export function CarCard({ car }: CarCardProps) {
  return (
    <Card id={car.id} className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 flex flex-col h-full bg-card">
      <CardHeader className="p-0 relative">
        <Image
          src={car.imageUrl}
          alt={car.name}
          width={600}
          height={400}
          className="object-cover w-full h-56 md:h-60" // Standardized height
          data-ai-hint={car.dataAiHint}
        />
         <div className="absolute top-0 left-0 bg-primary text-primary-foreground px-3 py-1.5 rounded-br-lg text-sm font-semibold shadow-md">
          {car.price}
        </div>
      </CardHeader>
      <CardContent className="p-5 md:p-6 flex-grow">
        <CardTitle className="text-xl md:text-2xl text-primary mb-1.5">{car.name}</CardTitle>
        <CardDescription className="text-muted-foreground mb-4 h-10 text-sm overflow-hidden text-ellipsis">{car.tagline}</CardDescription>
        
        <div className="space-y-2.5 my-4">
          {car.specifications.slice(0, 2).map((spec, index) => {
            const IconComponent = iconMap[spec.label] || Settings;
            return (
              <div key={index} className="flex items-center text-xs md:text-sm">
                <IconComponent className="w-4 h-4 mr-2 text-primary/80" />
                <span className="font-medium text-foreground/80">{spec.label}:</span>
                <span className="ml-1.5 text-foreground">{spec.value}</span>
              </div>
            );
          })}
        </div>
        
      </CardContent>
      <CardFooter className="p-5 md:p-6 bg-muted/20 border-t mt-auto">
        <div className="flex gap-3 w-full">
          <Button asChild className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground">
            <Link href={`/test-drive?model=${encodeURIComponent(car.name)}`}>
              Book Test Drive
            </Link>
          </Button>
          <Button asChild variant="outline" className="flex-1 border-primary text-primary hover:bg-primary/10 hover:text-primary">
            <Link href={`/models#${car.id}`}> 
              Details
            </Link>
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
