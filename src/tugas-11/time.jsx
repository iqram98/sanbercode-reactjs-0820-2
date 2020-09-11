import React, { Component } from "react";
import "./time.css";

class Time extends Component {
  state = {
    time: 10,
    currentTime: "",
    visibleTime: true,
  };

  componentDidMount() {
    this.timeCount = setInterval(() => this.tick(), 1000);
    this.timeNow = setInterval(() => this.getCurrentTime(), 1000);
  }

  componentDidUpdate() {
    if (this.state.visibleTime === true) {
      if (this.state.time <= 0) {
        this.setState({ visibleTime: false });
      }
    }
  }

  componentWillUnmount() {
    clearInterval(this.timeCount);
    clearInterval(this.timeNow);
  }

  render() {
    return (
      <>
        {this.state.visibleTime && (
          <div className="time">
            <p className="jam">Sekarang jam : {this.state.currentTime} </p>
            <p className="hitung">Hitung mundur : {this.state.time} </p>
          </div>
        )}
      </>
    );
  }

  getCurrentTime() {
    const time = new Date();
    let currentTime = time.toLocaleTimeString("en-US");
    this.setState({ currentTime });
  }

  tick() {
    this.setState({
      time: this.state.time - 1,
    });
  }
}

export default Time;
