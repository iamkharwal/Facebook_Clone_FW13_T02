/** @format */

import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Profile2 from "./pages/profile2/Profile2";
import Register from "./pages/register/Register";
import {FPassword} from "./pages/frogetPassword/FPassword"
import { Routes, Route, Link, Navigate } from "react-router-dom";
import Header from "./components/topbar/Header";
import { AuthContext } from "./context/AuthContext";
import { useContext } from "react";
import { Messenger } from "./pages/messenger/Messenger";
import { DisplayStoryContextProvider } from "./components/story/StoryContext";
import FriendRequest from "./pages/FriendRequest/FriendRequest";
import Suggestions from "./pages/Suggestions/Suggestions";

function App() {
  const { user } = useContext(AuthContext);

  return (
    <div>
      {user ? <Header /> : ""}

      <Routes>
        <Route
          path="/"
          element={
            user ? (
              <DisplayStoryContextProvider>
                <Home />
              </DisplayStoryContextProvider>
            ) : (
              <Register />
            )
          }
        ></Route>
        <Route
          path="/friendrequests"
          element={user ? <FriendRequest /> : <Register />}
        ></Route>
        <Route
          path="/suggestions"
          element={user ? <Suggestions /> : <Register />}
        ></Route>
        {/* <Route path="/" element={ <Home />}></Route> */}
        <Route path="/forgotPassword" element={<FPassword />}></Route>

        <Route
          path="/login"
          element={user ? <Navigate to="/" /> : <Login />}
        ></Route>
        <Route
          path="/register"
          element={user ? <Navigate to="/" /> : <Register />}
        ></Route>
        <Route
          path="/messenger"
          element={!user ? <Navigate to="/" /> : <Messenger />}
        ></Route>
        <Route path="/profile/:username" element={<Profile2 />}></Route>
      </Routes>
    </div>
  );
}

export default App;
