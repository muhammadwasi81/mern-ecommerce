import React from 'react'
import Main from './Main'
import AOS from 'aos'

const App = () => {
  AOS.init()
  return (
    <div className="App">
      <Main />
    </div>
  )
}

export default App
