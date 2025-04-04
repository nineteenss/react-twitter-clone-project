import React from 'react';
import IBaseButtonProps from '../../../Props/uiElementsProps';

interface ITinyButtonProps extends IBaseButtonProps {
  nobackground?: boolean;
  noaction?: boolean;
}

const TinyButton: React.FC<ITinyButtonProps> = ({
  label,
  color,
  nobackground,
  noaction,
  onClick,
}) => {
  const className = [
    `${!nobackground && 'px-2'}`,
    `${nobackground && 'text-slate-500'}`,
    'py-1',
    'rounded-xl',
    'text-[10px]',
    'font-semibold',
    `${!nobackground && color}`,
    `${(nobackground || noaction) && 'cursor-default'}`,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button className={className} onClick={onClick}>
      {label}
    </button>
  );
};

export default TinyButton;
