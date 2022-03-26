import React from 'react';
import { createUseStyles } from 'react-jss';

const styles = createUseStyles({
  todoForm: {
    display: 'flex',
    columnGap: 5
  },
  todoApp: {
    width: 400,
    margin: {
      top: 60,
      right: 'auto',
      left: 'auto',
      bottom: 0
    },
    boxShadow: '0 8px 40px 5px #a8a8a8',
    padding: '40px 10px',
    backgroundColor: '#ffffff'
  },
  todoInput: {
    flex: '1',
    padding: {
      top: 10,
      bottom: 10,
      left: 15,
      right: 15
    }
  },
  todoBtn: {
    width: '12%',
    cursor: 'pointer',
    backgroundColor: '#007bff',
    borderColor: '#007bff',
    color: '#fff'
  },
  todoFilterWrapper: {
    padding: '15px 0',
    textAlign: 'center'
  },
  todoFilterLabel: {
    cursor: 'pointer'
  },
  todoItem: {
    margin: '8px',
    padding: '10px 15px',
    fontSize: 14,
    fontFamily: 'sans-serif',
    backgroundColor: '#f5f5f5'
  },
  todoItemChecked: {
    backgroundColor: '#9ea'
  },
  todoItemCheckbox: {
    cursor: 'pointer',
    marginRight: 10
  },
})

export default styles;