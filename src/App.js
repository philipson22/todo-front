import React, { Component } from "react";

import "./App.css";
import axios from "axios";

class App extends Component {
  state = { tasks: [], inputValue: "" };

  createItem = event => {
    event.preventDefault();
    console.log("la vie est belle quand on fait du JS", this.state.inputValue);
    //faire la bonne requete

    axios
      .post("http://localhost:3000/create", {
        title: this.state.inputValue
      })
      .then(response => {
        console.log(response);

        const newTasks = [...this.state.tasks];
        newTasks.push(response.data);
        this.setState({
          tasks: newTasks,
          //pour reinitialiser l'input a zero apres le clik on peut faire la ligne en dessous
          inputValue: ""
        });
      })
      .catch(function(error) {
        console.log(error);
      });

    // une fois que c'est bon, on change le state (on ajoute le nouvel item)
  };
  // fonction delete
  deleteItem = (id, index) => {
    console.log("yeahhhh", id);
    axios
      .post("http://localhost:3000/delete", { _id: id })
      .then(response => {
        console.log(response.data);
        const newTasksArray = [...this.state.tasks];
        newTasksArray.splice(index, 1);
        this.setState({ tasks: newTasksArray });
      })
      .catch(err => {
        console.error(err.message);
      });
  };

  handleChange = event => {
    this.setState({ inputValue: event.target.value });
  };

  render() {
    let array = [];
    for (let i = 0; i < this.state.tasks.length; i++) {
      array.push(
        <div>
          <p>
            <button
              type="button"
              onClick={() => this.deleteItem(this.state.tasks[i]._id, i)}
            >
              X{" "}
            </button>
            {this.state.tasks[i].title}
          </p>
        </div>
      );
    }

    return (
      <div className="container">
        <form onSubmit={this.createItem}>
          <h1>TO-DO LIST</h1>
          {array}
          <div>
            <input
              type="text"
              placeholder="Titre"
              value={this.state.inputValue}
              onChange={this.handleChange}
            />

            <button
              type="submit"
              style={{
                marginTop: "20px",
                width: "250px",
                height: "45px",
                backgroundColor: "#814ED1",
                borderRadius: "5px"
              }}
            >
              AJOUTER UNE TACHE
            </button>
          </div>
        </form>
      </div>
    );
  }
  componentDidMount() {
    axios
      .get("http://localhost:3000/")
      .then(response => {
        console.log(response.data);
        this.setState({ tasks: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  }
}

export default App;
