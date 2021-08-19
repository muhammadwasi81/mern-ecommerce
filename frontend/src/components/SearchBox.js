import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

const SearchBox = ({ history }) => {
  const [keyword, setKeyword] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();

    if (keyword.trim()) {
      history.push(`/search/${keyword}`);
    } else {
      history.push('/');
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        placeholder="Search products..."
        onChange={(e) => setKeyword(e.target.value)}
        className="input-box"
      />
      <Button
        type="submit"
        variant="outline-success"
        className="p-2 search-button"
      >
        Search
      </Button>
    </form>
  );
};

export default SearchBox;
