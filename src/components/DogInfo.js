import React from "react";

export default function DogInfo({ goodDogClick, pup }) {
  const goodDog = (pup) => {
    return pup.isGoodDog ? "Good Dog!" : "Bad Dog!";
  };

 
      return (
        <div id="dog-info">
          <img src={pup.image} alt={pup.name + "puppy"} />
          <h2>{pup.name}</h2>
          <button onClick={() => goodDogClick(pup)}>{goodDog(pup)}</button>
        </div>
      );
     
}

// if (pup !== {}) {
//   return (
//     <div>
//       <img src={pup.image} alt={pup.name + "puppy"} />
//       <h2>{pup.name}</h2>
//       <button>{goodDog(pup)}</button>
//     </div>
//   );
// } else {
//   return null;
// }
// };

// return  pup === {} ? null : displayPup(pup)
