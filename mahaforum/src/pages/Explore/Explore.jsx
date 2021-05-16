import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';
import ExploreCard from '../../components/ExplorePageComponent/ExploreCard';
import ExplorePost from '../../components/ExplorePageComponent/ExplorePost';
import Search from '../../components/shared/Search';
import {useList} from 'react-firebase-hooks/database'
import 'firebase/database'
import app from '../../base'
import Loading from '../../components/shared/Loading';
const Explore = () => {
    const [snapshots, loading, error] = useList(app.database().ref('requests'));
    const [data, setData] = useState([])
    const [initial, setInitial] = useState(data)
    useEffect(() => {
      setData(snapshots.map(x=>x.val()))
      setInitial(snapshots.map(x=>x.val()))
      console.log(data.map(x=>x))
   }, [loading, snapshots])
   
    return (
        <>
            <Search initial={initial} setData={setData}/>
            {loading && <Loading/>}
            {!loading && <> 
                <ExplorePost/>
                {data.map(x=><ExploreCard {...x}/>)}
            </>}
        </>
   )
}

export default Explore
