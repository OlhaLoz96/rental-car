'use client';

import { useQuery } from '@tanstack/react-query';
import { getCars } from '@/lib/api/clientApi';
import CarList from '@/components/CarList/CarList';
import css from './CatalogPage.module.css';
import ErrorMessage from '@/components/ErrorMessage/ErrorMessage';
import Loader from '@/components/Loader/Loader';

export default function CatalogPageClient() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['cars'],
    queryFn: () => getCars(),
    refetchOnMount: false,
  });

  if (isLoading) return <Loader />;

  if (error || !data) return <ErrorMessage />;

  return (
    <section className={css.catalog}>
      <div className="container">
        <p>Filter</p>
        {data.cars.length > 0 && <CarList cars={data.cars} />}
      </div>
    </section>
  );
}
