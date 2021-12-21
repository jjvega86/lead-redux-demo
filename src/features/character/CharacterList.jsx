import React, { useEffect, useState } from "react";
//import { useGetCharactersQuery } from "../api/apiSlice";
import axios from "axios";

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
  const [characters, setCharacters] = useState([]);
  const [isSuccess, setIsSuccess] = useState(false);
  /* const {
    data: characters = [],
    isFetching,
    isSuccess,
  } = useGetCharactersQuery(); */

  useEffect(() => {
    fetchCharacters();
  }, []);

  const fetchCharacters = async () => {
    try {
      let response = await axios.get("https://swapi.dev/api/people");
      setCharacters(response.data.results);
      setIsSuccess(true);
    } catch (error) {
      console.log(error);
    }
  };

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
        >
          {character.name}
        </li>
      );
    });
  }
  return (
    <ul className="list-group" styles={styles.listGroupMine}>
      {content}
    </ul>
  );
};

export default CharacterList;
