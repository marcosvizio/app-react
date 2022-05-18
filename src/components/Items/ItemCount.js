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
    <div className='itemListContainer__itemCount'>
        <input type="button" value="+" className='itemListContainer__itemCount--input' onClick={handlePlus}></input>
        {count}
        <input type="button" value="-" className='itemListContainer__itemCount--input' onClick={handleRest}></input>
    </div>
  )
}