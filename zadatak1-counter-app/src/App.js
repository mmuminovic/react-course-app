import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Counter from "./pages/Counter/Counter";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { authSlice } from "./store/authSlice";
import jwtDecode from "jwt-decode";
import { useEffect } from "react";
import { ThemeProvider } from "@mui/material";
import { themeLight } from "./styles/themeLight";
import { themeDark } from "./styles/themeDark";

function App() {
  const dispatch = useDispatch();
  const themeState = useSelector((state) => state.theme);
  const selectedTheme = themeState.theme === "light" ? themeLight : themeDark;

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
      const decoded = jwtDecode(token);
      dispatch(authSlice.actions.setData(decoded));
    }
  }, [dispatch]);

  return (
    <ThemeProvider theme={selectedTheme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Counter />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
