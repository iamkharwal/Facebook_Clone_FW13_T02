/** @format */

import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";

export const LeftSideBar = ({ user }) => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [friends, setfriends] = useState([]);

  useEffect(() => {
    const getFriends = async () => {
      try {
        const friendList = await axios.get("/users/friends/" + user._id);
        setfriends(friendList.data);
      } catch (error) {
        console.log("error: ", error);
      }
    };
    getFriends();
  }, [user._id]);

  return (
    <div className="ps-0">
      <Card className="p-3 shadowLg" style={{ borderRadius: "10px" }}>
        <Card.Body>
          <Card.Title style={{ fontWeight: "600" }}>Intro</Card.Title> <br />
          <Card.Text>
            <Button
              variant="light"
              className="w-100"
              style={{ background: "rgb(230, 230, 230)" }}
            >
              Add Bio
            </Button>
            <br />
            <br />
            <div className="rightbarInfo">
              <div className="rightbarInfoItem">
                <span className="rightbarInfoKey">City:</span>
                <span className="rightbarInfoValue">{user.city}</span>
              </div>
              <div className="rightbarInfoItem">
                <span className="rightbarInfoKey">From:</span>
                <span className="rightbarInfoValue">{user.from}</span>
              </div>
              <div className="rightbarInfoItem">
                <span className="rightbarInfoKey">Relationship:</span>
                <span className="rightbarInfoValue">
                  {user.relationship == 1
                    ? "Single"
                    : user.relationship == 2
                    ? "Married"
                    : user.relationship == 3
                    ? "Complicated"
                    : ""}
                </span>
              </div>
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
      <br />

      <Card className="  p-3 shadowLg" style={{ borderRadius: "10px" }}>
        <Card.Body>
          <Card.Title style={{ fontWeight: "700" }}>
            Friends({user.friends == null ? 0 : user.friends.length})
          </Card.Title>
          <br />
          <Card.Text>
            <div className="rightbarFollowings">
              {friends.map((friend) => (
                <Link
                  to={"/profile/" + friend.username}
                  style={{ textDecoration: "none" }}
                >
                  <div className="rightbarFollowing">
                    <img
                      src={
                        friend.profilePicture
                          ? PF + "users/" + friend.profilePicture
                          : PF + "person/noAvatar.png"
                      }
                      alt=""
                      className="rightbarFollowingImg"
                    />
                    <span
                      className="rightbarFollowingName"
                      style={{
                        color: "black",
                        textTransform: "capitalize",
                        textAlign: "center",
                      }}
                    >
                      {friend.username}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};
