import { createContext, useContext, useState } from "react";

const LoginContext = createContext();

const LoginProvider = ({ children }) => {
  const [user, setUser] = useState({ username: "", password: "" });

  const values = {
    user,
    setUser,
  };
  return (
    <LoginContext.Provider value={values}>{children}</LoginContext.Provider>
  );
};

//? Consuming için bir custom hook yazıyoruz.
export const useLoginContext = () => {
  return useContext(LoginContext);
};

export default LoginProvider;
