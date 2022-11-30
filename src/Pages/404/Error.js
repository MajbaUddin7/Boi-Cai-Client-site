import React from 'react';
import errorImg from '../../assets/images/404.jpeg';

const Error = () => {
    return (
        <div className='grid md:grid-cols-2 grid-cols-1 w-10/12 mx-auto'>
            <div className="errorImg">
                <img src={errorImg} alt="" />
            </div>
            <div className="errorDetails flex flex-col justify-center items-center">
                <h2 className='text-6xl'>AWWW...DON’T CRY.</h2>
                <h4 className='text-2xl'>It's just a 404 Error! </h4>

            </div>
        </div>
    );
};

export default Error;