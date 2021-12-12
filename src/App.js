import "./App.css";
import { Routes, Route } from "react-router-dom";
import Search from "./pages/Search/Search";

import Article from "./pages/Article/Article";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Search />} />
        <Route path="article/:articleTitle" element={<Article />} />
      </Routes>
    </div>
  );
}

export default App;
