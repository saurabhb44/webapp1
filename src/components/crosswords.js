import { Component } from "react";
import "./crosswords.css";

var blockArray = [
  [0, 3],
  [1, 3],
  [2, 3],
  [3, 3],
  [4, 3],
  [5, 3],
  [6, 3],
  [7, 3],
  [8, 3],

  [2, 0],
  [2, 1],
  [2, 2],
  [2, 4],
  [2, 5],

  [4, 0],
  [4, 1],
  [4, 2],
  [4, 4],

  [7, 2],
  [7, 4],
  [7, 5],
  [7, 6],
  [7, 7],

  [4, 7],
  [5, 7],
  [6, 7],
  [8, 7],
  [9, 7],
  [10, 7],

  [10, 2],
  [10, 3],
  [10, 4],
  [10, 5],
  [10, 6],
  [10, 8],
  [10, 9],
];

var firstLetters = [
  [0, 3],
  [2, 0],
  [4, 0],
  [7, 2],
  [4, 7],
  [10, 2],
];


export default class Crosswords extends Component {
  constructor(props) {
    super(props);
    this.state = {
      zeroThree: false,
      oneThree: false,
      twoThree: false,
      threeThree: false,
      fourThree: false,
      fiveThree: false,
      sixThree: false,
      sevenThree: false,
      eightThree: false,

      twoZero: false,
      twoOne: false,
      twoTwo: false,
      twoFour: false,
      twoFive: false,

      fourZero: false,
      fourOne: false,
      fourTwo: false,
      fourFour: false,

      sevenTwo: false,
      sevenFour: false,
      sevenFive: false,
      sevenSix: false,
      sevenSeven: false,

      fourSeven: false,
      fiveSeven: false,
      sixSeven: false,
      eightSeven: false,
      nineSeven: false,
      tenSeven: false,

      tenTwo: false,
      tenThree: false,
      tenFour: false,
      tenFive: false,
      tenSix: false,
      tenEight: false,
      tenNine: false,
      count: 36,
    };
  }

  onChangeFunction = (l, coord) => {
    if (coord[0] === 0 && coord[1] === 3 && l.toLowerCase() === "c") {
      this.setState({
        zeroThree: true,
        count: this.state.count - 1,
      });
    } else if (coord[0] === 1 && coord[1] === 3 && l.toLowerCase() === "o") {
      this.setState({
        oneThree: true,
        count: this.state.count - 1,
      });
    } else if (coord[0] === 2 && coord[1] === 3 && l.toLowerCase() === "u") {
      this.setState({
        twoThree: true,
        count: this.state.count - 1,
      });
    } else if (coord[0] === 3 && coord[1] === 3 && l.toLowerCase() === "r") {
      this.setState({
        threeThree: true,
        count: this.state.count - 1,
      });
    } else if (coord[0] === 4 && coord[1] === 3 && l.toLowerCase() === "t") {
      this.setState({
        fourThree: true,
        count: this.state.count - 1,
      });
    } else if (coord[0] === 5 && coord[1] === 3 && l.toLowerCase() === "e") {
      this.setState({
        fiveThree: true,
        count: this.state.count - 1,
      });
    } else if (coord[0] === 6 && coord[1] === 3 && l.toLowerCase() === "o") {
      this.setState({
        sixThree: true,
        count: this.state.count - 1,
      });
    } else if (coord[0] === 7 && coord[1] === 3 && l.toLowerCase() === "u") {
      this.setState({
        sevenThree: true,
        count: this.state.count - 1,
      });
    } else if (coord[0] === 8 && coord[1] === 3 && l.toLowerCase() === "s") {
      this.setState({
        eightThree: true,
        count: this.state.count - 1,
      });
    } else if (coord[0] === 2 && coord[1] === 0 && l.toLowerCase() === "j") {
      this.setState({
        twoZero: true,
        count: this.state.count - 1,
      });
    } else if (coord[0] === 2 && coord[1] === 1 && l.toLowerCase() === "a") {
      this.setState({
        twoOne: true,
        count: this.state.count - 1,
      });
    } else if (coord[0] === 2 && coord[1] === 2 && l.toLowerCase() === "g") {
      this.setState({
        twoTwo: true,
        count: this.state.count - 1,
      });
    } else if (coord[0] === 2 && coord[1] === 4 && l.toLowerCase() === "a") {
      this.setState({
        twoFour: true,
        count: this.state.count - 1,
      });
    } else if (coord[0] === 2 && coord[1] === 5 && l.toLowerCase() === "r") {
      this.setState({
        twoFive: true,
        count: this.state.count - 1,
      });
    } else if (coord[0] === 4 && coord[1] === 0 && l.toLowerCase() === "p") {
      this.setState({
        fourZero: true,
        count: this.state.count - 1,
      });
    } else if (coord[0] === 4 && coord[1] === 1 && l.toLowerCase() === "a") {
      this.setState({
        fourOne: true,
        count: this.state.count - 1,
      });
    } else if (coord[0] === 4 && coord[1] === 2 && l.toLowerCase() === "y") {
      this.setState({
        fourTwo: true,
        count: this.state.count - 1,
      });
    } else if (coord[0] === 4 && coord[1] === 4 && l.toLowerCase() === "m") {
      this.setState({
        fourFour: true,
        count: this.state.count - 1,
      });
    } else if (coord[0] === 7 && coord[1] === 2 && l.toLowerCase() === "b") {
      this.setState({
        sevenTwo: true,
        count: this.state.count - 1,
      });
    } else if (coord[0] === 7 && coord[1] === 4 && l.toLowerCase() === "m") {
      this.setState({
        sevenFour: true,
        count: this.state.count - 1,
      });
    } else if (coord[0] === 7 && coord[1] === 5 && l.toLowerCase() === "b") {
      this.setState({
        sevenFive: true,
        count: this.state.count - 1,
      });
    } else if (coord[0] === 7 && coord[1] === 6 && l.toLowerCase() === "l") {
      this.setState({
        sevenSix: true,
        count: this.state.count - 1,
      });
    } else if (coord[0] === 7 && coord[1] === 7 && l.toLowerCase() === "e") {
      this.setState({
        sevenSeven: true,
        count: this.state.count - 1,
      });
    } else if (coord[0] === 4 && coord[1] === 7 && l.toLowerCase() === "n") {
      this.setState({
        fourSeven: true,
        count: this.state.count - 1,
      });
    } else if (coord[0] === 5 && coord[1] === 7 && l.toLowerCase() === "u") {
      this.setState({
        fiveSeven: true,
        count: this.state.count - 1,
      });
    } else if (coord[0] === 6 && coord[1] === 7 && l.toLowerCase() === "t") {
      this.setState({
        sixSeven: true,
        count: this.state.count - 1,
      });
    } else if (coord[0] === 8 && coord[1] === 7 && l.toLowerCase() === "l") {
      this.setState({
        eightSeven: true,
        count: this.state.count - 1,
      });
    } else if (coord[0] === 9 && coord[1] === 7 && l.toLowerCase() === "l") {
      this.setState({
        nineSeven: true,
        count: this.state.count - 1,
      });
    } else if (coord[0] === 10 && coord[1] === 7 && l.toLowerCase() === "a") {
      this.setState({
        tenSeven: true,
        count: this.state.count - 1,
      });
    } else if (coord[0] === 10 && coord[1] === 2 && l.toLowerCase() === "v") {
      this.setState({
        tenTwo: true,
        count: this.state.count - 1,
      });
    } else if (coord[0] === 10 && coord[1] === 3 && l.toLowerCase() === "a") {
      this.setState({
        tenThree: true,
        count: this.state.count - 1,
      });
    } else if (coord[0] === 10 && coord[1] === 4 && l.toLowerCase() === "l") {
      this.setState({
        tenFour: true,
        count: this.state.count - 1,
      });
    } else if (coord[0] === 10 && coord[1] === 5 && l.toLowerCase() === "o") {
      this.setState({
        tenFive: true,
        count: this.state.count - 1,
      });
    } else if (coord[0] === 10 && coord[1] === 6 && l.toLowerCase() === "r") {
      this.setState({
        tenSix: true,
        count: this.state.count - 1,
      });
    } else if (coord[0] === 10 && coord[1] === 8 && l.toLowerCase() === "n") {
      this.setState({
        tenEight: true,
        count: this.state.count - 1,
      });
    } else if (coord[0] === 10 && coord[1] === 9 && l.toLowerCase() === "t") {
      this.setState({
        tenNine: true,
        count: this.state.count - 1,
      });
    }
  };

  colorFunction = (coord) => {
    if (coord[0] === 0 && coord[1] === 3 && this.state.zeroThree === true) {
      return {
        backgroundColor: "#4BB543",
        pointerEvents: "none",
      };
    } else if (
      coord[0] === 1 &&
      coord[1] === 3 &&
      this.state.oneThree === true
    ) {
      return {
        backgroundColor: "#4BB543",
        pointerEvents: "none",
      };
    } else if (
      coord[0] === 2 &&
      coord[1] === 3 &&
      this.state.twoThree === true
    ) {
      return {
        backgroundColor: "#4BB543",
        pointerEvents: "none",
      };
    } else if (
      coord[0] === 3 &&
      coord[1] === 3 &&
      this.state.threeThree === true
    ) {
      return {
        backgroundColor: "#4BB543",
        pointerEvents: "none",
      };
    } else if (
      coord[0] === 4 &&
      coord[1] === 3 &&
      this.state.fourThree === true
    ) {
      return {
        backgroundColor: "#4BB543",
        pointerEvents: "none",
      };
    } else if (
      coord[0] === 5 &&
      coord[1] === 3 &&
      this.state.fiveThree === true
    ) {
      return {
        backgroundColor: "#4BB543",
        pointerEvents: "none",
      };
    } else if (
      coord[0] === 6 &&
      coord[1] === 3 &&
      this.state.sixThree === true
    ) {
      return {
        backgroundColor: "#4BB543",
        pointerEvents: "none",
      };
    } else if (
      coord[0] === 7 &&
      coord[1] === 3 &&
      this.state.sevenThree === true
    ) {
      return {
        backgroundColor: "#4BB543",
        pointerEvents: "none",
      };
    } else if (
      coord[0] === 8 &&
      coord[1] === 3 &&
      this.state.eightThree === true
    ) {
      return {
        backgroundColor: "#4BB543",
        pointerEvents: "none",
      };
    } else if (
      coord[0] === 2 &&
      coord[1] === 0 &&
      this.state.twoZero === true
    ) {
      return {
        backgroundColor: "#4BB543",
        pointerEvents: "none",
      };
    } else if (coord[0] === 2 && coord[1] === 1 && this.state.twoOne === true) {
      return {
        backgroundColor: "#4BB543",
        pointerEvents: "none",
      };
    } else if (coord[0] === 2 && coord[1] === 2 && this.state.twoTwo === true) {
      return {
        backgroundColor: "#4BB543",
        pointerEvents: "none",
      };
    } else if (
      coord[0] === 2 &&
      coord[1] === 4 &&
      this.state.twoFour === true
    ) {
      return {
        backgroundColor: "#4BB543",
        pointerEvents: "none",
      };
    } else if (
      coord[0] === 2 &&
      coord[1] === 5 &&
      this.state.twoFive === true
    ) {
      return {
        backgroundColor: "#4BB543",
        pointerEvents: "none",
      };
    } else if (
      coord[0] === 4 &&
      coord[1] === 0 &&
      this.state.fourZero === true
    ) {
      return {
        backgroundColor: "#4BB543",
        pointerEvents: "none",
      };
    } else if (
      coord[0] === 4 &&
      coord[1] === 1 &&
      this.state.fourOne === true
    ) {
      return {
        backgroundColor: "#4BB543",
        pointerEvents: "none",
      };
    } else if (
      coord[0] === 4 &&
      coord[1] === 2 &&
      this.state.fourTwo === true
    ) {
      return {
        backgroundColor: "#4BB543",
        pointerEvents: "none",
      };
    } else if (
      coord[0] === 4 &&
      coord[1] === 4 &&
      this.state.fourFour === true
    ) {
      return {
        backgroundColor: "#4BB543",
        pointerEvents: "none",
      };
    } else if (
      coord[0] === 7 &&
      coord[1] === 2 &&
      this.state.sevenTwo === true
    ) {
      return {
        backgroundColor: "#4BB543",
        pointerEvents: "none",
      };
    } else if (
      coord[0] === 7 &&
      coord[1] === 4 &&
      this.state.sevenFour === true
    ) {
      return {
        backgroundColor: "#4BB543",
        pointerEvents: "none",
      };
    } else if (
      coord[0] === 7 &&
      coord[1] === 5 &&
      this.state.sevenFive === true
    ) {
      return {
        backgroundColor: "#4BB543",
        pointerEvents: "none",
      };
    } else if (
      coord[0] === 7 &&
      coord[1] === 6 &&
      this.state.sevenSix === true
    ) {
      return {
        backgroundColor: "#4BB543",
        pointerEvents: "none",
      };
    } else if (
      coord[0] === 7 &&
      coord[1] === 7 &&
      this.state.sevenSeven === true
    ) {
      return {
        backgroundColor: "#4BB543",
        pointerEvents: "none",
      };
    } else if (
      coord[0] === 4 &&
      coord[1] === 7 &&
      this.state.fourSeven === true
    ) {
      return {
        backgroundColor: "#4BB543",
        pointerEvents: "none",
      };
    } else if (
      coord[0] === 5 &&
      coord[1] === 7 &&
      this.state.fiveSeven === true
    ) {
      return {
        backgroundColor: "#4BB543",
        pointerEvents: "none",
      };
    } else if (
      coord[0] === 6 &&
      coord[1] === 7 &&
      this.state.sixSeven === true
    ) {
      return {
        backgroundColor: "#4BB543",
        pointerEvents: "none",
      };
    } else if (
      coord[0] === 8 &&
      coord[1] === 7 &&
      this.state.eightSeven === true
    ) {
      return {
        backgroundColor: "#4BB543",
        pointerEvents: "none",
      };
    } else if (
      coord[0] === 9 &&
      coord[1] === 7 &&
      this.state.nineSeven === true
    ) {
      return {
        backgroundColor: "#4BB543",
        pointerEvents: "none",
      };
    } else if (
      coord[0] === 10 &&
      coord[1] === 7 &&
      this.state.tenSeven === true
    ) {
      return {
        backgroundColor: "#4BB543",
        pointerEvents: "none",
      };
    } else if (
      coord[0] === 10 &&
      coord[1] === 2 &&
      this.state.tenTwo === true
    ) {
      return {
        backgroundColor: "#4BB543",
        pointerEvents: "none",
      };
    } else if (
      coord[0] === 10 &&
      coord[1] === 3 &&
      this.state.tenThree === true
    ) {
      return {
        backgroundColor: "#4BB543",
        pointerEvents: "none",
      };
    } else if (
      coord[0] === 10 &&
      coord[1] === 4 &&
      this.state.tenFour === true
    ) {
      return {
        backgroundColor: "#4BB543",
        pointerEvents: "none",
      };
    } else if (
      coord[0] === 10 &&
      coord[1] === 5 &&
      this.state.tenFive === true
    ) {
      return {
        backgroundColor: "#4BB543",
        pointerEvents: "none",
      };
    } else if (
      coord[0] === 10 &&
      coord[1] === 6 &&
      this.state.tenSix === true
    ) {
      return {
        backgroundColor: "#4BB543",
        pointerEvents: "none",
      };
    } else if (
      coord[0] === 10 &&
      coord[1] === 8 &&
      this.state.tenEight === true
    ) {
      return {
        backgroundColor: "#4BB543",
        pointerEvents: "none",
      };
    } else if (
      coord[0] === 10 &&
      coord[1] === 9 &&
      this.state.tenNine === true
    ) {
      return {
        backgroundColor: "#4BB543",
        pointerEvents: "none",
      };
    } else {
      return {
        backgroundColor: "white",
      };
    }
  };

  tableCols = () => {
    var cols = [];
    for (var i = 0; i < 12; i++) {
      cols.push(<tr>{this.tableRows(i)}</tr>);
    }
    return cols;
  };

  tableRows = (row) => {
    var rows = [];
    for (var i = 0; i < 12; i++) {
      let coord = [row, i];
      // eslint-disable-next-line no-loop-func
      // eslint-disable-next-line no-loop-func
      var flag = blockArray.find((coord) => {
        return coord[0] == row && coord[1] == i;
      });
      // eslint-disable-next-line no-loop-func
      let num = -1;
      if (coord[0] == 0 && coord[1] == 3) {
        num = 1;
      } else if (coord[0] == 2 && coord[1] == 0) {
        num = 2;
      } else if (coord[0] == 4 && coord[1] == 0) {
        num = 3;
      } else if (coord[0] == 7 && coord[1] == 2) {
        num = 4;
      } else if (coord[0] == 4 && coord[1] == 7) {
        num = 5;
      } else if (coord[0] == 10 && coord[1] == 2) {
        num = 6;
      }
      rows.push(
        <td>
          <input
            style={flag ? this.colorFunction(coord) : {}}
            className="block"
            disabled={!flag}
            onChange={(e) => {
              this.onChangeFunction(e.target.value, coord);
            }}
            maxLength={1}
          />
          <div hidden={num === -1} className="number">
            {num}
          </div>
        </td>
      );
    }
    return rows;
  };

  render() {
    return (
      <div className="container">
        <table style={{ width: 100, border: "1px black solid" }}>
          {this.tableCols()}
        </table>
        <button
          onClick={this.props.nextPage}
          style={{
            backgroundColor: this.state.count > 0 ? "#6979F860" : "#6979F8",
            color: "white",
            outline: "none",
            border: "none",
            padding: "10px 12px",
            borderRadius: 4,
            marginTop: 12,
            cursor: 'pointer'
          }}
        >
          Next
        </button>
      </div>
    );
  }
}
