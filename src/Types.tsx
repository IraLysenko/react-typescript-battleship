import React from "react";

export enum ShipsTypes {
    SUBMARINE=1,
    DESTROYER=2,
    CRUISER=3,
    BATTLESHIP=4,
    AIRCRAFTCARIER=5,
}

export enum ShipsAmount {
    SUBMARINE=2,
    DESTROYER=2,
    CRUISER=1,
    BATTLESHIP=1,
    AIRCRAFTCARIER=1,
}

export type CellPrototype = {
    coordinate: string;
    dataCell: CellType;
    dataActive: boolean;
    onClick: (event: React.MouseEvent<HTMLElement>) => void
}

export interface IProps {}

export type CellType = 'ship' | 'miss';
export type Shot = 'none' | 'hit' | 'miss'

export type GameState = {
    gameStart: boolean;
    gameOver: boolean;
    gameWin: boolean;
    shot: Shot;
    userScore: number;
}
