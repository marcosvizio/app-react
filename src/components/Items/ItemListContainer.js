import React from 'react'
import { ItemList } from './ItemList'
import { getProducts } from '../../mocks/getProducts'
import { useParams } from 'react-router-dom'

export const ItemListContainer = () => {
  
  const [listProducts,setListProducts] = React.useState([])
  const [loading, setLoading] = React.useState(true)
  const { categoryId } = useParams()


  React.useEffect(()=> {
    getProducts
    .then((res)=> {
      if(!categoryId){
        setTimeout(()=> {
          setLoading(false)
          }, 3000)
        setListProducts(res)
      }else{
        setTimeout(()=> {
          setLoading(false)
          }, 3000)
        setListProducts(res.filter(item => item.category === categoryId))
      }
    })
    .catch((error)=> console.log(error))
    .finally(()=> setLoading(false))
  }, [categoryId, loading])

  return (
    <div>
      {loading ? <p>Loading...</p> : <ItemList listProducts={listProducts} />}
    </div>
  )
}
