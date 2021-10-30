import React from 'react';

const Button = ({ children, onClick, className, ...rest }) => {
  return (
    <button
      className={'button ' + className}
      onClick={onClick}
      children={children}
      {...rest}
    ></button>
  );
};

export default Button;
