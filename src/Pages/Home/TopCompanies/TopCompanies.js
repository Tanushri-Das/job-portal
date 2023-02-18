import React, { useEffect, useState } from 'react'
import TopCompany from '../TopCompany/TopCompany';

const TopCompanies = () => {
    const [topCompanies,setTopCompanies]=useState([]);

    useEffect(()=>{
        fetch('data.JSON')
        .then(res => res.json())
        .then(data => setTopCompanies(data))
    },[])
    return (
    <div className='my-20'>
        <h1 className='text-3xl text-teal-500 mb-5 font-semibold text-center'>Top Companies</h1>
        <h1 className='font-extrabold text-transparent text-[26px] bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 text-center mb-10'>Top 3 Bangladeshi IT Companies</h1>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
        {
            topCompanies?.slice(12, 15).map(topcompany=><TopCompany key={topcompany.id} topcompany={topcompany}></TopCompany>)
        }
        </div>
        
    </div>
      )
}

export default TopCompanies