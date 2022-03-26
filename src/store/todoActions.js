export const toggle = id => ({
  type: 'TOGGLE',
  id
});

export const add = title => ({
  type: 'ADD',
  title
});

export const filter = status => ({
  type: 'FILTER',
  status
});
