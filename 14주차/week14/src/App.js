import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Mypage from "./pages/Mypage";

//Home , Signup, Mypage

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/mypage" element={<Mypage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
