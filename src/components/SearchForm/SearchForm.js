import { useState } from "react";

import { fetchQuery } from "../../utils/fetchQuery";

import styles from "./searchForm.module.css";

const SearchForm = ({ querySetter }) => {
  const [searchInput, setSearchInput] = useState("");
  const [placeholder, setPlaceholder] = useState("What are you looking for...");
  const [history, setHistory] = useState([]);

  const onChangeHandler = (e) => {
    if (e.target.value) {
      setSearchInput(e.target.value);
    }
  };

  return (
    <form>
      <input
        type="text"
        className={styles.searchInput}
        value={searchInput}
        onChange={onChangeHandler}
        placeholder={placeholder}
      />
      <button
        type="submit"
        className={styles.searchButton}
        onClick={(e) => {
          e.preventDefault();
          fetchQuery(searchInput, querySetter, setHistory);
          setSearchInput("");
          setPlaceholder("What are you looking for...");
        }}
      >
        Search
      </button>
    </form>
  );
};

export default SearchForm;
