import React from "react";
import { useGetCharactersQuery } from "../api/apiSlice";
import { useDispatch } from "react-redux";
import { changeCharacter } from "./characterSlice";

const styles = {
  listGroupMine: {
    backgroundColor: "black",
    color: "#ffe81f",
  },
  listItemMine: {
    backgroundColor: "black",
    color: "#ffe81f",
    border: "0.1em groove white",
  },
};

const CharacterList = () => {
  const { data: characters = [], isSuccess } = useGetCharactersQuery();
  const dispatch = useDispatch();

  // useState, useEffect, and axios/fetch to make API call and handle loading states

  let content;

  if (!isSuccess) {
    content = <h1>Loading...</h1>;
  } else if (isSuccess) {
    content = characters.map((character) => {
      return (
        <li
          className="list-group-item"
          key={character.name}
          style={styles.listItemMine}
          onClick={() => dispatch(changeCharacter(character.name))}
        >
          {character.name}
        </li>
      );
    });
  }
  return (
    <>
      <label htmlFor="character-list">Click a Character to Select!</label>
      <ul
        className="list-group"
        id="character-list"
        styles={styles.listGroupMine}
      >
        {content}
      </ul>
    </>
  );
};

export default CharacterList;
