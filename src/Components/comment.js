import classes from "./comment.module.css";

const Comment = () => {
  const postHandler = () => {
    alert("Successfully Posted!!");
  };
  return (
    <>
      <div className={classes.text}>
        <textarea rows="8" placeholder="Add Comment..." cols="45"></textarea>
      </div>
      <div>
        <button onClick={postHandler}>Post</button>
      </div>
    </>
  );
};

export default Comment;
