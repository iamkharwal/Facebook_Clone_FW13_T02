import "./Res.css";
import { Avatar, IconButton } from "@mui/material";
import FeedbackIcon from "@mui/icons-material/Feedback";
import SettingsIcon from "@mui/icons-material/Settings";
import NightlightRoundIcon from "@mui/icons-material/NightlightRound";
import LogoutIcon from "@mui/icons-material/Logout";
import HelpIcon from "@mui/icons-material/Help";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export const Results = () => (
  <div id="results" className="search-results">
    <div className="userInfo display">
      <div className="avtar">
        <Avatar />
      </div>
      <div className="userInfoDiv">
        <h5>Anurag Singh</h5>
        <h6>See your profile</h6>
      </div>
    </div>
    <hr />
    <div className="display specialDiv">
      <div className="iconDiv">
        <FeedbackIcon className="SideIcon"/>
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
        <h5 >Display & accessiblity</h5>
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
        <h5>Log Out</h5>
      </div>
      <div className="arrowIcon">
        <ArrowForwardIosIcon />
      </div>
    </div>

    <div className="bottomDiv">
      <div>
        <a href="https://www.facebook.com/privacy/explanation/" style={{ marginRight: ".5rem" }}>Privacy </a>
        .
        <a href="https://www.facebook.com/policies?ref=pf" style={{ marginLeft: ".5rem", marginRight: ".5rem" }}>  Term </a>
        .
        <a href="https://www.facebook.com/business/" style={{ marginLeft: ".5rem", marginRight: ".5rem" }}>  Advertising </a>
        .
        <a href="https://www.facebook.com/help/568137493302217" style={{ marginLeft: ".5rem", marginRight: ".5rem" }}>  Ad choice </a>
        .
        <a href="https://www.facebook.com/policies/cookies/" style={{ marginLeft: ".5rem", marginRight: ".5rem" }}>  Cookies </a>
      </div>

      <div>

        <a style={{ marginRight: ".5rem" }}>More .</a>
        <a>Meta © 2022</a>
      </div>
    </div>
  </div>
);
