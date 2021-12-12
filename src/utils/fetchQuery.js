import { searchHistory } from "./searchHistory";
import { searchArticlesData } from "./requests";

export const fetchQuery = async (title, querySetter, historySetter) => {
  historySetter(searchHistory(title));
  try {
    const res = await searchArticlesData(title);

    querySetter(res);
  } catch (err) {
    console.log(err);
  }
};
