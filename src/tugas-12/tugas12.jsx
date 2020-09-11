import React, { Component } from "react";
import TabelHargaBuah from "./TabelHargaBuah";
import Form from "./form";

class Tugas12 extends Component {
  state = {
    dataHargaBuah: [
      { nama: "Semangka", harga: 10000, berat: 1000 },
      { nama: "Anggur", harga: 40000, berat: 500 },
      { nama: "Strawberry", harga: 30000, berat: 400 },
      { nama: "Jeruk", harga: 30000, berat: 1000 },
      { nama: "Mangga", harga: 30000, berat: 500 },
    ],
    dataEdit: { nama: "", harga: "", berat: "" },
    tambahBuah: false,
    editBuah: false,
    pesan: "",
    showPesan: false,
  };

  unmountPesan() {
    setTimeout(() => {
      this.setState({ showPesan: false });
    }, 3000);
  }

  handleSubmit = (data) => {
    if (data.index) {
      let dataHargaBuah = [...this.state.dataHargaBuah];
      dataHargaBuah.splice(data.index, 1, data);
      this.setState({
        dataHargaBuah,
        editBuah: false,
        pesan: "Berhasil Edit Data",
        showPesan: true,
      });
      this.unmountPesan();
    } else {
      this.setState({
        dataHargaBuah: [...this.state.dataHargaBuah, data],
        tambahBuah: false,
        pesan: "Berhasil Tambah Data",
        showPesan: true,
      });
      this.unmountPesan();
    }
  };

  handleCancel = (data) => {
    this.setState({
      tambahBuah: data,
      editBuah: data,
    });
  };

  handleTambah = (tambahBuah) => {
    this.setState({ tambahBuah });
  };

  tombolEdit = (index) => {
    let dataEdit = this.state.dataHargaBuah[index];
    this.setState({
      editBuah: true,
      dataEdit: { ...dataEdit, index },
    });
  };

  handleHapus = (index) => {
    let dataHargaBuah = [...this.state.dataHargaBuah];
    dataHargaBuah.splice(index, 1);
    this.setState({
      dataHargaBuah,
      pesan: "Berhasil hapus data",
      showPesan: true,
    });
    this.unmountPesan();
  };

  render() {
    return (
      <div className="App">
        {this.state.tambahBuah === true || this.state.editBuah === true ? (
          <Form
            data={this.state.dataEdit}
            submit={this.handleSubmit}
            cancel={this.handleCancel}
          />
        ) : null}
        <TabelHargaBuah
          tambahBuah={this.handleTambah}
          data={this.state.dataHargaBuah}
          editBuah={this.tombolEdit}
          hapusBuah={this.handleHapus}
        />
        {this.state.showPesan === true ? <p>{this.state.pesan}</p> : null}
      </div>
    );
  }
}

export default Tugas12;
