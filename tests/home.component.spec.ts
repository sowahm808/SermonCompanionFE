import { HomeComponent } from '../src/app/features/home/home.component';
import { SermonAIService } from '../src/app/core/services/sermon-ai.service';

// Unit tests for HomeComponent

describe('HomeComponent', () => {
  let ai: jest.Mocked<SermonAIService>;
  let comp: HomeComponent;

  beforeEach(() => {
    ai = { generateOutline: jest.fn() } as any;
    comp = new HomeComponent(ai);
  });

  it('requests outline and emits event on success', async () => {
    ai.generateOutline.mockResolvedValue('Outline');
    comp.theme = 'Hope';
    comp.length = 8;
    const emitted: string[] = [];
    comp.generated.subscribe(o => emitted.push(o));
    await comp.onSubmit();
    expect(ai.generateOutline).toHaveBeenCalledWith({ theme: 'Hope', length: 8 });
    expect(comp.result).toBe('Outline');
    expect(emitted).toEqual(['Outline']);
  });

  it('sets error message on failure', async () => {
    ai.generateOutline.mockRejectedValue(new Error('fail'));
    await comp.onSubmit();
    expect(comp.result).toBe('Error generating outline');
  });
});
