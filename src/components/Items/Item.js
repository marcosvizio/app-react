import React from 'react'
import {Card, Button} from 'react-bootstrap'

export const Item = ({item}) => {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={item.pictureUrl} />
            <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>{item.description}</Card.Text>
                <Button variant="warning">Ver mas</Button>
            </Card.Body>
        </Card>
    )
}
