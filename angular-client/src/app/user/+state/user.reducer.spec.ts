import { userReducer } from './user.reducer';
import { LoginSuccess } from './user.actions';

describe('UserReducer', () => {
  it('should have empty initial state', () => {
    expect(userReducer(undefined, {} as any)).toEqual({
      email: null,
      authenticated: false,
      profileUrl: null
    });
  });
  it('should add user details', () => {
    const loginSuccess = new LoginSuccess({ email: 'test@test.com', profileUrl: 'fakeUrl' });
    expect(userReducer(undefined, loginSuccess)).toEqual({
      email: 'test@test.com',
      profileUrl: 'fakeUrl',
      authenticated: true
    });
  });
});
