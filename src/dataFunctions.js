/* eslint-disable no-param-reassign */

function fetchAll(urls) {
  if (urls) {
    return Promise.all(
      urls.map((url) => fetch(url).then((res) => res.json())),
    );
  }
  return [];
}

/* Simply make a new data object with props actually needed */
function filterData(d) {
  const newD = [];
  for (let i = 0; i < d.length; i += 1) {
    newD.push({});
    //     newD[i].commits = d[i].commits;
    newD[i].contribs = d[i].contribs;
    newD[i].created_at = d[i].created_at;
    newD[i].description = d[i].description;
    newD[i].html_url = d[i].html_url;
    newD[i].id = d[i].id;
    //     newD[i].langs = d[i].langs;
    newD[i].name = d[i].name;
  }
  return newD;
}

export default async function fetchExtras(data) {
  let i = 0;
  let j = 0;
  let users = [];
  // let languages = [];
  // let commits = [];
  const contributorsUrls = [];
  const languagesUrls = [];
  const commitsUrls = [];

  if (data) {
    for (i; i < data.length; i += 1) {
      contributorsUrls.push(data[i].contributors_url);
    }
    for (i = 0; i < data.length; i += 1) {
      languagesUrls.push(data[i].languages_url);
    }
    for (i = 0; i < data.length; i += 1) {
      commitsUrls.push(data[i].commits_url.slice(0, -6));
    }
  }

  await fetchAll(contributorsUrls).then((con) => {
    for (i = 0; i < con.length; i += 1) {
      users = [];
      for (j = 0; j < con[i].length; j += 1) {
        users.push(con[i][j].login);
      }
      data[i].contribs = users;
    }
  });

  // fetchAll(languagesUrls).then((langs) => {
  //   for (i = 0; i < langs.length; i += 1) {
  //     for (j = 0; i < langs.length; i += 1) {
  //       languages.push(langs[i][j]);
  //     }
  //   }
  //   // eslint-disable-next-line no-param-reassign
  //   data[i].langs = languages;
  // });
  // fetchAll(commitsUrls).then((com) => {
  //   for (i = 0; i < com.length; i += 1) {
  //     // eslint-disable-next-line no-param-reassign
  //     data[i].commits = com[i];
  //   }
  // });
  return filterData(data);
}
