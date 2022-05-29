import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'
import Message from '../components/Message'
import Loader from '../components/Loader'
import Paginate from '../components/Paginate'
import ProductCarousel from '../components/ProductCarousel'
import Meta from '../components/Meta'
import { listProducts } from '../actions/productAction'
import CarouselSlider from '../components/CarouselSlider'
import LazyShow from '../animation/LazyShow'

const HomeScreen = ({ match }) => {
  const keyword = match.params.keyword

  const pageNumber = match.params.pageNumber || 1

  const dispatch = useDispatch()

  const productList = useSelector((state) => state.productList)
  const { loading, error, products, page, pages } = productList

  useEffect(() => {
    dispatch(listProducts(keyword, pageNumber))
  }, [dispatch, keyword, pageNumber])

  return (
    <>
      <LazyShow>
        <Meta />
        {!keyword ? (
          <ProductCarousel />
        ) : (
          <Link to="/" className="btn btn-light">
            Go Back
          </Link>
        )}
        <h1
          className="text-center mt-2"
          style={{ textShadow: '1px 1px 1px #eee' }}
        >
          Latest Products
        </h1>
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant="danger">{error}</Message>
        ) : (
          <>
            <Row>
              <CarouselSlider>
                {products.map((product) => (
                  <Col key={product._id} className="mx-2">
                    <Product product={product} key={product._id} />
                  </Col>
                ))}
              </CarouselSlider>
            </Row>
            <div>
              <Row>
                <h1
                  className="text-center mt-2"
                  style={{ textShadow: '1px 1px 1px #eee' }}
                >
                  Featured Products
                </h1>
                {products.map((product) => (
                  <Col xs={12} md={4} lg={3} sm={6} xl={3}>
                    <Product product={product} />
                  </Col>
                ))}
              </Row>
            </div>
            <Paginate
              pages={pages}
              page={page}
              keyword={keyword ? keyword : ''}
            />
          </>
        )}
      </LazyShow>
    </>
  )
}

export default HomeScreen
