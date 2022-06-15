import React from 'react'
import { CartContext } from '../../context/CartContext'
import { collection, getFirestore, addDoc } from 'firebase/firestore'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'

export const CartCheckOut = () => {
  const {cart, clear} = React.useContext(CartContext)

  const [orderId, setOrderId] = React.useState()

  const navigate = useNavigate()

  const [data, setData] = React.useState()

  const handleChange = (e) => {
    const { name, value } = e.target
    setData({...data, [name]: value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const order = {
      buyer: data,
      total: cart.reduce((acc, item) => acc + item.price * item.quantity, 0),
      items: cart.map((item) => {
        return {
          id: item.id,
          quantity: item.quantity,
          title: item.title,
          price: item.price
          }
        }
      )
    }
      
    const db = getFirestore();

    const ordersCollection = collection(db, 'orders');

    addDoc(ordersCollection, order).then(({ id }) => {
      setOrderId(id);
      Swal.fire(
        'Compra Realizada!',
        'Su orden de compra es: ' + id,
        'success'
      );
      navigate('/');
    });
  }

  return (
    <form className='form' onSubmit={handleSubmit}>
      <h1 className='form__title'>Orden Check-Out</h1>
      <div className='form__group'>
        <label className='form__group--label'>Ingrese su nombre:</label>
        <input type='text' name='name' placeholder='Nombre' onChange={handleChange} required/>
        <label className='form__group--label'>Ingrese su apellido:</label>
        <input type='text' name='subname' placeholder='Apellido' onChange={handleChange} required/>
      </div>
      <div className='form__group'>
        <label className='form__group--label'>Ingrese su dirección:</label>
        <input type='text' name='adress' placeholder='Dirección' onChange={handleChange} required/>
        <label className='form__group--label'>Ingrese su número de teléfono:</label>
        <input type='phone' name='phone' placeholder='Teléfono' onChange={handleChange} required/>
      </div>
      <div className='form__group'>
        <label className='form__group--label'>Ingrese su correo electrónico:</label>
        <input type='email' name='email' placeholder='Correo electrónico' onChange={handleChange} required/>
      </div>
      <button type='submit' className='btn btn-success form__btn' onClick={clear}>Finalizar Compra</button>
    </form>
  )
}

