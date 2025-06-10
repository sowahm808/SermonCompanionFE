import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { environment } from '../../environments/environment';

export interface GenerateRequest {
  theme: string;
  length: number;
}

@Injectable({ providedIn: 'root' })
export class SermonAIService {
  constructor(private http: HttpClient) {}

  /**
   * Request a sermon outline from the backend API.
   */
  async generateOutline(request: GenerateRequest): Promise<string> {
    const resp = await firstValueFrom(
      this.http.post<{ outline: string }>(
        `${environment.apiUrl}/api/generate`,
        request
      )
    );
    return resp.outline;
  }
}
