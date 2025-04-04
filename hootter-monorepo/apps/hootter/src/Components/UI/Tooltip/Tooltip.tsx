import React, { PropsWithChildren } from 'react';

interface ITooltipProps extends PropsWithChildren, React.HTMLAttributes<HTMLDivElement> {
  label?: string;
}

const Tooltip: React.FC<ITooltipProps> = ({ label, children, ...props }) => {
  return (
    <div className="group flex flex-row items-center gap-1 relative" {...props}>
      <div className="text-sm absolute -top-10 left-1/2 -translate-x-1/2 hidden group-hover:block px-2 py-1 bg-gray-800 text-white rounded whitespace-nowrap">
        {label}
      </div>
      {children}
    </div>
  );
};

export default Tooltip;
