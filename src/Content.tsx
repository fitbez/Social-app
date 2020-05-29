import React from "react";
import "./App.css";

interface ContentProps {
  post: Post;
}
export const Content: React.FC<ContentProps> = ({ post }) => {
  return <li className="content">{post.text}</li>;
};
