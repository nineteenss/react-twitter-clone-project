//
//  PersonalInfo.tsx
//  react-twitter-clone-project
//
//  Created by Sergey Smetannikov on 14.02.2025
//

import React from 'react';
import { DEFAULT_COLORS } from './../../../Constants/colorsConstants';
import Text from '../Text/Text';
import UserAvatar from '../User/UserAvatar';
import MapPinIcon from '../Icons/MapPinIcon';
import LinkHrefIcon from '../Icons/LinkHrefIcon';
import CalendarIcon from '../Icons/CalendarIcon';
import TinyButton from '../Buttons/TinyButton';

interface IPersonalInfoProps {
  avatar?: string;
  textname: string;
  username: string;
  about?: string;
  location: string;
  website?: string;
  joined: string;
  totalHoots: number | 0;
  followers: number | 0;
  following: number | 0;
  isFollowing?: boolean;
  isSelf: boolean;
}

const PersonalInfo: React.FC<IPersonalInfoProps> = ({
  avatar,
  textname,
  username,
  about,
  location,
  website,
  joined,
  totalHoots,
  followers,
  following,
  isFollowing,
  isSelf,
}) => {
  return (
    <div className="grid grid-cols-[60px_minmax(0,_1fr)] gap-4 mb-3 mt-1">
      <UserAvatar image={avatar} name={username} height={60} width={60} />
      <div>
        <div className="flex flex-row items-center justify-between">
          <div>
            <h2 className="text-lg font-semibold">{textname}</h2>
            <p className="text-sm -mt-1 text-gray-400">@{username}</p>
          </div>
          {!isSelf ? (
            <TinyButton label="you" color="bg-blue-200" noaction />
          ) : !isFollowing ? (
            <TinyButton
              label="follow"
              color="bg-green-300"
              onClick={() => console.log(`Started following, ${username}`)}
            />
          ) : (
            <TinyButton label="unfollow" color="bg-red-200" />
          )}
        </div>
        <div>
          <p className="mt-2 text-sm">{about}</p>
          <div className="flex flex-row flex-wrap gap-3 text-sm font-medium text-gray-500 border-t border-slate-200 mt-2 pt-2">
            {location && (
              <Text leftSection={<MapPinIcon color={DEFAULT_COLORS.hootsIconsColor} />}>
                {location}
              </Text>
            )}
            {website && (
              <Text leftSection={<LinkHrefIcon color={DEFAULT_COLORS.hootsIconsColor} />}>
                <a
                  className="text-blue-500"
                  href={`http://${website}`}
                  target="_blank"
                  rel="noopener noreferrer">
                  {website}
                </a>
              </Text>
            )}
            {joined && (
              <Text leftSection={<CalendarIcon color={DEFAULT_COLORS.hootsIconsColor} />}>
                Joined {joined}
              </Text>
            )}
          </div>
          <div className="grid grid-cols-[max-content_max-content_1fr] gap-4 max-sm:gap-1 border-t text-sm font-medium border-slate-200 mt-2 pt-2">
            <p>{following} Following</p>
            <p>{followers} Followers</p>
            <p className="max-sm:hidden text-right text-gray-500">{totalHoots} Hoots</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
