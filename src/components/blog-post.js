import React from "react";
import Img from "./img";
import blogDetails1 from "@/images/blog/blog-details.jpg";

const BlogPost = () => {
  return (
    <div>
      <div className="blog_left_box">
        <div className="bl_share_img">
          <Img src={blogDetails1} alt="blog details" className="img-fluid" />
          <span className="blog_date">26 Nov</span>
        </div>
        <div className="blog_share_details blog_share_details__details">
          <span className="comment_author">
            by <a href="#">admin</a> - <a href="#">3 Comments</a>
          </span>
          <h1>Simple hack to improve A/C efficiency</h1>
          <p>
            We provide world-class medicine with hometown care, powered by the people who carry on our shared legacy of excellence at each of our local hospitals.
          </p>
          <p>
            We provide world-class medicine with hometown care, powered by the people who carry on our shared legacy of excellence at each of our local hospitals.
          </p>
        </div>
      </div>
      <div className="blog_social_share_box">
        <div className="share_box_left">
          <p>
            Tags: <a href="#">repairing,</a> <a href="#">heating,</a>{" "}
            <a href="#">air,</a> <a href="#">conditioning</a>
          </p>
        </div>
        <div className="share_box_left text-end">
          <ul>
            <li>
              <a href="">
                <i className="fa fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="">
                <i className="fa fa-facebook"></i>
              </a>
            </li>
            <li>
              <a href="">
                <i className="fa fa-youtube-play"></i>
              </a>
            </li>
            <li>
              <a href="">
                <i className="fa fa-google-plus"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
