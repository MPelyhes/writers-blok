import { SET_CURRENT_USER } from '../actions/types';

const DEFAULT_STATE = {
  isAuthenticated: false, //hopefully be true, when logged in
  user: {} //all the user info when logged in
};

const curreUser = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        //turn empty object into false, or if there are keys, true 
        isAuthenticated: !!Object.keys(action.user).length
      }
  }
}