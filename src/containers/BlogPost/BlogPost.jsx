import React, { Component, Fragment } from "react";
import "./BlogPost.css";
import Post from "../../components/Post/Post";
import axios from "axios";

export class BlogPost extends Component {
  state = {
    post: [],
    formBlogPost: {
      id: 1,
      title: "",
      body: "",
      userId: 1,
    },
  };

  getPostAPI = () => {
    axios.get("http://localhost:4000/posts").then((result) => {
      this.setState({
        post: result.data,
      });
    });
  };

  handleRemove = (data) => {
    axios.delete(`http://localhost:4000/posts/${data}`).then((res) => {
      this.getPostAPI();
    });
  };

  handleFormChange = (event) => {
    let formBlogPostNew = { ...this.state.formBlogPost };
    formBlogPostNew[event.target.name] = event.target.value;
    this.setState(
      {
        formBlogPost: formBlogPostNew,
      },
      () => {
        console.log("value obj formBlogPost: ", this.state.formBlogPost);
      }
    );
  };

  componentDidMount() {
    this.getPostAPI();
  }
  render() {
    return (
      <Fragment>
        <p className="section-title">Blog Post</p>
        <div className="form-add-post">
          <label htmlFor="title">Title</label>
          <input type="text" name="title" placeholder="add Title" onChange={this.handleFormChange} />
          <label htmlFor="body">Blog Content</label>
          <textarea
            name="body"
            id="body"
            cols={30}
            rows={10}
            placeholder="add blog content"
            defaultValue={""}
            onChange={this.handleFormChange}
          />
          <button className="btn-submit">Simpan</button>
        </div>

        {this.state.post.map((post) => {
          return <Post key={post.id} data={post} title={post.title} desc={post.body} remove={this.handleRemove} />;
        })}
      </Fragment>
    );
  }
}

export default BlogPost;
