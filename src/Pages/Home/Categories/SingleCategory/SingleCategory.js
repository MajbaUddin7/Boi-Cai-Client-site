import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleCategoryDetails from './SingleCategoryDetails';

const SingleCategory = () => {
    const categoryProducts = useLoaderData();
    return (
        <div className='w-10/12 mx-auto my-10'>
            <h2 className='text-center text-3xl font-bold'>This is Category has Product: {categoryProducts.length}</h2>
            <hr className='w-28 h-1 bg-black mx-auto my-4' />
            <div className="grid md:grid-cols-3 grid-cols-1"></div>
            {
                categoryProducts.map(product => <SingleCategoryDetails
                    key={product._id}
                    product={product}
                ></SingleCategoryDetails>)
            }
        </div>
    );
};

export default SingleCategory;