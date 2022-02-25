/** @format */

import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Profile2 from "./pages/profile2/Profile2";
import Register from "./pages/register/Register";
import { Routes, Route, Link, Navigate } from "react-router-dom";
import Header from "./components/topbar/Header";
import { AuthContext } from "./context/AuthContext";
import { useContext } from "react";

function App() {
  const { user } = useContext(AuthContext);

  return (
    <div>
      <Header />

      <Routes>
        <Route path="/" element={user ? <Home /> : <Register />}></Route>
        {/* <Route path="/" element={ <Home />}></Route> */}

        <Route
          path="/login"
          element={user ? <Navigate to="/" /> : <Login />}
        ></Route>
        <Route
          path="/register"
          element={user ? <Navigate to="/" /> : <Register />}
        ></Route>
        <Route
          path="/profile/:username"
          element={user ? <Navigate to="/" /> : <Profile2 />}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
