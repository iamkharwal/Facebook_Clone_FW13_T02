/** @format */
import "./profile2.css";
import { Container, Row, Col, Button, Navbar, Nav } from "react-bootstrap";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import { IoMdAddCircle } from "react-icons/io";
import { MdModeEditOutline } from "react-icons/md";
import { LeftSideBar } from "./LeftSideBar";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

export default function Profile2() {
  const [user, setUser] = useState({});
  const { username } = useParams();
  const { user: currentUser, dispatch } = useContext(AuthContext);
  const [followed, setFollowed] = useState(
    currentUser.followings.includes(user._id)
  );

  useEffect(() => {
    setFollowed(currentUser.followings.includes(user._id));
  }, [currentUser, user._id]);

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`/users?username=${username}`);
      setUser(res.data);
    };
    fetchUser();
  }, [username]);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  const handleClick = async () => {
    try {
      if (followed) {
        await axios.put(`/users/${user._id}/unfollow`, {
          userId: currentUser._id,
        });
        dispatch({ type: "UNFOLLOW", payload: user._id });
      } else {
        await axios.put(`/users/${user._id}/follow`, {
          userId: currentUser._id,
        });
        dispatch({ type: "FOLLOW", payload: user._id });
      }
      setFollowed(!followed);
    } catch (err) {}
  };

  return (
    <>
      <Container fluid className="shadowLg bg-white">
        <Container style={{ width: "75%" }}>
          <Col style={{ position: "relative" }}>
            <img
              src={
                user.converPicture
                  ? PF + user.converPicture
                  : PF + "person/noCover.png"
              }
              className="profileCoverImg img-fluid"
            />
            {user.username == currentUser.username ? (
              <Button className="edit-cover-btn btn btn-light  rounded-5">
                <MdModeEditOutline /> Edit Cover Photo
              </Button>
            ) : (
              ""
            )}
          </Col>
          <Row>
            <Col md={3} className="d-flex flex-row-reverse pe-4">
              <img
                className="profileUserImg2"
                src={
                  user.profilePicture
                    ? PF + user.profilePicture
                    : PF + "person/noAvatar.png"
                }
                alt=""
              />
            </Col>
            <Col md={3} className="p-3">
              <h1
                className="profileInfoName"
                style={{ fontSize: "40px", textTransform: "capitalize" }}
              >
                {user.username}
              </h1>
              <h6 className="profileInfoDesc">
                {user.followings == null ? 0 : user.followings.length} Friends
              </h6>
              <img
                className="shareProfileImg2"
                src="/assets/person/1.jpeg"
                alt=""
              />
              <img
                className="shareProfileImg2"
                src="/assets/person/1.jpeg"
                alt=""
              />
              <img
                className="shareProfileImg2"
                src="/assets/person/1.jpeg"
                alt=""
              />
            </Col>
            <Col md={5} className="d-flex align-items-end pe-1">
              <Col className="mt-auto" style={{ textAlign: "right" }}>
                {user.username !== currentUser.username ? (
                  <Button
                    variant="primary"
                    className="btn "
                    onClick={handleClick}
                  >
                    <IoMdAddCircle />
                    {followed ? "Friends" : "Send Request"}
                  </Button>
                ) : (
                  <span>
                    {" "}
                    <Button variant="primary" className="btn ">
                      <IoMdAddCircle /> Add to Story
                    </Button>{" "}
                    <Button className="edit-button btn btn-light ">
                      <MdModeEditOutline /> Edit Profile
                    </Button>
                  </span>
                )}
              </Col>
            </Col>
          </Row>
          <br />

          <hr />
          <Col md={11} className="m-auto">
            <Navbar variant="light" className="p-0">
              <Container className="p-0">
                <Nav className="me-auto pt-0">
                  <Nav.Link href="#home">Posts</Nav.Link>
                  <Nav.Link href="#features">About</Nav.Link>
                  <Nav.Link href="#Friends">Friends</Nav.Link>
                  <Nav.Link href="#Photos">Photos</Nav.Link>
                  <Nav.Link href="#Videos">Videos</Nav.Link>
                  <Nav.Link href="#Check">Check-ins</Nav.Link>
                </Nav>
              </Container>
            </Navbar>
          </Col>
        </Container>
      </Container>
      <Container fluid className="bg-light">
        <Container className="col-md-8 p-0 m-auto">
          <Row className="mt-1 pt-4 mx-auto">
            <Col md={5} className="sidebar2 pt-0">
              <LeftSideBar user={user} />
            </Col>
            <Col md={7} className="pe-4">
              <Feed username={username} />
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
}
