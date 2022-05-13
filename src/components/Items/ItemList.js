import React from 'react'
import { Item } from './Item'
 

export const ItemList = ({listProducts}) => {
  return (
    <>
      <h3 className='itemListContainer__title'>Lista de Productos:</h3>
      <div className='itemListContainer__items'>
        {listProducts.map((product) => (
          <Item item={product} key={product.id} />
        ))}
      </div>
    </>
  )
}