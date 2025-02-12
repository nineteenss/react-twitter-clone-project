//
//  HootsWrapper.tsx
//  react-twitter-clone-project
//
//  Created by Sergey Smetannikov on 10.02.2025
//

import React from 'react';
import HeartIcon from '../Icons/HeartIcon';
import ReHootIcon from '../Icons/ReHootsIcon';
import CommentsIcon from '../Icons/CommentsIcon';

interface HootsWrapperProps {
  avatar?: string;
  textname: string;
  username: string;
  content: string;
  datetime: string;
  likes?: number;
  rehoots?: number;
  comments?: number;
}

const HootsWrapper: React.FC<HootsWrapperProps> = ({
  avatar,
  username,
  content,
  datetime,
  textname,
  likes,
  rehoots,
  comments,
}) => {
  return (
    <div className="p-3 rounded-xl hover:bg-slate-200/70 transition-all duration-75">
      <div className="grid grid-cols-[45px_minmax(0,_1fr)] gap-4">
        {avatar ? (
          <img src={avatar} alt="User avatar" />
        ) : (
          // investigate: why sizing doesn't set properly i.e. fixed 45x45
          // caused by flex. replaced with grid
          <div className="flex justify-center items-center bg-red-500 w-[45px] h-[45px] rounded-full text-xs text-white font-bold">
            UN
          </div>
        )}
        <div className="w-full">
          <div className="flex flex-row gap-1.5 items-center mb-1">
            <p className="font-semibold">{textname}</p>
            <p className="text-gray-400 text-sm">@{username}</p>
            <p className="text-gray-400 text-xs">•</p>
            <p className="text-gray-400 text-sm">{datetime}</p>
          </div>
          <p>{content}</p>
          <div className="flex flex-row justify-between font-regular text-gray-500 mt-4">
            <div className="flex flex-row gap-1">
              <HeartIcon color="#9ca3af" />
              {likes}
            </div>
            <div className="flex flex-row gap-1">
              <ReHootIcon color="#9ca3af" />
              {rehoots}
            </div>
            <div className="flex flex-row gap-1">
              <CommentsIcon color="#9ca3af" />
              {comments}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HootsWrapper;
