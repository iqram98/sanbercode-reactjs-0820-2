import React, { useState, useContext } from "react";
import { BuahContext } from "./buahContext";
import axios from "axios";
import "../tugas-13/form.css";

const BuahForm = () => {
  const [
    dataHargaBuah,
    setDataHargaBuah,
    dataEdit,
    setDataEdit,
    tambahBuah,
    setTambahBuah,
    editBuah,
    setEditBuah,
    pesan,
    setPesan,
    showPesan,
    setShowPesan,
  ] = useContext(BuahContext);

  const [name, setNama] = useState(dataEdit.name);
  const [price, setHarga] = useState(dataEdit.price);
  const [weight, setBerat] = useState(dataEdit.weight);
  const [id] = useState(dataEdit.id);

  const unmountPesan = () => {
    setTimeout(() => {
      setShowPesan(false);
    }, 3000);
  };

  const handleChangeNama = (event) => {
    setNama(event.target.value);
  };

  const handleChangeHarga = (event) => {
    setHarga(event.target.value);
  };

  const handleChangeBerat = (event) => {
    setBerat(event.target.value);
  };

  const handleSubmit = (data) => {
    if (data.id) {
      axios
        .put(`http://backendexample.sanbercloud.com/api/fruits/${data.id}`, {
          name: data.name,
          price: data.price,
          weight: data.weight,
        })
        .then((res) => {
          let newDataHargaBuah = dataHargaBuah.map((x) => {
            if (x.id === data.id) {
              x.name = data.name;
              x.price = data.price;
              x.weight = data.weight;
            }
            return x;
          });
          setDataHargaBuah(newDataHargaBuah);
        });
      setEditBuah(false);
      setPesan("Berhasil Edit Data");
      setShowPesan(true);
      setDataEdit({ name: "", price: "", weight: "" });
      unmountPesan();
    } else {
      axios
        .post(`http://backendexample.sanbercloud.com/api/fruits`, {
          name: data.name,
          price: data.price,
          weight: data.weight,
        })
        .then((res) => {
          setDataHargaBuah([...dataHargaBuah, res.data]);
        });
      setTambahBuah(false);
      setPesan("Berhasil Tambah Data");
      setShowPesan(true);
      setDataEdit({ name: "", price: "", weight: "" });
      unmountPesan();
    }
  };

  const handleCancel = () => {
    setTambahBuah(false);
    setEditBuah(false);
    setDataEdit({ name: "", price: "", weight: "" });
  };

  const tombolSubmit = (event) => {
    event.preventDefault();
    setDataEdit({ name, price, weight, id });
    handleSubmit({ name, price, weight, id });
  };

  if (tambahBuah === true || editBuah === true) {
    return (
      <div className="form">
        <form onSubmit={tombolSubmit}>
          <h3>Tambah Buah</h3>
          <label>Masukkan nama buah : </label>
          <input type="text" onChange={handleChangeNama} value={name} />
          <label>Harga : </label>
          <input type="number" onChange={handleChangeHarga} value={price} />
          <label>Berat (gram) : </label>
          <input type="number" onChange={handleChangeBerat} value={weight} />
          <button className="tombolSubmit" type="submit">
            submit
          </button>
          <button className="tombolCancel" onClick={handleCancel}>
            cancel
          </button>
        </form>
      </div>
    );
  } else {
    return <br />;
  }
};

export default BuahForm;
