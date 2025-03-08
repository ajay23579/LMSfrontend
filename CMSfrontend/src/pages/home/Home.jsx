import React, { useEffect, useState } from 'react'
import NavBar from '../../components/NavBar'
import Card from '../../components/Card'
import axios from 'axios'

const Home = () => {
  const [books,setBooks] = useState([])
  const fetchBooks =async()=>{
    const response = await axios.get('http://localhost:3000/book')
    if(response.status === 200){
      setBooks(response.data.data)
    }
  }


  useEffect(()=>{
    fetchBooks()
  },[])
  console.log(books)
  console.log(Array.isArray(books)); // Should log true


  return (
    <>
    <NavBar/>
  <div className='flex justify-evenly mt-20'>
    {
      books.length > 0 && books.map((book)=>{
        return(
          <Card book ={book}/>
        )
      })
    }
  </div>
    </>
  )
}

export default Home
