import { Metadata } from 'next';
import { QueryClient, HydrationBoundary, dehydrate } from '@tanstack/react-query';
import { getCars } from '@/lib/api/clientApi';
import CatalogPageClient from './CatalogPage.client';

export const metadata: Metadata = {
  title: 'Catalog',
  description: 'View the list of cars and choose the most suitable car',
};

export default async function CatalogPage() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['cars'],
    queryFn: () => getCars(),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <CatalogPageClient />
    </HydrationBoundary>
  );
}
