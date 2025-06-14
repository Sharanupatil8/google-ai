import { CarCard } from '@/components/CarCard';
import { carModels } from '@/lib/data';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Car Models - Sai Motors',
  description: 'Explore the wide range of car models available at Sai Motors. Find specifications, pricing, and more.',
};

export default function ModelsPage() {
  return (
    <div className="space-y-8">
      <section className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-primary">Our Car Models</h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Find the perfect car that fits your lifestyle and budget.
        </p>
      </section>

      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {carModels.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>
      </section>
    </div>
  );
}
