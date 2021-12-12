export const fetchQuery = async (title, fetchData, querySetter) => {
  try {
    const res = await fetchData(title);

    querySetter(res);
  } catch (err) {
    console.log(err);
  }
};
