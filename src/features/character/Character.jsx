import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addDisLike, addLike } from "./characterSlice";

const Character = () => {
  const character = useSelector((state) => state.character);
  const dispatch = useDispatch();

  // use data from props as BEFORE to fill in characterName
  // Then define state and onClick handlers to add likes that are only available on this component

  return (
    <article>
      <h1>{character.name}</h1>
      <p>
        <strong>Like Count: {character.likes}</strong>&nbsp; &nbsp;
        <span>
          <button onClick={() => dispatch(addLike())}>Like</button>
        </span>
      </p>
      <p>
        <strong>Dislike Count: {character.dislikes}</strong> &nbsp; &nbsp;
        <span>
          <button onClick={() => dispatch(addDisLike())}>Dislike</button>
        </span>
      </p>
    </article>
  );
};

export default Character;
