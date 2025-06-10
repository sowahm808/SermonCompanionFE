import { CreateSermonPage } from '../features/sermon/create/create-sermon.page';
import { SermonAIService } from '../core/services/sermon-ai.service';
import { StorageService } from '../core/services/storage.service';

// Simple jest-based unit test covering the main flow of UC-SERMON-001

describe('CreateSermonPage', () => {
  let ai: jest.Mocked<SermonAIService>;
  let storage: jest.Mocked<StorageService>;
  let page: CreateSermonPage;

  beforeEach(() => {
    ai = { generateOutline: jest.fn() } as any;
    storage = { get: jest.fn(), set: jest.fn() } as any;
    page = new CreateSermonPage(ai, storage);
  });

  it('generates a sermon outline from theme and length', async () => {
    ai.generateOutline.mockResolvedValue('Outline');
    page.theme = 'Faith in Difficult Times';
    page.length = 10;
    await page.generate();
    expect(ai.generateOutline).toHaveBeenCalledWith({ theme: 'Faith in Difficult Times', length: 10 });
    expect(page.generated).toBe('Outline');
  });

  it('saves a customized sermon to storage', () => {
    storage.get.mockReturnValue([]);
    const content = 'My Sermon';
    page.theme = 'Test Theme';
    page.save(content);
    expect(storage.get).toHaveBeenCalledWith('sermons');
    expect(storage.set).toHaveBeenCalled();
  });
});
