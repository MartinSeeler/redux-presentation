import React from 'react';

const Button = ({label, onClick}) =>
    <button type="button" className="btn btn-secondary" onClick={onClick}>
      {label}
    </button>;

export default Button;
