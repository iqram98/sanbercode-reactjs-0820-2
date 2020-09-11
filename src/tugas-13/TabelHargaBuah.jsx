import React, { Component } from "react";
import "./TabelHargaBuah.css";

class TabelHargaBuah extends Component {
  handleTambah = () => {
    this.props.tambahBuah();
  };

  handleEdit = (index) => {
    this.props.editBuah(index);
  };
  handleHapus = (index) => {
    this.props.hapusBuah(index);
  };

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
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {this.props.data !== null &&
              this.props.data.map((e, index) => {
                return (
                  <tr key={index}>
                    <td>{e.name}</td>
                    <td>Rp {e.price}</td>
                    <td>{e.weight / 1000} kg</td>
                    <td>
                      <button
                        className="tombolEdit"
                        onClick={() => this.handleEdit(e.id)}
                      >
                        edit
                      </button>
                      <button
                        className="tombolHapus"
                        onClick={() => this.handleHapus(e.id)}
                      >
                        hapus
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
        <button className="tombolTambah" onClick={this.handleTambah}>
          Tambah Buah
        </button>
      </div>
    );
  }
}

export default TabelHargaBuah;
