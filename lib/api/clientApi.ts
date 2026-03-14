import { Car } from '@/types/car';
import { nextServer } from './api';

interface CarListResponse {
  cars: Car[];
  totalCars: number;
  page: number;
  totalPages: number;
}

export const getCars = async () => {
  const res = await nextServer.get<CarListResponse>('/cars');
  return res.data;
};
