import React, { useEffect, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import HomeScreen from "./screens/HomeScreen/HomeScreen";
import LoginScreen from "./screens/LoginScreen/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen/RegisterScreen";
import ProfileScreen from "./screens/ProfileScreen/ProfileScreen";
import { useNavigate } from "react-router-dom";

const App = () => {
  let navigate = useNavigate();

  const [isAuth, setIsAuth] = useState(false);
  const [profileFilled, setProfileFilled] = useState(false);
  useEffect(() => {
    if (!profileFilled && isAuth) {
      navigate("/profile");
    }
  }, [profileFilled, isAuth]);
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
            element={
              <LoginScreen
                isAuth={isAuth}
                setIsAuth={setIsAuth}
                setProfileFilled={setProfileFilled}
              />
            }
          />

          <Route
            path="/profile"
            element={
              <ProfileScreen
                isAuth={isAuth}
                setIsAuth={setIsAuth}
                setProfileFilled={setProfileFilled}
              />
            }
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
