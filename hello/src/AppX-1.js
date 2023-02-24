import React, { useState, useEffect } from "react";
import Loading from "./Components/Loading";
import Toast from "./Components/Toast";

export default function App() {
  const [toast, setToast] = useState({ type: "info", message: "" });
  const [title, setTitle] = useState("");
  const [postId, setPostId] = useState(1);
  const [loading, setLoading] = useState(true);

  function userAction(type, payLoad) {
    switch (type) {
      case "get-post-success":
        setTitle(payLoad.title);
        setLoading(false);
        setToast({
          type: "success",
          message: payLoad.message,
        });
        break;
      case "get-post-request":
        setPostId(payLoad);
        setLoading(true);
      default:
        break;
    }
  }

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then((response) => response.json())
      .then((post) => {
        userAction("get-post-success", {
          title: post.title,
          message: `Post with id ${postId} loaded`,
        });
      });
  }, [postId]);
  function handleLoading(e) {
    userAction("get-post-request", e.target.value);
  }
  return (
    <div className="container">
      <div>
        <label>Post Id: </label>
        <input value={postId} onChange={handleLoading} type="number" />
      </div>
      <div>{loading ? <Loading /> : <h1>{title}</h1>}</div>
      <Toast type={toast.type} message={toast.message} />
    </div>
  );
}
