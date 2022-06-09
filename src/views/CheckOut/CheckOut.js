import React from 'react'
import { getFirestore, collection } from 'firebase/firestore'
import { CartContext } from '../../context/CartContext'

export const CheckOut = () => {
    const [data, setData] = React.useState([])
    const [orderId, setOrderId] = React.useState('')

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const order = {
            buyer: data,
            items: cart,
            total: 500,
        }
    }

    const {cart} = useContext(CartContext)

    const order = {
        buyer : {
          name: '',
          email: '',
          address: '',
          phone: ''
        },
        items : [
          {
          id: 1,
          title: 'Producto Demo',
          price: 100,
          quantity: 5
          }
        ],
        total: 500
    }

  return (
    <div>CheckOut</div>
  )
}
