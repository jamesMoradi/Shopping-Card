import React from 'react'
import { Link } from 'react-router-dom'

const EachProduct = props => {
    const {image, title, price} = props

  return (
    <div>
        <img src={image} alt='' />
        <div>
            <h2>{title}</h2>
            <span>{price}$</span>
        </div>
        <div>
            <button>Details</button>
        </div>
    </div>
  )
}

export default EachProduct