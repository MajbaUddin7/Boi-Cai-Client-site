import React, { useEffect, useState } from 'react';
import CategoriesDetails from './CategoriesDetails';

const Categories = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        // fetch('http://localhost:5000/categories')
        fetch('https://swap-station-server.vercel.app/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, []);

    return (
        <div className='w-10/12 mx-auto my-20'>
            <h2 className='text-center text-3xl font-bold'>Explore Categories </h2>
            <hr className='w-28 h-1 bg-black mx-auto my-4' />
            <div className="grid gap-10 md:grid-cols-4 grid-cols-1 my-10">
                {
                    categories.map(category => <CategoriesDetails
                        category={category}
                    ></CategoriesDetails>)
                }
            </div>
        </div>
    );
};

export default Categories;