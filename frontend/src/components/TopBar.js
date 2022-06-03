import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import '../index.css'

const TopBar = () => {
  return (
    <Container fluid className="bg-warning">
      <Row className="fw-bold p-1">
        <Col className="xs-12 text-center">
          <i className="fas fa-tags"></i> &nbsp;
          <span className="blink_text">
            APP-EXCLUSIVE: 15% OFF ON ALL PRODUCTS
          </span>
        </Col>
      </Row>
    </Container>
  )
}

export default TopBar
