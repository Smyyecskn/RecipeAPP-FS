import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import meal2 from "../assets/meal2.svg";
import { useNavigate } from "react-router-dom";
import { useLoginContext } from "../context/LoginProvider";

const Login = () => {
  const navigate = useNavigate();

  const { user, setUser } = useLoginContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    // const userInfo = { user: "smyye" }; //sessıon storage
    // sessionStorage.setItem("user", JSON.stringify(userInfo)); //sessıon storageda kullanıcı bilgilerini tutuyoruz ama çok kullanılmaz.
    navigate("/");
  };

  // console.log("user", user);

  return (
    <div>
      <Form className="head mx-auto border border-dark" onSubmit={handleSubmit}>
        <div>
          <img width="50px" src={meal2} alt="meal" />
        </div>
        <Form.Group
          className="mb-3 w-75 m-4 rounded-3"
          controlId="formBasicText"
        >
          <Form.Control
            type="text"
            placeholder="USERNAME"
            value={user?.username}
            onChange={(e) => setUser({ ...user, username: e.target.value })}
          />
        </Form.Group>

        <Form.Group
          className="mb-3 w-75 m-4 rounded-3"
          controlId="formBasicPassword"
        >
          <Form.Control
            type="password"
            placeholder="PASSWORD"
            value={user?.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
        </Form.Group>

        <Button variant="info" type="submit">
          LOGIN
        </Button>
      </Form>
    </div>
  );
};

export default Login;
