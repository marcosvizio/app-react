import React from 'react'
import { Card,Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { ItemCount } from './ItemCount'

export const ItemDetail = ({item}) => {
    const navigateHome = useNavigate()
    const onAdd = () => {
      console.log("Agregue al carrito!");
    }
  return (
    <Card className='itemDetail'>
        <Card.Img className='itemDetail__img' variant="top" src={item.pictureUrl} />
        <Card.Body>
            <Button className='itemDetail__home' variant='warning' onClick={()=>navigateHome('/products')}>Volver a Productos</Button>
            <Card.Title>{item.title}</Card.Title>
            <Card.Text>{item.description}</Card.Text>
            <Card.Text>Precio: ${item.price}</Card.Text>
            <ItemCount stock={item.stock} initial={1} onAdd={onAdd} />
            <Button variant="success">Agregar al Carrito</Button>
        </Card.Body>
    </Card>
  )
}
