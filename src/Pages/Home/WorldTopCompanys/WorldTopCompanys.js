import React, { useEffect, useState } from 'react'
import WorldTopCompany from '../WorldTopCompany/WorldTopCompany';

const WorldTopCompanys = () => {
  const [worldTopCompanies,setWorldTopCompanies]=useState([]);

  useEffect(()=>{
      fetch('data.JSON')
      .then(res => res.json())
      .then(data => setWorldTopCompanies(data))
  },[])
  return (
    <div className='my-20'>
        
        <h1 className='font-extrabold text-transparent text-[26px] bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 text-center mb-10'>Top 3 IT Companies Worldwide</h1>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
        {
            worldTopCompanies?.slice(15, 18).map(worldtopcompanies=><WorldTopCompany key={worldtopcompanies.id} worldtopcompanies={worldtopcompanies}></WorldTopCompany>)
        }
        </div>
        
    </div>
  )
}

export default WorldTopCompanys