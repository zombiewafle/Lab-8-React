import React from "react";
import { useEffect, useState } from "react";


//Images import
import back from "../images/backSide.jpg";

const card = ({onclick, card, index, isInactive, isFlipped, isDisable}) => {
    const handleClick = () => {
        !isFlipped && !isDisable && onclick(index);
    };

    return (
        <><div className={classnames("card", {
            "is-flipped": isFlipped,
            "is-inactive": isInactive
        })}
            onClick={handleClick}
        >
            </div><div className="card-face card-front-face">
                <img src={back} alt="front face"></img>
            </div><div className="card-face card-back-face">
                <img src={card.image} alt="back face"></img>
            </div></>
    );
};

export default card