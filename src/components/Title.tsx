import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShip } from '@fortawesome/free-solid-svg-icons'

export function Title() {
    return (
        <div className="header">
            <h1 className={'title title--header'}>
                <span>Battleship</span>
                <FontAwesomeIcon  icon={faShip} />
            </h1>
        </div>
    )
}