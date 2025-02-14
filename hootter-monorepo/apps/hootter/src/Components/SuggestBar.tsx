//
//  SuggestBar.tsx
//  react-twitter-clone-project
//
//  Created by Sergey Smetannikov on 13.02.2025
//

import React from 'react';
import Title from './UI/Text/Titles';
import { DEFAULT_NAMES } from '../Constants/nameConstants';

interface SuggestBarProps {
  data?: [];
}

interface TopicsProps {
  hashtag: string;
  hootsCount: number;
}

const Topics: React.FC<TopicsProps> = ({ hashtag, hootsCount }) => {
  return (
    <div className="min-[911px]:border-b border-gray-500/15 pb-2 mb-2 min-[910px]:last:border-b-0 max-[910px]:bg-slate-200 max-[910px]:p-3 max-[910px]:rounded-2xl max-[910px]:mb-0 max-[910px]:last:col-span-2">
      <p className="font-medium truncate">#{hashtag}</p>
      <div className="text-gray-500 text-sm">{hootsCount}k Hoots from people</div>
    </div>
  );
};

const TopicsFeed: React.FC = () => {
  return (
    // Map the data, reuse property from SuggestBarProps
    <div className="flex flex-col max-[910px]:grid max-[910px]:grid-cols-3 max-[910px]:gap-2 max-[910px]:mb-6 max-[550px]:grid-cols-2">
      {/* Map area to max of 5 elements */}
      <Topics hashtag="BreakingNews" hootsCount={12} />
      <Topics hashtag="BagleysCoffee" hootsCount={8} />
      <Topics hashtag="GreenEarth" hootsCount={5} />
      <Topics hashtag="IsYeCrazy" hootsCount={3} />
      <Topics hashtag="IFeelGood" hootsCount={1} />
      {/* Map area end */}
    </div>
  );
};

const SuggestBar: React.FC<SuggestBarProps> = () => {
  return (
    <div className="flex flex-col gap-3">
      <Title label={DEFAULT_NAMES.trendsName} />
      <TopicsFeed />
    </div>
  );
};

export default SuggestBar;
