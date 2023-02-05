import React, { Component } from "react";
import Sidebar from "./Sidebar";
import Content from "./Content";
import getPosts from "../Services/getPosts";

class BlogPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: null,
      currentPost: null,
    };
    this.handleChangeCurrentPost = this.handleChangeCurrentPost.bind(this);
  }

  componentDidMount() {
    getPosts().then((posts) => this.setState({ posts, currentPost: 0 }));
  }
  handleChangeCurrentPost(index) {
    this.setState({ currentPost: index });
  }
  render() {
    return (
      <>
        <Sidebar
          posts={this.state.posts}
          handleChangeCurrentPost={this.handleChangeCurrentPost}
        />
        {null != this.state.currentPost && (
          <Content post={this.state.posts[this.state.currentPost]} />
        )}
      </>
    );
  }
}

export default BlogPost;
