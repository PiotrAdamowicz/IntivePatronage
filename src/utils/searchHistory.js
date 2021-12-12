export const searchHistory = (searchString) => {
  let history = localStorage.getItem("history")
    ? localStorage.getItem("history").split(",")
    : [];
  //SET MAX HISTORY to 20 elements
  if (history.length >= 20) {
    history.shift();
  }

  if (!history.includes(searchString)) {
    history.push(searchString);
    localStorage.removeItem("history");
    localStorage.setItem("history", history.toString());
  }
  return history;
};
