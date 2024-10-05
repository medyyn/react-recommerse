import React from 'react'
import Button from '../ui/Button'
import { LuArrowRight } from 'react-icons/lu'
import { Link } from 'react-router-dom';

const Card = ({id, price, title, category, description, image}) => {
  return (
    <div className='flex flex-col gap-2 p-5 rounded-xl bg-white border border-slate-300'>
      <h1 title='Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops' className='text-2xl font-semibold line-clamp-1'>{title}</h1>
      <p className='text-xl font-semibold capitalize'>{category}</p>
      <div className="w-full h-[250px]">
        <img
        className='w-full h-full object-contain'
        src={image} alt="" />
      </div>
      <p className='opacity-70 mt-4 line-clamp-3'>{description}</p>
      <p className='mt-12 text-3xl font-semibold'>{price}$</p>
      <Link to={"/products/" + id}>
      <Button 
      text={'View'}
      className="mt-4 w-fit ml-auto lg:text-sm"
      onClick={() => {}} 
      icon={<LuArrowRight/>}/>
      </Link>
    </div>
  );
};

export default Card;
