// import Topbar from "../../components/topbar/Topbar";
import Header from "../../components/topbar/Header";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import "./home.css"
import { Container, Row, Col, Button, Navbar, Nav } from "react-bootstrap";

export default function Home() {
  return (
    <>
      <Header />
      <Container fluid style={{ backgroundColor: "rgb(240, 240, 240)" }}>
        <Row>
          <Col md={3}>
            <Sidebar />
          </Col>
          <Col md={6} style={{ padding: "20px 80px 20px 80px" }}>
            <Feed />
          </Col>
          <Col md={3}>
            <Rightbar />
          </Col>
        </Row>
      </Container>
    </>
  );
}
