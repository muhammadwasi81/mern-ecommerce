import React, { useState } from 'react'
import { Button, FormControl, InputGroup } from 'react-bootstrap'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const SearchBox = ({ history }) => {
  const [keyword, setKeyword] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    if (!keyword) {
      return toast.error('Please enter product name to search!')
    }
    if (keyword.trim()) {
      history.push(`/search/${keyword}`)
    } else {
      history.push('/')
    }
    setKeyword('')
  }

  return (
    <form onSubmit={submitHandler} className="mx-auto">
      <ToastContainer
        position="top-right"
        closeOnClick
        theme="colored"
        limit={1}
      />
      <InputGroup className="mx-auto">
        <FormControl
          onChange={(e) => setKeyword(e.target.value)}
          value={keyword}
          placeholder="Search products..."
          aria-label="Search products"
        />
        <Button variant="outline-warning" type="submit">
          <i className="fas fa-search"></i>
        </Button>
      </InputGroup>
    </form>
  )
}

export default SearchBox
