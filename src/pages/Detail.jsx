import Card from "react-bootstrap/Card";
import { NavLink, useLocation } from "react-router-dom";

const Detail = () => {
  const location = useLocation(); // useLocation ile state'e erişiyoruz
  const { recipe } = location.state || {};

  return (
    <div>
      {recipe ? (
        <Card className="mx-auto" style={{ height: "30rem", width: "28rem" }}>
          <Card.Body>
            <Card.Title style={{ height: "20%" }}>{recipe.label}</Card.Title>
            {/* <div className="img-container"> */}
            <Card.Img className="imge rounded-2" src={recipe.image} />
            {/* </div> */}
            <div className="d-flex justify-content-between mx-3 my-5">
              <p>
                <span className="fw-bold">Calories:</span>
                {recipe.calories.toFixed(2)}
              </p>

              <NavLink
                className="btn btn-success rounded-3 "
                target="_blank"
                to={recipe.url}
              >
                RECIPE URL
              </NavLink>
            </div>
          </Card.Body>
        </Card>
      ) : (
        <p>Veri bulunamadı.</p>
      )}
    </div>
  );
};

export default Detail;
