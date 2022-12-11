import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import SignUp from "./page/SignUp";
import Header from "./componenet/Header";
import { useState } from "react";

function App() {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <div className="App">
      <BrowserRouter>
        <Header isLogin={isLogin} />
        <Routes>
          <Route path="/" element={<Home setIsLogin={setIsLogin}></Home>} />
          <Route
            path="signup"
            element={<SignUp setIsLogin={setIsLogin}></SignUp>}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
