import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";

const Cards = ({ item }) => {
  const navigate = useNavigate();

  const handleDetails = () => {
    navigate(`/detail`, {
      state: { recipe: item?.recipe },
      replace: false, //history şişmesin diye replace kullandık false yaparsan historyi ekler
    });
  };

  return (
    <Card
      className="cards mt-5 p-2 rounded-5 bg-info border border-dark text-warning mx-auto"
      style={{ height: "28rem" }}
    >
      <Card.Body className="d-flex flex-column align-items-center justify-content-center">
        <Card.Title
          className="text-center move blink"
          style={{ height: "20%" }}
        >
          {item?.recipe.label}
        </Card.Title>
        <div className="img-container">
          <Card.Img
            className="img img-fluid rounded-5"
            src={item?.recipe.image}
          />
        </div>
      </Card.Body>
      <Button
        className="w-50 mx-auto rounded-3"
        variant="outline-warning"
        onClick={handleDetails}
      >
        Views More...
      </Button>
    </Card>
  );
};

export default Cards;
