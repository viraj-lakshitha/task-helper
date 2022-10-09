import React from "react";
import Header from "./components/header/Header";
import AppContainer from "./pages/app-container/AppContainer";
import './App.scss'

const App = () => {
  return (
    <div>
      <Header />
      <div className="container app mt-2">
        <AppContainer />
      </div>
    </div>
  );
};

export default App;
