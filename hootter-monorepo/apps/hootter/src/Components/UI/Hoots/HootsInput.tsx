//
//  HootsInput.tsx
//  react-twitter-clone-project
//
//  Created by Sergey Smetannikov on 12.02.2025
//

import React from 'react';
import Button from '../Buttons/Button';

interface HootsInputProps {
  data?: [];
  placeholder?: string;
  rows?: number;
}

const HootsInput: React.FC<HootsInputProps> = ({ data, rows, placeholder }) => {
  return (
    <div className="grid grid-cols-[45px_minmax(0,_1fr)] gap-4">
      {data ? (
        <img src={data.toString()} alt="User avatar" />
      ) : (
        <div className="flex flex-col justify-center items-center bg-blue-400 w-[45px] h-[45px] mr-3 rounded-full text-xs text-white font-bold">
          YOU
        </div>
      )}
      <div className="bg-slate-200 rounded-2xl h-fit p-4 flex flex-col">
        <textarea
          name="hootarea"
          id="hootcontent"
          placeholder={placeholder}
          className="outline-none resize-none overflow-y-hidden bg-transparent w-full mb-2"
          rows={rows || 2}
        />
        <Button text="Hoot" color={'bg-blue-500'} right />
      </div>
    </div>
  );
};

export default HootsInput;
