import React from "react";
import ReactDOM from "react-dom/client";
import Search from "./pages/Search";
import { store } from "./util/store";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.body).render(
  <React.StrictMode>
    <Provider store={store}>
      <Search />
    </Provider>
  </React.StrictMode>
);
