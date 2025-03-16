import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Tv from "./Routes/Tv";
import Search from "./Routes/Search";
import Home from "./Routes/Home";
import Header from "./Components/Header";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/Tv" element={<Tv />} />
        <Route path="/Search" element={<Search />} />
        <Route path="/" element={<Home />} />
        {/* /만 있는 path는 제일 처음에 넣으면 안되고 제일 마지막에 넣어야 함 */}
      </Routes>
    </Router>
  );
}

export default App;
