/** @format */

import React, { useContext, useState } from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import FlagIcon from "@mui/icons-material/Flag";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import StorefrontIcon from "@mui/icons-material/Storefront";
import SupervisedUserCircleIcon from "@mui/icons-material/SupervisedUserCircle";
import { Avatar, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import ForumIcon from "@mui/icons-material/Forum";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { Results } from "./Res";
import { BsMessenger } from "react-icons/bs";
import { FaBell } from "react-icons/fa";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import { CgMenuGridO } from "react-icons/cg";
import { IoMdArrowDropdown } from "react-icons/io";

function Header() {
  const { user } = useContext(AuthContext);

  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [showResults, setShowResults] = React.useState(false);

  return (
    <div className="header">
      <div className="header__left">
        <Link to="/" style={{ textDecoration: "none" }}>
          <img
            alt="facebook"
            src="https://upload.wikimedia.org/wikipedia/commons/b/b8/2021_Facebook_icon.svg"
          />
        </Link>

        <div className="header__input">
          <SearchIcon style={{ width: "18px" }} />
          <input placeholder="Search Facebook" type="text" />
        </div>
      </div>

      <div className="header__center">
        <div className="header__option ">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "header__option--active" : "inactive"
            }
          >
            <HomeIcon fontSize="large" />
          </NavLink>
        </div>

        <div className="header__option">
          <NavLink
            to="/requests"
            className={({ isActive }) =>
              isActive ? "header__option--active" : "inactive"
            }
          >
            <GroupOutlinedIcon fontSize="large" />
          </NavLink>
        </div>
        <div className="header__option ">
          <SubscriptionsIcon fontSize="large" />
        </div>
        <div className="header__option">
          <StorefrontIcon fontSize="large" />
        </div>
        <div className="header__option">
          <NavLink
            to="/messenger"
            className={({ isActive }) =>
              isActive ? "header__option--active" : "inactive"
            }
          >
            <SupervisedUserCircleIcon fontSize="large" />
          </NavLink>
        </div>
      </div>

      <div className="header__right">
        <div className="header__info">
          <Link to={"/profile/" + user.username}>
            <img
              src={
                user.profilePicture
                  ? PF + user.profilePicture
                  : PF + "person/noAvatar.png"
              }
              width="40px"
              style={{ borderRadius: "40px", border: "1px solid grey" }}
            />
          </Link>
          <Link
            to={"/profile/" + user.username}
            style={{ textDecoration: "none", color: "black" }}
          >
            <strong>{user.username}</strong>
          </Link>
        </div>

        <IconButton
          style={{
            background: "rgb(230,230,230)",
            padding: "10px",
            borderRadius: "40px",
            color: "black",
            marginRight: "5px",
          }}
        >
          <CgMenuGridO />
        </IconButton>
        <IconButton
          style={{
            background: "rgb(230,230,230)",
            padding: "10px",
            borderRadius: "40px",
            color: "black",
            marginRight: "5px",
          }}
        >
          <BsMessenger />
        </IconButton>
        <IconButton
          style={{
            background: "rgb(230,230,230)",
            padding: "10px",
            borderRadius: "40px",
            color: "black",
            marginRight: "5px",
          }}
        >
          <FaBell />
        </IconButton>
        <IconButton
          style={{
            background: "rgb(230,230,230)",
            padding: "10px",
            borderRadius: "40px",
            color: "black",
            marginRight: "5px",
          }}
          onClick={() => {
            setShowResults(!showResults);
          }}
        >
          <ExpandMoreIcon />
        </IconButton>
      </div>
      <div>{showResults ? <Results user={user} /> : null}</div>
    </div>
  );
}

export default Header;
