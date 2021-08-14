import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap';
import Rating from '../components/Rating';
import products from '../products';

const ProductScreen = ({ match }) => {
  const product = products.find(
    (x) => Number(x._id) === Number(match.params.id)
  );

  return (
    <>
      <Link to="/" className="btn btn-dark my-3">
        Go Back
      </Link>
      <Row>
        <Col md={6}>
          <Image
            src={product && product.image}
            alt={product && product.name}
            fluid
          />
        </Col>
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h3>{product && product.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating
                value={product && product.rating}
                text={`(${product && product.numReviews}) reviews`}
              />
            </ListGroup.Item>
            <ListGroup.Item>Price: {product && product.price}</ListGroup.Item>
            <ListGroup.Item>
              Description: {product && product.description}
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </>
  );
};

export default ProductScreen;
