import { useEffect, useState } from "react";
import Forms from "../components/Forms";
import axios from "axios";
import Cards from "../components/Cards";
import { Col, Row } from "react-bootstrap";

const Home = () => {
  // //! CREATE RELEVANT STATE
  const [search, setSearch] = useState("");

  const [mealType, setMealType] = useState("breakfast");
  const [mealData, setMealData] = useState([]);

  const [text, setText] = useState("");

  // //! API INFORMATION
  const APP_ID = "4fe05f42";
  const APP_KEY = "cb23048062eabc9f387b0a799a591eda";

  // //! GET RECIPE FROM API
  const getRecipeData = async () => {
    const url = `https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${mealType}`;
    // console.log(url);
    try {
      const res = await axios.get(url);
      setMealData(res.data.hits);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getRecipeData();
  }, [mealType]);

  const filteredData = mealData?.filter((item) =>
    item?.recipe?.label.toLowerCase().includes(text.toLowerCase().trim())
  );

  // console.log(mealData);
  return (
    <>
      <Forms
        setSearch={setSearch}
        search={search}
        setText={setText}
        mealType={mealType}
        setMealType={setMealType}
      />
      <Row className="justify-content-center">
        {filteredData?.map((item, index) => (
          <Col key={index} sm={12} md={6} lg={3}>
            <Cards item={item} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Home;
