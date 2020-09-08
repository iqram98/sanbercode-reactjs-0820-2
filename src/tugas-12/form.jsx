import React, { Component } from "react";
import "./form.css";

class Form extends Component {
  state = {
    nama: this.props.data.nama,
    harga: this.props.data.harga,
    berat: this.props.data.berat,
    index: this.props.data.index,
  };

  handleChangeNama = (event) => {
    this.setState({ nama: event.target.value });
  };

  handleChangeHarga = (event) => {
    this.setState({ harga: event.target.value });
  };

  handleChangeBerat = (event) => {
    this.setState({ berat: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.submit(this.state);
    this.setState({
      nama: "",
      harga: "",
      berat: "",
    });
  };

  handleCancel = (event) => {
    event.preventDefault();
    this.props.cancel(false);
  };

  render() {
    return (
      <div className="form">
        <form onSubmit={this.handleSubmit}>
          <h3>Tambah Buah</h3>
          <label>Masukkan nama buah : </label>
          <input
            type="text"
            onChange={this.handleChangeNama}
            value={this.state.nama}
          />
          <label>Harga : </label>
          <input
            type="text"
            onChange={this.handleChangeHarga}
            value={this.state.harga}
          />
          <label>Berat (gram) : </label>
          <input
            type="text"
            onChange={this.handleChangeBerat}
            value={this.state.berat}
          />
          <button className="tombolSubmit" type="submit">
            submit
          </button>
          <button className="tombolCancel" onClick={this.handleCancel}>
            cancel
          </button>
        </form>
      </div>
    );
  }
}

export default Form;
