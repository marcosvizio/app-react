import React from 'react'
import { Card,Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { ItemCount } from './ItemCount'

export const ItemDetail = ({item}) => {

  const [count, setCount] = React.useState(1)

  const [buy, setBuy] = React.useState(false)

  const onAdd = () => {
    setBuy(true)  
  }

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
            {buy ? 
            <div>
              <Button variant='success' className='itemDetail__cartButton' onClick={()=>navigate('/cart')}>Ir al Carrito</Button>
              <Button variant='warning' onClick={()=>navigate('/products')}>Seguir Comprando</Button>
            </div> 
            : <ItemCount count={count} setCount={setCount} stock={item.stock} onAdd={onAdd} />}
        </Card.Body>
    </Card>
  )
}
