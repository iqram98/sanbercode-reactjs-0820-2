import React, { useState, useEffect, createContext } from "react";
import axios from "axios";

export const BuahContext = createContext();

export const BuahProvider = (props) => {
  const [dataHargaBuah, setDataHargaBuah] = useState(null);
  const [dataEdit, setDataEdit] = useState({
    name: "",
    price: "",
    weight: "",
    id: null,
  });
  const [tambahBuah, setTambahBuah] = useState(false);
  const [editBuah, setEditBuah] = useState(false);
  const [pesan, setPesan] = useState("");
  const [showPesan, setShowPesan] = useState(false);

  useEffect(() => {
    if (dataHargaBuah === null) {
      axios
        .get(`http://backendexample.sanbercloud.com/api/fruits`)
        .then((res) => {
          setDataHargaBuah(res.data);
        });
    }
  });

  return (
    <BuahContext.Provider
      value={[
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
      ]}
    >
      {props.children}
    </BuahContext.Provider>
  );
};
