import ArticleItem from "../../components/ArticleItem/ArticleItem";
import { useState } from "react";
import styles from "./search.module.css";

const Search = ({ data, fetchHandler }) => {
  const [searchInput, setSearchInput] = useState("");
  // const [articleTitle, setArticleTitle] = useState("");

  const onChangeHandler = (e) => {
    if (e.target.value) {
      setSearchInput(e.target.value);
    }
    // localStorage.setItem("search", e.target.value);
  };

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Wiki Search</h1>
      <input
        className={styles.searchInput}
        value={searchInput}
        onChange={onChangeHandler}
        placeholder="What are you looking fro..."
        type="text"
      />
      <button
        className={styles.searchButton}
        onClick={() => fetchHandler(searchInput)}
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
