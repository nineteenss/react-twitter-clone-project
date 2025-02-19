//
//  HootterFeed.tsx
//  react-twitter-clone-project
//
//  Created by Sergey Smetannikov on 10.02.2025
//

import React from 'react';
import HootsWrapper from './UI/Hoots/HootsWrapper';
import HootsInput from './UI/Hoots/HootsInput';
import Title from './UI/Text/Titles';
import { DEFAULT_NAMES } from '../Constants/nameConstants';

interface IHootterFeedProps {
  data: [];
}

const HootterFeed: React.FC<IHootterFeedProps> = (data) => {
  return (
    <div className="flex flex-col gap-2">
      <Title label={DEFAULT_NAMES.hootFeedName} />
      <HootsInput placeholder={DEFAULT_NAMES.hootPlaceholderName} rows={2} />
      {/* Dummy data */}
      <HootsWrapper
        isFollowing={false}
        isSelf={false}
        textname="John"
        username="JohnThePunisher"
        content="some text by John"
        datetime="now"
        likes={15}
        rehoots={25}
        comments={152}
      />
      {/* Dummy data end */}
    </div>
  );
};

export default HootterFeed;
