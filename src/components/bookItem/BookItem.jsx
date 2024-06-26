import PropTypes from "prop-types";
import { Button, Card } from "react-bootstrap";
import { StarFill, Star } from "react-bootstrap-icons";
import { useState } from "react";

const BookItem = ({ title, author, rating, pages, imageUrl }) => {
  const [bookTitle, setBookTitle] = useState(title);

  const clickHandler = () => {
    setBookTitle("Actualizado!");
    console.log(bookTitle);
  };

  const StarRating = () => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (rating[i]) {
        stars.push(<StarFill style={{ color: "#c7a339", margin: "1px" }} />);
      } else {
        stars.push(<Star style={{ color: "#c7a339", margin: "1px" }} />);
      }
    }

    return <div>{stars}</div>;
  };

  return (
    <Card className="mx-3 mb-2" style={{ width: "22rem" }}>
      <Card.Img
        height={400}
        variant="top"
        alt="Portada de libro"
        src={
          imageUrl !== ""
            ? imageUrl
            : "https://images.pexels.com/photos/13650913/pexels-photo-13650913.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }
      />
      <Card.Body>
        <Card.Title>{bookTitle}</Card.Title>
        <Card.Subtitle>{author}</Card.Subtitle>
        <StarRating />
        <p>{pages} páginas</p>
        <Button onClick={clickHandler}>Actualizar titulo</Button>
      </Card.Body>
    </Card>
  );
};

export default BookItem;

BookItem.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  pages: PropTypes.number,
  rating: PropTypes.array,
};
