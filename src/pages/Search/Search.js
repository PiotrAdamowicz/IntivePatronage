import ArticleItem from "../../components/ArticleItem/ArticleItem";
import { useState } from "react";
import styles from "./search.module.css";
import { ReactSearchAutocomplete } from "react-search-autocomplete";

const Search = ({ data, fetchHandler, history }) => {
  const [searchInput, setSearchInput] = useState("");

  const handleOnSearch = (string, results) => {
    console.log(string, results);
  };

  const handleOnHover = (result) => {
    console.log(result);
  };

  const handleOnSelect = (item) => {
    console.log(item);
  };

  const handleOnFocus = () => {
    console.log("Focused");
  };

  const handleOnClear = () => {
    console.log("Cleared");
  };

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Wiki Search</h1>
      <ReactSearchAutocomplete
        items={history}
        maxResults={15}
        onSearch={handleOnSearch}
        onHover={handleOnHover}
        onSelect={handleOnSelect}
        onFocus={handleOnFocus}
        onClear={handleOnClear}
        fuseOptions={{ keys: ["name", "description"] }}
        styling={{ zIndex: 1 }} // To display it on top of the search box below
      />

      {/* <input
        className={styles.searchInput}
        value={searchInput}
        onChange={onChangeHandler}
        placeholder="What are you looking for..."
        type="text"
      /> */}
      <button
        className={styles.searchButton}
        onClick={() => {
          fetchHandler(searchInput);
          setSearchInput("");
        }}
      >
        Search
      </button>
      <ul className={styles.articleList}>
        {data
          ? data.map((article) => (
              <ArticleItem key={article.id} data={article} />
            ))
          : null}
      </ul>
    </div>
  );
};

export default Search;
