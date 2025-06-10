import { ReflectionPage, Reflection } from '../src/app/features/reflection/reflection.page';
import { StorageService } from '../src/app/core/services/storage.service';

describe('ReflectionPage', () => {
  let storage: jest.Mocked<StorageService>;
  let page: ReflectionPage;

  beforeEach(() => {
    storage = { get: jest.fn(), set: jest.fn() } as any;
    page = new ReflectionPage(storage);
  });

  it('loads reflections from storage', () => {
    storage.get.mockReturnValue([{ id: 1, text: 'test' }]);
    page.load();
    expect(page.reflections).toEqual([{ id: 1, text: 'test' }]);
  });

  it('saves a reflection and clears text', () => {
    jest.spyOn(Date, 'now').mockReturnValue(123);
    page.text = 'Pray';
    page.reflections = [];
    page.save();
    expect(page.reflections).toEqual([{ id: 123, text: 'Pray' }]);
    expect(storage.set).toHaveBeenCalledWith('reflections', [{ id: 123, text: 'Pray' }]);
    expect(page.text).toBe('');
    (Date.now as jest.Mock).mockRestore();
  });
});
