import React, { useState, useEffect } from 'react';import Image from "next/image"
import { StarIcon } from '@heroicons/react/24/solid'
import CurrencyInput from 'react-currency-input-field';
import currency from "currency.js";


const MAX_RATING=5;
const MIN_RATING=1;

function Product({id,title,price,description,category,image}) {

 const [rating, setRating] = useState(null);
  const [hasPrime, setHasPrime] = useState(false);

  // Génère les valeurs seulement côté client
  useEffect(() => {
    setRating(Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING);
    setHasPrime(Math.random() < 0.5);
  }, []);

  // Tant que le rating n’est pas défini, on ne rend rien (évite mismatch)
  if (rating === null) return null;


  return (
    <div className='relative flex flex-col m-5 bg-white z-30  p-10'>
      <p className='absolute top-2 right-2 text-xs italic text-gray-400'>{category}</p>

      <Image src={image} height={200} width={200} objectFit='contain'/>

      <h4 className='my-3'>{title}</h4>
      <div className="flex">
        {Array(rating)
        .fill()
        .map((_,i) => (
          <StarIcon className='h-5 text-yellow-500' />
        ))}
      </div>

      <p className='text-xs my-2 line-clamp-2'>{description}</p>

      <div className='mb-5'>
        {currency(price, { symbol: "€", precision: 2 }).format()}
      </div>

      {hasPrime &&(
        <div className='flex items-center space-x-2 -mt-5'>
          <img className='w-12' src="https://links.papareact.com/fdw" alt="Prime" />
          <p className='text-xs text-gray-500'>FREE Next-Day Delivery</p>
        </div>
      ) }

      <button className='mt-auto button '>
        Add to Cart
      </button>
    </div>
  )
}

export default Product
