import { environment } from '../../environments/environment';

export interface GenerateRequest {
  theme: string;
  length: number;
}

export class SermonAIService {
  /**
   * Request a sermon outline from the backend API.
   */
  async generateOutline(request: GenerateRequest): Promise<string> {
    const resp = await fetch(`${environment.apiUrl}/api/generate`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(request)
    });
    if (!resp.ok) {
      throw new Error('Generation failed');
    }
    const data = await resp.json();
    return data.outline as string;
  }
}
