let nextTodoId = 0
export const addTodo = text =>  {
  const value = { type: 'ADD_TODO', id: nextTodoId++, text: text };
  console.log('addTodo', value);
  return value;
};

export const setVisibilityFilter = filter => {
  const value = { type: 'SET_VISIBILITY_FILTER', filter: filter };
  console.log('visivilityTodo', value);
  return value;
};

export const toggleTodo = id => {
  const value = { type: 'TOGGLE_TODO', id }
  console.log('toggleTodo', value);
  return value;
};

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
};