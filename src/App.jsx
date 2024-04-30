// import { useState } from 'react'
import ItemList from './assets/ItemList'
import './App.css'
import Hero from './componets/heropage/Hero'
import Footer from './componets/footer/Footer'
import Header from './header/Header'
// import Hero from './componets/heropage/Hero'

import {useState, createContext } from 'react';

export const MyContext = createContext();

function App() {
  const [moviesList, setMoviesList] = useState(ItemList)

  const filterFuction = (selectedMovies) => {

    console.log(selectedMovies)
    let filteredMovies = ItemList.filter(movie => movie.movielanguages.includes(selectedMovies));
    
    setMoviesList(filteredMovies)

    console.log(filteredMovies);
  }

  return (
    <>
      <MyContext.Provider value={{filterFuction,moviesList}}>
        <Header />
        <Hero />
        <Footer />
      </MyContext.Provider>
    </>
  )
}

export default App
