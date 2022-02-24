import "./sidebar.css";

import { Users } from "../../dummyData";
import CloseFriend from "../CloseFriend/CloseFriend";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sideButtonTop">
          <button className="sidebarButton">
            <img className="leftArrow" src="assets/post/arrow.png" alt="" />
            Friend Requests
          </button>
          <hr className="sidebarHr" />
        </div>

        <ul className="sidebarFriendList">
          {Users.map((u) => (
            <CloseFriend key={u.id} user={u} />
          ))}
        </ul>
      </div>
    </div>
  );
}
