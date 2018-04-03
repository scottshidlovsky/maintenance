import { UserActions, UserActionTypes } from './user.actions';

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

// TODO(scottshidlovsky) userReducer in auth feature? should either call feature user or rename this
export function userReducer(state = initialState, action: UserActions): State {
  switch (action.type) {
    case UserActionTypes.LoginSuccess: {
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
