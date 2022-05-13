import React from 'react'
import { Products } from '../../data/Products'
import { ItemList } from '../Items/ItemList'
import { ItemCount } from './ItemCount'

export const ItemListContainer = () => {
  
  const itemLoading = new Promise ((resolve) => {
    setTimeout(()=> {
      resolve(Products)
    }, 3000)
  })
  itemLoading.then((result)=>{
    console.log(result);
  }).catch((err)=>{
    console.log(err)
  })

  return (
    <>
      <div>
        <ItemCount stock={10} initial={2} />
      </div>
      <div>
        <ItemList />
      </div>
    </>
  )
}
