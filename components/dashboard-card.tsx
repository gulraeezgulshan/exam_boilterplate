import React from 'react'

const DashbboardCard = ({heading, value}) => {
    return (
        <div className='flex flex-col text-center items-center bg-blue-200 border-2 border-black rounded-xl gap-2 p-3'>
            <h1 className='text-lg font-semibold'>{heading}</h1>
            <p className='text-7xl font-bold'>{value}</p>
        </div>
    )
}

export default DashbboardCard