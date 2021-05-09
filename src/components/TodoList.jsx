import React from "react";

import PropTypes from "prop-types";

export default function TodoList(props) {
  const { onSelect, todos, children } = props;

  if (!todos.length) {
    return children;
  }

  return (
    <ul className="list">
      {props.todos.map((item) => (
        <li
          key={item.id}
          className={item.isDone ? "list__item--done" : "list__item"}
        >
          <label>
            <input
              type="checkbox"
              onChange={() => onSelect(item.id)}
              checked={item.isSelected}
            />
            {item.value}
          </label>
        </li>
      ))}
    </ul>
  );
}

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  onSelect: PropTypes.func.isRequired
};

TodoList.defaultProps = {
  todos: [],
  onSelect() {}
};
