import React from "react";
import Header from "../Header/Header";
import { Outlet } from "react-router-dom";
// import appStore from "../../utility/appStore";
import { Provider } from "react-redux";

import store from "../../Redux/store/store";

store.subscribe(() =>
  console.log(
    "store.getState()store.getState()store.getState()",
    store.getState()
  )
);


const Home = () => {
  return (
    <>
      <Provider store={store}>
        <Header />
        <Outlet />
      </Provider>
    </>
  );
};

export default Home;
