import "./ConfirmProfile.css";
import Sidebar from "../../components/FriendSidebar/FriendSidebar";

export default function Profile() {
  return (
    <>
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <img
            className="SearchProfileImg"
            src="assets/post/preview.png"
            alt=""
          />
        </div>
      </div>
    </>
  );
}
