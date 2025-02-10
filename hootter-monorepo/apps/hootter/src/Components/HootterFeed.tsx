//
//  HootterFeed.tsx
//  react-twitter-clone-project
//
//  Created by Sergey Smetannikov on 10.02.2025
//

import React from 'react';
import HootsWrapper from './UI/Hoots/HootsWrapper';

interface HootterFeedProps {
  data: [];
}

const HootterFeed: React.FC<HootterFeedProps> = (data) => {
  return (
    <div className="flex flex-col gap-2">
      <HootsWrapper
        textname="John"
        username="JohnThePunisher"
        content="some text by John"
        datetime="now"
        likes={15}
        rehoots={25}
        comments={152}
      />
      <HootsWrapper
        textname="Alex"
        username="Alexboyo12"
        content="some text by Alex"
        datetime="12 hrs"
        likes={15}
        rehoots={25}
        comments={152}
      />
      <HootsWrapper
        textname="Kirby"
        username="KirbyEatsALot"
        content="some text by Kirby"
        datetime="15 mins"
        likes={15}
        rehoots={25}
        comments={152}
      />
      <HootsWrapper
        textname="dev"
        username="developer"
        content="some text by developer"
        datetime="3 days"
        likes={15}
        rehoots={25}
        comments={152}
      />
    </div>
  );
};

export default HootterFeed;
