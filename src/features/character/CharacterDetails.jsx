import React, { useState, useEffect } from "react";
import axios from "axios";
//import { useGetSingleCharacterQuery } from "../api/apiSlice";

const CharacterDetails = () => {
  const [character, setCharacter] = useState({});
  const [characterSelection, setCharacterSelection] = useState("1");
  /* const { data: singleCharacter = {} } =
    useGetSingleCharacterQuery(characterSelection); */

  useEffect(() => {
    fetchCharacter(characterSelection);
  }, [characterSelection]);

  const fetchCharacter = async (characterId) => {
    try {
      let response = await axios.get(
        `https://swapi.dev/api/people/${characterId}/`
      );
      console.log(response);
      setCharacter(response.data);
    } catch (error) {
      console.log(error);
    }
  };
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
        <option value="1">Luke Skywalker</option>
        <option value="2">C-3P0</option>
        <option value="3">R2-D2</option>
        <option value="4">Darth Vader</option>
        <option value="5">Leia Organa</option>
        <option value="6">Owen Lars</option>
        <option value="7">Beru Whitesun Lars</option>
        <option value="8">R5-D4</option>
        <option value="9">Biggs Darklighter</option>
        <option value="10">Obi-Wan Kenobi</option>
      </select>
      <h3 className="mt-4">{character.name}</h3>
      <p>Birth Year: {character.birth_year}</p>
      <p>Eye Color: {character.eye_color}</p>
    </div>
  );
};

export default CharacterDetails;
