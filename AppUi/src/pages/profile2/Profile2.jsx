/** @format */
import "./profile2.css";
import {
  Container,
  Row,
  Col,
  Button,
  Navbar,
  Nav,
  Card,
  ListGroup,
} from "react-bootstrap";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import { IoMdAddCircle } from "react-icons/io";
import { MdModeEditOutline } from "react-icons/md";
import { LeftSideBar } from "./LeftSideBar";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import UploadOutlinedIcon from "@mui/icons-material/UploadOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import { CircularProgress } from "@material-ui/core";
import CameraAltOutlinedIcon from "@mui/icons-material/CameraAltOutlined";

export default function Profile2() {
  const [user, setUser] = useState({});
  const { username } = useParams();
  const { user: currentUser, reload, dispatch } = useContext(AuthContext);
  const [show, setshow] = useState(false);
  const [cover, setcover] = useState(null);
  const [profile, setprofile] = useState(null);

  const updateprofile = async (profile) => {
    const newPost = {};
    if (profile !== null) {
      const data = new FormData();
      const fileName = Date.now() + profile.name;
      data.append("name", fileName);
      data.append("file", profile);
      newPost.img = fileName;

      try {
        await axios.post("/users/uploadCover", data);
      } catch (err) {}
    }
    try {
      let res = await axios.put(`/users/${currentUser._id}/updateuser`, {
        userId: currentUser._id,
        data: {
          profilePicture: newPost.img,
        },
      });
      setshow(false);
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });

      // window.location.reload();
    } catch (err) {}
  };

  useEffect(() => {
    updateprofile(profile);
  }, [profile]);

  const updateCover = async (cover) => {
    const newPost = {};
    if (cover !== null) {
      const data = new FormData();
      const fileName = Date.now() + cover.name;
      data.append("name", fileName);
      data.append("file", cover);
      newPost.img = fileName;

      try {
        await axios.post("/users/uploadCover", data);
      } catch (err) {}
    }
    try {
      let res = await axios.put(`/users/${currentUser._id}/updateuser`, {
        userId: currentUser._id,
        data: {
          converPicture: newPost.img,
        },
      });
      setshow(false);
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });

      // window.location.reload();
    } catch (err) {}
  };

  useEffect(() => {
    updateCover(cover);
  }, [cover]);

  const [addFriend, setaddFriend] = useState(
    currentUser.sentReq.includes(user._id)
  );
  const [friend, setFriend] = useState(currentUser.friends.includes(user._id));

  useEffect(() => {
    setaddFriend(currentUser.sentReq.includes(user._id));
  }, [currentUser, user._id]);

  useEffect(() => {
    setFriend(currentUser.friends.includes(user._id));
  }, [currentUser, user._id]);

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`/users?username=${username}`);
      setUser(res.data);
    };
    fetchUser();
  }, [username, currentUser.profilePicture, currentUser.converPicture]);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  const unFriend = async () => {
    try {
      if (friend) {
        await axios.put(`/users/${user._id}/unfriend`, {
          userId: currentUser._id,
        });
        dispatch({ type: "UN_FRIEND", payload: user._id });
      }
      setFriend(false);
    } catch (err) {}
  };

  const handleClick = async () => {
    try {
      if (addFriend) {
        await axios.put(`/users/${user._id}/cancelreq`, {
          userId: currentUser._id,
        });
        dispatch({ type: "CANCEL_REQ", payload: user._id });
      } else {
        await axios.put(`/users/${user._id}/sentReq`, {
          userId: currentUser._id,
        });
        dispatch({ type: "ADD_FRIEND", payload: user._id });
      }
      setaddFriend(!addFriend);
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
                  ? PF + "users/" + user.converPicture
                  : PF + "person/noCover.png"
              }
              className="profileCoverImg img-fluid"
            />

            {user.username == currentUser.username ? (
              <span>
                <Button
                  className="edit-cover-btn btn btn-light  rounded-5"
                  onClick={() => setshow(!show)}
                >
                  <MdModeEditOutline /> Edit Cover Photo
                </Button>
                <Card
                  id="coverImg"
                  style={{ width: "18rem" }}
                  className={show ? "showCard" : "hideCard"}
                >
                  <Card.Body>
                    <Card.Text>
                      <ListGroup variant="flush">
                        <ListGroup.Item>
                          <label htmlFor="file" className="shareOption">
                            <UploadOutlinedIcon />
                            &nbsp; Upload Photo
                            <input
                              style={{ display: "none" }}
                              type="file"
                              id="file"
                              accept=".png,.jpeg,.jpg"
                              onChange={(e) => setcover(e.target.files[0])}
                            />
                          </label>
                        </ListGroup.Item>
                        <ListGroup.Item>
                          <DeleteOutlinedIcon /> &nbsp; Remove Photo
                        </ListGroup.Item>
                      </ListGroup>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </span>
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
                    ? PF + "users/" + user.profilePicture
                    : PF + "person/noAvatar.png"
                }
                alt=""
              />
              {user.username !== currentUser.username ? (
                ""
              ) : (
                <label htmlFor="file2" className="shareOption">
                  <CameraAltOutlinedIcon id="camera-icon" />
                  <input
                    style={{ display: "none" }}
                    type="file"
                    id="file2"
                    accept=".png,.jpeg,.jpg"
                    onChange={(e) => setprofile(e.target.files[0])}
                  />
                </label>
              )}
            </Col>
            <Col md={3} className="p-3">
              <h1
                className="profileInfoName"
                style={{ fontSize: "40px", textTransform: "capitalize" }}
              >
                {user.username}
              </h1>
              <h6 className="profileInfoDesc">
                {user.friends == null ? 0 : user.friends.length} Friends
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
                  friend ? (
                    <Button
                      onClick={unFriend}
                      variant="primary"
                      className="btn "
                    >
                      <IoMdAddCircle /> Friends
                    </Button>
                  ) : (
                    <Button
                      variant="primary"
                      className="btn "
                      onClick={handleClick}
                    >
                      <IoMdAddCircle />
                      {addFriend ? "Sent Request" : "Add Friend"}
                    </Button>
                  )
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
