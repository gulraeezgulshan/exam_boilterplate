import React from 'react'
import DashbboardCard from './dashboard-card'

const Dashboard = () => {
    return (
        <div className='grid grid-cols-3 gap-8'>
            <DashbboardCard heading="Total Tasks" value="04" />
            <DashbboardCard heading="Completed" value="02" />
            <DashbboardCard heading="Pending" value="02" />
        </div>
    )
}

export default Dashboard