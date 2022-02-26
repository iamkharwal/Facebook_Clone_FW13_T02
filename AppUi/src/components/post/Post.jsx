/** @format */

import "./post.css";
import { MoreVert } from "@material-ui/icons";
import { useState, useEffect, useContext } from "react";
import { Container, Row, Col, Button, Navbar, Nav } from "react-bootstrap";
import { AiOutlineLike } from "react-icons/ai";
import { BiComment } from "react-icons/bi";
import { RiShareForwardLine } from "react-icons/ri";
import SettingsIcon from "@material-ui/icons/Settings";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import axios from "axios";
import { format } from "timeago.js";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

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
    } catch (error) { }
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
                    ? PF + user.profilePicture
                    : PF + "person/noAvatar.png"
                }
                alt=""
              />
            </Link>
            <span className="postUsername">
              <div>
                {user.username}
              </div>
              <div className="postDate">
                {format(post.createdAt)}
                <span>
                  <FiberManualRecordIcon style={{ fontSize: "5px", marginLeft: "5px" }} />
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
          <div className="postBottomRight">
            <span className="postCommentText">{post.comment} comments</span>
          </div>
        </div>
        <hr />
        <Row className="text-center">
          <Col md={4}>
            <Button variant="white">
              <AiOutlineLike className="iconBig" />{" "}
              <span style={{ fontSize: "18px" }}>Like</span>
            </Button>
          </Col>
          <Col md={4}>
            {" "}
            <Button variant="white">
              <BiComment className="iconBig" />{" "}
              <span style={{ fontSize: "18px" }}>Comment</span>
            </Button>
          </Col>
          <Col md={4}>
            {" "}
            <Button variant="white">
              <RiShareForwardLine className="iconBig" />{" "}
              <span style={{ fontSize: "18px" }}>Share</span>
            </Button>
          </Col>
        </Row>
        <hr />
        <Row className="postLastBox">
          <div>
            <img
              className="postOwnImg"
              src={
                user.profilePicture
                  ? PF + user.profilePicture
                  : PF + "person/noAvatar.png"
              }
              alt=""
            />
          </div>
          <div className="commentSection">
            Write a comment...
            <span>
              <img
                width="21px"
                height="21px"
                className="CommentPics"
                src="assets/sticker.png"
              />
              <img
                width="25px"
                height="25px"
                className="CommentPics"
                src="assets/gif.png"
              />
              <img
                width="25px"
                height="25px"
                className="CommentPics"
                src="assets/camera.png"
              />

              <img
                width="22px"
                height="22px"
                className="CommentPics"
                src="assets/smile.png"
              />
            </span>
          </div>
        </Row>
      </div>
    </div>
  );
}
