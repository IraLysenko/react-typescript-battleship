import React from "react";
import {Cell} from "./Cell";
import type {CellType, GameState} from "../Types";

export class Board extends React.Component {
    constructor(props: GameState) {
        super(props);

        this.state = {
            gameStart: false,
            gameOver: false,
            userScore: 0
        }
    }

    columns = [1,2,3,4,5,6,7,8,9,10];
    rows = ['A','B','C','D','E','F','G','H','I','J'];
    shipsCoordinates = {
        submarine1: ['C-4'],
        submarine2: ['I-2'],
        destroyer1: ['B-2', 'C-2'],
        destroyer2: ['E-4', 'E-5'],
        cruiser: ['G-3', 'G-4', 'G-5'],
        battleship: ['E-8', 'F-8', 'G-8', 'H-8'],
        aircraft_carrier: ['B-10', 'C-10', 'D-10', 'E-10', 'F-10'],
    }
    allCoordinates = Object.values(this.shipsCoordinates).flat();

    defineCellType(coordinate: string) : CellType {
        return this.allCoordinates.includes(coordinate) ? 'ship' : 'miss';
    }

    userClick(event: React.MouseEvent<HTMLElement>): void {
        const element = event.target as HTMLElement;
        element.setAttribute('data-active', 'true');
    }

    renderTableHeader() {
        return(
            <tr>
                <th className="numbers"></th>
                {this.columns.map((number, index) => {
                    return <th key={index}>{number}</th>
                })}
            </tr>
        )
    }

    renderTableData() {
        return this.rows.map((letter, letterIndex) => {
            return (
                <tr key={letter+'-'+letterIndex}>
                    <th className="letters">{letter}</th>
                    {this.columns.map((number, numberIndex) => {
                        const coordinate = letter + '-' + number;
                        return <td key={coordinate}>
                                    <Cell
                                        coordinate={coordinate}
                                        key={coordinate}
                                        dataCell={this.defineCellType(coordinate)}
                                        dataActive={false}
                                        onClick={(event: React.MouseEvent<HTMLElement>) => {this.userClick(event);}
                                        }
                                    />
                                </td>
                    })}
                </tr>
            )
        })
    }

    render() {
        return (
            <div id="board">
                <table>
                    <thead>
                        {this.renderTableHeader()}
                    </thead>
                    <tbody>
                        {this.renderTableData()}
                    </tbody>
                </table>
            </div>
        )
    }
}