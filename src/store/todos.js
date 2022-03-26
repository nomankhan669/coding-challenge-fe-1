const uniqueId = {
  currentId: 0,
  get() {
    this.currentId += 1;
    return this.currentId;
  }
};

export const initialState = {
  todos: [
    {
      id: uniqueId.get(),
      title: 'JS-101',
      completed: true
    },
    {
      id: uniqueId.get(),
      title: 'JS-102',
      completed: false
    },
    {
      id: uniqueId.get(),
      title: 'JS-201',
      completed: false
    },
    {
      id: uniqueId.get(),
      title: 'JS-202',
      completed: false
    }
  ]
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'ADD':
      state.todos.push({
        id: uniqueId.get(),
        title: action.title,
        completed: false
      });
      return {...state};
    case 'TOGGLE':
      for (let todo of state.todos) {
        if (todo.id === action.id) {
          todo.completed = !todo.completed;
          break;
        }
      }
      return {...state};
    case 'FILTER':
      switch (action.status) {
        case 'all':
          return {...state, filteredTodos: state.todos};
        case 'open':
          return {...state, filteredTodos: state.todos.filter(todo => !todo.completed)};
        case 'closed':
          return {...state, filteredTodos: state.todos.filter(todo => todo.completed)};
      }
      break;
    default:
      return state;
  }
}
