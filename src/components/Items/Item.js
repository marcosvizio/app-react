import React from 'react'
import {Card, Button} from 'react-bootstrap'

export const Item = ({item}) => {
    return (
        <Card className='itemListContainer__items--card' style={{ width: '18rem' }}>
            <Card.Img variant="top" src={item.pictureUrl} />
            <Card.Body>
                <Card.Title style={{ fontWeight:'bold' }}>{item.title}</Card.Title>
                <Card.Text>{item.description}</Card.Text>
                <Button variant="warning" style={{ fontWeight:'bold' }}>Ver mas</Button>
            </Card.Body>
        </Card>
    )
}
