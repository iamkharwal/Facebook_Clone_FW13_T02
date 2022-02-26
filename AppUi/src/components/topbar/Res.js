import "./Res.css";
import { Avatar, IconButton } from "@mui/material";
import FeedbackIcon from "@mui/icons-material/Feedback";
import SettingsIcon from "@mui/icons-material/Settings";
import NightlightRoundIcon from "@mui/icons-material/NightlightRound";
import LogoutIcon from "@mui/icons-material/Logout";
import HelpIcon from "@mui/icons-material/Help";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Link } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

export const Results = ({ user }) => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const deleteItem = () => {
    // Clear localStorage items
    console.log("aaa");
    localStorage.clear();
    window.location.href = "/";
  };
  return (
    <div id="results" className="search-results">
      <div className="userInfo display">
        <div className="avtar">
          <Link to={"/profile/" + user.username}>
            {user.profilePicture ? (
              <img
                src={
                  user.profilePicture
                    ? PF + user.profilePicture
                    : PF + "person/noAvatar.png"
                }
                width="40px"
                style={{ borderRadius: "40px", border: "1px solid grey" }}
              />
            ) : (
              <Avatar />
            )}
          </Link>
        </div>
        <div className="userInfoDiv">
          <Link
            to={"/profile/" + user.username}
            style={{ textDecoration: "none", color: "black" }}
          >
            <h4>{user.username}</h4>
          </Link>
        </div>
      </div>
      <hr />
      <div className="display specialDiv">
        <div className="iconDiv">
          <FeedbackIcon className="SideIcon" />
        </div>
        <div>
          <h5>Give Feedback</h5>
          <h6>Help up improve facebook</h6>
        </div>
      </div>
      <hr />
      <div className="display">
        <div className="iconDiv">
          <SettingsIcon className="SideIcon" />
        </div>
        <div className="slideOpt">
          <h5>Setting & privacy</h5>
        </div>
        <div className="arrowIcon">
          <ArrowForwardIosIcon />
        </div>
      </div>
      <div className="display">
        <div className="iconDiv">
          <HelpIcon className="SideIcon" />
        </div>
        <div className="slideOpt">
          <h5>Help & support</h5>
        </div>
        <div className="arrowIcon">
          <ArrowForwardIosIcon />
        </div>
      </div>
      <div className="display">
        <div className="iconDiv">
          <NightlightRoundIcon className="SideIcon" />
        </div>
        <div className="slideOpt">
          <h5>Display & accessiblity</h5>
        </div>
        <div className="arrowIcon">
          <ArrowForwardIosIcon />
        </div>
      </div>
      <div className="display">
        <div className="iconDiv">
          <LogoutIcon className="SideIcon" />
        </div>
        <div className="slideOpt">
          <h5 onClick={deleteItem}>Log Out</h5>
        </div>
        <div className="arrowIcon">
          <ArrowForwardIosIcon />
        </div>
      </div>

      <div className="bottomDiv">
        <div>
          <a
            href="https://www.facebook.com/privacy/explanation/"
            style={{ marginRight: ".5rem" }}
          >
            Privacy{" "}
          </a>
          .
          <a
            href="https://www.facebook.com/policies?ref=pf"
            style={{ marginLeft: ".5rem", marginRight: ".5rem" }}
          >
            {" "}
            Term{" "}
          </a>
          .
          <a
            href="https://www.facebook.com/business/"
            style={{ marginLeft: ".5rem", marginRight: ".5rem" }}
          >
            {" "}
            Advertising{" "}
          </a>
          .
          <a
            href="https://www.facebook.com/help/568137493302217"
            style={{ marginLeft: ".5rem", marginRight: ".5rem" }}
          >
            {" "}
            Ad choice{" "}
          </a>
          .
          <a
            href="https://www.facebook.com/policies/cookies/"
            style={{ marginLeft: ".5rem", marginRight: ".5rem" }}
          >
            {" "}
            Cookies{" "}
          </a>
        </div>

        <div>
          <a style={{ marginRight: ".5rem" }}>More .</a>
          <a>Meta © 2022</a>
        </div>
      </div>
    </div>
  );
};
