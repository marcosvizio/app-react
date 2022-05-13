import React from 'react'
import { Products } from '../../data/Products'
import { Item } from './Item'
 

export const ItemList = ({items}) => {
  return (
    <div>
      {Products.map((product) => (
        <Item item={product} key={product.id} />
      ))}
    </div>
  )

}