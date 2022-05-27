import React from 'react'
import { ItemList } from './ItemList'
import { getProducts } from '../../mocks/getProducts'
import { useParams } from 'react-router-dom'

export const ItemListContainer = () => {
  
  const [listProducts,setListProducts] = React.useState([])
  const [loading, setLoading] = React.useState(false)
  const { categoryId } = useParams()


  React.useEffect(()=> {
    setLoading(true)
    getProducts
    .then((res)=> {
      if(!categoryId){
        setListProducts(res)
      }else{
        setListProducts(res.filter((prod)=> prod.category === categoryId))
      }
    })
    .catch((error)=> console.log(error))
    .finally(()=> setLoading(false))
  }, [categoryId])

  return (
    <div>
      {loading ? <p>Loading...</p> : <ItemList listProducts={listProducts} />}
    </div>
  )
}
