import randomColor from 'randomcolor';

/* eslint-disable no-restricted-syntax */
export function formatCommitsToPieData(commits) {
  const userCounts = {};
  const commitData = [];
  let defaultSeed = 'tonymakis';

  for (let i = 0; i < commits.length; i += 1) {
    userCounts[commits[i].user] = 1 + (userCounts[commits[i].user] || 0);
  }

  for (const [k, v] of Object.entries(userCounts)) {
    defaultSeed = `${defaultSeed}!`;
    commitData.push({
      title: k,
      value: v,
      color: randomColor(
        { seed: defaultSeed },
      ),
    });
  }

  return commitData;
}

export function formatLangsImgData(langs) {
  const langsUrls = [];
  for (const k of Object.keys(langs[0])) {
    langsUrls.push(`https://img.icons8.com/color/${k.toLowerCase()}`);
  }
  return langsUrls;
}
