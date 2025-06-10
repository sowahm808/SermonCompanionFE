import { CommunityFeedComponent } from '../src/app/features/community/community-feed.component';
import { StorageService } from '../src/app/core/services/storage.service';

describe('CommunityFeedComponent', () => {
  let storage: jest.Mocked<StorageService>;
  let comp: CommunityFeedComponent;

  beforeEach(() => {
    storage = { get: jest.fn(), set: jest.fn() } as any;
    global.alert = jest.fn();
    storage.get.mockReturnValue([]);
    comp = new CommunityFeedComponent(storage);
  });

  it('loads sermons from storage', () => {
    storage.get.mockReturnValue([{ id: 1, title: 'T', content: 'C' }]);
    comp.load();
    expect(comp.sermons).toEqual([{ id: 1, title: 'T', content: 'C' }]);
  });

  it('alerts when no sermons to share', () => {
    storage.get.mockReturnValueOnce([]); // for get('sermons')
    comp.share();
    expect(global.alert).toHaveBeenCalledWith('No saved sermon to share');
  });

  it('shares last local sermon', () => {
    storage.get.mockImplementation((key: string) => {
      if (key === 'sermons') return [{ id: 1, title: 'T', content: 'C' }];
      return [];
    });
    jest.spyOn(Date, 'now').mockReturnValue(5);
    comp.share();
    expect(storage.set).toHaveBeenCalledWith('community-sermons', [
      { id: 5, title: 'T', content: 'C' }
    ]);
    (Date.now as jest.Mock).mockRestore();
  });
});
