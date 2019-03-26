// Action Types

export const FETCH_TAGS = 'FETCH_TAGS';
export const FETCH_TAGS_SUCCESS = 'FETCH_TAGS_SUCCESS';
export const FETCH_TAGS_FAILED = 'FETCH_TAGS_FAILED';
export const UPDATE_TAGS_ON_LIST = 'UPDATE_TAGS_ON_LIST';
export const DELETE_TAG = 'DELETE_TAG';
export const INSERT_NEW_TAG = 'INSERT_NEW_TAG';

// Initial state

const INITIAL_STATE = {
  data: [],
  errors: {
    fetch: []
  },
  loading: {
    fetch: false
  }
};

// reducer
export default function (state = INITIAL_STATE, action) {
  const { type, tags, errors } = action;

  switch (type) {
    case FETCH_TAGS:
      return {
        ...state,
        loading: {
          ...state.loading,
          fetch: true
        }
      };
    case FETCH_TAGS_SUCCESS:
      return {
        ...state,
        data: tags,
        loading: {
          ...state.loading,
          fetch: false
        }
      };
    case FETCH_TAGS_FAILED:
      return {
        ...state,
        loading: {
          ...state.loading,
          fetch: false
        },
        errors: {
          ...state.errors,
          fetch: errors
        }
      };
    case UPDATE_TAGS_ON_LIST:
      return {
        ...state,
        data: tags
      };
    default:
      return state;
  }
}

// Action Creators

export function fetchTagsAction() {
  return { type: FETCH_TAGS };
}

export function fetchTagsSuccessAction(tags) {
  return { type: FETCH_TAGS_SUCCESS, tags };
}

export function fetchTagsFailedAction(errors) {
  return { type: FETCH_TAGS_FAILED, errors };
}

export function updateTagsOnListAction(tags) {
  return { type: UPDATE_TAGS_ON_LIST, tags };
}

export function deleteTagAction(tagId) {
  return { type: DELETE_TAG, tagId };
}

export function insertNewTagAction(values) {
  return { type: INSERT_NEW_TAG, values };
}
