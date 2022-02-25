import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { AuthContextProvidor } from "./context/AuthContext";
import  {DisplayStoryContextProvider} from "./components/story/StoryContext";

ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvidor>
      <BrowserRouter>
        <DisplayStoryContextProvider>
          <App />
        </DisplayStoryContextProvider>       
      </BrowserRouter>
    </AuthContextProvidor>
  </React.StrictMode>,
  document.getElementById("root")
);
