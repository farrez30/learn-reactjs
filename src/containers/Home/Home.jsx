import React, { Component } from "react";
// import YouTubeComp from "../../components/YoutTubeComp/YouTubeComp";
// import Product from "../Product/Product";
// import LifeCycleComp from "../LifeCycleComp/LifeCycleComp";
import BlogPost from "../BlogPost/BlogPost";

export class Home extends Component {
  render() {
    return (  
      <div>
        {/* Youtube Component */}
        {/* <p>YouTube Component</p>
        <hr />
        <YouTubeComp time="7.12" title="Tutorial React JS - Bagian 1" desc="2x ditonton, 2 hari lalu" />
        <YouTubeComp time="8.02" title="Tutorial React JS - Bagian 2" desc="200x ditonton, 10 hari lalu" />
        <YouTubeComp time="5.04" title="Tutorial React JS - Bagian 3" desc="500x ditonton, 4 hari lalu" />
        <YouTubeComp time="4.12" title="Tutorial React JS - Bagian 4" desc="1k ditonton, 14 hari lalu" />
        <YouTubeComp /> */}
        {/* Counter useState clasComponent */}
        {/* <p>counter</p>
        <hr />
        <Product /> */}
        {/* LifeCycle Component */}
        {/* <p>LifeCycle Component</p>
        <hr />
        <LifeCycleComp /> */}
        {/* API */}
        <p>BlogPost</p>
        <hr />
        <BlogPost />
      </div>
    );
  }
}

export default Home;
