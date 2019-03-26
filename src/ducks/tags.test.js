import tagReducer, {
  fetchTagsAction, FETCH_TAGS,
  fetchTagsFailedAction, FETCH_TAGS_FAILED,
  fetchTagsSuccessAction, FETCH_TAGS_SUCCESS,
  insertNewTagAction, INSERT_NEW_TAG,
  updateTagsOnListAction, UPDATE_TAGS_ON_LIST,
  deleteTagAction, DELETE_TAG, INITIAL_STATE
} from './tags';

import tagsMockedData from '../mock/TagsMock';

describe('(Ducks) Tags', () => {

  describe('Action Creators', () => {

    it('fetchTagsAction returns an action of type FETCH_TAGS', () => {
      expect(fetchTagsAction().type)
        .toBe(FETCH_TAGS);
    });

    it('fetchTagsSuccessAction returns an action of type FETCH_TAGS_SUCCESS', () => {
      expect(fetchTagsSuccessAction().type)
        .toBe(FETCH_TAGS_SUCCESS);
    });

    it('fetchTagsFailedAction returns an action of type FETCH_TAGS_FAILED', () => {
      expect(fetchTagsFailedAction().type)
        .toBe(FETCH_TAGS_FAILED);
    });

    it('insertNewTagAction returns an action of type INSERT_NEW_TAG', () => {
      expect(insertNewTagAction().type)
        .toBe(INSERT_NEW_TAG);
    });

    it('updateTagsOnListAction returns an action of type UPDATE_TAGS_ON_LIST', () => {
      expect(updateTagsOnListAction().type)
        .toBe(UPDATE_TAGS_ON_LIST);
    });

    it('deleteTagAction returns an action of type DELETE_TAG', () => {
      expect(deleteTagAction().type)
        .toBe(DELETE_TAG);
    });
  });

  describe('Reducer', () => {
    it('returns the current state ever the action is unknown', () => {
      expect(tagReducer(INITIAL_STATE, { type: 'UNKNOWN_ACTION' }))
        .toBe(INITIAL_STATE);
    });

    it('FETCH_TASKS_SUCCESS sets parsed tags in data property', () => {
      expect(tagReducer(INITIAL_STATE, fetchTagsSuccessAction(tagsMockedData)).data)
        .toMatchObject(tagsMockedData)
    });
  });

});
