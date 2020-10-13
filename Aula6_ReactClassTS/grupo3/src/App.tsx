import React from "react";
import Home from "./Pages/Home";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;

// Quando um componente é criado 1x
// ----------------------------------

// constructor()
// static getDerivedStateFromProps()
// UNSAFE_componentWillMount() (Depreciado)
// render()
// componentDidMount()

// Toda vez que um componente é atualizado
// ----------------------------------------

// UNSAFE_componentWillUpdate() (Depreciado)
// static getDerivedStateFromProps()
// shouldComponentUpdate()
// render()
// getSnapshotBeforeUpdate()
// componentDidUpdate()

// Quando um componente é removido do DOM
// componentWillUnmount()
