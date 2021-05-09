import React from "react";
import PropTypes from "prop-types";

export default function ButtonContrl(props) {
  const { show, onRemove, onDone } = props;

  if (!show) {
    return null;
  }

  return (
    <div>
      <Button onClick={onRemove}>Удалить</Button>
      <Button onClick={onDone}>Выполнить</Button>
    </div>
  );
}

ButtonContrl.propTypes = {
  show: PropTypes.bool.isRequired,
  onRemove: PropTypes.func.isRequired,
  onDone: PropTypes.func.isRequired
};

ButtonContrl.defaultProps = {
  show: false,
  onRemove() {},
  onDone() {}
};

function Button(props) {
  const { onClick, children } = props;

  return (
    <button className="btn" onClick={onClick}>
      {children}
    </button>
  );
}
