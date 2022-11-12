import React from "react";
import { CellPrototype } from "../Types";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import {faCircle} from '@fortawesome/free-solid-svg-icons';

export function Cell(props:CellPrototype) {
    return (
        <div
            id={props.coordinate}
            data-cell={props.dataCell}
            onClick={props.onClick}
            className="cell"
        >
            {(props.dataCell === "ship") ? (
                <span className="cell__icon"><FontAwesomeIcon icon={faXmark} /></span>
            ) : (props.dataCell === "miss" ) ? (
                <span className="cell__icon"><FontAwesomeIcon icon={faCircle} /></span>
            ) : null }
        </div>
    );
}