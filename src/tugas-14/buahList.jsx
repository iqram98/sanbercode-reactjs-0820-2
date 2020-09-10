import React, { useContext } from "react";
import { BuahContext } from "./buahContext";
import axios from "axios";
import "../tugas-10/TabelHargaBuah.css";

const BuahList = () => {
  const [
    dataHargaBuah,
    setDataHargaBuah,
    ,
    setDataEdit,
    ,
    setTambahBuah,
    ,
    setEditBuah,
    ,
    setPesan,
    ,
    setShowPesan,
  ] = useContext(BuahContext);

  const handleTambah = () => {
    setTambahBuah(true);
  };

  const handleEdit = (id) => {
    let edit = dataHargaBuah.find((x) => x.id === id);
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
  };

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
          {dataHargaBuah !== null &&
            dataHargaBuah.map((e, index) => {
              return (
                <tr key={index}>
                  <td>{e.name}</td>
                  <td>Rp {e.price}</td>
                  <td>{e.weight / 1000} kg</td>
                  <td>
                    <button
                      className="tombolEdit"
                      onClick={() => handleEdit(e.id)}
                    >
                      edit
                    </button>
                    <button
                      className="tombolHapus"
                      onClick={() => handleHapus(e.id)}
                    >
                      hapus
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
      <button className="tombolTambah" onClick={handleTambah}>
        Tambah Buah
      </button>
    </div>
  );
};

export default BuahList;
