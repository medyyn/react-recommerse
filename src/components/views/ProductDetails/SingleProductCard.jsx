import React from 'react'
import Button from '../../ui/Button';
import { LuShoppingCart } from 'react-icons/lu';
import toast from 'react-hot-toast';

const SingleProductCard = ({id, price, title, category, description, image}) => {
    const handleAddToCart = () => {
        toast.success("Added to cart!")
    }
  return (
    <div className='flex flex-col gap-2 p-5 rounded-xl bg-white border border-slate-300'>
      <h1 title='Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops' className='text-2xl font-semibold line-clamp-1'>{title}</h1>
      <p className='text-xl font-semibold capitalize'>{category}</p>
      <div className="w-full h-[250px]">
        <img
        className='w-full h-full object-contain'
        src={image} alt="" />
      </div>
      <p className='opacity-70 mt-4'>{description}</p>
      <p className='mt-12 text-3xl font-semibold'>{price}$</p>
      <Button 
      text={'Add to cart'}
      className="mt-4 w-fit ml-auto lg:text-sm"
      handleClick={handleAddToCart} 
      icon={<LuShoppingCart/>}/>
    </div>
  );
};

export default SingleProductCard;