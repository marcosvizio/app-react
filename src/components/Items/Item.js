import React from 'react'
import {Card, Button} from 'react-bootstrap'

export const Item = ({item}) => {
    return (
        <Card className='itemListContainer__items--card' style={{ width: '18rem' }}>
            <Card.Img className='itemListContainer__items--cardImg' variant="top" src={item.pictureUrl} />
            <Card.Body>
                <Card.Title >{item.title}</Card.Title>
                <Card.Text>Precio: $ {item.price}</Card.Text>
                <Button variant="warning">Ver mas</Button>
            </Card.Body>
        </Card>
    )
}
