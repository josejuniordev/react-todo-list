import { apiEndpoint } from './Defaults';

class TagsAPI {
  static fetchTags() {
    const url = `${apiEndpoint}/tags`;

    return new Promise((resolve, reject) => {
      fetch(url)
        .then(data => data.json())
        .then(resolve)
        .catch(reject);
    });
  }
}

export default TagsAPI;
