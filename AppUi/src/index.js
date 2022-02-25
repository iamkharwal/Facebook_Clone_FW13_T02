import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { AuthContextProvidor } from "./context/AuthContext";

ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvidor>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AuthContextProvidor>
  </React.StrictMode>,
  document.getElementById("root")
);
