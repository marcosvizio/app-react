import React from 'react'
import { CartContext } from '../../context/CartContext'
import { CartItem } from '../CartItem/CartItem'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

export const Cart = () => {

  const {cart, clear} = React.useContext(CartContext)

  const navigate = useNavigate()

  return (
    <>
    {cart.length > 0 ? 
    (<div>
      {cart.map((product) => (
        <CartItem item={product} key={product.id}/>
      ))}
      <h4 className='cart__total'>Total a Pagar: ${cart.map((product) => (
        product.price * product.quantity)).reduce((a, b) => a + b, 0)}</h4>
      <Button className='cart__btn' variant='success' onClick={()=>navigate(`/checkout`)}>Finalizar Compra</Button>
      <Button className='cart__btn' variant='danger' onClick={clear}>Vaciar Carrito</Button>
    </div>)
    : 
    (<div>
      <h4 className='cart__btn'>Tu Carrito esta vacio!</h4>
      <Button className='cart__btn' onClick={()=>navigate(`/products`)} variant='warning'>Ir a Productos</Button>
    </div>)}
    </>
  )
}
