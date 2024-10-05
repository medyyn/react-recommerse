import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Button from '../ui/Button';

export default function Categories() {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        axios.get('https://fakestoreapi.com/products/categories')
        .then((res) => setCategories(res.data));
    })
  return (
    <ul className='w-1/3 items-center mx-auto flex mt-12 gap-2'>
        {categories.map((category) => ( 
            <Link key={category} to={"/products/category/" + category}>
            <Button text={category} className={'text-sm md:bg-black'}/>
            </Link>
    ))}
    </ul>
  );
}
