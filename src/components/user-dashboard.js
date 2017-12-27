import React from 'react';
import { connect } from 'react-redux';

import * as actionsDisplay from '../actions/display';
import * as actionsUser from '../actions/user';
import * as actionsProject from '../actions/project';

// form to create new user
// route /user/create
export function UserDashboard (props) {

  const selectProject = id => {
    props.dispatch(actionsProject.fetchProject(id));
    props.history.push('/app/input/configure/general');
  }

  const addProject = () => {
    props.dispatch(actionsProject.addProject(props.user.id));
    // convert to a .then
    props.history.push('/app/input/configure/general');
  }

  const projects = props.user.projects.map((project,index)=>{
    return <li key={index} onClick={()=>selectProject(project.id)}>{project.name}</li>
  })
  // create account 
  return (
    <article>
      <p>My Projects</p>
      <ul>{projects}</ul>
      <button onClick={()=>addProject()}>add project</button>
    </article>
  )
}

const mapStateToProps = state => ({
  display: state.display,
  user: state.user,
  project: state.project
});

export default connect(mapStateToProps)(UserDashboard);