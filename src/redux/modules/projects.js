import _ from 'lodash';

const CREATE = 'projects/CREATE';
const REMOVE = 'projects/REMOVE';

const initialState = {
  data: {
    1: {
      id: 1,
      name: 'Project 1',
      content: 'Project 1 Content',
    },
    2: {
      id: 2,
      name: 'Project 2',
      content: 'Project 2 Content',
    },
    3: {
      id: 3,
      name: 'Project 3',
      content: 'Project 3 Content',
    },
    4: {
      id: 4,
      name: 'Project 4',
      content: 'Project 4 Content',
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
  }
}

export default function projectsReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE:
      const uniqueId = _.uniqueId('proj');
      return {
        ...state,
        data: {
          ...state.data,
          [uniqueId]: {
            id: uniqueId,
            name: action.payload.projectName,
            content: 'Some project content',
          },
        },
      };
    case REMOVE:
      return {
        ...state,
        data: _.omit(state.data, action.payload.project.id),
      };
    default:
      return state;
  }
}
