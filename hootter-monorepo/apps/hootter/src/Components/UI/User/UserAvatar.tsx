//
//  UserAvatar.tsx
//  react-twitter-clone-project
//
//  Created by Sergey Smetannikov on 13.02.2025
//

import React from 'react';

interface UserAvatarProps {
  image?: string;
  color?: string;
  name: string;
}

interface ImageProps {
  imgSrc: string;
}

interface NoImageProps {
  color?: string;
  name: string;
}

const ImageExists: React.FC<ImageProps> = ({ imgSrc }) => {
  return <img src={imgSrc} alt="User avatar" />;
};

const ImageDoesNotExist: React.FC<NoImageProps> = ({ color, name }) => {
  const firstTwoLettersName = () => {
    if (name) {
      const result = name.slice(0, 2).toUpperCase();
      return result;
    }
  };

  return (
    <div
      className={`flex flex-col justify-center items-center ${
        color || 'bg-green-500'
      } w-[45px] h-[45px] mr-3 rounded-full text-xs text-white font-bold`}
    >
      {firstTwoLettersName() || undefined}
    </div>
  );
};

const UserAvatar: React.FC<UserAvatarProps> = ({ image, color, name }) => {
  return (
    <>
      {image && <ImageExists imgSrc={image} />}
      {!image && <ImageDoesNotExist name={name} color={color} />}
    </>
  );
};

export default UserAvatar;
