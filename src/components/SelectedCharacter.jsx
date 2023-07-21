import { useState } from "react";
import { useEffect } from "react";
import App from "../App.css";
import sayings from "./sayings.jsx";
import MyComponent from "./sayings.jsx";

//const sayings = for(let i = 0; i < character.sayings.length; i++){
// console.log(character.sayings[i]);
//}

export default function SelectedContact({
  selectedCharacterId,
  setSelectedCharacterId,
}) {
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    async function fetchCharacter() {
      try {
        const response = await fetch(
          `https://api.sampleapis.com/futurama/characters/${selectedCharacterId}`
        );
        const result = await response.json();
        setCharacter(result);
        console.log(result);
      } catch (error) {
        console.log(error);
      }
    }
    fetchCharacter();
  }, [selectedCharacterId]);

  return (
    <div>
      <h2>
        {character && character.name.first + " "}
        {character && character.name.middle + " "}
        {character && character.name.last}
      </h2>

      <img className="large-image" src={character && character.images.main} />

      <ul className="list">
        <li>SPECIES: {character && character.species}</li>
        <li>GENDER: {character && character.gender}</li>
        <li>AGE: {character && character.age}</li>
        <li>HOME PLANET: {character && character.homePlanet}</li>
        <li>OCCUPATION: {character && character.occupation}</li>
        &nbsp;
        <li>SAYINGS: {character && character.sayings} </li>
      </ul>

      <button
        onClick={() => {
          setSelectedCharacterId(null);
        }}
      >
        Back
      </button>
    </div>
  );
}
