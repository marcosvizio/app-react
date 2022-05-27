import React from 'react'
import 'boxicons'
import {Link} from 'react-router-dom'
import { CartContext } from '../CartContext/CartContext'

export const CartWidget = () => {

  const { cart } = React.useContext(CartContext)

  return (
    <div className='header__items--cart'>
      <Link to='/cart'>
        <box-icon name='cart' color='#f4f4f4' />
        <span>{cart.length}</span>
      </Link> 
    </div>
  )
}
