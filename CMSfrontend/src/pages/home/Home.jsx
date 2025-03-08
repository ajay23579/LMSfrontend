import React from 'react'
import NavBar from '../../components/NavBar'
import Card from '../../components/Card'

const Home = () => {
  return (
    <>
    <NavBar/>
    <div className='mt-18 p-3 flex flex-wrap space-x-15 justify-center space-y-15'>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    </div>
    </>
  )
}

export default Home
