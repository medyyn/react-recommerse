import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Loading from '../components/shared/Loading';
import SingleProductCard from '../components/views/ProductDetails/SingleProductCard';

export default function ProductDetails() {
  const { productId } = useParams();
  const [productData, setProductData] = useState(null);
  useEffect(() => {
      axios.get("https://fakestoreapi.com/products/" + productId)
      .then((res) => setProductData(res.data));
  }, []);
  return (
    <>
        {productData ? (
        <div className='container mt-12'>
            <SingleProductCard {...productData}/>
        </div>
    ) : (
        <div className='container h-96 flex items-center justify-center'>
            <Loading/>
        </div>
    )}
    </>
  )
}
