import React from 'react'
import { TaskCard } from './task-card'

const TaskList = () => {
    return (
        <div className='flex flex-col gap-2'>
            <TaskCard/>
            <TaskCard/>
            <TaskCard/>
        </div>
    )
}

export default TaskList