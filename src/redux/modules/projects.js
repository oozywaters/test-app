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
      id: 3,
      name: 'Project 4',
      content: 'Project 4 Content',
    },
  }
};

export default function projectsReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
