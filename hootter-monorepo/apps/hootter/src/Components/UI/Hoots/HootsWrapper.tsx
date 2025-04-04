import React from 'react';
import { DEFAULT_COLORS } from '../../../Constants/colorsConstants';
import HeartIcon from '../Icons/HeartIcon';
import ReHootIcon from '../Icons/ReHootsIcon';
import CommentsIcon from '../Icons/CommentsIcon';
import HootShotIcon from '../Icons/HootShotIcon';
import HootWrapperButton from '../Buttons/HootWrapperButton';
import TinyButton from '../Buttons/TinyButton';
import UserAvatar from '../User/UserAvatar';
import useTimeAgo from '../../../Hooks/useTimeAgo';
import { useFetchUserData } from '../../../Hooks/useFetchUserData';

interface IHootsWrapperProps {
  avatar?: string;
  userId: number;
  content: string;
  datetime: string;
  likes?: number;
  rehoots?: number;
  comments?: number;
  isFollowing: boolean | false;
  isSelf: boolean | false;
}

const HootsWrapper: React.FC<IHootsWrapperProps> = ({
  avatar,
  content,
  datetime,
  userId,
  likes,
  rehoots,
  comments,
  isFollowing,
  isSelf,
}) => {
  const timeAgo = useTimeAgo(datetime);
  const { fetchUserDataQuery } = useFetchUserData(userId);
  const { data: userData } = fetchUserDataQuery;

  return (
    <div className="p-3 rounded-xl hover:bg-slate-200/70 max-sm:mb-5 max-sm:hover:bg-transparent max-sm:p-0 transition-all duration-75">
      <div className="grid grid-cols-[45px_minmax(0,_1fr)] gap-4">
        <div className="flex flex-col gap-2">
          <UserAvatar image={avatar} name={userData?.username} color="bg-orange-400" />
          {isSelf ? (
            <TinyButton label="you" color="bg-blue-200" noaction />
          ) : !isFollowing ? (
            <TinyButton
              label="follow"
              color="bg-green-300"
              onClick={() => console.log(`Started following, ${userData?.username}`)}
            />
          ) : (
            <TinyButton label="following" nobackground />
          )}
        </div>
        <div className="w-full">
          <div className="flex flex-row gap-1.5 items-center mb-1">
            <p className="font-semibold">{userData?.textname}</p>
            <p className="text-gray-400 text-sm truncate">@{userData?.username}</p>
            <p className="text-gray-400 text-xs">•</p>
            <p className="text-gray-400 text-sm">{timeAgo}</p>
          </div>
          <p>{content}</p>
          <div className="flex flex-row justify-between font-regular text-gray-500 mt-4">
            <HootWrapperButton
              icon={<HeartIcon color={DEFAULT_COLORS.hootsIconsColor} />}
              label={likes}
              onClick={() => console.log('Current likes:', likes)}
            />
            <HootWrapperButton
              icon={<ReHootIcon color={DEFAULT_COLORS.hootsIconsColor} />}
              label={rehoots}
              onClick={() => console.log('Current rehoots:', rehoots)}
            />
            <HootWrapperButton
              icon={<CommentsIcon color={DEFAULT_COLORS.hootsIconsColor} />}
              label={comments}
              onClick={() => console.log('Current comments:', comments)}
            />
            <HootWrapperButton
              icon={<HootShotIcon color={DEFAULT_COLORS.hootsIconsColor} />}
              onClick={() => console.log('Hoot captured successfully')}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HootsWrapper;
