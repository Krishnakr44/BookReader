import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import HomeScreen from "./screens/HomeScreen/HomeScreen";
import LoginScreen from "./screens/LoginScreen/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen/RegisterScreen";

const App = () => {
  const [isAuth, setIsAuth] = useState(false);
  return (
    <div>
      <header>
        <Header isAuth={isAuth} setIsAuth={setIsAuth} />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route
            path="/register"
            element={<RegisterScreen isAuth={isAuth} setIsAuth={setIsAuth} />}
          />
          <Route
            path="/login"
            element={<LoginScreen isAuth={isAuth} setIsAuth={setIsAuth} />}
          />
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default App;
