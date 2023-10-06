import React, { useState } from "react";

import AppContext from "./AppContext";

import { useScrollTrigger } from "@mui/material";

const AppContextProvider = (props) => {
  const trigger = useScrollTrigger();
  const [state, setState] = useState({
    token: "",
  });

  const value = {
    ...state,
    setToken: (token) => setState({ ...state, token }),
  };

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};

export default AppContextProvider;
