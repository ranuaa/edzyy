import React from 'react'
import CategoryCard from '../components/CategoryCard'
import SearchBar from '../components/SearchBar'
import '../styles/Home.css'

const Home = () => {
  return (
    <div className='home__wrapper' >
      <SearchBar />
      <div style={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        gap: '0',
        marginTop: '25px',
        marginLeft: '15px'
      }} >
        <h1 style={{ fontWeight: 'lighter', fontSize: '30px' }} >Hello, <span style={{ fontWeight: 'bold', }} >User !</span></h1>
        <p style={{ fontSize: '18px', textAlign: 'start', marginTop: '0px' }} >Welocome to <span style={{ fontWeight: 'bold' }} > edzy</span>. What do you <br /> want today ?</p>
      </div>
      <CategoryCard />
    </div>
  )
}

export default Home