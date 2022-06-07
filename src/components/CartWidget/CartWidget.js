import React from 'react'
import 'boxicons'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'

export const CartWidget = () => {

  const {cart} = React.useContext(CartContext)

  return (
    <div className='header__items--cart'>
      <Link to='/cart'>
        <box-icon name='cart' color='#f4f4f4' />
        <span className='header__items--cart__count'>{
          cart.map(item => item.quantity).reduce((a, b) => a + b, 0)
        }</span>
      </Link> 
    </div>
  )
}
