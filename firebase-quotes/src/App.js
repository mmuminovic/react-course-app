import "./styles/App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Provider, useDispatch, useSelector } from "react-redux";
import AllQuotes from "./pages/AllQuotes/AllQuotes";
import QuoteDetails from "./pages/QuoteDetails/QuoteDetails";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import AddQuote from "./pages/AddQuote/AddQuote";
import EditQuote from "./pages/EditQuote/EditQuote";
import { store } from "./store/store";
import { useEffect } from "react";
import jwtDecode from "jwt-decode";
import { authSlice } from "./store/authSlice";
import { ThemeProvider } from "@mui/material";
import { themeDark } from "./styles/themeDark";
import { themeLight } from "./styles/themeLight";
import { auth, firebaseApp } from "./firebase";

const App = () => {
  const dispatch = useDispatch();
  const themeState = useSelector((state) => state.theme);
  const selectedTheme = themeState.theme === "light" ? themeLight : themeDark;

  return (
    <ThemeProvider theme={selectedTheme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AllQuotes />} />
          <Route path="/quote/:id" element={<QuoteDetails />} />
          <Route path="/quote/:id/edit" element={<EditQuote />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/add-quote" element={<AddQuote />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
