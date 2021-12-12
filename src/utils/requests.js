export const searchData = async (searchString, amount = 10) => {
  const searchArray = searchString.split(" ");
  let search = "";
  if (searchArray.length > 1) {
    search = searchArray.join("+");
  } else {
    search = searchString;
  }

  const res = await fetch(
    `https://en.wikipedia.org/w/rest.php/v1/search/page?q=${search}&limit=${amount}`
  );
  const data = await res.json();
  return data;
};

export const getArticleData = async (name) => {
  const url =
    "https://en.wikipedia.org/w/api.php?" +
    new URLSearchParams({
      origin: "*",
      action: "parse",
      page: name,
      format: "json",
    });
  // let name = 52293;
  let data;
  try {
    const req = await fetch(url);
    const json = await req.json();
    data = json.parse.text["*"];
  } catch (e) {
    console.error(e);
  }
  return data;
};

//****************** HISTORY OF TESTED URL ***********************
//1. `https://en.wikipedia.org/w/api.php?action=query&origin=*&titles=${name}&prop=text&format=json`
//2.`https://en.wikipedia.org/w/api.php?origin=*&action=query&prop=info&pageids=${name}&inprop=url&format=json` - return links for requested page
// 3. `https://en.wikipedia.org/w/rest.php/v1/page/${name}/html`
// 4. `https://en.wikipedia.org/w/rest.php/v1/page/${name}/bare` - returns id, title, html_url
//5.  ********** gives HTML that I'm unable to parse to JSX *******
// const url =
//   "https://en.wikipedia.org/w/api.php?" +
//   new URLSearchParams({
//     origin: "*",
//     action: "parse",
//     page: name,
//     format: "json",
//   });

// try {
//   const req = await fetch(url);
//   const json = await req.json();
//   data = json.parse.text["*"];
// } catch (e) {
//   console.error(e);
// }
//
// 6.**** DOCTYPE Html ******
// `https://en.wikipedia.org/w/api.php?action=query&origin=*&prop=extracts&titles=${name}`
//7.***** PLain Text of given wiki article
// `https://en.wikipedia.org/w/api.php?format=json&origin=*&action=query&prop=extracts&explaintext&exsectionformat=plain&titles=${name}`
//8.************Smiliar as above**************
// `https://en.wikipedia.org/w/api.php?action=query&origin=*&prop=extracts&format=html&titles=${name}`
//9. **** looks most promising but no idea how to parse it **********
//`https://en.wikipedia.org/w/rest.php?/v1/page/${name}`
// **************************
// `https://en.wikipedia.org/w/api.php?action=query&prop=extracts&exchars=175&titles=${name}`
// `https://en.wikipedia.org/w/rest.php/v1/page/${name}`
// `https://en.wikipedia.org/w/api.php?action=query&prop=info&inprop=url&origin=*&format=json&pageids=${name}`
