import React from "react";
import {Cell} from "./Cell"

// export type GameState = {
//     cells: Cells[];
//     userScore: number;
//     gameOver: boolean;
// }

export class Board extends React.Component {
    constructor(props: any) {
        super(props);

        // this.state = {
        //     shot:
        // }
    }

    columns = [0,1,2,3,4,5,6,7,8,9,10];
    rows = ['A','B','C','D','E','F','G','H','I','G'];

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
                        return <td>
                            <Cell
                                coordinate={letter + '-' + number}
                                key={numberIndex}
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