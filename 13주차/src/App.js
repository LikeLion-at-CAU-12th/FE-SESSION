import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import MyPage from "./pages/MyPage";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mypage" element={<MyPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
