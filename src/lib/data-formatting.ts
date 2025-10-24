import randomColor from 'randomcolor';

export function formatCommitsToPieData(commits: Array<{ id: string; user: string }>) {
  const commitData = {
    labels: [] as string[],
    datasets: [{
      data: [] as number[],
      backgroundColor: [] as string[],
      hoverBackgroundColor: [] as string[],
    }],
  };

  const userCounts: Record<string, number> = {};
  let defaultSeed = 'chappie';

  for (let i = 0; i < commits.length; i += 1) {
    userCounts[commits[i].user] = 1 + (userCounts[commits[i].user] || 0);
  }

  for (const [k, v] of Object.entries(userCounts)) {
    defaultSeed = `${defaultSeed}!`;
    const randColorGenerated = randomColor({ seed: defaultSeed });
    commitData.labels.push(k);
    commitData.datasets[0].data.push(v);
    commitData.datasets[0].backgroundColor.push(randColorGenerated);
    commitData.datasets[0].hoverBackgroundColor.push(randColorGenerated);
  }

  return commitData;
}

export function formatLangsImgData(langs: Record<string, number>): string[] {
  const langNames = Object.keys(langs);
  if (langNames.length === 0) {
    return ['Empty'];
  }
  return langNames;
}
