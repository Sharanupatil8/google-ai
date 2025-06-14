
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Car, MapPin, CheckCircle, ShieldCheck, Users, Sparkles } from 'lucide-react';
import { carModels } from '@/lib/data';


export default function Home() {
  const featuredCars = carModels.slice(0, 3); // Show first 3 cars as featured

  return (
    <div className="space-y-16 md:space-y-24">
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] w-full flex items-center justify-center text-center rounded-xl overflow-hidden shadow-2xl">
        <Image
          src="https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="Modern cars lineup"
          layout="fill"
          objectFit="cover"
          className="absolute z-0 opacity-40"
          data-ai-hint="car dealership modern"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent z-10"></div>
        <div className="relative z-20 container px-4 md:px-6 text-white">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight drop-shadow-md">
            Discover Your Next Journey with Sai Motors
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-neutral-200 drop-shadow-sm">
            Experience the pinnacle of automotive excellence. Explore our wide range of cars and find the one that drives your dreams.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground transition-transform-subtle hover-lift text-lg px-8 py-6">
              <Link href="/models">
                Explore Our Models <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white bg-transparent hover:bg-white/10 transition-transform-subtle hover-lift text-lg px-8 py-6">
              <Link href="/test-drive">
                Book a Test Drive
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Cars Section */}
      <section>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">Featured Cars</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {featuredCars.map((car) => (
            <Card key={car.id} className="overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col bg-card transform hover:-translate-y-1">
              <CardHeader className="p-0 relative">
                <Image
                  src={car.imageUrl}
                  alt={car.name}
                  width={600}
                  height={400}
                  className="object-cover w-full h-64"
                  data-ai-hint={car.dataAiHint}
                />
                <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-4 py-2 rounded-bl-lg text-sm font-semibold shadow-md">
                  {car.price}
                </div>
              </CardHeader>
              <CardContent className="p-6 flex-grow">
                <CardTitle className="text-2xl text-primary">{car.name}</CardTitle>
                <CardDescription className="mt-2 text-muted-foreground h-12 overflow-hidden text-ellipsis">{car.tagline}</CardDescription>
                <ul className="mt-4 space-y-2 text-sm">
                  {car.specifications.slice(0,2).map((spec) => (
                     <li key={spec.label} className="flex items-center text-foreground">
                       <CheckCircle className="h-4 w-4 mr-2 text-green-600" /> {/* Consider text-primary for consistency */}
                       <strong>{spec.label}:</strong>&nbsp;{spec.value}
                     </li>
                   ))}
                </ul>
              </CardContent>
              <CardFooter className="p-6 border-t bg-muted/10">
                <Button asChild className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                  <Link href={`/models#${car.id}`}>
                    View Details <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="text-center mt-12">
            <Button asChild variant="link" className="text-primary hover:text-primary/80 text-lg font-semibold">
              <Link href="/models">
                See All Models <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-24 bg-card rounded-xl shadow-lg">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">Why Choose Sai Motors?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
            <div className="flex flex-col items-center p-6 bg-background rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="p-4 bg-primary/10 rounded-full mb-5">
                <Car className="h-12 w-12 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">Extensive Selection</h3>
              <p className="text-muted-foreground">Explore a diverse range of the latest car models to suit your needs and budget. Quality guaranteed.</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-background rounded-lg shadow-md hover:shadow-xl transition-shadow">
               <div className="p-4 bg-primary/10 rounded-full mb-5">
                <ShieldCheck className="h-12 w-12 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">Trusted & Reliable Service</h3>
              <p className="text-muted-foreground">Our expert technicians provide top-quality maintenance and repair services using genuine parts.</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-background rounded-lg shadow-md hover:shadow-xl transition-shadow">
               <div className="p-4 bg-primary/10 rounded-full mb-5">
                <Sparkles className="h-12 w-12 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">Customer First Approach</h3>
              <p className="text-muted-foreground">We are committed to providing an exceptional, transparent, and satisfying experience for every customer.</p>
            </div>
          </div>
        </div>
      </section>
       {/* Location Section */}
      <section className="text-center py-12 md:py-16">
        <div className="container px-4 md:px-6">
            <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-primary">
            Visit Our Showroom
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Hospet Rd, near J K S Hotel, Diwator Nagar, Koppal, Karnataka 583231
          </p>
          <div className="mt-8">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground transition-transform-subtle hover-lift">
              <Link href="/contact">
                Get Directions & Contact Info <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
