import React, { useState } from 'react'
import { FaChevronUp } from 'react-icons/fa'
import '../index.css'

const BackToTopButton = () => {
  const [scroll, setScroll] = useState(false)

  const checkScrollTop = () => {
    if (!scroll && window.pageYOffset > 400) {
      setScroll(true)
    } else if (scroll && window.pageYOffset <= 400) {
      setScroll(false)
    }
  }

  const scrollToTopHandler = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  window.addEventListener('scroll', checkScrollTop)
  return (
    <>
      <FaChevronUp
        className="scrollTop"
        onClick={scrollToTopHandler}
        style={{
          padding: 10,
          fontWeight: 600,
          height: 50,
          width: 50,
          display: scroll ? 'block' : 'none',
        }}
      />
    </>
  )
}

export default BackToTopButton
