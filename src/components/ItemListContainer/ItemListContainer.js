import React from 'react'
import { ItemList } from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import { getFirestore, getDocs, collection } from 'firebase/firestore'

export const ItemListContainer = () => {
  
  const [listProducts,setListProducts] = React.useState([])
  const [loading, setLoading] = React.useState(true)
  const { categoryId } = useParams()

  React.useEffect(() => {
    const db = getFirestore()
    const productsCollection = collection(db, 'products')
    getDocs(productsCollection).then((snapshot) => {
      const products = snapshot.docs.map((doc) => {
        return {
          id: doc.id, ...doc.data()
        }})
      if(categoryId){
        setListProducts(products.filter((product) => product.categoryId === categoryId))
        setLoading(false)
      }else{
        setListProducts(products)
        setLoading(false)
      }
    })
  }, [loading, categoryId])

  return (
    <div>
      {loading ? <p>Loading...</p> : <ItemList listProducts={listProducts} />}
    </div>
  )
}
