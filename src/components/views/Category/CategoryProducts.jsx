import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Loading from '../../shared/Loading';
import Card from '../../shared/Card';

const CategoryProducts = () => {
    const {categoryName} = useParams();
    const [products, setProducts] = useState(null);
    useEffect(() => {
        axios.get("https://fakestoreapi.com/products/category/" + categoryName)
        .then((res) => setProducts(res.data));
    }, []);
  return (
    <>
    {products ? (
        <div className='container mt-10 grid grid-cols-3 gap-8'>
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
export default CategoryProducts