import { useEffect } from "react";
import { useState } from "react";
import CharacterCard from "./CharacterCard.jsx";

const URL = `https://api.sampleapis.com/futurama/characters`;

export default function CharacterList({ setSelectedCharacterId }) {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    async function fetchCharacters() {
      try {
        const response = await fetch(URL);
        const result = await response.json();
        setCharacters(result);
        console.log(result);
      } catch (error) {
        console.log(error);
      }
    }
    fetchCharacters();
  }, []);

  return (
    <div className="card">
      {characters.map((character) => {
        return (
          <CharacterCard
            key={character.id}
            character={character}
            setSelectedCharacterId={setSelectedCharacterId}
          />
        );
      })}
    </div>
  );
}
