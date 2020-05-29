import React, { useState, ChangeEvent, FormEvent, FocusEvent } from "react";
import "./App.css";

interface InputProps {
  addPost: AddPost;
}

export const Input: React.FC<InputProps> = ({ addPost }) => {
  const [newPost, setNewPost] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewPost(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    addPost(newPost);
    console.log(newPost);
  };

  const handleFocus = (e: FocusEvent<HTMLInputElement>) => {
    e.target.value = " ";
  };

  return (
    <div>
      <input
        className="comment"
        value={newPost}
        type="text"
        placeholder="Hi Eman What's in your mind"
        onChange={handleChange}
        onFocus={handleFocus}
      />
      <button type="submit" onClick={handleSubmit} className="button">
        Post
      </button>
    </div>
  );
};
