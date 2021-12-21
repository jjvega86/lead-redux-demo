import React, { useState } from "react";
//import { useDispatch, useSelector } from "react-redux";
//import { addDisLike, addLike } from "./characterSlice";

const Character = ({ characterName }) => {
  //const character = useSelector((state) => state.character);
  //const dispatch = useDispatch();
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  return (
    <article>
      <h1>{characterName}</h1>
      <p>
        <strong>Like Count: {likes}</strong>&nbsp; &nbsp;
        <span>
          <button onClick={() => setLikes((prev) => prev + 1)}>Like</button>
        </span>
      </p>
      <p>
        <strong>Dislike Count: {dislikes}</strong> &nbsp; &nbsp;
        <span>
          <button onClick={() => setDislikes((prev) => prev + 1)}>
            Dislike
          </button>
        </span>
      </p>
    </article>
  );
};

export default Character;
