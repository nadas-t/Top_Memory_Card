import { useEffect, useState } from "react";
import Card from "./components/Card.jsx";
import CardContainer from "./components/CardContainer.jsx";
import "./styles/App.css";

export default function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Rick and Morty Memory Card</h1>
        <p className="subtitle">Try to click each character only once</p>
      </header>

      <main>
        <CardContainer />
      </main>
    </div>
  );
}
