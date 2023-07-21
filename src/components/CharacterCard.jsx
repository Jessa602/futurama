import React from "react";
import ReactDOM from "react-dom/client";
import App from "../App.css";
import Sayings from "./sayings";

export default function CharacterCard({ character, setSelectedCharacterId }) {
  return (
    <div className="card-container">
      <div
        className="card"
        onClick={() => {
          setSelectedCharacterId(character.id);
        }}
      >
        <h1>
          {character && character.name.first + " "}
          {character && character.name.middle + " "}
          {character && character.name.last}
        </h1>
        <img className="image" src={character.images.main} />
        <ul className="list">
          <li>SPECIES: {character && character.species}</li>
          <li>GENDER: {character && character.gender}</li>
          <li>HOME PLANET: {character && character.homePlanet}</li>
          <li>OCCUPATION: {character && character.occupation}</li>
          <li>SAYINGS:</li>
        </ul>
      </div>
    </div>
  );
}
