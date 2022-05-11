import React from 'react'
import { ItemCount } from './ItemCount'

export const ItemListContainer = ({item}) => {
  return (
    <>
      <div className='cart__listContainer'>
        {item}
      </div>
      <div>
        <ItemCount stock={10} initial={2} />
      </div>
    </>
  )
}
