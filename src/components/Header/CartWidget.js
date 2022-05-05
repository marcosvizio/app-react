import React from 'react'
import 'boxicons'

export const CartWidget = ({count}) => {
  return (
    <div className='header__items--cart'>
        <box-icon name='cart' color='#f4f4f4' />
        {count}
    </div>
  )
}
