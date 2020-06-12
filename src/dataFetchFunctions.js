// This next comment is for ESLint, b/c I am writing fetched results into original data:
/* eslint-disable no-param-reassign */

/* Takes an array of urls to fetch, and does fetch all,
   returning results in JSONic array */
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
    newD[i].commits = d[i].commits;
    newD[i].contribs = d[i].contribs;
    newD[i].created_at = d[i].created_at;
    newD[i].description = d[i].description;
    newD[i].html_url = d[i].html_url;
    newD[i].id = d[i].id;
    newD[i].langs = d[i].langs;
    newD[i].name = d[i].name;
  }
  return newD;
}

function parseContribsIntoData(data, con) {
  let users = [];
  for (let i = 0; i < con.length; i += 1) {
    users = [];
    for (let j = 0; j < con[i].length; j += 1) {
      if (con[i][j]) {
        users.push({
          id: con[i][j].id,
          user: con[i][j].login,
        });
      }
    }
    data[i].contribs = users;
  }
}

function parseCommitsIntoData(data, com) {
  let commits = [];
  for (let i = 0; i < com.length; i += 1) {
    commits = [];
    for (let j = 0; j < com[i].length; j += 1) {
      if (com[i][j].committer) {
        commits.push({
          id: com[i][j].sha,
          user: com[i][j].committer.login,
        });
      }
    }
    data[i].commits = commits;
  }
}

function parseLangsIntoData(data, langs) {
  let languages = [];
  for (let i = 0; i < langs.length; i += 1) {
    languages = [];
    languages.push(langs[i]);
    data[i].langs = languages;
  }
}

export default async function fetchExtras(data) {
  const contributorsUrls = [];
  const languagesUrls = [];
  const commitsUrls = [];

  let i = 0;
  if (data) {
    for (i = 0; i < data.length; i += 1) {
      contributorsUrls.push(data[i].contributors_url);
    }
    for (i = 0; i < data.length; i += 1) {
      languagesUrls.push(data[i].languages_url);
    }
    for (i = 0; i < data.length; i += 1) {
      commitsUrls.push(data[i].commits_url.slice(0, -6));
    }
  }

  await fetchAll(contributorsUrls).then((con) => parseContribsIntoData(data, con));

  await fetchAll(languagesUrls).then((langs) => parseLangsIntoData(data, langs));

  await fetchAll(commitsUrls).then((com) => parseCommitsIntoData(data, com));

  return filterData(data);
}
