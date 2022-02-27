/** @format */

import "./suggestions.css";
import { Container, Row, Col, Button, Navbar, Nav } from "react-bootstrap";
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";
import { CircularProgress } from "@material-ui/core";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Suggestions() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const {
    user: currentUser,
    isFetching,
    load,
    dispatch,
  } = useContext(AuthContext);

  const [users, setusers] = useState([]);

  const [addFriend, setaddFriend] = useState(false);

  useEffect(() => {
    dispatch({ type: "RELOAD" });
    const fetchUser = async () => {
      const res = await axios.get(
        `/users/suggestions?userId=${currentUser._id}`
      );
      setusers(res.data);
      dispatch({ type: "STOPRELOAD" });
    };
    fetchUser();
  }, [currentUser._id]);

  const handleClick = async (user) => {
    try {
      if (currentUser.sentReq.includes(user)) {
        await axios.put(`/users/${user}/cancelreq`, {
          userId: currentUser._id,
        });
        dispatch({ type: "CANCEL_REQ", payload: user });
      } else {
        await axios.put(`/users/${user}/sentReq`, {
          userId: currentUser._id,
        });
        dispatch({ type: "ADD_FRIEND", payload: user });
      }
    } catch (err) {}
  };

  return (
    <>
      <Container fluid style={{ backgroundColor: "rgb(240, 240, 240)" }}>
        <Row>
          <Col md={3} style={{ backgroundColor: "white" }}>
            <div className="sidebar">
              <div className="sidebarWrapper">
                <Row className="mt-3 p-2">
                  <Col md={12}>
                    <h4 style={{ fontWeight: "800" }}>Friends you may know</h4>
                  </Col>
                </Row>
                {isFetching ? (
                  <div className="text-center">
                    <CircularProgress color="white" />
                  </div>
                ) : (
                  <div>
                    <ul className="sidebarList">
                      {!users.length ? (
                        <p style={{ textAlign: "center" }}>
                          <i>No Suggestions</i>
                        </p>
                      ) : (
                        users.map((e) => (
                          <li className="sidebarListItem">
                            <Row>
                              <Col md={3}>
                                <img
                                  src={
                                    e.profilePicture
                                      ? PF + "users/" + e.profilePicture
                                      : `${PF}person/noAvatar.png`
                                  }
                                  className="img-fluid user-img"
                                />
                              </Col>
                              <Col md={9}>
                                <h5 style={{ textTransform: "capitalize" }}>
                                  {e.username}
                                </h5>
                                <Row>
                                  <Col md={8} className="p-1">
                                    <Button
                                      variant={
                                        !currentUser.sentReq.includes(e._id)
                                          ? "primary col-12"
                                          : "secondary col-12"
                                      }
                                      onClick={() => {
                                        handleClick(e._id);
                                      }}
                                    >
                                      {currentUser.sentReq.includes(e._id)
                                        ? "Cancel Request"
                                        : "Add Friend"}
                                    </Button>
                                  </Col>
                                </Row>
                              </Col>
                            </Row>
                            <hr />
                          </li>
                        ))
                      )}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </Col>
          <Col md={9} className="right-part">
            <div className="right-part">
              <div className="bg-right">
                <span className="text-center">
                  {" "}
                  <img
                    src={`${PF}bg-request.png`}
                    className="img-fluid reqBG "
                  />
                  <h5>Select people's names to preview their profile.</h5>
                </span>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
