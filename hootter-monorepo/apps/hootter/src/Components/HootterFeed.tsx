import React from 'react';
import HootsWrapper from './UI/Hoots/HootsWrapper';
import HootsInput from './UI/Hoots/HootsInput';
import Title from './UI/Text/Titles';
import { DEFAULT_NAMES } from '../Constants/nameConstants';
import { IHootterFeedProps } from '@hootter/shared';

const HootterFeed: React.FC<IHootterFeedProps> = ({ data }) => {
  return (
    <div className="flex flex-col gap-2">
      <Title label={DEFAULT_NAMES.hootFeedName} />
      <HootsInput placeholder={DEFAULT_NAMES.hootPlaceholderName} rows={2} />
      {data?.map((hoot) => (
        <HootsWrapper
          key={hoot.id}
          userId={hoot.user_id}
          isFollowing={false}
          isSelf={false}
          content={hoot.content}
          datetime={hoot.created_at}
          likes={hoot.likes}
          rehoots={hoot.rehoots}
          comments={hoot.comments}
        />
      ))}
    </div>
  );
};

export default HootterFeed;
