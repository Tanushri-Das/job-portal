import React, { useEffect, useState } from 'react'
import FreshJobs from '../FreshJobs/FreshJobs';

const FresherJobs = () => {
    const [fresherjobs,setFresherJobs]=useState([]);

    useEffect(()=>{
        fetch('data.JSON')
        .then(res => res.json())
        .then(data => setFresherJobs(data))
    },[])
  return (
    <div className='my-20'>
        <h1 className='text-3xl text-teal-500 mb-10 font-semibold text-center'>Fresher Jobs Posts For This Week</h1>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
        {
            fresherjobs?.slice(0, 6).map(freshjob=><FreshJobs key={freshjob.id} freshjob={freshjob}></FreshJobs>)
        }
        </div>
        
    </div>
  )
}

export default FresherJobs