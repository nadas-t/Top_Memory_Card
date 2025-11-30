import { useEffect, useState } from "react";
import "../styles/Card.css";

export default function Character({ id, onClick }) {
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    async function fetchCharacter() {
      const res = await fetch(
        `https://rickandmortyapi.com/api/character/${id}`
      );
      const data = await res.json();
      setCharacter(data);
    }

    fetchCharacter();
  }, [id]); // roda quando `id` mudar

  if (!character) return <p>Loading...</p>;

  return (
    <div
      className="card"
      onClick={onClick}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={(e) => {
        if (!onClick) return;
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onClick();
        }
      }}
    >
      <h1>{character.name}</h1>
      <img src={character.image} alt={character.name} />
      <p>Status: {character.status}</p>
      <p>Species: {character.species}</p>
    </div>
  );
}
