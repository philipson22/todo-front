import React, { Component } from "react";

import "./App.css";
import Item from "./components/Item";

class App extends Component {
  render() {
    return (
      <div className="container">
        <h1>TO-DO LIST</h1>
        <p>
          <button type="onClick">X</button>
          <Item />
        </p>
        <p>
          <button type="onClick">X</button>
          <Item />
        </p>
        <p>
          <button type="onClick">X</button>
          <Item />
        </p>
        <p>
          <button type="onClick">X</button>
          <Item />
        </p>

        <form>
          <input type="text" placeholder="Titre" />

          <button
            style={{
              marginTop: "20px",
              width: "250px",
              height: "45px",
              backgroundColor: "#814ED1",
              borderRadius: "5px"
            }}
            type="submit"
          >
            AJOUTER UNE TACHE
          </button>
        </form>
      </div>
    );
  }
}

export default App;
