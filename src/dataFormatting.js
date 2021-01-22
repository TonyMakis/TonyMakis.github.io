import randomColor from 'randomcolor';

/* eslint-disable no-restricted-syntax */
export function formatCommitsToPieData(commits) {
  const commitData = {
    labels: [],
    datasets: [{
      data: [],
      backgroundColor: [],
      hoverBackgroundColor: [],
    }],
  };

  const userCounts = {};
  let defaultSeed = 'chappie';

  for (let i = 0; i < commits.length; i += 1) {
    userCounts[commits[i].user] = 1 + (userCounts[commits[i].user] || 0);
  }

  for (const [k, v] of Object.entries(userCounts)) {
    defaultSeed = `${defaultSeed}!`;
    const randColorGenerated = randomColor(
      { seed: defaultSeed },
    );
    commitData.labels.push(k);
    commitData.datasets[0].data.push(v);
    commitData.datasets[0].backgroundColor.push(randColorGenerated);
    commitData.datasets[0].hoverBackgroundColor.push(randColorGenerated);
  }

  return commitData;
}

export function formatLangsImgData(langs) {
  const langNames = [];
  for (const k of Object.keys(langs[0])) {
    langNames.push(k);
  }
  if (Array.isArray(langNames) && !langNames.length) {
    langNames.push('Empty');
  }
  return langNames;
}
