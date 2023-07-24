import React, { useCallback, useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import jwtDecode from "jwt-decode";
import { useDispatch, useSelector } from "react-redux";
import { authSlice } from "../store/authSlice";
import { store } from "../store/store";

export const tryToAuth = async (externalToken) => {
  let token = "";
  let isAuthenticated = false;
  if (externalToken) {
    token = externalToken;
  } else {
    token = localStorage.getItem("accessToken");
  }
  if (token) {
    try {
      const user = jwtDecode(token);
      axios.defaults.headers.common.Authorization = `Bearer ${token}`;
      store.dispatch(
        authSlice.actions.setUser({
          user,
          userId: user.userId,
          token,
        })
      );
      localStorage.setItem("accessToken", token);
      isAuthenticated = true;
    } catch (err) {
      localStorage.removeItem("accessToken");
      store.dispatch(authSlice.actions.logout());
    }
  } else {
    store.dispatch(authSlice.actions.logout());
  }

  return isAuthenticated;
};

export const useIsAuthHook = () => {
  const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);

  const checkAuth = useCallback(async (externalToken) => {
    axios.interceptors.response.use((response) => {
      if (response.status === 401) {
        AsyncStorage.removeItem("accessToken").finally(() => {
          dispatch(authSlice.actions.logout());
        });
        alert(
          `Vaša sesija je istekla. Prijavite se ponovo da bi ste nastavili da korstite aplikaciju`
        );
      } else if (response.status >= 500) {
        alert(`Desila se neka greška. Pokušajte ponovo`);
      }
      return response;
    });

    try {
      await tryToAuth();
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    checkAuth(token);
  }, [token]);

  return { isLoading, checkAuth };
};
