import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const Forms = ({ setSearch, search, mealType, setText, setMealType }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    setText(search);
  };
  // console.log("search", search);
  // console.log("mealType", mealType);

  return (
    <div>
      <h3 className="text-center mb-3">FOOD APP</h3>
      <Form
        onSubmit={handleSubmit}
        className="d-flex justify-content-center gap-2 rounded-3"
      >
        <Form.Group controlId="formBasicText">
          <Form.Control
            onChange={(e) => setSearch(e.target.value)}
            value={search}
            type="text"
            placeholder="Search A Food

"
          />
        </Form.Group>
        <Button type="submit">Search</Button>
        <select
          required
          name="mealType"
          id="mealType"
          onChange={(e) => setMealType(e.target.value)}
          value={mealType}
          className="rounded-xl font-bold text-fuchsia-800 "
        >
          <option value="breakfast">Breakfast</option>
          <option value="lunch">Lunch</option>
          <option value="dinner">Dinner</option>
          <option value="snack">Snack</option>
          <option value="teatime">TeaTime</option>
        </select>
      </Form>
    </div>
  );
};

export default Forms;
