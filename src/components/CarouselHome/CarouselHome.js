import React from 'react'
import Carousel from 'react-bootstrap/Carousel'

export const CarouselHome = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100 carousel__home" src="https://i.pinimg.com/564x/37/8c/d4/378cd4ea61758d6e802d4612b9c76583.jpg" alt="Todo en Tecnologia" />
        <Carousel.Caption>
          <h3 className='carousel__home--textBlack'>Bienvenido a RISK STORE</h3>
          <p className='carousel__home--textBlack'>Somos la tienda tecnologica lider de toda latinoamerica, en que podemos ayudarte?</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100 carousel__home" src="https://i.pinimg.com/564x/e1/6e/dc/e16edc23cb2c36c8a293e138601671ee.jpg" alt="Las mejores Notebooks del mercado" />
        <Carousel.Caption>
          <h3 className='carousel__home--textBlack'>¡Las mejores Notebooks del mercado!</h3>
          <p className='carousel__home--textWhite'>Tenemos stock desde MSI a Dell</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
    <img className="d-block w-100 carousel__home" src="https://i.pinimg.com/564x/04/8d/e1/048de1647d47282dbdd4275656e2646a.jpg" alt="Third slide" />
    <Carousel.Caption>
      <h3 className='carousel__home--textWhite'>¡Los mejores perifericos para tu computadora!</h3>
      <p className='carousel__home--textWhite'>Tenemos stock con todas las marcas reconocidas del mundo</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
  )
}
