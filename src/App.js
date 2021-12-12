import "./App.css";
import { Routes, Route } from "react-router-dom";
import Search from "./pages/Search/Search";
import { useState } from "react";
import { searchData } from "./utils/requests";
import Article from "./pages/Article/Article";

function App() {
  const [query, setQuery] = useState([]);

  const fetchQuery = async (searchString) => {
    try {
      let res = await searchData(searchString);
      setQuery(res.pages);
      console.log(res);
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={<Search fetchHandler={fetchQuery} data={query} />}
        />
        <Route path="article/:articleTitle" element={<Article />} />
      </Routes>
    </div>
  );
}

export default App;
