import React from "react";
import {Cell} from "./Cell";
import type {CellType, GameState} from "../Types";



export class Board extends React.Component {
    constructor(props: any) {
        super(props);

        // this.state = {
        //     shot:
        // }
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

    userClick(state: GameState, event: any) {
        console.log(event.coordinate);

    }

    defineCellType(coordinate: string) : CellType {
        return this.allCoordinates.includes(coordinate) ? 'ship' : 'miss';
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
                <tr>
                    <th className="letters">{letter}</th>
                    {this.columns.map((number, numberIndex) => {
                        const coordinate = letter + '-' + number;
                        return <td>
                                    <Cell
                                        coordinate={coordinate}
                                        key={coordinate}
                                        dataCell={this.defineCellType(coordinate)}
                                        onClick={(event) => {
                                            this.userClick(this.state as GameState, event);
                                            }
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
                    {this.renderTableHeader()}
                    {this.renderTableData()}
                </table>
            </div>
        )
    }
}