import { useEffect, useState, Component } from "react";
import React from "react";
import "./game.css";

import back from "./images/backSide.jpg";
import ancientDragon from"./images/ancientDragon.jpg";
import eveningStarDragon from"./images/eveningStarDragon.jpg";
import letiasMaster from "./images/letiasMaster.jpg";
import masterCalamity from"./images/masterCalamity.jpg";
import potOfGreed from "./images/potOfGreed.jpg";
import valentine from"./images/valentine.jpg";

const cardsArray = [
    {"src": ancientDragon}, 
    {"src": eveningStarDragon}, 
    {"src": letiasMaster}, 
    {"src": masterCalamity}, 
    {"src": potOfGreed}, 
    {"src": valentine}
];


function App(){

    //State creations
    const [cards, setCards] = useState([])
    const [rounds, setRounds] = useState(0)

    const shuffle = () => {
        const shuffleCards = [...cardsArray, ...cardsArray]
        .sort(() => Math.random() - 0.5)
        .map((card) => ({...card, id:Math.random() }))

        setCards(shuffleCards)
        setRounds(0)
    }

    const hello = () =>{
        console.log(Math.random())
    }

    console.log(cards, rounds)

    return (
        <div className="App"> 
            <h1>Juego de memoria</h1>
            <button onClick={shuffle}>New Game</button>

            <div className="grid">
            {cards.map(card => (
                <div className="card" key={card.id}>
                    <div>
                        <img src={card.src} className = "front"></img>
                        <img src={back}></img>
                    </div>
                </div>
            ))}
            </div> 
        </div>
    );
}


export default App