import React from "react";
import styles from "./articleItem.module.css";
import { Link } from "react-router-dom";

const ArticleItem = ({ data }) => {
  const { title, description, excerpt, thumbnail } = data;
  return (
    <>
      <li className={styles.listItem}>
        <div>
          <Link
            to={`/article/${title.split(" ").join("_")}`}
            className={styles.link}
          >
            <h1 className={styles.title}>{title}</h1>
          </Link>
          <p className={styles.text}>{description}</p>
          <p
            className={styles.text}
            dangerouslySetInnerHTML={{ __html: excerpt }}
          ></p>
        </div>
        {thumbnail ? (
          <img className={styles.img} src={thumbnail.url} alt="thumbnail" />
        ) : null}
      </li>
    </>
  );
};

export default ArticleItem;
