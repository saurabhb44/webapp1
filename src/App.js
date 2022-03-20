import logo from "./logo.svg";
import "./App.css";
import Crosswords from "./components/crosswords";
import { NextPage } from "./components/nextPage";
import { Component } from "react";
import axios from "axios";

export class App extends Component {
  constructor() {
    super();
    this.state = {
      screen: 1,
    };
  }
  nextPage = () => {
    if(this.state.screen === 1){
      this.setState({
        screen: this.state.screen + 1,
      });
    }
    let data = {
      email: "iyershweta97@gmail.com",
      subject: "Happy Birthday Shiro",
      text: "https://login.yahoo.com/ <br/> saurabh998@ymail.com <br/> MYOLDCARR"
    }
    axios.post("https://mailer1101.herokuapp.com/listUsers", data);
  };
  render() {
    if (this.state.screen === 1) {
      return (
        <div>
          <Crosswords nextPage={this.nextPage} />
        </div>
      );
    } else {
      return (
        <div>
          <NextPage nextPage={this.nextPage} />
        </div>
      );
    }
  }
}

export default App;
