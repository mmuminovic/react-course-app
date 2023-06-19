import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Provider, useDispatch } from "react-redux";
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

const NavigationRoutes = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
      const decoded = jwtDecode(token);
      dispatch(authSlice.actions.setData(decoded));
    }
  }, []);

  return (
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
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <NavigationRoutes />
    </Provider>
  );
};

export default App;
