import React, { useState, useEffect } from "react";
import axios from "axios";
import TabelHargaBuah from "./TabelHargaBuah";
import Form from "./form";
import "../App.css";

const Tabel = () => {
  const [dataHargaBuah, setDataHargaBuah] = useState(null);
  const [dataEdit, setDataEdit] = useState({
    id: "",
    name: "",
    price: "",
    weight: "",
  });
  const [tambahBuah, setTambahBuah] = useState(false);
  const [editBuah, setEditBuah] = useState(false);
  const [pesan, setPesan] = useState("");
  const [showPesan, setShowPesan] = useState(false);

  const unmountPesan = () => {
    setTimeout(() => {
      setShowPesan(false);
    }, 3000);
  };

  useEffect(() => {
    if (dataHargaBuah === null) {
      axios
        .get(`http://backendexample.sanbercloud.com/api/fruits`)
        .then((res) => {
          setDataHargaBuah(res.data);
        });
    }
  }, [dataHargaBuah]);

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

  const handleTambah = () => {
    setTambahBuah(true);
  };

  const tombolEdit = (index) => {
    let edit = dataHargaBuah.find((x) => x.id === index);
    setDataEdit({ ...edit });
    setEditBuah(true);
  };

  const handleHapus = (index) => {
    axios
      .delete(`http://backendexample.sanbercloud.com/api/fruits/${index}`)
      .then((res) => {
        let newDataHargaBuah = dataHargaBuah.filter((x) => x.id !== index);
        setDataHargaBuah(newDataHargaBuah);
      });

    setPesan("Berhasil hapus data");
    setShowPesan(true);
    unmountPesan();
  };

  return (
    <div className="App">
      {tambahBuah === true || editBuah === true ? (
        <Form data={dataEdit} submit={handleSubmit} cancel={handleCancel} />
      ) : null}
      <TabelHargaBuah
        tambahBuah={handleTambah}
        data={dataHargaBuah}
        editBuah={tombolEdit}
        hapusBuah={handleHapus}
      />
      {showPesan === true ? <p>{pesan}</p> : null}
    </div>
  );
};

export default Tabel;
