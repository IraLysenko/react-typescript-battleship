import React from "react";


export  function GameShipsInfo() {
    return (
        <div className="game__ships">
            <h2 className="title title--info">Enemy ships</h2>
            <div className="fleet">
                <div className="fleet__item ship-info">
                    <span className="ship-info__name">Carrier | </span>
                    <span className="ship-info__size">size: 5 | </span>
                    <span className="ship-info__amount">amount: 1</span>
                </div>

                <div className="fleet__item ship-info">
                    <span className="ship-info__name">Battleship | </span>
                    <span className="ship-info__size">size: 4 | </span>
                    <span className="ship-info__amount">amount: 1</span>
                </div>

                <div className="fleet__item ship-info">
                    <span className="ship-info__name">Cruiser | </span>
                    <span className="ship-info__size">size: 3 | </span>
                    <span className="ship-info__amount">amount: 1</span>
                </div>

                <div className="fleet__item ship-info">
                    <span className="ship-info__name">Submarine | </span>
                    <span className="ship-info__size">size: 2 | </span>
                    <span className="ship-info__amount">amount: 2</span>
                </div>

                <div className="fleet__item ship-info">
                    <span className="ship-info__name">Destroyer | </span>
                    <span className="ship-info__size">size: 1 | </span>
                    <span className="ship-info__amount">amount: 2</span>
                </div>
            </div>
        </div>
    );
}