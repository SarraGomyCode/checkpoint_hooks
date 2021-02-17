import React from "react";
import { Card, CardDeck } from "react-bootstrap";
import Rating from "@material-ui/lab/Rating";

const MovieCard = ({ movie }) => {
  return (
    <div>
      <CardDeck>
        <Card>
          <Card.Img src={movie.image} alt={movie.name} />
          <Card.Body>
            <Card.Title>{movie.name}</Card.Title>
            <Card.Text>
              {movie.description}
              {movie.type}
              {movie.date}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <Rating name="read-only" value={movie.rating} readOnly />
          </Card.Footer>
        </Card>
      </CardDeck>
    </div>
  );
};

export default MovieCard;
