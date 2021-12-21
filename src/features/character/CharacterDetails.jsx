import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  useGetSingleCharacterQuery,
  useGetCharactersQuery,
} from "../api/apiSlice";

//! When demoing, make sure to pull network tab and show how going back to previous characters before cache is dumped will not trigger a re-fetch
const CharacterDetails = () => {
  const [characterSelection, setCharacterSelection] = useState("1");
  const { data: character = {} } =
    useGetSingleCharacterQuery(characterSelection);
  const { data: characters = [] } = useGetCharactersQuery();

  const characterOptions = characters.map((character, index) => {
    return <option value={index + 1}>{character.name}</option>;
  });

  return (
    <div>
      <label htmlFor="characterSelect">Pick a Character!:</label> <br />
      <select
        id="characterSelect"
        className="mt-3"
        value={characterSelection}
        onChange={(e) => setCharacterSelection(e.target.value)}
        style={{ color: "yellow", backgroundColor: "black" }}
      >
        {characterOptions}
      </select>
      <h3 className="mt-4">{character.name}</h3>
      <p>Birth Year: {character.birth_year}</p>
      <p>Eye Color: {character.eye_color}</p>
    </div>
  );
};

export default CharacterDetails;
