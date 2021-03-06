import React, { useState } from "react";
import "./form.css";

const Form = (props) => {
  const [name, setNama] = useState(props.data.name);
  const [price, setHarga] = useState(props.data.price);
  const [weight, setBerat] = useState(props.data.weight);
  const [id] = useState(props.data.id);

  const handleChangeNama = (event) => {
    setNama(event.target.value);
  };

  const handleChangeHarga = (event) => {
    setHarga(event.target.value);
  };

  const handleChangeBerat = (event) => {
    setBerat(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.submit({ name, price, weight, id });
  };

  const handleCancel = (event) => {
    event.preventDefault();
    props.cancel();
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        {props.data.id === "" ? <h3>Tambah Buah</h3> : <h3>Edit Buah</h3>}
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
};

export default Form;
