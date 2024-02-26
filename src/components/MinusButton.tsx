import React from 'react';

import Button from './Button';

type MinusButtonProps = {
  handleClick: React.MouseEventHandler<HTMLButtonElement>;
};

const MinusButton = ({ handleClick }: MinusButtonProps) => {
  return (
    <Button className="button--minus" onClick={handleClick}>
      -
    </Button>
  );
};

export default MinusButton;
