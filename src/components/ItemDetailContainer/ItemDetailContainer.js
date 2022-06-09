import React from 'react'
import { getFirestore, getDocs, collection } from 'firebase/firestore'
import { ItemDetail } from '../../components/ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'

export const ItemDetailContainer = () => {

    const [item,setItem] = React.useState([])
    const [loading, setLoading] = React.useState(false)
    const {id} = useParams()

    React.useEffect(() => {
      const db = getFirestore()
      const productsCollection = collection(db, 'products')
      getDocs(productsCollection).then((snapshot) => {
        const products = snapshot.docs.map((doc) => {
          return {
            id: doc.id, ...doc.data()
          }})
        setItem(products.find((product) => product.id === id))
        setLoading(false)
      })
    }, [loading, id])

  return (
    <div>
        {loading ? <p>Loading...</p> : <ItemDetail item={item}/>}
    </div>
  )
}
