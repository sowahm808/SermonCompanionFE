import { SermonListPage } from '../src/app/features/sermon/list/sermon-list.page';
import { StorageService } from '../src/app/core/services/storage.service';
import { Sermon } from '../src/app/features/sermon/create/create-sermon.page';

describe('SermonListPage', () => {
  let storage: jest.Mocked<StorageService>;
  let page: SermonListPage;

  beforeEach(() => {
    storage = { get: jest.fn() } as any;
    storage.get.mockReturnValue([]);
    page = new SermonListPage(storage);
  });

  it('loads sermons from storage', () => {
    const sermons: Sermon[] = [{ id: 1, title: 'T', content: 'C' }];
    storage.get.mockReturnValue(sermons);
    page.load();
    expect(page.sermons).toEqual(sermons);
  });
});
