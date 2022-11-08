import React from 'react';
import "./App.css";
import Header from "./components/header/Header";
import Navigation from "./components/navigation/Navigation";
import Home from "./components/home/home";
import Bookmark from "./components/bookmark/bookmark";
import Form from "./components/form/form";
import Profile from "./components/profile/profile";
import { useState } from 'react';
import { cards as initialCards } from "./input/cards";

export default function App() {
  const [page, setPage] = useState("home");
  const [cards, setCards] = useState(initialCards)
  console.log(cards)
  const handleClickPage = (page) => {
    setPage(page);
  };
  return (
    <main className="App__Header">
      <Header />
      <div>
      <Home page={page} setPage={setPage} cards={cards} setCards={setCards} />
      <Bookmark page={page} setPage={setPage} cards={cards} setCards={setCards}/>
      <Form page={page} setPage={setPage} />
      <Profile page={page} setPage={setPage} />
      </div>
      <div className="App__Navigation">
      <Navigation 
      page={page}
      setPage={setPage}
      handleClickPage={handleClickPage}
      />
      </div>
    </main>
  );
}