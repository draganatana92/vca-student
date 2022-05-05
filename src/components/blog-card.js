import React from "react";
import Img from "./img";
import Link from "@/components/link";

const BlogCard = ({ data }) => {
  const { image, author, title, url, text } = data;
  return (
    <div className="blog_share_box">
      <div className="bl_share_img">
        <Img src={image} alt={title} className="img-fluid" />
      </div>
      <div className="blog_share_details">
        <span className="comment_author">
          Message from {author}
        </span>
        <h1>
          <Link href={url}>{title}</Link>
        </h1>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default BlogCard;
