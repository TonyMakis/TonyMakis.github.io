import { useState, useEffect } from 'react';

export interface Project {
  id: number;
  name: string;
  description: string;
  html_url: string;
  created_at: string;
  langs: Record<string, number>;
  contribs: Array<{ id: number; user: string }>;
  commits: Array<{ id: string; user: string }>;
}

export interface GitHubRepo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  created_at: string;
  contributors_url: string;
  languages_url: string;
  commits_url: string;
}

async function fetchAll(urls: string[]) {
  if (urls.length === 0) return [];
  return Promise.all(
    urls.map((url) => fetch(url).then((res) => res.json()))
  );
}

function parseContribsIntoData(data: GitHubRepo[], con: any[]) {
  for (let i = 0; i < con.length; i += 1) {
    const users: Array<{ id: number; user: string }> = [];
    for (let j = 0; j < con[i].length; j += 1) {
      if (con[i][j]) {
        users.push({
          id: con[i][j].id,
          user: con[i][j].login,
        });
      }
    }
    (data as any)[i].contribs = users;
  }
}

function parseCommitsIntoData(data: GitHubRepo[], com: any[]) {
  for (let i = 0; i < com.length; i += 1) {
    const commits: Array<{ id: string; user: string }> = [];
    for (let j = 0; j < com[i].length; j += 1) {
      if (com[i][j].committer) {
        commits.push({
          id: com[i][j].sha,
          user: com[i][j].committer.login,
        });
      }
    }
    (data as any)[i].commits = commits;
  }
}

function parseLangsIntoData(data: GitHubRepo[], langs: any[]) {
  for (let i = 0; i < langs.length; i += 1) {
    (data as any)[i].langs = langs[i];
  }
}

export async function fetchExtras(data: GitHubRepo[]): Promise<Project[]> {
  const contributorsUrls: string[] = [];
  const languagesUrls: string[] = [];
  const commitsUrls: string[] = [];

  for (let i = 0; i < data.length; i += 1) {
    contributorsUrls.push(data[i].contributors_url);
    languagesUrls.push(data[i].languages_url);
    commitsUrls.push(data[i].commits_url.slice(0, -6));
  }

  await fetchAll(contributorsUrls).then((con) => parseContribsIntoData(data, con));
  await fetchAll(languagesUrls).then((langs) => parseLangsIntoData(data, langs));
  await fetchAll(commitsUrls).then((com) => parseCommitsIntoData(data, com));

  return data.map((repo) => ({
    id: repo.id,
    name: repo.name,
    description: repo.description || '',
    html_url: repo.html_url,
    created_at: repo.created_at,
    langs: (repo as any).langs || {},
    contribs: (repo as any).contribs || [],
    commits: (repo as any).commits || [],
  }));
}

export async function fetchProjects(): Promise<Project[]> {
  const res = await fetch('https://api.github.com/users/TonyMakis/repos');
  const data: GitHubRepo[] = await res.json();
  return fetchExtras(data);
}

export function useProjects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadProjects = async () => {
      try {
        setIsLoading(true);
        const data = await fetchProjects();
        setProjects(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch projects');
      } finally {
        setIsLoading(false);
      }
    };

    loadProjects();
  }, []);

  return { projects, isLoading, error };
}
