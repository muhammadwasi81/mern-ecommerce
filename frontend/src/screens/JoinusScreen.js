import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

const JoinusScreen = () => {
  const history = useHistory()
  const userLogin = useSelector((state) => state.userLogin)
  const { loading, error, userInfo } = userLogin

  if (loading) return 'Loading...'
  if (error) return <pre>{error}</pre>

  return (
    <>
      {!userInfo ? (
        <Container
          fluid
          className="mb-5 p-lg-5"
          style={{ backgroundColor: '#203040', color: '#ffffff' }}
        >
          <Row className="text-center">
            <Col className="lg-9 xs-12">
              <h1 className="">JOIN OUR CLUB & GET 15% OFF</h1>
            </Col>
            <Col className="lg-3 xs-12 mt-3">
              <Button
                variant="warning"
                onClick={() => history.push('/register')}
              >
                Signup for free &nbsp;
                <i className="fas fa-arrow-right"></i>
              </Button>
            </Col>
          </Row>
        </Container>
      ) : null}
    </>
  )
}

export default JoinusScreen
