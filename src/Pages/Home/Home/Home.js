import React from 'react'
import ExperiencedJobs from '../ExperiencedJobs/ExperiencedJobs'
import FresherJobs from '../FresherJobs/FresherJobs'
import TopCompanies from '../TopCompanies/TopCompanies'
import WorldTopCompanys from '../WorldTopCompanys/WorldTopCompanys'

const Home = () => {
  return (
    <div>
        <FresherJobs></FresherJobs>
        <ExperiencedJobs></ExperiencedJobs>
        <TopCompanies></TopCompanies>
        <WorldTopCompanys></WorldTopCompanys>
    </div>
  )
}

export default Home