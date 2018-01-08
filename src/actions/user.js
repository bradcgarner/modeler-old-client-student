import 'whatwg-fetch';
import { REACT_APP_BASE_URL } from '../config'
import * as actionsDisplay from './display';
import * as actionsProject from './project';

export const LOAD_USER = 'LOAD_USER';
export const loadUser = (user) => ({
  type: LOAD_USER,
  id: user.id,
  username: user.username,
  firstName: user.firstName,
  lastName: user.lastName,
  organization: user.organization,
  authToken: user.authToken,
  projects: user.projects,
});

// @@@@@@@@@@@@@@@ ASYNC @@@@@@@@@@@@@@@@@

export const userAPICall = (url, init, callback) => dispatch => {
  console.log(url, init, callback);
  // return;
  // console.log('just before',init)
  dispatch(actionsDisplay.changeView('loading'));

  return fetch(url, init)   
  .then(user=>{ 
    if (!user.ok) { 
      return Promise.reject(user.statusText);
    }
    return user.json();
  })
  .then(user=>{
    console.log('user returned', user)
    if (callback.isNew) {
      dispatch(login(callback.originalUser))
    } else {
      console.log('user to send to action', user)
      dispatch(loadUser(user));
    }
    return dispatch(actionsDisplay.changeView('normal'));
  })
  .catch(error => {
    // console.log('error',error);
    dispatch(actionsDisplay.changeView('normal'));
    return dispatch(actionsDisplay.toggleModal(true, error));
  })
}

// @@@@@@@@@@@@@@@ ASYNC HEADER/URL FORMATTING @@@@@@@@@@@@@@@@@

export const login = user => dispatch => {
  // console.log('user at login',{user})
  
  const url = `${REACT_APP_BASE_URL}/api/auth/login`;
  const userObject = {
    username: user.username,
    password: user.password
  };
  const headers = {
    "Content-Type": "application/json"
  }; 
  const init = { 
    method: 'POST',
    headers,
    body: JSON.stringify(userObject)
  };
  const callback = {
    isNew: false,
    originalUser: null,
  }
  return dispatch(userAPICall(url, init, callback));
}

export const createOrEditUser = (user, isNew) => dispatch => {
  
  const originalUser = {username: user.username, password: user.password};

  user.organization = user.organization ? user.organization : null ;
  user.firstName = user.firstName ? user.firstName : null ;
  user.lastName = user.lastName ? user.lastName : null ;

  const params = isNew ? '' : user.id ;
  const method = isNew ? 'POST' : 'PUT';

  const url = `${REACT_APP_BASE_URL}/api/users/${params}`;
  const headers = { 
    'Content-Type': 'application/json',
  };
  if ( !isNew ) headers.Authorization = `Bearer ${user.authToken}`;

  const init = { 
    method,
    body: JSON.stringify(user),
    headers
  };
  const callback = {
    isNew,
    originalUser,
  }
  return dispatch(userAPICall(url, init, callback));
};