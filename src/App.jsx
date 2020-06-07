/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';

import ProjectCard from './ProjectCardComponent/ProjectCard';

import fetchExtras from './dataFunctions';

export default function App() {
  const [projectData, setProjectData] = useState([]);

  useEffect(() => {
    const fetchProjects = async (url) => fetch(url)
      .then((res) => res.json())
      // Uncomment next line and comment 2 after
      // => to fetch ONLY the main repo data, not the discovered
      //    git commit, contributors, and languages data it links
      // .then((res) => setProjectData(res));
      .then((res) => fetchExtras(res)
        .then((data) => setProjectData(data)));

    fetchProjects('https://api.github.com/users/TonyMakis/repos');
  },
  // The next line keeps useEffect from propogating > 1 time.
  []);

  return (
    <div className="App">
      <h1>My Public Projects</h1>
      <Grid
        container
        style={{ padding: '0.5em' }}
      >
        {projectData.map((projects) => (
          <Grid
            item
            style={{ padding: '2em' }}
            // Tell each card how many cols to span / device size
            xs={12}
            sm={12}
            md={6}
            lg={4}
            xl={3}
            key={projects.id}
          >
            <ProjectCard
              title={projects.name}
              description={projects.description}
              projectUrl={projects.html_url}
              languagesUsed={projects.langs}
              contributors={projects.contribs}
              commits={projects.commits}
              created={new Date(projects.created_at)}
              key={projects.id}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
