import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticleData } from "../../utils/requests";
import { fetchQuery } from "../../utils/fetchQuery";

const Article = () => {
  let params = useParams();
  let title = params.articleTitle.split("_").join(" ");
  if (title.split(" ").length > 1) {
    title.split(" ").join("_");
  }

  const [articleData, setArticleData] = useState();

  useEffect(() => {
    fetchQuery(title, getArticleData, setArticleData);
  }, [title]);
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
