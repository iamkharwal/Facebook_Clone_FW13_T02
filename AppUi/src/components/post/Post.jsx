/** @format */

import "./post.css";
import { MoreVert } from "@material-ui/icons";
import { useState, useEffect, useContext } from "react";
import { Container, Row, Col, Button, Navbar, Nav } from "react-bootstrap";

import SettingsIcon from "@material-ui/icons/Settings";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import axios from "axios";
import { format } from "timeago.js";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";

export default function Post({ post }) {
  const [like, setLike] = useState(post.likes.length);
  const [isLiked, setIsLiked] = useState(false);
  const [user, setUser] = useState({});
  const { user: currentUser } = useContext(AuthContext);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  useEffect(() => {
    setIsLiked(post.likes.includes(currentUser._id));
  }, [currentUser._id, post.likes]);

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`/users?userId=${post.userId}`);
      setUser(res.data);
    };
    fetchUser();
  }, [post.userId]);

  const likeHandler = () => {
    try {
      axios.put("/posts/" + post._id + "/like", { userId: currentUser._id });
    } catch (error) {}
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <Link to={`/profile/${user.username}`}>
              <img
                className="postProfileImg"
                src={
                  user.profilePicture
                    ? PF + "users/" + user.profilePicture
                    : PF + "person/noAvatar.png"
                }
                alt=""
              />
            </Link>
            <span className="postUsername">
              <div style={{ textTransform: "capitalize", fontWeight: "800" }}>
                {user.username}
              </div>
              <div className="postDate">
                {format(post.createdAt)}
                <span>
                  <FiberManualRecordIcon
                    style={{ fontSize: "5px", marginLeft: "5px" }}
                  />
                </span>
                <span>
                  <SettingsIcon className="postIcon" />
                </span>
              </div>
            </span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <br />
        <div className="postDesc">
          <span className="postText">{post?.desc}</span>
        </div>
        <div className="postCenter">
          <img className="postImg" src={PF + post.img} alt="" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img
              className="likeIcon"
              src={`${PF}like.png`}
              onClick={likeHandler}
              alt=""
            />
            <img
              className="likeIcon"
              src={`${PF}heart.png`}
              onClick={likeHandler}
              alt=""
            />
            <span className="postLikeCounter">{like} people like it</span>
          </div>
          <div className="postBottomRight"></div>
        </div>
        <hr />
        <Row className="text-center">
          <Col md={4}>
            <span
              className={isLiked ? "text-primary" : "text-dark"}
              style={{ fontSize: "16px", fontWeight: "400", cursor: "pointer" }}
              onClick={likeHandler}
            >
              {" "}
              {isLiked ? (
                <ThumbUpIcon fontSize="small" />
              ) : (
                <ThumbUpOutlinedIcon fontSize="small" />
              )}{" "}
              <span>Like</span>
            </span>
          </Col>
          <Col md={4}>
            {" "}
            <span style={{ fontSize: "16px", fontWeight: "400" }}>
              <ChatBubbleOutlineOutlinedIcon fontSize="small" />
              <span>Comment</span>
            </span>
          </Col>
          <Col md={4}>
            {" "}
            <span style={{ fontSize: "16px", fontWeight: "400" }}>
              <ShareOutlinedIcon fontSize="small" /> <span>Share</span>
            </span>
          </Col>
        </Row>
      </div>
    </div>
  );
}
