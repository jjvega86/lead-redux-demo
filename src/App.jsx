import React, { useState } from "react";
import "./App.css";

//import { useSelector } from "react-redux";
//import { selectCharacterName } from "./features/character/characterSlice";

import Character from "./features/character/Character.jsx";
import CharacterForm from "./features/character/CharacterForm";
import CharacterList from "./features/character/CharacterList";
import NavBar from "./components/Navbar";

/* DEMO:
    Start by showing application and how state is being used and passed around as props, as well as how it is changed
    Then change how we select and dispatch actions to change the character name
    Then change likes/dislikes
    Then change how characters are being fetched and loading states handled
    SHOW REDUX DEV TOOLS
 */

//TODO: Show adding an endpoint query with parameter

const App = () => {
  //const characterName = useSelector(selectCharacterName);
  const [characterName, setCharacterName] = useState("Luke Skywalker");

  const changeName = (newName) => {
    setCharacterName(newName);
  };

  return (
    <>
      <NavBar characterName={characterName} />
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6">
            <Character characterName={characterName} />
            <div className="mt-5">
              <CharacterForm changeName={changeName} />
            </div>
          </div>
          <div className="col-md-3">
            <CharacterList />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;