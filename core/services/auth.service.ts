import { environment } from '../../environments/environment';

export interface AuthResponse {
  token: string;
  user: { id: string; email: string };
}

export class AuthService {
  private tokenKey = 'auth_token';

  /**
   * Attempt to log in with the provided credentials.
   * Stores the received JWT token on success.
   */
  async login(email: string, password: string): Promise<AuthResponse> {
    const resp = await fetch(`${environment.apiUrl}/api/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });
    if (!resp.ok) {
      throw new Error('Login failed');
    }
    const data: AuthResponse = await resp.json();
    localStorage.setItem(this.tokenKey, data.token);
    return data;
  }

  /**
   * Register a new user account.
   */
  async register(email: string, password: string): Promise<AuthResponse> {
    const resp = await fetch(`${environment.apiUrl}/api/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });
    if (!resp.ok) {
      throw new Error('Registration failed');
    }
    const data: AuthResponse = await resp.json();
    localStorage.setItem(this.tokenKey, data.token);
    return data;
  }

  /** Remove saved auth token. */
  logout() {
    localStorage.removeItem(this.tokenKey);
  }

  /** Return the saved auth token if present. */
  get token(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  /** Whether a valid auth token is stored. */
  get isLoggedIn(): boolean {
    return !!this.token;
  }
}
