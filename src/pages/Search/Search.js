import ArticleItem from "../../components/ArticleItem/ArticleItem";
import SearchForm from "../../components/SearchForm/SearchForm";
import { useState } from "react";
import styles from "./search.module.css";

const Search = () => {
  const [query, setQuery] = useState([]);

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Wiki Search</h1>
      <SearchForm querySetter={setQuery} />
      <ul className={styles.articleList}>
        {query.pages
          ? query.pages.map((article) => (
              <ArticleItem key={article.id} data={article} />
            ))
          : null}
      </ul>
    </div>
  );
};

export default Search;
