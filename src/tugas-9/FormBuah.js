import React from "react";
import "./FormBuah.css";

class FormBuah extends React.Component {
  render() {
    return (
      <div className="FormBuah">
        <h1>Form Pembelian Buah</h1>
        <table>
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
        </table>
        <button>Krim</button>
      </div>
    );
  }
}

export default FormBuah;
