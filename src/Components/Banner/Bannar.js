import React, { useEffect, useState } from 'react';
import './Banner.css';
import axios from '../../axios';
import requests from '../../request';

const Bannar = () => {
   const [movie , setMovie] = useState([]);
   console.log(movie);

   useEffect(()=>{
      async function fetchData(){
         const request =await axios.get(requests.fetchOriginals);
         console.log(request);
         setMovie(
            request.data.results[
               Math.floor(Math.random() * request.data.results.length -1)
            ]
         );
         return request;
      }
      fetchData();
   },[])

    function truncate(string , n){
         return string?.length>n ? string.substr(0, n-1) + "...":string;
    }
  return(
      <header className='banner'
      style={{backgroundImage:`url(https://image.tmdb.org/t/p/original/${movie?.backdrop_path})`,
      backgroundPosition:"center center",
      backgroundSize:"cover"}}>
         <div className='banner__contents'>
            <h1 className='banner__title'>
               {movie?.title || movie?.name || movie?.original_name}
            </h1>
         <div className='banner_buttons'>
           <button className='banner_button'>Play</button>
           <button className='banner_button'>My List </button>
         </div>
         <h1 className='banner__desc'>
            {truncate(movie?.overview, 150)}
             </h1>
         </div>

         <div className='banner--fadeBottom'/>
      </header>
  );
};

export default Bannar;
