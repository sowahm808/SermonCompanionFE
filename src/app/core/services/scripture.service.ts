import { environment } from '../../environments/environment';

export class ScriptureService {
  /**
   * Retrieve a scripture passage from the backend.
   */
  async getPassage(reference: string, translation = 'KJV'): Promise<string> {
    const params = new URLSearchParams({ ref: reference, translation });
    const resp = await fetch(`${environment.apiUrl}/api/scripture?${params.toString()}`);
    if (!resp.ok) {
      throw new Error('Unable to fetch scripture');
    }
    const data = await resp.json();
    return data.passage as string;
  }
}
