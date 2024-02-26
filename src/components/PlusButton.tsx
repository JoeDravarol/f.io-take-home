import React from 'react';

import Button from './Button';

type PlusButtonProps = {
  handleClick: React.MouseEventHandler<HTMLButtonElement>;
};

const PlusButton = ({ handleClick }: PlusButtonProps) => {
  return (
    <Button className="button--plus" onClick={handleClick}>
      +
    </Button>
  );
};

export default PlusButton;
