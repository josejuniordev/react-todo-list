import React, { Fragment } from 'react';
import AppHeader from '../components/generics/AppHeader';
import { connect } from 'react-redux';
import TagsForm from '../components/forms/TagsForm';
import { deleteTagAction, insertNewTagAction } from '../ducks/tags';

function TagsPage(
  {
    tags,
    callInsertNewTag,
    callDeleteTag
  }
) {

  function insertTagHandler(name) {
    callInsertNewTag({name});
  }

  function closeTagHandler(id) {
    callDeleteTag(id);
  }

  return (
    <Fragment>
      <AppHeader title="Tags" />
      <TagsForm
        tags={tags.data}
        onInsertTag={insertTagHandler}
        onTagClose={closeTagHandler}
      />
    </Fragment>
  );
}

export default connect(
  ({tags}) => {
    return {
      tags
    }
  },
  dispatch => {
    return {
      callDeleteTag(tagId) {
        dispatch(deleteTagAction(tagId));
      },
      callInsertNewTag(values) {
        dispatch(insertNewTagAction(values));
      }
    }
  }
)(TagsPage);
