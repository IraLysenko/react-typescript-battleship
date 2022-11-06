import React from "react";

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

    columnNumbers = 6;
    rowNumbers = 6;

    render() {
        return (
            <div id="board">
                <table>

                    <tr>
                        <th className="numbers"></th>
                        <th className="numbers">0</th>
                        <th className="numbers">1</th>
                        <th className="numbers">2</th>
                        <th className="numbers">3</th>
                        <th className="numbers">4</th>
                        <th className="numbers">5</th>
                        <th className="numbers">6</th>
                    </tr>

                    <tr>
                        <th className="letters">A</th>
                        <td>
                            <div id="00"></div>
                        </td>
                        <td>
                            <div id="01"></div>
                        </td>
                        <td>
                            <div id="02"></div>
                        </td>
                        <td>
                            <div id="03"></div>
                        </td>
                        <td>
                            <div id="04"></div>
                        </td>
                        <td>
                            <div id="05"></div>
                        </td>
                        <td>
                            <div id="06"></div>
                        </td>
                    </tr>
                    <tr>
                        <th className="letters">B</th>
                        <td>
                            <div id="10"></div>
                        </td>
                        <td>
                            <div id="11"></div>
                        </td>
                        <td>
                            <div id="12"></div>
                        </td>
                        <td>
                            <div id="13"></div>
                        </td>
                        <td>
                            <div id="14"></div>
                        </td>
                        <td>
                            <div id="15"></div>
                        </td>
                        <td>
                            <div id="16"></div>
                        </td>
                    </tr>
                    <tr>
                        <th className="letters">C</th>
                        <td>
                            <div id="20"></div>
                        </td>
                        <td>
                            <div id="21"></div>
                        </td>
                        <td>
                            <div id="22"></div>
                        </td>
                        <td>
                            <div id="23"></div>
                        </td>
                        <td>
                            <div id="24"></div>
                        </td>
                        <td>
                            <div id="25"></div>
                        </td>
                        <td>
                            <div id="26"></div>
                        </td>
                    </tr>
                    <tr>
                        <th className="letters">D</th>
                        <td>
                            <div id="30"></div>
                        </td>
                        <td>
                            <div id="31"></div>
                        </td>
                        <td>
                            <div id="32"></div>
                        </td>
                        <td>
                            <div id="33"></div>
                        </td>
                        <td>
                            <div id="34"></div>
                        </td>
                        <td>
                            <div id="35"></div>
                        </td>
                        <td>
                            <div id="36"></div>
                        </td>
                    </tr>
                    <tr>
                        <th className="letters">E</th>
                        <td>
                            <div id="40"></div>
                        </td>
                        <td>
                            <div id="41"></div>
                        </td>
                        <td>
                            <div id="42"></div>
                        </td>
                        <td>
                            <div id="43"></div>
                        </td>
                        <td>
                            <div id="44"></div>
                        </td>
                        <td>
                            <div id="45"></div>
                        </td>
                        <td>
                            <div id="46"></div>
                        </td>
                    </tr>
                    <tr>
                        <th className="letters">F</th>
                        <td>
                            <div id="50"></div>
                        </td>
                        <td>
                            <div id="51"></div>
                        </td>
                        <td>
                            <div id="52"></div>
                        </td>
                        <td>
                            <div id="53"></div>
                        </td>
                        <td>
                            <div id="54"></div>
                        </td>
                        <td>
                            <div id="55"></div>
                        </td>
                        <td>
                            <div id="56"></div>
                        </td>
                    </tr>
                    <tr>
                        <th className="letters">G</th>
                        <td>
                            <div id="60"></div>
                        </td>
                        <td>
                            <div id="61"></div>
                        </td>
                        <td>
                            <div id="62"></div>
                        </td>
                        <td>
                            <div id="63"></div>
                        </td>
                        <td>
                            <div id="64"></div>
                        </td>
                        <td>
                            <div id="65"></div>
                        </td>
                        <td>
                            <div id="66"></div>
                        </td>
                    </tr>
                </table>
            </div>
        )
    }
}