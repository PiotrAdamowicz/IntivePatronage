import React from "react";
import styles from "./articleItem.module.css";

const ArticleItem = ({ data }) => {
  const { title, description, excerpt, thumbnail } = data;
  return (
    <>
      <li className={styles.listItem}>
        <div>
          <a
            href={`https://en.wikipedia.org/wiki/${title}`}
            className={styles.link}
          >
            <h1 className={styles.title}>{title}</h1>
          </a>
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
