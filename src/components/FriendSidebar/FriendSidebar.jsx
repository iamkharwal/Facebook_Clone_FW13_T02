import "./FriendSidebar.css";

import { Users } from "../../dummyData";
import FriendRequest from "../FriendRequest/FriendRequest";

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
            <FriendRequest key={u.id} user={u} />
          ))}
        </ul>
      </div>
    </div>
  );
}
