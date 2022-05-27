import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Rating from './Rating'
import '../index.css'

const Product = ({ product }) => {
  return (
    <>
      <Card className="mb-5 shadow-lg bg-light rounded product-cards">
        <Link to={`/product/${product._id}`}>
          <Card.Img src={product.image} variant="top" />
        </Link>
        <Card.Body>
          <Link
            to={`/product/${product._id}`}
            style={{
              textDecoration: 'none',
              color: 'black',
            }}
          >
            <Card.Title as="div">
              <strong>{product.name}</strong>
            </Card.Title>
          </Link>

          <Card.Text as="div" className="text-black">
            <Rating
              value={product.rating}
              text={`${product.numReviews} reviews`}
              color="#f8e825"
            />
          </Card.Text>
          <Card.Text as="h3" className="text-black">
            ${product.price}
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  )
}

export default Product
