import React from 'react'
import { Card,Button } from 'react-bootstrap'

export const ItemDetail = ({item}) => {
    
  return (
    <Card className='itemDetail'>
        <Card.Img className='itemDetail__img' variant="top" src={item.pictureUrl} />
        <Card.Body>
            <Card.Title>{item.title}</Card.Title>
            <Card.Text>{item.description}</Card.Text>
            <Card.Text>Precio: ${item.price}</Card.Text>
            <Button variant="success">Agregar al Carrito</Button>
        </Card.Body>
    </Card>
  )
}
