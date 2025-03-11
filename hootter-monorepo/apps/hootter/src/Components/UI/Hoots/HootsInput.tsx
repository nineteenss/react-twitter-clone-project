//
//  HootsInput.tsx
//  react-twitter-clone-project
//
//  Created by Sergey Smetannikov on 12.02.2025
//

import React from 'react';
import Button from '../Buttons/Button';
import ImageIcon from '../Icons/ImageIcon';
import GifIcon from '../Icons/GifIcon';
import PollIcon from '../Icons/PollIcon';
import SendHootIcon from '../Icons/SendHootIcon';
import Tooltip from '../Tooltip/Tooltip';
// import UserAvatar from '../User/UserAvatar';

interface IHootsInputProps {
  data?: [];
  placeholder?: string;
  rows?: number;
}

const HootsInput: React.FC<IHootsInputProps> = ({ data, rows, placeholder }) => {
  return (
    // <div className="grid grid-cols-[45px_minmax(0,_1fr)] gap-4">
    <div className="grid grid-cols-1 gap-4 max-sm:mb-4">
      {/* <UserAvatar image={data?.toString()} name="self" color={'bg-slate-800'} /> */}
      <div className="bg-slate-200 rounded-3xl h-fit p-4 flex flex-col">
        <textarea
          name="hootarea"
          id="hootcontent"
          placeholder={placeholder}
          className="outline-none resize-none overflow-y-hidden bg-transparent w-full mb-2"
          rows={rows || 2}
        />
        {/* Input menu - upload image, upload gif, create poll, send message */}
        <div className="flex flex-row justify-between">
          <div className="flex flex-row gap-1">
            <Tooltip label="Upload image">
              <Button icon={<ImageIcon color="white" />} color={'bg-blue-500'} />
            </Tooltip>
            <Tooltip label="Upload gif">
              <Button icon={<GifIcon color="white" />} color={'bg-blue-500'} />
            </Tooltip>
            <Tooltip label="Create poll">
              <Button icon={<PollIcon color="white" />} color={'bg-blue-500'} />
            </Tooltip>
          </div>
          <Tooltip label="Send hoot">
            <Button
              label="Hoot"
              rightSection={<SendHootIcon color="white" />}
              color={'bg-blue-500'}
            />
          </Tooltip>
        </div>
      </div>
    </div>
  );
};

export default HootsInput;
