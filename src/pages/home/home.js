  
import './home.css'
import React, { useCallback, useEffect, useState } from 'react';
import { Router, useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import {incrementCounter} from '../../store/store';
import API from '../../api/api';

const Home = () => {
    const dispatch = useDispatch();
    const counter = useSelector((state)=>state.counter.counter)
    const increment = useCallback((counter)=>dispatch(incrementCounter(counter)));

    const router = useHistory();
    const [albums,setAlbums]=useState([]);

    useEffect(()=>{
        API.get('albums')
            .then(res=>{
                setAlbums(res.data);
            })
            .catch(err=>{
                console.log(err)

            })
    })
    return (
        <div className={'home-main'}>
            <h1>Home</h1>
            <h2>CPT: {counter}</h2>
            <h1 onClick={()=>increment(counter +1)}>+</h1>
            <h1 onClick={()=>increment(counter -1)}>-</h1>
            <h2 onClick={()=>router.push('login')}>
                GO TO LOGIN
            </h2>
            {albums && albums.map(album=>(
                <h4>
                   {album.id} {album.title}
                </h4>
            ))}
        </div>
    )
}

export default Home;