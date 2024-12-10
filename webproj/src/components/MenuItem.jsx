import React, { useState } from 'react'
import './MenuItem.css'



const MenuItem = (props) => {
  const [productCount,SetPCount] = useState(0)
  
  const decreaseCount = () => {if(productCount > 0){SetPCount(productCount - 1)}};
  const increaseCount = () => SetPCount(productCount + 1);

  return (
    <div className='MIbackground'>
      <img className='img' src={props.img}></img>

        <div className='productName'>{props.name}</div>

        <div className='productDescription'>{props.description}</div>

        <div className='priceandweight'>{props.price} Тг.   за   {props.weight}</div>

        <div className='buttonsContainer'>
        <button className='minusOne' onClick={decreaseCount}><img src="/Img/Misc/minus.webp" alt="" className='minplusImages'/></button>
        <p>{productCount}</p>
        <button className='plusOne' onClick={increaseCount}><img src="/Img/Misc/plus.webp" alt="" className='minplusImages'/></button>
        </div>
    </div>
  )
}

export default MenuItem
