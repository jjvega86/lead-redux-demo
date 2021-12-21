import React from "react";
import "./App.css";

import Character from "./features/character/Character.jsx";
import CharacterForm from "./features/character/CharacterForm";
import CharacterList from "./features/character/CharacterList";
import CharacterDetails from "./features/character/CharacterDetails";
import NavBar from "./components/Navbar";

/* DEMO:
    Start by showing application and how state is being used and passed around as props, as well as how it is changed
    NOTE: Need a single piece of state
    Then change how we select and dispatch actions to change the character name
    Then change likes/dislikes
    Then change how characters are being fetched and loading states handled (both CharacterList and CharacterDetails)
    SHOW REDUX DEV TOOLS
 */

const App = () => {
  //useState here for characterName -> pass as prop to Character and NavBar
  // pass state changing function to CharacterForm to change name
  return (
    <>
      <NavBar />
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6">
            <Character />
            <div className="mt-5">
              <CharacterForm />
            </div>
          </div>
          <div className="col-md-3">
            <CharacterList />
          </div>
        </div>
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6">
            <CharacterDetails />
          </div>
          <div className="col-md-3"></div>
        </div>
      </div>
    </>
  );
};

export default App;
