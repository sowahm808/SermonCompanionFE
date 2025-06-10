import { LoginPage } from '../features/auth/login.page';
import { AuthService } from '../core/services/auth.service';

describe('LoginPage', () => {
  let auth: jest.Mocked<AuthService>;
  let page: LoginPage;

  beforeEach(() => {
    auth = { login: jest.fn() } as any;
    page = new LoginPage(auth);
  });

  it('logs in and emits event on success', async () => {
    auth.login.mockResolvedValue({ token: 't', user: { id: '1', email: 'e' } });
    page.email = 'a@test.com';
    page.password = 'p';
    const emitted: number[] = [];
    page.loggedIn.subscribe(() => emitted.push(1));
    await page.login();
    expect(auth.login).toHaveBeenCalledWith('a@test.com', 'p');
    expect(page.error).toBe('');
    expect(emitted.length).toBe(1);
  });

  it('sets error message on failure', async () => {
    auth.login.mockRejectedValue(new Error('fail'));
    await page.login();
    expect(page.error).toBe('Invalid credentials');
  });
});
