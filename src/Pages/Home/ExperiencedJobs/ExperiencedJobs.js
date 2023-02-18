import React, { useEffect, useState } from 'react'
import ExperienceJob from '../ExperienceJob/ExperienceJob';

const ExperiencedJobs = () => {
    const [experiencedJobs,setExperiencedJobs]=useState([]);

    useEffect(()=>{
        fetch('data.JSON')
        .then(res => res.json())
        .then(data => setExperiencedJobs(data))
    },[])
  return (
    <div className='my-20'>
    <h1 className='text-3xl text-teal-500 mb-10 font-semibold text-center'>Recently Added Experienced Jobs Posts</h1>
    <div className='grid grid-cols-1  gap-6'>
    {
        experiencedJobs?.slice(6, 12).map(experiencejob=><ExperienceJob key={experiencejob.id} experiencejob={experiencejob}></ExperienceJob>)
    }
    </div>
    
</div>
  )
}

export default ExperiencedJobs