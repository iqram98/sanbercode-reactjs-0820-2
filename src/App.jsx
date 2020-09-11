import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./nav";
import FormBuah from "./tugas-9/FormBuah";
import TabelHargaBuah from "./tugas-10/TabelHargaBuah";
import Time from "./tugas-11/time";
import Tugas12 from "./tugas-12/tugas12";
import Tabel from "./tugas-13/tabel";
import Buah from "./tugas-14/buah";
import Theme from "./Theme";
import "./App.css";

const App = () => {
  const [theme, setTheme] = useState("light");

  const handleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <Router>
      <div className="App">
        <Nav theme={theme} />
        <Theme color={handleTheme} />
        <Switch>
          <Route path="/tugas9" component={FormBuah} />
          <Route path="/tugas10" component={TabelHargaBuah} />
          <Route path="/tugas11">
            <Time />
            <FormBuah />
            <TabelHargaBuah />
          </Route>
          <Route path="/tugas12" component={Tugas12} />
          <Route path="/tugas13" component={Tabel} />
          <Route path="/tugas14" component={Buah} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
