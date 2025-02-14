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

interface HootterFeedProps {
  data: [];
}

const HootterFeed: React.FC<HootterFeedProps> = (data) => {
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
      <HootsWrapper
        isFollowing={true}
        isSelf={false}
        textname="Alex"
        username="Alexboyo12"
        content="some text by Alex"
        datetime="12 hrs"
        likes={15}
        rehoots={25}
        comments={152}
      />
      <HootsWrapper
        isFollowing={true}
        isSelf={false}
        textname="Kirby"
        username="KirbyEatsALot"
        content="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
        datetime="15 mins"
        likes={15}
        rehoots={25}
        comments={152}
      />
      <HootsWrapper
        isFollowing={false}
        isSelf={false}
        textname="dev"
        username="developer"
        content="some text by developer"
        datetime="3 days"
        likes={15}
        rehoots={25}
        comments={152}
      />
      {/* Dummy data end */}
    </div>
  );
};

export default HootterFeed;
