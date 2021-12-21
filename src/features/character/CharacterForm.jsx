import React, { useState } from "react";
//import { useDispatch } from "react-redux";
//import { changeCharacter } from "./characterSlice";

const CharacterForm = ({ changeName }) => {
  const [characterNameInput, setCharacterNameInput] = useState("");
  //const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    changeName(characterNameInput);
    setCharacterNameInput("");
  };

  return (
    <form onSubmit={handleSubmit}>
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
