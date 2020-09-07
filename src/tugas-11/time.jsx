import React, { Component } from "react";
import "./time.css";

class Time extends Component {
  state = {
    time: this.props.time,
    currentTime: "",
  };

  componentDidMount() {
    this.timeCount = setInterval(() => this.tick(), 1000);
    this.timeNow = setInterval(() => this.getCurrentTime(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timeCount);
    clearInterval(this.timeNow);
  }

  render() {
    return (
      <div className="time">
        <p className="jam">Sekarang jam : {this.state.currentTime} </p>
        <p className="hitung">Hitung mundur : {this.state.time} </p>
      </div>
    );
  }

  getCurrentTime() {
    const time = new Date();
    let currentTime = `${time.getHours()} : ${time.getMinutes()} : ${time.getSeconds()}`;
    this.setState({ currentTime });
  }

  tick() {
    this.setState({
      time: this.state.time - 1,
    });
  }
}

export default Time;
