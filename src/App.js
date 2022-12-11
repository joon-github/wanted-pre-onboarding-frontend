import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import SignUp from "./page/SignUp";
import Login from "./page/Login";
import Header from "./componenet/Header";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
