import React from 'react'
import { Category } from '../dummyData/Category'
import '../styles/CategoryCard.css'


const CategoryCard = () => {
  return (
    <div className='category__card'   >
      {Category.map((cat) => {
        return (
          <div style={{ width: '146px', height: '160px' }} >
            <img src={cat.image} alt="" />
            <h4>{cat.name}</h4>
          </div>
        )
      })}
    </div>
  )
}

export default CategoryCard