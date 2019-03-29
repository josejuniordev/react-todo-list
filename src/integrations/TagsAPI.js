import { fetchTagsUrl } from './Defaults';

class TagsAPI {
  static fetchTags() {
    return new Promise((resolve, reject) => {
      fetch(fetchTagsUrl)
        .then(data => data.json())
        .then(resolve)
        .catch(reject);
    });
  }
}

export default TagsAPI;
