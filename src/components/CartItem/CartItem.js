import React from 'react'
import { ListGroup, Badge  } from 'react-bootstrap'
import 'boxicons'
import { CartContext } from '../../context/CartContext'

export const CartItem = ({item}) => {

    const {removeItem} = React.useContext(CartContext)

  return (
    <ListGroup as="ol">
        <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start">
            <div className="ms-2 me-auto">
                <div className="fw-bold">{item.title}</div>
                <img src={item.pictureUrl} alt={item.title} />
                <p>{item.description}</p>
                <p>Precio: ${item.price}</p>
            </div>
            <div className="cartItem__btn">
                <Badge className="cartItem__btn--quantity" bg="success" pill>
                    Cantidad: {item.quantity}
                </Badge>
                <Badge className="cartItem__btn--trash" bg="danger" pill>
                    <box-icon type='solid' name='trash' onClick={removeItem} />
                </Badge>
            </div>
        </ListGroup.Item>
    </ListGroup>
  )
}
