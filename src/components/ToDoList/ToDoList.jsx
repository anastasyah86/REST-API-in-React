// import { Component } from 'react';
import classNames from 'classnames';
import './ToDoList.scss';
import Todo from '../Todo';

const ToDoList = ({ todos, onDeleteToDo, onToggleCompleted }) => (
  <ul className="TodoList">
    {todos.map(({ id, text, completed }) => (
      <li
        key={id}
        className={classNames('TodoList__item', {
          'TodoList__item--completed': completed,
        })}
      >
        <Todo
          text={text}
          completed={completed}
          onToggleCompleted={() => onToggleCompleted(id)}
          onDeleteToDo={() => onDeleteToDo(id)}
        />
      </li>
    ))}
  </ul>
);

export default ToDoList;