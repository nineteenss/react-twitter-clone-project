//
//  HootsWrapper.tsx
//  react-twitter-clone-project
//
//  Created by Sergey Smetannikov on 10.02.2025
//

import React from 'react';
import { defaultColors } from '../../../Constants/colorsConstants';
import HeartIcon from '../Icons/HeartIcon';
import ReHootIcon from '../Icons/ReHootsIcon';
import CommentsIcon from '../Icons/CommentsIcon';
import HootShotIcon from '../Icons/HootShotIcon';
import HootWrapperButton from '../Buttons/HootWrapperButton';
import TinyButton from '../Buttons/TinyButton';
import UserAvatar from '../User/UserAvatar';

interface HootsWrapperProps {
  avatar?: string;
  textname: string;
  username: string;
  content: string;
  datetime: string;
  likes?: number;
  rehoots?: number;
  comments?: number;
  isFollowing: boolean;
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
  isFollowing,
}) => {
  return (
    <div className="p-3 rounded-xl hover:bg-slate-200/70 transition-all duration-75">
      <div className="grid grid-cols-[45px_minmax(0,_1fr)] gap-4">
        <UserAvatar image={avatar} name={username} color="bg-orange-400" />
        <div className="w-full">
          <div className="flex flex-row gap-1.5 items-center mb-1">
            <p className="font-semibold">{textname}</p>
            <p className="text-gray-400 text-sm">@{username}</p>
            <p className="text-gray-400 text-xs">•</p>
            <p className="text-gray-400 text-sm">{datetime}</p>
            {!isFollowing ? (
              <TinyButton label="follow" color="bg-green-300" />
            ) : (
              <TinyButton label="unfollow" color="bg-yellow-300" />
            )}
          </div>
          <p>{content}</p>
          <div className="flex flex-row justify-between font-regular text-gray-500 mt-4">
            <HootWrapperButton
              icon={<HeartIcon color={defaultColors.hootsIconsColor} />}
              text={likes}
              onClick={() => console.log('Current likes:', likes)}
            />
            <HootWrapperButton
              icon={<ReHootIcon color={defaultColors.hootsIconsColor} />}
              text={rehoots}
              onClick={() => console.log('Current rehoots:', rehoots)}
            />
            <HootWrapperButton
              icon={<CommentsIcon color={defaultColors.hootsIconsColor} />}
              text={comments}
              onClick={() => console.log('Current comments:', comments)}
            />
            <HootWrapperButton
              icon={<HootShotIcon color={defaultColors.hootsIconsColor} />}
              onClick={() => console.log('Hoot captured successfully')}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HootsWrapper;
