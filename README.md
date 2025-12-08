#Top Memory Card

A memory game built with React (Vite) using characters from the Rick and Morty API.
The objective is simple: click each character only once. If the user clicks the same card twice, the current score resets, while the Top Score is preserved.
![Project preview](src/assets/bg.jpg)

[View hosted preview](https://top-memory-card-gs0du9n84-thiago-nadims-projects.vercel.app)

##🚀 Features

Dynamic character loading by ID via the Rick and Morty API

Interactive cards with keyboard support (Enter/Space)

Scoreboard showing current score and highest score

Cards are shuffled after every move

Responsive layout with an adaptive grid

##🛠️ How to Run the Project

Install dependencies:

npm install


Start the development server:

npm run dev


After that, open the address displayed by Vite (usually http://localhost:5173).

##🧱 Project Architecture

index.html — entry point of the application

src/main.jsx — React initialization

src/App.jsx — root component

src/components/CardContainer.jsx — scoring logic, shuffling, and card rendering

src/components/Card.jsx — individual card component responsible for fetching and displaying character data

src/styles/ — CSS files (App.css, CardContainer.css, Card.css)
