import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

export default function Input({ initValue, onChange, onEnter, ...props }) {
  const [value, setValue] = useState("");

  useEffect(() => setValue(initValue), [initValue]);

  return (
    <input
      className="input"
      type="text"
      value={value}
      onChange={(e) => {
        setValue(e.target.value);
        onChange(e.target.value.trim());
      }}
      onKeyUp={(e) => {
        if (e.key === "Enter") {
          onEnter(e.target.value.trim());
        }
      }}
      {...props}
    />
  );
}

Input.propTypes = {
  initValue: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onEnter: PropTypes.func.isRequired
};

Input.defaultProps = {
  initValue: "",
  onChange() {},
  onEnter() {}
};
