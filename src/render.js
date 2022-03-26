function renderApp(input, todoList) {
  return `<div>${input}${todoList}</div>`;
}

function renderForm() {
  return `<div class="form">
    <input type="text" data-element="addTodoInput">
    <button data-element="addTodoButton">Add</button>
  </div>`;
}

function renderTodos(todoItems) {
  return `<div>
    <span>
      <input type="radio" name="filter" id="filter-all" data-element="todoFilter" value="all" />
      <label for="filter-all">Show all</label>
    </span>
    <span>
      <input type="radio" name="filter" id="filter-open" data-element="todoFilter" value="open" />
      <label for="filter-open">Show open</label>
    </span>
    <span>
      <input type="radio" name="filter" id="filter-closed" data-element="todoFilter" value="closed" />
      <label for="filter-closed">Show closed</label>
    </span>
  </div>
  <ul class="todos">${todoItems}</ul>`;
}

function renderTodoItem(todo) {
  return `<li class="${`todos__item todos__item_${todo.completed && 'checked'}`}">
    <input type="checkbox" data-element="toggleTodo" data-id="${todo.id}"${todo.completed ? ' checked' : ''}>
    ${todo.title}
  </li>`;
}

export default (element, state) => {
  let todoItems = state.todos.map(renderTodoItem).join('');
  if (state.filteredTodos)
    todoItems = state.filteredTodos.map(renderTodoItem).join('');
  
  element.innerHTML = renderApp(
    renderForm(),
    renderTodos(todoItems)
  );
}
