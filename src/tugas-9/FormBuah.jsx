import React, { Component } from "react";
import "./FormBuah.css";

class FormBuah extends Component {
  render() {
    return (
      <div className="FormBuah">
        <h1>Form Pembelian Buah</h1>
        <table>
          <tbody>
            <tr>
              <td>
                <b>Nama Pelanggan</b>
              </td>
              <td>
                <input type="text" />
              </td>
            </tr>
            <tr>
              <td>
                <b>Daftar Item</b>
              </td>
              <td>
                <input type="checkbox" />
                Semangka <br />
                <input type="checkbox" />
                Jeruk <br />
                <input type="checkbox" />
                Nanas <br />
                <input type="checkbox" />
                Salak <br />
                <input type="checkbox" />
                Anggur <br />
              </td>
            </tr>
          </tbody>
        </table>
        <button>Krim</button>
      </div>
    );
  }
}

export default FormBuah;
