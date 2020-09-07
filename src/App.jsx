import React, { Component } from "react";
import FormBuah from "./tugas-9/FormBuah";
import TabelHargaBuah from "./tugas-10/TabelHargaBuah";
import Time from "./tugas-11/time";
import "./App.css";

let dataHargaBuah = [
  { nama: "Semangka", harga: 10000, berat: 1000 },
  { nama: "Anggur", harga: 40000, berat: 500 },
  { nama: "Strawberry", harga: 30000, berat: 400 },
  { nama: "Jeruk", harga: 30000, berat: 1000 },
  { nama: "Mangga", harga: 30000, berat: 500 },
];

class App extends Component {
  state = {
    time: 100,
    showComponent: true,
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        showComponent: false,
      });
    }, this.state.time * 1000);
  }

  render() {
    return (
      <div className="App">
        {this.state.showComponent === true ? (
          <Time time={this.state.time} />
        ) : null}
        <FormBuah />
        <TabelHargaBuah harga={dataHargaBuah} />
      </div>
    );
  }
}

export default App;
