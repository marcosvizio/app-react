import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

export const Item = ({item}) => {

    const navigate = useNavigate()

    return (
        <Card className='itemListContainer__items--card'>
            <Card.Img className='itemListContainer__items--cardImg' variant="top" src={item.pictureUrl} />
            <Card.Body>
                <Card.Title >{item.title}</Card.Title>
                <Card.Text>Precio: $ {item.price}</Card.Text>
                <Button variant="warning" onClick={()=>navigate(`/detail/${item.id}`)}>Ver mas!</Button>
            </Card.Body>
        </Card>
    )
}
