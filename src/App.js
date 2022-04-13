import { useEffect, useState, Component } from "react";
import React from "react";
import "./game.css";
import Cards from "./cards/card.js"

import ancientDragon from"./images/ancientDragon.jpg";
import eveningStarDragon from"./images/eveningStarDragon.jpg";
import letiasMaster from "./images/letiasMaster.jpg";
import masterCalamity from"./images/masterCalamity.jpg";
import potOfGreed from "./images/potOfGreed.jpg";
import valentine from"./images/valentine.jpg";

const cardsArray = [
    {id: 1, matching: false, src: ancientDragon}, 
    {id: 2, matching: false, src: eveningStarDragon}, 
    {id: 3, matching: false, src: letiasMaster}, 
    {id: 4, matching: false, src: masterCalamity}, 
    {id: 5, matching: false, src: potOfGreed}, 
    {id: 6, matching: false, src: valentine}
];


function App(){


    //State creations
    const [cardOne, setCardOne] = useState(null);
    const [cardTwo, setCardTwo] = useState(null);
    const [cards, setCards] = useState([]);
    const [rounds, setRounds] = useState(0);
    const [disable, setDisable] = useState(false);

  


    const shuffle = () => {
        const shuffleCards = [...cardsArray, ...cardsArray]
        .sort(() => Math.random() - 0.5)
        .map((card) => ({...card, id:Math.random() }))

        setCardOne(null);
        setCardTwo(null);
        setCards(shuffleCards);
        setRounds(0);
    }

    const hello = () =>{
        console.log(Math.random())
    }


    //console.log(cards, rounds)

    



    const choiceCard = (card) =>{
        console.log(card);
        cardOne ? setCardTwo(card):setCardOne(card);
    }

    const winningOrLosing = () =>{
        console.log("Hello");
        if(rounds === 20){
            alert("You Lose")
            shuffle();
        }

        
    }
    
    useEffect(()  =>{
        winningOrLosing();
        if(cardOne && cardTwo){
            setDisable(true);
            
            if(cardOne.src === cardTwo.src){
                console.log("The cards match");

                setCards(mathingCard =>{
                    return mathingCard.map(card => {
                        if(card.src === cardTwo.src){
                            return{...card, matching:true}
                        }


                        else{
                            return card;
                        }
                    })
                })
                
                setTimeout(() => resetCounter(), 1000);
            }

            else{
                console.log("The card are not mathing");
                setTimeout(() => resetCounter(), 1000);
            }
        }
        

    }, [cardOne, cardTwo])

    console.log(cards);

    useEffect(() => {
        shuffle();
    }, [])
    
    const resetCounter = () =>{
        setCardTwo(null);
        setCardOne(null);
        setRounds(turn => turn+1);
        setDisable(false);
    }

    return (
        <div className="App"> 
            <h1>Juego de memoria</h1>
            <p>Turns: {rounds}</p>
            <button onClick={shuffle}>New Game</button>

            <div className="grid">
            {cards.map(card => (
                
                <Cards key={card.id} 
                card={card}
                choiceCard = {choiceCard}
                isFlipped = {card.matching || card === cardOne || card === cardTwo}
                disable = {disable}
                ></Cards>
            ))}
            </div> 
        </div>
    );
}


export default App