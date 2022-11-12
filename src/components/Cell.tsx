import React from "react";
import { CellPrototype } from "../Types";

export function Cell(props:CellPrototype) {
    const cellCoordinate = props.coordinate;
    const dataShip = props.dataShip;

    return (
        <div
            id={cellCoordinate}
            data-ship={dataShip}
            className="cell"
        >
        </div>
    );
}