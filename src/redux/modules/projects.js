import _ from 'lodash';

const CREATE = 'projects/CREATE';
const REMOVE = 'projects/REMOVE';
const ADD_KEYWORD = 'project/ADD_KEYWORD';

const initialState = {
  data: {
    1: {
      id: 1,
      name: 'Project 1',
      content: 'Project 1 Content',
      keywords: [],
    },
    2: {
      id: 2,
      name: 'Project 2',
      content: 'Project 2 Content',
      keywords: [],
    },
    3: {
      id: 3,
      name: 'Project 3',
      content: 'Project 3 Content',
      keywords: [],
    },
    4: {
      id: 4,
      name: 'Project 4',
      content: 'Project 4 Content',
      keywords: [],
    },
  }
};

export function create(projectName = 'New Project') {
  return {
    type: CREATE,
    payload: {
      projectName,
    },
  };
}

export function remove(project) {
  return {
    type: REMOVE,
    payload: {
      project,
    },
  };
}

export function addKeyword(project) {
  return {
    type: ADD_KEYWORD,
    payload: {
      project,
    },
  };
}

export default function projectsReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE:
      const uniqueId = _.uniqueId('proj_');
      return {
        ...state,
        data: {
          ...state.data,
          [uniqueId]: {
            id: uniqueId,
            name: action.payload.projectName,
            content: 'Some project content',
            keywords: [],
          },
        },
      };
    case REMOVE:
      return {
        ...state,
        data: _.omit(state.data, action.payload.project.id),
      };
    case ADD_KEYWORD:
      return {
        ...state,
        data: {
          ...state.data,
          [action.payload.project.id]: {
            ...state.data[action.payload.project.id],
            keywords: [
              ...state.data[action.payload.project.id].keywords,
              _.uniqueId('keyword_'),
            ],
          }
        }
      };
    default:
      return state;
  }
}
