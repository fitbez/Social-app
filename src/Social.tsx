import React, { useState } from "react";
import { Profile } from "./Profile";
import { ImageUpload } from "./ImageUpload";
import { PostList } from "./PostList";
import { Input } from "./Input";
import "./App.css";

const initialPosts: Array<Post> = [
  {
    text: "",
  },
];

const Social: React.FC = () => {
  const [posts, setPosts] = useState(initialPosts);

  const addPost: AddPost = (newPost) => {
    setPosts([...posts, { text: newPost }]);
  };

  console.log(posts);
  return (
    <div>
      <div className="social">
        <Profile />
        <ImageUpload />
        <PostList posts={posts} />
        <Input addPost={addPost} />
      </div>
    </div>
  );
};

export default Social;
