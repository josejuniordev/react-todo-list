import { fork, takeLatest, all, call, put } from 'redux-saga/effects';
import { notification } from 'antd';
import {
  DELETE_TAG,
  FETCH_TAGS,
  fetchTagsFailedAction,
  fetchTagsSuccessAction, INSERT_NEW_TAG,
  updateTagsOnListAction
} from '../ducks/tags';
import TagsAPI from '../integrations/TagsAPI';
import { tagMessages } from "../shared/tagsConstantes";
import TagsUtils from "../utility/TagsUtils";
import store from "../store";

function* fetchTags() {
  try {
    let tags = yield call(TagsAPI.fetchTags);

    tags = yield tags.map(tag => {
      return TagsUtils.tagFactory(tag);
    });

    yield put(fetchTagsSuccessAction(tags));

  } catch (errors) {
    put(fetchTagsFailedAction(errors));
    notification.error({
      message: tagMessages.FETCH_TAGS_FAILED
    })
  }
}

function* deleteTag({tagId}) {
  try {
    const state = store.getState();
    const filteredTags = state.tags.data.filter(tag => {
      return tag.id !== tagId;
    });

    yield put(updateTagsOnListAction(filteredTags));

    notification.success({
      message: tagMessages.DELETE_TAG_SUCCESSFULLY
    });

  } catch (errors) {
    notification.warning({
      message: tagMessages.ERROR_ON_DELETE_TAG
    });
  }
}

function* insertNewTag({values}) {
  try {
    const state = store.getState();

    let tagToSave = TagsUtils.tagFactory(values);

    let modifiedTags = [...state.tags.data];

    modifiedTags.push(tagToSave);

    yield put(updateTagsOnListAction(modifiedTags));

    notification.success({
      message: tagMessages.INSERT_NEW_TAG_SUCCESSFULLY
    });

  } catch (errors) {
    notification.warning({
      message: tagMessages.INSERT_NEW_TAG_ERROR
    });

    console.log(errors);
  }
}

function* fetchTagsSaga() {
  yield takeLatest(FETCH_TAGS, fetchTags);
}

function* deleteTagSaga() {
  yield takeLatest(DELETE_TAG, deleteTag);
}

function* insertNewTagSaga() {
  yield takeLatest(INSERT_NEW_TAG, insertNewTag);
}

export default function* () {
  yield all([
    fork(fetchTagsSaga),
    fork(deleteTagSaga),
    fork(insertNewTagSaga),
  ])
}
