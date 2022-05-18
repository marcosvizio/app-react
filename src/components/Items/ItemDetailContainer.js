import React from 'react'
import { Products } from '../../data/Products'
import { ItemDetail } from './ItemDetail'

export const ItemDetailContainer = () => {

    const [item,setItem] = React.useState([])

    const getItem = new Promise ((resolve,reject)=>{
        let condition = true
        setTimeout(()=>{
            if (condition) {
                resolve(Products)
            }else{
                reject("Algo salio mal! En ItemDetailContainer")
            }
        }, 3000)
    }).then(()=>{
        setItem(Products[3])
    })

  return (
    <div>
        <ItemDetail item={item}/>
    </div>
  )
}
