import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Card from './Card';
import Loading from './Loading';

const Products = () => {
    const [products, setProducts] = useState(null);
    useEffect(() => {
        axios.get("https://fakestoreapi.com/products")
        .then((res) => setProducts(res.data));
    }, []);
  return (
    <>
    {products ? (
        <div className='container mt-10 grid grid-cols-1 gap-7 md:grid md:grid-cols-3 md:gap-8'>
        {products.map((product) => (
            <Card key={product.id} {...product} />
        ))}
        </div>
    ) : (
        <div className='container h-96 flex items-center justify-center'>
            <Loading/>
        </div>
    )}
    </>
 );
};

export default Products;