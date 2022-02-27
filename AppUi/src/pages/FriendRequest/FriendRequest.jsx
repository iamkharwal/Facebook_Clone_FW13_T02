/** @format */

import "./Request.css";
import {
  Container,
  Row,
  Col,
  Button,
  Navbar,
  Nav,
  Alert,
} from "react-bootstrap";
import { AuthContext } from "../../context/AuthContext";
import { CircularProgress } from "@material-ui/core";
import { useContext, useEffect, useState } from "react";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import axios from "axios";
export default function FriendRequest() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const {
    user: currentUser,
    isFetching,
    load,
    dispatch,
  } = useContext(AuthContext);
  const [user, setuser] = useState([]);

  const fetchUser = async () => {
    dispatch({ type: "RELOAD" });
    const res = await axios.get(
      `/users/pendingrequest?userId=${currentUser._id}`
    );
    setuser(res.data);
    dispatch({ type: "STOPRELOAD" });
  };
  useEffect(() => {
    fetchUser();
  }, [currentUser._id]);

  const handleClick = async (userId) => {
    try {
      dispatch({ type: "LOAD" });
      await axios.put(`/users/${userId}/accept`, {
        userId: currentUser._id,
      });
      dispatch({ type: "ACCEPT_REQ", payload: userId });
    } catch (err) {}
  };

  //delete request from pending request page

  const deleteReq = async (userId) => {
    try {
      dispatch({ type: "RELOAD" });
      await axios.put(`/users/${userId}/deletereq`, {
        userId: currentUser._id,
      });
      dispatch({ type: "DELETE_REQ", payload: userId });
      fetchUser();
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
                  <Col md={8}>
                    <h4 style={{ fontWeight: "800" }}>Friends Requests</h4>
                  </Col>
                  <Col md={4} className="d-flex flex-row-reverse">
                    {<SettingsOutlinedIcon />}
                  </Col>
                </Row>
                {isFetching ? (
                  <div className="text-center">
                    <CircularProgress color="white" />
                  </div>
                ) : (
                  <div>
                    <Row className="p-2">
                      <Col>
                        <h6>
                          {user.length == null ? 0 : user.length} Friends
                          Requests
                        </h6>
                      </Col>
                      <Col className="d-flex flex-row-reverse">
                        <h6>See All</h6>
                      </Col>
                    </Row>

                    <ul className="sidebarList">
                      {user.map((e) => (
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
                              {" "}
                              <h5 style={{ textTransform: "capitalize" }}>
                                {e.username}
                              </h5>
                              <Row>
                                <Col md={6} className="p-1">
                                  {currentUser.friends.includes(e._id) ? (
                                    <Alert variant="success">Accepted!!!</Alert>
                                  ) : (
                                    <Button
                                      variant="primary col-12"
                                      onClick={() => handleClick(e._id)}
                                    >
                                      {load ? (
                                        <CircularProgress
                                          color="white"
                                          size="20px"
                                        />
                                      ) : (
                                        "Confirm "
                                      )}
                                    </Button>
                                  )}
                                </Col>
                                <Col md={6} className="p-1">
                                  {currentUser.friends.includes(e._id) ? (
                                    ""
                                  ) : (
                                    <Button
                                      variant="secondary col-12"
                                      onClick={() => deleteReq(e._id)}
                                    >
                                      {isFetching ? (
                                        <CircularProgress
                                          color="black"
                                          size="20px"
                                        />
                                      ) : (
                                        "Delete"
                                      )}
                                    </Button>
                                  )}
                                </Col>
                              </Row>
                            </Col>
                          </Row>
                        </li>
                      ))}
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
