import TagsAPI from '../integrations/TagsAPI';
import { fetchTagsUrl } from './Defaults';

describe('TagsAPI class', () => {

  test('calls fetch api', () => {
    const spy = jest.spyOn(global, 'fetch');

    TagsAPI.fetchTags();

    expect(spy).toHaveBeenCalled();
    expect(spy).toHaveBeenCalledWith(fetchTagsUrl);

    spy.mockRestore();
  });

});
