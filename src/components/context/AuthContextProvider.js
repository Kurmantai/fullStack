import React, {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";
import {
  API_FORGOT,
  API_FORGOT_ACC,
  API_LOGIN,
  API_REF,
  API_REG,
} from "../context/const";
import axios from "axios";

const authContext = createContext();

export const useAuth = () => useContext(authContext);

const INIT_STATE = {
  user: {},
  error: null,
};

function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case "SET_USER":
      return { ...state, user: action.payload };
    case "SET_ERROR":
      return { ...state, error: action.payload };
    default:
      return state;
  }
}

const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  const [email, setEmail] = useState();
  const [code, setCode] = useState();
  const navigate = useNavigate();

  const register = async (user) => {
    try {
      const res = await axios.post(`${API_REG}`, user);
      navigate("/login");
    } catch (e) {}
  };
  const login = async (user) => {
    try {
      let res = await axios.post(`${API_LOGIN}`, user);

      localStorage.setItem("token", JSON.stringify(res.data));
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const checkAuth = async () => {
    try {
      let token = JSON.parse(localStorage.getItem("token")); // вытягиваем токен который дается при логине для того чтобы его сразу обновлять
      let res = await axios.post(`${API_REF}`, {
        refresh: token.refresh,
      }); // сохроняем ответ сервера

      localStorage.setItem(
        "token",
        JSON.stringify({ refresh: token.refresh, access: res.data.access })
      );
    } catch (error) {
      console.log(error);
    }
  };
  async function forgotPassword(email) {
    try {
      await axios.post(API_FORGOT, { email });
      console.log(email);
      navigate("/newpass");
    } catch (error) {
      console.log(error);
    }
  }
  async function forgotPasswordComplate(user) {
    try {
      await axios.post(API_FORGOT_ACC, { user });
      console.log(user);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    if (localStorage.getItem("token")) {
      // проверка залогинен ли пользлватель . т.е есть ли токен
      checkAuth();
    } else {
      return navigator("/registr");
    }
  }, []);
  function logout() {
    localStorage.removeItem("token"); // чтобы токен стирался после выхода
    navigate("/login");
  }

  let values = {
    register,
    login,
    logout,
    setEmail,
    setCode,
    checkAuth,
    forgotPassword,
    forgotPasswordComplate,
  };

  return <authContext.Provider value={values}>{children}</authContext.Provider>;
};

export default AuthContextProvider;
