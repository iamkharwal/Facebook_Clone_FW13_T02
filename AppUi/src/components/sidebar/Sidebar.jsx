import "./sidebar.css";

import { Users } from "../../dummyData";
import CloseFriend from "../closeFriend/CloseFriend";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <Link
              to="/suggestions"
              style={{ textDecoration: "none", color: "black" }}
            >
              <img src={`${PF}friends.png`} className="sidebarIcon" />
              <span className="sidebarListItemText">Find Friend</span>
            </Link>
          </li>
          <li className="sidebarListItem">
            <img src={`${PF}groups.png`} className="sidebarIcon" />
            <span className="sidebarListItemText">Groups</span>
          </li>
          <li className="sidebarListItem">
            <img src={`${PF}marketplace.png`} className="sidebarIcon" />
            <span className="sidebarListItemText">Marketplace</span>
          </li>
          <li className="sidebarListItem">
            <img src={`${PF}watch.png`} className="sidebarIcon" />
            <span className="sidebarListItemText">Watch</span>
          </li>
          <li className="sidebarListItem">
            <img src={`${PF}memories.png`} className="sidebarIcon" />
            <span className="sidebarListItemText">Memories</span>
          </li>
          <li className="sidebarListItem">
            <img src={`${PF}saved.png`} className="sidebarIcon" />
            <span className="sidebarListItemText">Saved</span>
          </li>
          <li className="sidebarListItem">
            <img src={`${PF}pages.png`} className="sidebarIcon" />
            <span className="sidebarListItemText">Pages</span>
          </li>
          <li className="sidebarListItem">
            <img src={`${PF}friends.png`} className="sidebarIcon" />
            <span className="sidebarListItemText">Events</span>
          </li>
          <li className="sidebarListItem">
            <img src={`${PF}events.png`} className="sidebarIcon" />
            <span className="sidebarListItemText">Events</span>
          </li>
        </ul>
        <button className="sidebarButton">Show More</button>
        <hr className="sidebarHr" />
        <ul className="sidebarFriendList">
          {Users.map((u) => (
            <CloseFriend key={u.id} user={u} />
          ))}
        </ul>
      </div>
    </div>
  );
}
