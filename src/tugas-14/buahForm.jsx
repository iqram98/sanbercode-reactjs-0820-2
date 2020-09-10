import React, { useContext } from "react";
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
    ,
    setPesan,
    ,
    setShowPesan,
  ] = useContext(BuahContext);

  const unmountPesan = () => {
    setTimeout(() => {
      setShowPesan(false);
    }, 3000);
  };

  const handleChange = (event) => {
    let typeOfInput = event.target.name;
    switch (typeOfInput) {
      case "name": {
        setDataEdit({ ...dataEdit, name: event.target.value });
        break;
      }
      case "price": {
        setDataEdit({ ...dataEdit, price: event.target.value });
        break;
      }
      case "weight": {
        setDataEdit({ ...dataEdit, weight: event.target.value });
        break;
      }
      default:
        break;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (dataEdit.id !== null) {
      axios
        .put(
          `http://backendexample.sanbercloud.com/api/fruits/${dataEdit.id}`,
          {
            name: dataEdit.name,
            price: dataEdit.price,
            weight: dataEdit.weight,
          }
        )
        .then((res) => {
          let newDataHargaBuah = dataHargaBuah.map((x) => {
            if (x.id === dataEdit.id) {
              x.name = dataEdit.name;
              x.price = dataEdit.price;
              x.weight = dataEdit.weight;
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
          name: dataEdit.name,
          price: dataEdit.price,
          weight: dataEdit.weight,
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

  if (tambahBuah === true || editBuah === true) {
    return (
      <div className="form">
        <form onSubmit={handleSubmit}>
          <h3>Tambah Buah</h3>
          <label>Masukkan nama buah : </label>
          <input
            name="name"
            type="text"
            onChange={handleChange}
            value={dataEdit.name}
          />
          <label>Harga : </label>
          <input
            name="price"
            type="number"
            onChange={handleChange}
            value={dataEdit.price}
          />
          <label>Berat (gram) : </label>
          <input
            name="weight"
            type="number"
            onChange={handleChange}
            value={dataEdit.weight}
          />
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
