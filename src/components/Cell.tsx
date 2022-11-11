import React from "react";

export type CellPrototype = {
    coordinate: string;
    //onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
}

export function Cell(props:CellPrototype) {
    const cellCoordinate = props.coordinate;

    return (
        <div id={cellCoordinate}></div>
    );
}