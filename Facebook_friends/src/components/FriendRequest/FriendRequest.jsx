import "./FriendRequest.css";

export default function closeFriend({ user }) {
  return (
    <div className="sidebarFriend">
      <div className="userprofile">
        <img className="sidebarFriendImg" src={user.profilePicture} alt="" />
        <span className="sidebarFriendName">{user.username}</span>
      </div>
      <div className="button">
        <button className="btn confirm">Confirm</button>
        <button className="btn delete">Delete</button>
      </div>
    </div>
  );
}
