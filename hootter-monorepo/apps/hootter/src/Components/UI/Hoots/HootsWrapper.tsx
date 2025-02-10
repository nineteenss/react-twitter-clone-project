//
//  HootsWrapper.tsx
//  react-twitter-clone-project
//
//  Created by Sergey Smetannikov on 10.02.2025
//

import React from 'react';
import Heart from '../Icons/HeartIcon';

interface HootsWrapperProps {
  textname: string;
  username: string;
  content: string;
  datetime: string;
  likes?: number;
  rehoots?: number;
  comments?: number;
}

const HootsWrapper: React.FC<HootsWrapperProps> = ({
  username,
  content,
  datetime,
  textname,
  likes,
  rehoots,
  comments,
}) => {
  return (
    <div className="bg-white p-3 rounded-xl">
      <div className="flex flex-row gap-1.5 items-center mb-1">
        <p className="font-semibold">{textname}</p>
        <p className="text-gray-400 text-sm">@{username}</p>
        <p className="text-gray-400 text-xs">•</p>
        <p className="text-gray-400 text-sm">{datetime}</p>
      </div>
      <p>{content}</p>
      <div className="flex flex-row justify-between text-gray-500 mt-4">
        <div className="flex flex-row gap-1">
          <Heart color="black" />
          {likes}
        </div>
        <p>{rehoots}</p>
        <p>{comments}</p>
      </div>
    </div>
  );
};

export default HootsWrapper;
