import React from 'react'
import '../styles/SearchBar.css'

const SearchBar = () => {
  return (
    <div>
      <form>
        <input
          type="text"
          style={{ width: '334px', height: '40px', borderRadius: '36px', marginTop: '43px', background: 'rgba(255, 255, 255, 0.8)', color: 'black', fontSize: '18px' }}
          placeholder='Where Are You Going?'
        />
      </form>
    </div>
  )
}

export default SearchBar