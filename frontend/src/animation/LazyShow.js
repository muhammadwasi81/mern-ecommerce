import React, { useEffect, useRef, useState } from 'react'
import {
  motion,
  useAnimation,
  AnimatePresence,
} from 'framer-motion/dist/framer-motion'

function useOnScreen(ref, rootMargin = '0px') {
  const [isIntersecting, setIntersecting] = useState(false)

  useEffect(() => {
    let currentRef = null
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIntersecting(entry.isIntersecting)
      },
      {
        rootMargin,
      }
    )
    if (ref.current) {
      currentRef = ref.current
      observer.observe(currentRef)
    }
    return () => {
      observer.unobserve(currentRef)
    }
  }, [ref, rootMargin])

  return isIntersecting
}

const LazyShow = (props) => {
  const controls = useAnimation()
  const rootRef = useRef()
  const onScreen = useOnScreen(rootRef)
  useEffect(() => {
    if (onScreen) {
      controls.start({
        x: 0,
        opacity: 1,
        transition: {
          duration: 1,
          ease: 'easeOut',
        },
      })
    }
  }, [onScreen, controls])
  return (
    <AnimatePresence>
      <motion.div
        className="lazy-div"
        ref={rootRef}
        initial={{ opacity: 0, x: -10 }}
        animate={controls}
      >
        {props.children}
      </motion.div>
    </AnimatePresence>
  )
}

export default LazyShow
