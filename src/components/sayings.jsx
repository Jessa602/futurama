// import React, { useEffect, useState } from "react";

// export default function Sayings({ character, setSelectedCharacterId }) {
//   return (
//     <div className="sayings">
//       {sayings.map((saying) => {
//         return (
//           <ul className="list">
//             <li>SAYINGS: {saying && saying.sayings}</li>
//           </ul>
//         );
//       })}
//     </div>
//   );
// }
import React, { useEffect, useState } from "react";

const MyComponent = () => {
  const [sayings, setSayings] = useState([]);

  useEffect(() => {
    // Fetch data from the external API
    fetch("https://api.sampleapis.com/futurama/characters{character.sayings}")
      .then((response) => response.json())
      .then((data) => setSayings(data.sayings))
      .catch((error) => console.error("Error fetching sayings:", error));
  }, []);

  return (
    <div>
      <h1>Some Sayings:</h1>
      <ul>
        {sayings.map((saying, index) => (
          <li key={index}>{saying}</li>
        ))}
      </ul>
    </div>
  );
};

export default MyComponent;
