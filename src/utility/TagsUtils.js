import Tag from '../classes/Tag';

class TagsUtils {
  static tagFactory(values) {
    return new Tag(
      values.name,
      values.createdAt,
      values.id
    );
  }
}

export default TagsUtils;
