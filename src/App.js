import "./App.css";
import { Routes, Route } from "react-router-dom";
import Search from "./pages/Search/Search";
import { useState } from "react";
import { searchData } from "./utils/requests";
import Article from "./pages/Article/Article";
import { searchHistory } from "./utils/searchHistory";

function App() {
  const [query, setQuery] = useState([]);
  const [history, setHistory] = useState([]);

  const fetchQuery = async (searchString) => {
    setHistory(searchHistory(searchString));
    console.log(history);
    try {
      let res = await searchData(searchString);
      setQuery(res.pages);
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <Search fetchHandler={fetchQuery} history={history} data={query} />
          }
        />
        <Route path="article/:articleTitle" element={<Article />} />
      </Routes>
    </div>
  );
}

export default App;
