import { RegisterPage } from '../features/auth/register.page';
import { AuthService } from '../core/services/auth.service';

describe('RegisterPage', () => {
  let auth: jest.Mocked<AuthService>;
  let page: RegisterPage;

  beforeEach(() => {
    auth = { register: jest.fn() } as any;
    page = new RegisterPage(auth);
    localStorage.clear();
  });

  it('registers and emits event on success', async () => {
    auth.register.mockResolvedValue({ token: 't', user: { id: '1', email: 'e@test.com' } });
    page.email = 'e@test.com';
    page.password = 'p';
    const emitted: number[] = [];
    page.registered.subscribe(() => emitted.push(1));
    await page.register();
    expect(auth.register).toHaveBeenCalledWith('e@test.com', 'p');
    expect(localStorage.getItem('auth_user')).toBe(JSON.stringify({ id: '1', email: 'e@test.com' }));
    expect(emitted.length).toBe(1);
    expect(page.error).toBe('');
  });

  it('sets error message on failure', async () => {
    auth.register.mockRejectedValue(new Error('fail'));
    await page.register();
    expect(page.error).toBe('Registration failed');
  });
});
