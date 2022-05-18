import React from 'react'
import { Products } from '../../data/Products'
import { ItemList } from './ItemList'
import { ItemCount } from './ItemCount'

export const ItemListContainer = () => {
  
  const [listProducts,setListProducts] = React.useState([])

  const loadingItem = new Promise ((resolve,reject) => {
    let condition = true
    setTimeout(()=> {
      if (condition) { 
        resolve(Products)
      }else{
        reject("Algo salio mal! En ItemListContainer")
      }
    }, 3000)
  })

  loadingItem.then((result)=>{
    console.log(result);
  }).catch((err)=>{
    console.log(err)
  })

  React.useEffect(()=>{
    loadingItem
    .then((res)=> setListProducts(res))
    .catch((error)=> console.log(error))
  }, [])

  return (
    <>
      <div>
        <ItemCount stock={10} initial={2} />
      </div>
      <div>
        <ItemList listProducts={listProducts} />
      </div>
    </>
  )
}
