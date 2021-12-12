export const searchHistory = (searchString) => {
  let id = new Date() + Math.random() * 100;
  let history = localStorage.getItem("history")
    ? localStorage.getItem("history").split(",")
    : [];
  if (history.length >= 20) {
    history.shift();
  }

  if (!history.includes(searchString)) {
    history.push({ id, name: searchString });
    localStorage.removeItem("history");
    localStorage.setItem("history", history.toString());
  }
  return history;
};
