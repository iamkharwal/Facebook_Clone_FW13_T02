/** @format */

import "./post.css";
import { MoreVert } from "@material-ui/icons";
import { Users } from "../../dummyData";
import { useState } from "react";
import { Container, Row, Col, Button, Navbar, Nav } from "react-bootstrap";
import { AiOutlineLike } from "react-icons/ai";
import { BiComment } from "react-icons/bi";
import { RiShareForwardLine } from "react-icons/ri";

export default function Post({ post }) {
  const [like, setLike] = useState(post.like);
  const [isLiked, setIsLiked] = useState(false);

  const likeHandler = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              className="postProfileImg"
              src={Users.filter((u) => u.id === post?.userId)[0].profilePicture}
              alt=""
            />
            <span className="postUsername">
              {Users.filter((u) => u.id === post?.userId)[0].username}
            </span>
            <span className="postDate">{post.date}</span>
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
          <img className="postImg" src={post.photo} alt="" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img
              className="likeIcon"
              src="assets/like.png"
              onClick={likeHandler}
              alt=""
            />
            <img
              className="likeIcon"
              src="assets/heart.png"
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
        <Row className="text-center px-3">
          <Col md={4}>
            <Button variant="white">
              <AiOutlineLike /> Like
            </Button>
          </Col>

          <Col md={4}>
            {" "}
            <Button variant="white">
              <BiComment /> Comment
            </Button>
          </Col>
          <Col md={4}>
            {" "}
            <Button variant="white">
              <RiShareForwardLine /> Share
            </Button>
          </Col>
        </Row>
      </div>
    </div>
  );
}
