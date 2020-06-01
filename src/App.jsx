/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import './App.css';
import UserCard from './UserCard';
import fetchExtras from './dataFunctions';

export default function App() {
  const [projectData, setProjectData] = useState([]);

  useEffect(() => {
    const fetchProjects = async (url) => fetch(url)
      .then((res) => res.json())
      .then((res) => fetchExtras(res)
        .then((data) => setProjectData(data)));

    fetchProjects('https://api.github.com/users/TonyMakis/repos');
  },
  // The next line keeps useEffect from propogating > 1 time.
  []);

  return (
    <div className="App">
      <h1>My Projects</h1>
      <Grid
        container
        spacing={10}
        style={{ padding: '2em' }}
      >
        {projectData.map((projects) => (
          <Grid
            item
            // Tell each card how many cols to span / device size
            xs={12}
            sm={6}
            md={4}
            lg={4}
            xl={3}
            key={projects.id}
          >
            <UserCard
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
