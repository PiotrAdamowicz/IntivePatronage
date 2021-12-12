import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticleData } from "../../utils/requests";
import { fetchQuery } from "../../utils/fetchQuery";
import styles from "./article.css";

const Article = () => {
  let params = useParams();
  let title = params.articleTitle.split("_").join(" ");
  if (title.split(" ").length > 1) {
    title.split(" ").join("_");
  }
  // let id = params.articleId;
  const [articleData, setArticleData] = useState();

  useEffect(() => {
    // let res = getArticleData(title);
    // console.log(res["<value>"]);
    // setArticleData(res);

    fetchQuery(title, getArticleData, setArticleData);
  }, [title]);
  console.log(articleData);
  return (
    <article className="articleWrapper">
      <h1 className="title">{title}</h1>
      <div
        className="article"
        dangerouslySetInnerHTML={{ __html: articleData }}
      ></div>
    </article>
  );
};

export default Article;
