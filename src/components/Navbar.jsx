import React from "react";
import { useSelector } from "react-redux";
import { selectCharacterName } from "../features/character/characterSlice";

const NavBar = () => {
  const characterName = useSelector(selectCharacterName);
  return <h1 className="navbar">Hello, {characterName}</h1>;
};

export default NavBar;
