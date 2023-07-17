import { DarkMode, LightMode, LockClock } from "@mui/icons-material";
import { Box, Button, Switch, useTheme } from "@mui/material";
import React from "react";
import { themeSlice } from "../../store/themeSlice";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../firebase";
import { useNavigate } from "react-router-dom";

function Layout(props) {
  const theme = useTheme();
  const dispatch = useDispatch();
  const themeState = useSelector((state) => state.theme);
  const authState = useSelector((state) => state.auth);
  const navigate = useNavigate();

  return (
    <Box>
      <Box
        py={2}
        px={5}
        bgcolor={theme.palette.secondary.main}
        display="flex"
        justifyContent={"space-between"}
      >
        <Box>
          <LockClock color="primary" />
        </Box>
        <Box display="flex" gap={2} flexDirection={"row"}>
          {authState.id ? (
            <Button color="primary" variant="outlined" onClick={() => logout()}>
              Logout
            </Button>
          ) : (
            <Button
              color="primary"
              variant="outlined"
              onClick={() => navigate("/login")}
            >
              Login
            </Button>
          )}
          <Box display="flex" alignItems="center">
            <LightMode color="primary" />
            <Switch
              onChange={() => {
                dispatch(themeSlice.actions.toggleTheme());
              }}
              checked={themeState.theme === "dark"}
            />
            <DarkMode color="primary" />
          </Box>
        </Box>
      </Box>
      <Box p={5} bgcolor={theme.palette.background}>
        {props.children}
      </Box>
    </Box>
  );
}

export default Layout;
