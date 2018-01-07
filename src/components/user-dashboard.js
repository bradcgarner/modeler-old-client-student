import React from 'react';
import { connect } from 'react-redux';
import * as actionsDisplay from '../actions/display';
import * as actionsUser from '../actions/user';
import * as actionsProject from '../actions/project';
import ProjectAdd from './project-add';

// form to create new user
// route /user/create
export class UserDashboard extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      adding: false,
    }
  }

  selectProject (id) {
    this.props.dispatch(actionsProject.fetchProject(id, this.props.user.authToken));
    this.props.history.push('/app/input/configure/units');
  }

  toggleAddProject = () => {
    this.setState({
      adding: !this.state.adding
    })
  }

  render() {
    const projects = this.props.user.projects.map((project,index)=>{
      return <li key={index} onClick={()=>this.selectProject(project.id)}>{project.name}</li>
    })
    const adding = this.state.adding ? <ProjectAdd history={this.props.history}/> : null;

    // create account 
    return (
      <article className='userDashboard'>
        <p>My Projects</p>
        <ul>{projects}</ul>
        <button onClick={()=>this.toggleAddProject()}>add project</button>
        {adding}
      </article>
    )
  }

}

const mapStateToProps = state => ({
  display: state.display,
  user: state.user,
  project: state.project
});

export default connect(mapStateToProps)(UserDashboard);