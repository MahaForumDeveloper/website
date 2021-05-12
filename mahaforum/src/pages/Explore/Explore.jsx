import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ExploreCard from '../../components/ExplorePageComponent/ExploreCard';
import ExplorePost from '../../components/ExplorePageComponent/ExplorePost';
import Search from '../../components/shared/Search';


const Explore = () => {
    return (
        <>
            <Search/>
            <ExplorePost/>
            <ExploreCard/>
        </>
   )
}

export default Explore
