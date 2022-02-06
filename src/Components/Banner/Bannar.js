import React from 'react';
import './Banner.css';

const Bannar = () => {
    function truncate(string , n){
         return string?.length>n ? string.substr(0, n-1) + "...":string;
    }
  return(
      <header className='banner'>
         <div className='banner__contents'>
            <h1 className='banner__title'>Movie Name</h1>
         <div className='banner_buttons'>
           <button className='banner_button'>Play</button>
           <button className='banner_button'>My List </button>
         </div>
         <h1 className='banner__desc'>
            {truncate(` This is a test description
             This is a test description
             This is a test description
             This is a test description
             This is a test description
             This is a test description
             This is a test description
             This is a test description
             This is a test description
             This is a test description
             This is a test description
             This is a test description
             This is a test description
             This is a test description`, 150)}
             </h1>
         </div>

         <div className='banner--fadeBottom'/>
      </header>
  );
};

export default Bannar;
