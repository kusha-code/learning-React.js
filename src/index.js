import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


// // class Square extends React.Component {
// //     // constructor(props){
// //     //     super(props);
// //     //     this.state = {
// //     //         value: null, //store the current value of the Square in this.state, and change it when the Square is clicked.
// //     //     };
// //     // }
// //     render() {
// //       return (
// //         <button 
// //         className="square"
// //          onClick={() => this.props.onClick()}
// //            // fill the Square component with an “X” when we click it.
// //             >
// //           {this.props.value}  
// //         </button> // method to show 'value'
// //       );
// //     } 
// //   }


// //Replacing sqauare with Function Components
//     function Square(props) {
//         return (
//             <button className="square" onClick={props.onClick}>
//                 {props.value}
//             </button>
//         );
//     }


  
//   class Board extends React.Component {
//     //   constructor(props){  //Add a constructor to the Board and set the Board’s initial state to contain an array of 9 nulls corresponding to the 9 squares.
//     //       super(props);
//     //       this.state = {
//     //           squares: Array(9).fill(null),
//     //           xIsNext: true, // We’ll set the first move to be “X”
//     //       };
//     //   }

//       //adding handleClick to the Board class

//       handleClick(i){
//           //const squares = this.state.squares.slice();
//           const history = this.state.history;
//           const current = history[history.length-1];
//           const squares = current.squares.slice();

//           if (calculateWinner(squares) || squares[i]){
//               return; //We can now change the Board’s handleClick function to return early by ignoring a click if someone has won the game or if a Square is already filled:
//           }

//           squares[i] = this.state.xIsNext ? 'X' : 'O'; //to change the default player

//           this.setState({ history: history.concat([{squares: squares,
//         }]),
//          xIsNext: !this.state.xIsNext,
//         });
//       }

//     renderSquare(i) {
//       return <Square value={this.props.squares[i]} 
//       onClick={() => this.props.onClick(i)}
//       />;  //passing a prop called 'value' to Square
//     }
  
//     render() {
//     //   const status = 'Next player: ' +(this.state.xIsNext ? 'X' : 'O'); //change the “status” text in Board’s render so that it displays which player has the next turn

//     //We will call calculateWinner(squares) in the Board’s render function to check if a player has won
//     // const winner = calculateWinner(this.state.squares);
//     // let status;
//     // if(winner) {
//     //     status = 'Winner: ' + winner;
//     // }else {
//     //     status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
//     // }
  
//       return (
//         <div>
//           <div className="board-row">
//           <div className="board-row">
//             {this.renderSquare(0)}
//             {this.renderSquare(1)}
//             {this.renderSquare(2)}
//           </div>
//           <div className="board-row">
//             {this.renderSquare(3)}
//             {this.renderSquare(4)}
//             {this.renderSquare(5)}
//           </div>
//           <div className="board-row">
//             {this.renderSquare(6)}
//             {this.renderSquare(7)}
//             {this.renderSquare(8)}
//           </div>
//         </div>
//       );
//     }
//   }
  
//   class Game extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             history: [{ squares: Array(9).fill(null)}],
//             xIsNext: true,
//         };
//     }

//     render() {

//         //update the Game component’s render function to use the most recent history entry to determine and display the game’s status

//         const history = this.state.history;
//         const current = history[history.length-1];
//         const winner = calculateWinner(current.squares);
//         let status;
//         if(winner) {
//             status = 'Winner: ' + winner;
//         } else {
//             status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
//         }

//       return (
//         <div className="game">
//           <div className="game-board">
//             <Board 
//             squares={current.squares}
//             onClick={(i) => this.handleClick(i)}
//             />
//           </div>
//           <div className="game-info">
//             <div>status</div>
//             <ol>{/* TODO */}</ol>
//           </div>
//         </div>
//       );
//     }
//   }
  
//   //helpe function to determine winner

//   function calculateWinner(squares) {
//     const lines = [
//       [0, 1, 2],
//       [3, 4, 5],
//       [6, 7, 8],
//       [0, 3, 6],
//       [1, 4, 7],
//       [2, 5, 8],
//       [0, 4, 8],
//       [2, 4, 6],
//     ];
//     for (let i = 0; i < lines.length; i++) {
//       const [a, b, c] = lines[i];
//       if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
//         return squares[a];
//       }
//     }
//     return null;
//   }

//   // ========================================
  
//   ReactDOM.render(
//     <Game />,
//     document.getElementById('root')
//   );
  
  

function Square(props) {
    return (
      <button className="square" onClick={props.onClick}>
        {props.value}
      </button>
    );
  }
  
  class Board extends React.Component {
    renderSquare(i) {
      return (
        <Square
          value={this.props.squares[i]}
          onClick={() => this.props.onClick(i)}
        />
      );
    }
  
    render() {
      return (
        <div>
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
        </div>
      );
    }
  }
  
  class Game extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        history: [{
          squares: Array(9).fill(null)
        }],
        stepNumber: 0, // add stepNumber to the Game component’s state to indicate which step we’re currently viewing.
        xIsNext: true
      };
    }
  
    handleClick(i) {
      const history = this.state.history.slice(0, this.state.stepNumber + 1);
      const current = history[history.length - 1];
      const squares = current.squares.slice();
      if (calculateWinner(squares) || squares[i]) {
        return;
      }
      squares[i] = this.state.xIsNext ? 'X' : 'O'; //to change default Player.
      this.setState({
        history: history.concat([{
          squares: squares
        }]),
        stepNumber: history.length,
        xIsNext: !this.state.xIsNext,
      });
    }

    jumpTo(step){
      this.setState({  //we’ll define the jumpTo method in Game to update that stepNumber. We also set xIsNext to true if the number that we’re changing stepNumber to is even:
        stepNumber: step,
        xIsNext: (step % 2) === 0,
      });
    }
    
    render() {
      const history = this.state.history;
      const current = history[this.state.stepNumber];
      const winner = calculateWinner(current.squares);

      const moves = history.map((step, move) => {
          const desc = move ?
          'Go to move #' + move : 'Go to game start';
          return (
              <li key={move}> 
                  <button onClick={() => this.jumpTo(move)}>
                      {desc}</button>
              </li>
          );
      });
  
      let status;
      if (winner) {
        status = 'Winner: ' + winner;
      } else {
        status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
      }
  
      return (
        <div className="game">
          <div className="game-board">
            <Board
              squares={current.squares}
              onClick={(i) => this.handleClick(i)}
            />
          </div>
          <div className="game-info">
            <div>{status}</div>
            <ol>{moves}</ol>
          </div>
        </div>
      );
    }
  }
  
  // ========================================
  
  ReactDOM.render(
    <Game />,
    document.getElementById('root')
  );
  
  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }
  