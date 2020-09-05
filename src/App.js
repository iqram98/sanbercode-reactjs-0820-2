import React from "react";
import FormBuah from "./tugas-9/FormBuah";
import TabelHargaBuah from "./tugas-10/TabelHargaBuah";
import "./App.css";

let dataHargaBuah = [
  { nama: "Semangka", harga: 10000, berat: 1000 },
  { nama: "Anggur", harga: 40000, berat: 500 },
  { nama: "Strawberry", harga: 30000, berat: 400 },
  { nama: "Jeruk", harga: 30000, berat: 1000 },
  { nama: "Mangga", harga: 30000, berat: 500 },
];

function App() {
  return (
    <div className="App">
      <FormBuah />
      <TabelHargaBuah harga={dataHargaBuah} />
    </div>
  );
}

export default App;
