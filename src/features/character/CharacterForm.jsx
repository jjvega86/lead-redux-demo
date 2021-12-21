import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { changeCharacter } from "./characterSlice";

const CharacterForm = () => {
  const [characterNameInput, setCharacterNameInput] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(changeCharacter(characterNameInput));
    setCharacterNameInput("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="characterName">Enter Character Name:</label>
      <br />
      <input
        value={characterNameInput}
        onChange={(event) => setCharacterNameInput(event.target.value)}
      />
      <br />
      <button type="submit" className="mt-4">
        Change Character Name!
      </button>
    </form>
  );
};

export default CharacterForm;
