/** @format */

import { Card, Button } from "react-bootstrap";

export const LeftSideBar = ({ user }) => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
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
                    : "Complicated"}
                </span>
              </div>
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
      <br />

      <Card className="  p-3 shadowLg" style={{ borderRadius: "10px" }}>
        <Card.Body>
          <Card.Title style={{ fontWeight: "700" }}>Friends</Card.Title>
          <br />
          <Card.Text>
            <div className="rightbarFollowings">
              <div className="rightbarFollowing">
                <img
                  src={`${PF}person/1.jpeg`}
                  alt=""
                  className="rightbarFollowingImg"
                />
                <span className="rightbarFollowingName">John Carter</span>
              </div>
              <div className="rightbarFollowing">
                <img
                  src={`${PF}person/2.jpeg`}
                  alt=""
                  className="rightbarFollowingImg"
                />
                <span className="rightbarFollowingName">John Carter</span>
              </div>
              <div className="rightbarFollowing">
                <img
                  src={`${PF}person/3.jpeg`}
                  alt=""
                  className="rightbarFollowingImg"
                />
                <span className="rightbarFollowingName">John Carter</span>
              </div>
              <div className="rightbarFollowing">
                <img
                  src={`${PF}person/4.jpeg`}
                  alt=""
                  className="rightbarFollowingImg"
                />
                <span className="rightbarFollowingName">John Carter</span>
              </div>
              <div className="rightbarFollowing">
                <img
                  src={`${PF}person/5.jpeg`}
                  alt=""
                  className="rightbarFollowingImg"
                />
                <span className="rightbarFollowingName">John Carter</span>
              </div>
              <div className="rightbarFollowing">
                <img
                  src={`${PF}person/6.jpeg`}
                  alt=""
                  className="rightbarFollowingImg"
                />
                <span className="rightbarFollowingName">John Carter</span>
              </div>
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};
