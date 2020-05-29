// action = {
//   type: '',
//   title: '',
//   body: ''
// }

const events = (state = [], action) => {
  switch (action.type) {
    case 'CREATE_EVENT':
      const event = { title: action.title, body: action.body };
      const targetID = state.slice(-1)[0] ? state.slice(-1)[0].id : 0;
      const id = targetID + 1;
      return [...state, { id, ...event }];
    case 'DELETE_EVENT':
      return state.filter((event) => event.id !== action.id);
    case 'DELETE_ALL_EVENTS':
      return [];
    default:
      return state;
  }
};

export default events;
