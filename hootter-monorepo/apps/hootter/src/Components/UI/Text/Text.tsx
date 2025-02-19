//
//  Text.tsx
//  react-twitter-clone-project
//
//  Created by Sergey Smetannikov on 14.02.2025
//

import React, { PropsWithChildren } from 'react';

// prettier-ignore
interface ITextProps extends PropsWithChildren, React.HTMLAttributes<HTMLDivElement> {
  leftSection?: React.ReactNode;
  rightSection?: React.ReactNode;
  onClick?: () => void;
}

const Text: React.FC<ITextProps> = ({ leftSection, children, rightSection, onClick, ...props }) => {
  return (
    <div className="flex flex-row items-center gap-1" onClick={onClick} {...props}>
      {leftSection && leftSection}
      {children}
      {rightSection && rightSection}
    </div>
  );
};

export default Text;
