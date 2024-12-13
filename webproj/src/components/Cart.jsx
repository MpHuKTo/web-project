import React from 'react'
import { useData } from './DataContext';


const Cart = () => {

    const { dataArray } = useData();

const CartItem = (props) =>{
    return(
    <div className='MIbackground'>
      <img className='img' src={props.img}></img>

        <div className='productName'>{props.name}</div>

        <div className='productDescription'>{props.description}</div>

        <div className='priceandweight'>{props.price} Тг.   за   {props.weight}</div>

        <div className='count'>{props.itemCount}</div>

    </div>
    )
}


const CartAssembly = () =>{
    
    const filteredItems = dataArray.filter(item => item.itemCount !== 0);

    const lastItemIndex = {};

    filteredItems.forEach((item, index) => {
        lastItemIndex[item.name] = index;
    });


    const uniqueItems = Object.keys(lastItemIndex).map(name => {
        return filteredItems[lastItemIndex[name]];
    });

    return uniqueItems.map((item, index) => (
        <CartItem
            key={index}  
            img={item.img}
            name={item.name}
            description={item.description}
            price={item.price}
            weight={item.weight}
            itemCount={item.itemCount}
        />
    ))
}


  return (
    <div>
      
        <CartAssembly></CartAssembly>

    </div>
  )


}

export default Cart
