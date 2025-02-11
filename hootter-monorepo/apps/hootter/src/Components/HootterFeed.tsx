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
      <div className="text-right text-2xl font-bold uppercase border-b border-gray-500/25 mb-2 pb-2">
        Hoot feed
      </div>
      <div className="flex flex-row">
        {data?.avatar ? (
          <img src={data?.avatar} alt="User avatar" />
        ) : (
          <div className="flex flex-col justify-center align-middle bg-red-500 p-4 mr-3 rounded-full text-xs h-fit text-white font-bold">
            YU
          </div>
        )}
        <textarea
          name="hootarea"
          id="hootcontent"
          className="bg-slate-200 rounded-2xl p-5 resize-y w-full"
        >
          Hoot something that goes on your mind...
        </textarea>
      </div>
      {/* Dummy data */}
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
        content="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
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
      {/* Dummy data end */}
    </div>
  );
};

export default HootterFeed;
