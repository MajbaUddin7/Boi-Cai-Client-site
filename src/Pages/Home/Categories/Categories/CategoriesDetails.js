import React from 'react';
import { Link } from 'react-router-dom';

const CategoryDetails = ({ category }) => {
    const { name, img, category_id } = category;

    return (
        <div className='border-2 text-center pb-5'>
            <img src={img} className=" w-full mb-5" alt="" />
            <div className="px-2">
                <h2 className='font-bold my-5'>{name}</h2>
                <Link to={`/category/${category_id}`} className='btn bg-indigo-500 text-white p-2 my-5 relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm'>See All</Link>
            </div>

        </div>
    );
};

export default CategoryDetails;