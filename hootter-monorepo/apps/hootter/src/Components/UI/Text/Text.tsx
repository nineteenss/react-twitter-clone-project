import React, { PropsWithChildren } from 'react';

// prettier-ignore
interface ITextProps extends PropsWithChildren, React.HTMLAttributes<HTMLDivElement> {
  leftSection?: React.ReactNode;
  rightSection?: React.ReactNode;
  onClick?: () => void;
  center?: boolean;
  color?: string;
}

const Text: React.FC<ITextProps> = ({
  leftSection,
  children,
  rightSection,
  onClick,
  center,
  color,
  ...props
}) => {
  return (
    <div
      className={`flex flex-row items-center gap-1 ${center ? 'justify-center' : 'justify-start'} ${
        color ? `${color}` : 'text-gray-500'
      }`}
      onClick={onClick}
      {...props}>
      {leftSection && leftSection}
      {children}
      {rightSection && rightSection}
    </div>
  );
};

export default Text;
