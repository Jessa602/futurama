import { useState } from "react";
import "./App.css";
import CharacterList from "./components/CharacterList.jsx";
import SelectedCharacter from "./components/SelectedCharacter.jsx";

export default function App() {
  const [selectedCharacterId, setSelectedCharacterId] = useState(null);

  return (
    <>
      {selectedCharacterId ? (
        <div className="wrapper">
          <div className="card">
            <SelectedCharacter
              selectedCharacterId={selectedCharacterId}
              setSelectedCharacterId={setSelectedCharacterId}
            />
          </div>
        </div>
      ) : (
        <CharacterList setSelectedCharacterId={setSelectedCharacterId} />
      )}
    </>
  );
}
