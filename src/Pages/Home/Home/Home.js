import React from 'react';
import Banner from '../Banner/Banner';
import Categories from '../Categories/Categories/Categories';
// import Carosual from '../HeroSlider/Carosual';

const Home = () => {
    return (
        <div>
            {/* <h2 className='text-red-400'>Hello from home</h2> */}
            {/* <Carosual></Carosual> */}
            <Banner></Banner>
            <Categories></Categories>

        </div>
    );
};

export default Home;