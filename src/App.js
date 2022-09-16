/** @format */

import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import MyNav from "./components/MyNav";
import Home from "./components/Home";
import ReservationForm from "./components/ReservationForm";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <MyNav title="Kapil Real State" />
      <Home />
      <div className="container">
        <ReservationForm />
      </div>
      <h2> Hello</h2>
    </div>
  );
}

export default App;
