import React from 'react'
import { Item } from '../Item/Item'
 

export const ItemList = ({listProducts}) => {
  return (
    <>
      <h3 className='itemListContainer__title'>Nuestros Productos</h3>
      <div className='itemListContainer__items'>
        {listProducts.map((product) => (
          <Item item={product} key={product.id} />
        ))}
      </div>
    </>
  )
}