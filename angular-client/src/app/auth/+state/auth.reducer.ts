import * as actions from './auth.actions';

export interface State {
  email: string;
  authenticated: boolean;
  profileUrl: string;
}

const initialState: State = {
  email: null,
  authenticated: false,
  profileUrl: null
};

export function userReducer(state = initialState, action: actions.All): State {
  switch (action.type) {
    case actions.LOGIN_SUCCESS: {
      return {
        email: action.payload.email,
        authenticated: true,
        profileUrl: action.payload.profileUrl
      };
    }
    default: {
      return state;
    }
  }
}
