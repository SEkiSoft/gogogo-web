import React, { Component } from 'react';
import '../stylesheets/Game.scss';
import CrossSection from './CrossSection';

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gameData: [['', 'b', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
                 ['', 'b', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
                 ['', 'b', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
                 ['', 'b', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
                 ['', 'b', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
                 ['', 'b', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
                 ['', 'b', '', '', '', 'w', '', '', '', '', '', '', '', '', '', '', '', '', ''],
                 ['', 'b', '', '', '', '', 'w', '', '', '', '', '', '', '', '', '', '', '', ''],
                 ['', 'b', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
                 ['', 'b', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
                 ['', 'b', '', '', '', '', 'w', '', '', '', '', '', '', '', '', '', '', '', ''],
                 ['', 'b', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
                 ['', 'b', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
                 ['', 'b', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
                 ['', 'b', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
                 ['', 'b', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
                 ['', 'b', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
                 ['', 'b', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
                 ['', 'b', '', '', '', '', '', '', '', '', '', 'b', '', '', '', '', '', '', '']]
    };
  }

  setPiece = (userColour, colIndex, rowIndex) => {
    const gameState = this.state.gameData;
    gameState[rowIndex][colIndex] = userColour;
    this.setState({
      gameData: gameState
    }, this.endTurn());
  }

  endTurn() {
  }

  render() {
    return (
      <div id="App" className="App">
        {
          this.state.gameData.map((row, rowIndex) => {
            const rowClass = rowIndex >= 1 ? 'gameRow' : '';
            return (
              <div key={rowIndex} className={rowClass}>
                {
                row.map((cell, colIndex) =>
                  <CrossSection
                    key={rowIndex.toString() + colIndex.toString()}
                    rowIndex={rowIndex} colIndex={colIndex}
                    userColour={'b'}
                    setPiece={this.setPiece}
                    pieceColour={cell}
                  />
                )
              }
              </div>
            );
          })
        }
      </div>
    );
  }
}

export default Game;
