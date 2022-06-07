import React from 'react'
import { Card,Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { ItemCount } from './ItemCount'
import { CartContext } from '../../context/CartContext'

export const ItemDetail = ({item}) => {

  const [count, setCount] = React.useState(1)

  const {addItem, isInCart} = React.useContext(CartContext)

  const navigate = useNavigate()

  return (
    <Card className='itemDetail'>
        <Card.Img className='itemDetail__img' variant="top" src={item.pictureUrl} />
        <Card.Body>
            <Button className='itemDetail__home' variant='warning' onClick={()=>navigate('/products')}>Volver a Productos</Button>
            <Card.Title>{item.title}</Card.Title>
            <Card.Text>{item.description}</Card.Text>
            <Card.Text>Precio: ${item.price}</Card.Text>
            <Card.Text>Stock disponible: {item.stock}</Card.Text>
            {!isInCart(item.id) ? (
              <ItemCount count={count} setCount={setCount} stock={item.stock} onSubmit={()=> addItem(item, count)} />
            ):(
              <div>
              <Button variant='success' className='itemDetail__cartButton' onClick={()=>navigate('/cart')}>Ir al Carrito</Button>
              <Button variant='warning' onClick={()=>navigate('/products')}>Seguir Comprando</Button>
              </div>
            )}
        </Card.Body>
    </Card>
  )
}
