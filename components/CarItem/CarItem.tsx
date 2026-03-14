'use client';

import { Car } from '@/types/car';
import Image from 'next/image';
import Link from 'next/link';
import css from './CarItem.module.css';

interface CarItemProps {
  car: Car;
}

export default function CarItem({ car }: CarItemProps) {
  // логіка додавання до списку збережених / видалення зі списку збережених
  const handleClick = () => {
    console.log('Click :)');
  };

  return (
    <li className={css.item}>
      <button type="button" className={css.buttonLike} onClick={handleClick}>
        <svg width={16} height={15} className={css.heart}>
          <use href="/icons.svg#icon-heart"></use>
        </svg>
      </button>
      <Image src={car.img} alt={car.brand} width={276} height={268} className={css.image} />
      <div className={css.info}>
        <div className={css.titlePrice}>
          <h2 className={css.title}>
            {car.brand} <span className={css.model}>{car.model}</span>, {car.year}
          </h2>
          <p>${car.rentalPrice}</p>
        </div>
        <ul className={css.characteristicsList}>
          <li className={css.characteristic}>
            <span>{car.address.split(', ')[1]}</span>
          </li>
          <li className={css.characteristic}>
            <span>{car.address.split(', ')[2]}</span>
          </li>
          <li className={css.characteristic}>
            <span>{car.rentalCompany}</span>
          </li>
          <li className={css.characteristic}>
            <span>
              {`${car.type.charAt(0).toUpperCase()}` + `${car.type.slice(1).toLowerCase()}`}
            </span>
          </li>
          <li className={css.characteristic}>
            <span>{car.mileage.toLocaleString('uk-UA')} km</span>
          </li>
        </ul>
      </div>
      <Link href={`/catalog/${car.id}`} className={`${css.button} button`}>
        Read more
      </Link>
    </li>
  );
}
