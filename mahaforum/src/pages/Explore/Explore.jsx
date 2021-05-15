import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ExploreCard from '../../components/ExplorePageComponent/ExploreCard';
import ExplorePost from '../../components/ExplorePageComponent/ExplorePost';
import Search from '../../components/shared/Search';
import {useList} from 'react-firebase-hooks/database'
import 'firebase/database'
import app from '../../base'
import Loading from '../../components/shared/Loading';
const Explore = () => {
    const [snapshots, loading, error] = useList(app.database().ref('requests'));
    console.log(snapshots.map(x=>x.val()))
    return (
        <>
            <Search/>
            {loading && <Loading/>}
            {!loading && <> 
                <ExplorePost/>
                {snapshots.map(x=><ExploreCard {...x.val()}/>)}
            </>}
        </>
   )
}

export default Explore
