import React from 'react'
import './style.css';
import { Card, Carousel } from 'react-bootstrap'
import branco from '../../Img/branco.png'

function index(props) {
  return (
    <>

      <div className='flex'>

      <Carousel className='carrossel'>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn1.mundodastribos.com/446942-vestibulinho-etec-2012-2-semestre.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn1.mundodastribos.com/446942-vestibulinho-etec-2012-2-semestre.jpg"
          alt="Second slide"
        />

      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn1.mundodastribos.com/446942-vestibulinho-etec-2012-2-semestre.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>

        <Card
          className='carouselCard'>
          <Card.Img className='img-card' src={branco} />
          <Card.Body>
            <Card.Title>

              <img/>
            </Card.Title>
          </Card.Body>
        </Card>

      </div>
    </>
  )
}

export default index