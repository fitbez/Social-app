import React from "react";
import { Content } from "./Content";

interface PostListProps {
  posts: Array<Post>;
}

export const PostList: React.FC<PostListProps> = ({ posts }) => {
  return (
    <ul>
      {posts.map((post) => {
        return <Content key={post.text} post={post} />;
      })}
    </ul>
  );
};
