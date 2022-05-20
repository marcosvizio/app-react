import React from 'react'
import { getProducts } from '../../Mocks/getProducts'
import { ItemDetail } from './ItemDetail'
import { useParams } from 'react-router-dom'

export const ItemDetailContainer = () => {

    const [item,setItem] = React.useState([])
    const [loading, setLoading] = React.useState(false)
    const {id} = useParams()

    React.useEffect(()=> {
        setLoading(true)
        getProducts
        .then((res)=> setItem(res.find((item)=> item.id === id)))
        .catch((error)=> console.log(error))
        .finally(()=> setLoading(false))
    }, [])

    

  return (
    <div>
        {loading ? <p>Loading...</p> : <ItemDetail item={item}/>}
    </div>
  )
}
