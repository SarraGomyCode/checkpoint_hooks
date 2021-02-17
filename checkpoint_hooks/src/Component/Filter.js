import React from "react";
import { FormControl, Button, Form } from "react-bootstrap";
import { useState } from "react";

const Filter = () => {
  const [search, setSearch] = useState({ });
  const searchMovie = (movie) => {
    setSearch(movie.filter((el) => el === movie.name.toLowerCase));
  };

  return (
    <Form inline>
      <FormControl
        type="text"
        placeholder="Search"
        className="mr-sm-2"
        onChange={(event) => {
          setSearch (event.target.value);
        }}
      />
      <Button variant="outline-success" onClick={searchMovie}>
        Search
      </Button>
    </Form>
  );
};

export default Filter;
