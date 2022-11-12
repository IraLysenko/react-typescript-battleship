import React from "react";
import { CellPrototype } from "../Types";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import {faCircle} from '@fortawesome/free-solid-svg-icons';

export function Cell(props:CellPrototype) {
    return (
        <div
            id={props.coordinate}
            data-ship={props.dataShip}
            data-miss={props.dataMiss}
            className="cell"
        >
            {props.dataShip ? (
                <span className="cell__icon"><FontAwesomeIcon icon={faXmark} /></span>
            ) : (
                <span className="cell__icon"><FontAwesomeIcon icon={faCircle} /></span>
            )}
        </div>
    );
}