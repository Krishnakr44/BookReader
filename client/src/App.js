import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import HomeScreen from "./screens/HomeScreen/HomeScreen";

const App = () => {
  return (
    <div>
      <header>
        <Header />
      </header>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
      </Routes>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default App;
