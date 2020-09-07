import React, { Component } from "react";
import "./TabelHargaBuah.css";

class TabelHargaBuah extends Component {
  render() {
    return (
      <div className="TabelHargaBuah">
        <h1>Tabel Harga Buah</h1>
        <table>
          <thead>
            <tr>
              <th>Nama</th>
              <th>Harga</th>
              <th>Berat</th>
            </tr>
          </thead>
          <tbody>
            {this.props.harga.map((e, idx) => {
              return (
                <tr key={idx}>
                  <td>{e.nama}</td>
                  <td>Rp {e.harga}</td>
                  <td>{e.berat / 1000} kg</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default TabelHargaBuah;
