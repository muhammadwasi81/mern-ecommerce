import React from 'react'
import {
  Button,
  Col,
  Container,
  FormControl,
  InputGroup,
  Row,
  Form,
} from 'react-bootstrap'
import { FiTwitter } from 'react-icons/fi'
import { BsInstagram } from 'react-icons/bs'
import { FaFacebookF } from 'react-icons/fa'
import { useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import axios from 'axios'

export default function ContactUs() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)

  const submitHandler = async (e, data) => {
    e.preventDefault()
    if (!name || !email || !message) {
      return toast.error('Please fill email, subject and message')
    }
    try {
      setLoading(true)
      const { data } = await axios.post(`/api/email`, {
        name,
        email,
        message,
      })
      setLoading(false)
      toast.success(data.message)
      setName('')
      setEmail('')
      setMessage('')
    } catch (err) {
      setLoading(false)
      toast.error(
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message
      )
    }
  }

  return (
    <footer>
      <ToastContainer
        position="top-right"
        closeOnClick
        theme="colored"
        limit={1}
      />
      <Container fluid style={{ backgroundColor: '#203040', color: '#ffffff' }}>
        <Container>
          <Row>
            <Col md={4} sm={12} className="my-5">
              <img src="/images/logo2.svg" alt="Logo" />
              <h1>Tradone</h1>
              <strong className="my-3">
                <h2>Questions? We're here for you</h2>
              </strong>
            </Col>
            <Col md={8} sm={12} className="my-5 text-sm-left">
              <Row>
                <Col md={6} sm={12} className="p-0">
                  <ul>
                    <h5 className="title">KEEP IN TOUCH</h5>
                    <li className="list-unstyled mb-2">
                      Feel Free to contact us any time. <br /> We are available
                      24/7.
                    </li>
                    <li className="list-unstyled mb-2">
                      <i className="fas fa-phone"></i> +92 2323232323
                    </li>
                    <li className="list-unstyled mb-2">
                      <span className="mr-3 text-white fs-3 p-2">
                        <FaFacebookF />{' '}
                      </span>
                      <span className="mr-3 text-white fs-3 p-2">
                        <BsInstagram />{' '}
                      </span>
                      <span className="mr-3 text-white fs-3 p-2">
                        <FiTwitter />{' '}
                      </span>
                    </li>
                  </ul>
                </Col>
                <Col md={6} sm={12} className="p-0">
                  <form onSubmit={submitHandler}>
                    <ul>
                      <h5 className="title">Contact us</h5>
                      <li className="list-unstyled">
                        <InputGroup className="mb-3" style={{ width: '250px' }}>
                          <InputGroup.Text id="basic-addon1">
                            <i className="fas fa-user"></i>
                          </InputGroup.Text>
                          <FormControl
                            placeholder="name"
                            aria-label="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            aria-describedby="basic-addon1"
                          />
                        </InputGroup>
                      </li>
                      <li className="list-unstyled">
                        <InputGroup className="mb-3" style={{ width: '250px' }}>
                          <InputGroup.Text id="basic-addon1">
                            <i className="fas fa-envelope"></i>
                          </InputGroup.Text>
                          <FormControl
                            placeholder="Email"
                            aria-label="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            aria-describedby="basic-addon1"
                          />
                        </InputGroup>
                      </li>
                      <li className="list-unstyled mb-3">
                        <Form.Control
                          style={{ width: '250px' }}
                          value={message}
                          as="textarea"
                          placeholder="Leave a comment here"
                          onChange={(e) => setMessage(e.target.value)}
                        />
                      </li>
                      <li className="list-unstyled">
                        <Button
                          style={{ width: '250px' }}
                          disabled={loading}
                          variant="warning"
                          type="submit"
                        >
                          {loading ? 'Sending...' : 'Submit'}
                        </Button>
                      </li>
                    </ul>
                  </form>
                </Col>
              </Row>
            </Col>
          </Row>
          <hr />
          <Row>
            <Col sm={8}>
              <p className="my-2 fs-5">
                &copy; {new Date().getFullYear()} Tradone. All rights reserved
              </p>
            </Col>
            <Col sm={4}>
              <p className="my-2 fs-5">privacy policy | terms of use</p>
            </Col>
          </Row>
        </Container>
      </Container>
    </footer>
  )
}
