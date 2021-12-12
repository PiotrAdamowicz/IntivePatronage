export const fetchQuery = async (title, fetchFunction, setStateFunction) => {
  try {
    const res = await fetchFunction(title);

    setStateFunction(res);
  } catch (err) {
    console.log(err);
  }
};
