import { useState } from "react";
import classes from "./content.module.css";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ModeCommentIcon from "@mui/icons-material/ModeComment";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Xcode from "../Assests/Xcode.png";
import Comment from "./comment.js";
const Content = () => {
  const [likeClick, likeClickHandler] = useState(false);
  const [readMore, setReadMore] = useState(false);
  const [seeComment, setComment] = useState(false);

  const ClickHandler = () => {
    likeClickHandler((preVal) => {
      return !preVal;
    });
  };
  const ReadMoreHandler = () => {
    setReadMore((preVal) => {
      return !preVal;
    });
  };
  const SetCommentHandler = () => {
    setComment((preVal) => {
      return !preVal;
    });
  };
  const extraContent = (
    <div>
      <p>1.Uninstall Xcode and install it again</p>
      <p>2.delete Developer file from Users/library</p>
    </div>
  );
  const linkName = readMore ? "see less" : "see more";
  return (
    <section>
      <div className={classes.container}>
        <h2>Issue while opening React Native Project in Xcode</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
        </p>
        <p>The below image is what it's happening when i opened my project</p>
        <img src={Xcode} alt="xcode_image"></img>

        <p>The solution is tried...</p>

        {readMore && extraContent}
        <a onClick={ReadMoreHandler}>{linkName}</a>
      </div>
      {likeClick && (
        <div className={classes.after_liked}>
          <AccountCircleIcon />
          <p>Liked by Another User</p>
        </div>
      )}

      <div className={classes.footer}>
        <div className={classes.inside_footer}>
          <div>
            <button onClick={ClickHandler}>
              <span>{likeClick ? 1 : 0}</span>Like
              <span>
                <ThumbUpIcon />
              </span>
            </button>
          </div>
          <div>
            <button onClick={SetCommentHandler}>
              Comment
              <span>
                <ModeCommentIcon />
              </span>
            </button>
          </div>
        </div>
        <div className={classes.total_comments}>
          <p>8 comments</p>
        </div>
      </div>
      {seeComment && <Comment />}
    </section>
  );
};

export default Content;
