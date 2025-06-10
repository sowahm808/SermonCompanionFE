import { ProfilePage } from '../src/app/features/auth/profile.page';
import { AuthService } from '../src/app/core/services/auth.service';

describe('ProfilePage', () => {
  let auth: jest.Mocked<AuthService>;
  let page: ProfilePage;

  beforeEach(() => {
    auth = { user: { id: '1', email: 'e@test.com' }, logout: jest.fn() } as any;
    page = new ProfilePage(auth);
  });

  it('exposes user from auth service', () => {
    expect(page.user).toEqual({ id: '1', email: 'e@test.com' });
  });

  it('logs out and emits event', () => {
    const emitted: number[] = [];
    page.loggedOut.subscribe(() => emitted.push(1));
    page.logout();
    expect(auth.logout).toHaveBeenCalled();
    expect(emitted.length).toBe(1);
  });
});
