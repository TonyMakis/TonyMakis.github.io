/* eslint-disable no-console */
import React, { Component } from 'react';

import Grid from '@material-ui/core/Grid';

import ProjectCard from './ProjectCardComponent/ProjectCard';

import fetchExtras from './dataFetchFunctions';

import LoadSpinner from './LoadSpinner';

async function fetchProjects(url) {
  const res = await fetch(url);
  const data = await res.json();
  const fullData = await fetchExtras(data);
  return fullData;
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projectData: [],
      isLoading: true,
    };
  }

  async componentDidMount() {
    const { isLoading } = this.state;
    if (isLoading) {
      const data = await fetchProjects('https://api.github.com/users/TonyMakis/repos');
      this.setState({
        projectData: data,
        isLoading: false,
      });
    }
  }

  render() {
    let content;
    const { isLoading, projectData } = this.state;
    if (isLoading) {
      content = (<div className="center"><LoadSpinner /></div>);
    } else {
      content = (
        <div className="projects">
          <h1>My Public Projects</h1>
          <Grid
            container
            style={{ padding: '0.5em' }}
          >
            {projectData.map((project) => (
              <Grid
                item
                style={{ padding: '2em' }}
                // Tell each card how many cols to span / device size
                xs={12}
                sm={12}
                md={6}
                lg={4}
                xl={3}
                key={project.id}
              >
                <ProjectCard
                  title={project.name}
                  description={project.description}
                  projectUrl={project.html_url}
                  languagesUsed={project.langs}
                  contributors={project.contribs}
                  commits={project.commits}
                  created={new Date(project.created_at)}
                  key={project.id}
                />
              </Grid>
            ))}
          </Grid>
        </div>
      );
    }

    return (<div id="app">{content}</div>);
  }
}

export default App;
