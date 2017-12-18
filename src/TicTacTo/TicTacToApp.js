import React, { Component } from 'react';

const PLAYERS_MARKER = ['X', 'O'];
const BOARD = [
  { id: 0, marker: '' },
  { id: 1, marker: '' },
  { id: 2, marker: '' },
  { id: 3, marker: '' },
  { id: 4, marker: '' },
  { id: 5, marker: '' },
  { id: 6, marker: '' },
  { id: 7, marker: '' },
  { id: 8, marker: '' }
];

const VICTORY_CONDITIONS = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [1, 4, 7], [0, 4, 8], [2, 4, 6]];

function checkWinner(marker, board) {
  let isWinner = false;
  const playersSquares = board.filter(square => square.marker === marker);
  const squareIndexes = playersSquares.map(square => square.id);
  isWinner = victoryMatch(squareIndexes);
  return isWinner;
}

function victoryMatch(input) {
  return (
    VICTORY_CONDITIONS.filter(squares => squares.every(id => (input.length > 2 ? input.indexOf(id) >= 0 : false)))
      .length > 0
  );
}

class TicTacToApp extends Component {
  constructor(props) {
    super(props);

    this.state = { playerOne: true, board: BOARD };

    this.onSelectSquare = this.onSelectSquare.bind(this);
  }

  onSelectSquare(index) {
    if (this.state.board[index].marker !== '') {
      return;
    }
    const newBoard = [...this.state.board];
    const playerIndex = this.state.playerOne ? 0 : 1;
    newBoard[index] = Object.assign({}, newBoard[index], { marker: PLAYERS_MARKER[playerIndex] });

    this.setState({ board: newBoard, playerOne: !this.state.playerOne });

    const isWinner = checkWinner(PLAYERS_MARKER[playerIndex], newBoard);
    if (isWinner) {
      console.log('Winner is: ' + PLAYERS_MARKER[playerIndex]);
    }
  }

  render() {
    return (
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gridTemplateRows: '1fr 1fr' }}>
        <div />
        <div>
          <h1>Tic-Tac-To</h1>
          <Board onSelectSquare={this.onSelectSquare} board={this.state.board} />
        </div>
        <div />
      </div>
    );
  }
}

export default TicTacToApp;

const Board = props => {
  const { board, onSelectSquare } = props;
  return (
    <div
      style={{
        display: 'grid',
        gridGap: 5,
        gridTemplateColumns: 'repeat(3, 50px)',
        gridTemplateRows: 'repeat(3, 50px)'
      }}
    >
      {board.map(e => <TicTacToSquare key={e.id} id={e.id} marker={e.marker} onSelectSquare={onSelectSquare} />)}
    </div>
  );
};

const TicTacToSquare = props => {
  const { id, onSelectSquare, marker } = props;
  return (
    <div
      style={{ border: 'solid', textAlign: 'center', fontSize: '40px', lineHeight: '1.2' }}
      onClick={e => onSelectSquare(id)}
    >
      {marker}
    </div>
  );
};
