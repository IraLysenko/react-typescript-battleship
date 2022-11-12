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
            data-active={props.dataActive}
            className="cell"
        >
            <span className="cell__icon">
                {
                    props.dataCell === "ship"
                    ? (<FontAwesomeIcon icon={faXmark} />)
                    : props.dataCell === "miss"
                    ? (<FontAwesomeIcon icon={faCircle} />)
                    : null
                }
            </span>
        </div>
    );
}