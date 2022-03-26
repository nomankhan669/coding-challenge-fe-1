import store from './store';
import * as todoActions from './store/todoActions';

function addListener(eventName, selector, callback) {
  document.body.addEventListener(eventName, e => {
    if (e.target.matches(selector)) {
      return callback(e);
    }
  });
}

addListener('click', '[data-element="addTodoButton"]', () => {
  const todoInput = document.querySelector('[data-element="addTodoInput"]');
  store.dispatch(todoActions.add(todoInput.value));
});

addListener('click', '[data-element="toggleTodo"]', e => {
  const id = Number(e.target.dataset.id);
  store.dispatch(todoActions.toggle(id));
});

addListener('keyup', '[data-element="addTodoInput"]', (e) => {
  if (e.keyCode === 13)
    document.querySelector('[data-element="addTodoButton"]').click();
})

addListener('click', '[data-element="todoFilter"]', (e) => {
  store.dispatch(todoActions.filter(e.target.value));
})