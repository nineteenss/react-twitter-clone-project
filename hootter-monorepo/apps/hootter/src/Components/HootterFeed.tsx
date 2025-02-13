//
//  HootterFeed.tsx
//  react-twitter-clone-project
//
//  Created by Sergey Smetannikov on 10.02.2025
//

import React from 'react';
import HootsWrapper from './UI/Hoots/HootsWrapper';
import HootsInput from './UI/Hoots/HootsInput';
import { defaultNames } from '../Constants/nameConstants';

interface HootterFeedProps {
  data: [];
}

const HootterFeed: React.FC<HootterFeedProps> = (data) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="text-center text-2xl font-bold uppercase mb-2 pb-2">
        {defaultNames.hootFeedName}
      </div>
      <HootsInput placeholder={defaultNames.hootPlaceholderName} rows={2} />
      {/* Dummy data */}
      <HootsWrapper
        isFollowing={false}
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
