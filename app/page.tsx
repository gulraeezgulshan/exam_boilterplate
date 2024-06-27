import Dashboard from '@/components/dashboard'
import TaskForm from '@/components/task-form'
import TaskList from '@/components/task-list'
import React from 'react'

const Home = () => {
  return (
    <main className='container m-auto pt-20 flex flex-col gap-4'>
      <Dashboard/>
      <TaskForm/>
      <TaskList/>
    </main>
  )
}

export default Home