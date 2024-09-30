import { Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import Home from "../pages/Home";
import Detail from "../pages/Detail";
import NotFound from "../pages/NotFound";
import About from "../pages/About";
import Login from "../pages/Login";
import Register from "../pages/Register";

const AppRouter = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default AppRouter;
