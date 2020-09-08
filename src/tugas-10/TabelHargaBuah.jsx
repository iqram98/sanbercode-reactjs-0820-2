import React, { Component } from "react";
import "./TabelHargaBuah.css";

class TabelHargaBuah extends Component {
  handleTambah = () => {
    this.props.tambahBuah(true);
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
            {this.props.data.map((e, index) => {
              return (
                <tr key={index}>
                  <td>{e.nama}</td>
                  <td>Rp {e.harga}</td>
                  <td>{e.berat / 1000} kg</td>
                  <td>
                    <button
                      className="tombolEdit"
                      onClick={() => this.handleEdit(index)}
                    >
                      edit
                    </button>
                    <button
                      className="tombolHapus"
                      onClick={() => this.handleHapus(index)}
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
