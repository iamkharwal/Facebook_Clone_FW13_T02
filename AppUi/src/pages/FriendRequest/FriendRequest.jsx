/** @format */

import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import "./Request.css";
import { Container, Row, Col, Button, Navbar, Nav } from "react-bootstrap";
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";

export default function FriendRequest() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const { user } = useContext(AuthContext);

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
                <Row className="p-2">
                  <Col>
                    <h6>4 Friends Requests</h6>
                  </Col>
                  <Col className="d-flex flex-row-reverse">
                    <h6>See All</h6>
                  </Col>
                </Row>
                <ul className="sidebarList">
                  <li className="sidebarListItem">
                    <Row>
                      <Col md={3}>
                        <img
                          src={`${PF}person/noAvatar.png`}
                          className="img-fluid user-img"
                        />
                      </Col>
                      <Col md={9}>
                        {" "}
                        <h5>Atul Kharwal</h5>
                        <Row>
                          <Col md={6} className="p-1">
                            {" "}
                            <Button variant="primary col-12">Confirm</Button>
                          </Col>
                          <Col md={6} className="p-1">
                            <Button variant="secondary col-12">Delete</Button>{" "}
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </li>
                </ul>
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
