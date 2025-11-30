import Card from "./Card.jsx";
import { useState, useEffect } from "react";
import "../styles/CardContainer.css";

export default function CardContainer() {
  // expand to 12 characters so we can show 6 per row x 2 rows
  const [charactersIds, setCharactersIds] = useState([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
  ]);
  const [currentScore, setCurrentScore] = useState(0);
  const [topScore, setTopScore] = useState(0);
  const [clickedIds, setClickedIds] = useState(new Map());

  function handleCardClick(id) {
    if (clickedIds.has(id)) {
      //já clicou nesse id
      setCurrentScore(0);
      setClickedIds(new Map());
    } else {
      //não clicou nesse id
      setClickedIds((prev) => {
        const newMap = new Map(prev); // copia
        newMap.set(id, true); // altera apenas a cópia
        return newMap;
      });
      setCurrentScore(currentScore + 1);
      if (currentScore + 1 > topScore) {
        setTopScore(currentScore + 1);
      }
    }
    setCharactersIds(shuffleArray(charactersIds));
  }

  //algum jeito pra embaralhar a lista
  function shuffleArray(array) {
    return [...array].sort(() => Math.random() - 0.5);
  }
  // useeffect para shuffle ao montar
  useEffect(() => {
    setCharactersIds(shuffleArray(charactersIds));
  }, []);

  return (
    <div className="card-container">
      <div className="scoreboard">
        <div className="score">Current Score: {currentScore}</div>
        <div className="score">Top Score: {topScore}</div>
      </div>

      <div className="cards-grid">
        {charactersIds.map((i) => (
          <Card
            className="card"
            onClick={() => handleCardClick(i)}
            key={i}
            id={i}
          />
        ))}
      </div>
    </div>
  );
}
