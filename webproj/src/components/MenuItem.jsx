import React from 'react'
import './MenuItem.css'

const MenuItem = (props) => {
  return (
    <div className='MIbackground'>
      <img className='img' src={props.img}></img>

        <div className='productName'>{props.name}</div>

        <div className='productDescription'>{props.desription}</div>

        <div className='priceandweight'>{props.price} Тг.   за   {props.weight}</div>
    </div>
  )
}

export default MenuItem
