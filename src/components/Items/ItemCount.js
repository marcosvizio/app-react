import React from 'react'
import { Button } from 'react-bootstrap'

export const ItemCount = ({count, setCount, stock, onAdd}) => {
    
    const countDecreased = () => {
        if (count > 0) {
            setCount(count - 1)
        }
    }

    const countPlus = () => {
        if (count < stock) {
            setCount(count + 1)
        }
    }

    /* ------------------------ Maquetamos los botones que necesitemos ------------------------ */

    const StockButton = ({handleOnClick, text}) => {
        return <Button className='itemDetail__itemCount--input' onClick={() => handleOnClick()}>{text}</Button>
    }

    const AddButton = ({handleOnSubmit}) => {
        return <Button variant='success' onClick={() => handleOnSubmit()}>Agregar al Carrito</Button>
    }

  return (
    <div className='itemDetail__itemCount'>
        <StockButton text='+' handleOnClick={countPlus} />
        {count}
        <StockButton text='-' handleOnClick={countDecreased} />
        <br/>
        <AddButton handleOnSubmit={onAdd} />
    </div>
  )
}