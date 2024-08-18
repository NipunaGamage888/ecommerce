import React from 'react'
import { useNavigate } from 'react-router-dom';

const newItem =[ 
  { id: 1, name: 'Product 1', price: 100 },
  {id:2, name: 'Product2', price: 250},
  {id:3, name: 'product3' , price:350}

];
export default function Home({addtoCart}) {
   const navigate = useNavigate()
   
 
  return (
    <div className='land'>
      {newItem.map(item=>(
        <div key={item.id} className='land__items'>
          <h2>item Name: {item.name}</h2>
          <h4>item Price: {item.price}</h4>
          <button onClick={()=>addtoCart(item )}>Add to Cart</button>
        </div>
      ))}
      <button onClick={()=>navigate('/cart')}>Go to Cart</button>
    </div>
  )
}
