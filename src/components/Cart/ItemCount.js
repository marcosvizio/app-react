import React from 'react'

export const ItemCount = ({initial, stock}) => {
    const [count,setCount] = React.useState(initial)
    const handleRest = () => {
        if (count > 0) {
            setCount(count - 1)
        }
    }
    const handlePlus = () => {
        if (count < stock) {
            setCount(count + 1)
        } 
    }
  return (
    <div className='cart__listContainer--itemCount'>
        <input type="button" value="+" className='cart__listContainer--itemCountInput' onClick={handlePlus}></input>
        {count}
        <input type="button" value="-" className='cart__listContainer--itemCountInput' onClick={handleRest}></input>
    </div>
  )
}