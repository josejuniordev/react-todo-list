import Tag from '../classes/Tag';

class TagsUtils {
  static tagFactory(values) {
    return new Tag(
      values.name
    );
  }
}

export default TagsUtils;
