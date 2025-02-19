//
//  UserAvatar.tsx
//  react-twitter-clone-project
//
//  Created by Sergey Smetannikov on 13.02.2025
//

import React from 'react';

interface IUserAvatarProps {
  image?: string;
  color?: string;
  name: string;
  height?: number;
  width?: number;
}

interface IImageProps extends React.HTMLAttributes<HTMLDivElement> {
  imgSrc: string;
  height?: number;
  width?: number;
}

interface INoImageProps extends React.HTMLAttributes<HTMLDivElement> {
  color?: string;
  name: string;
  height?: number;
  width?: number;
}

const ImageExists: React.FC<IImageProps> = ({ imgSrc, height, width, ...props }) => {
  return (
    <img
      src={imgSrc}
      {...props}
      height={height && height}
      width={width && width}
      alt="User avatar"
    />
  );
};

const ImageDoesNotExist: React.FC<INoImageProps> = ({ color, name, height, width, ...props }) => {
  const className = [
    'flex',
    'flex-col',
    'justify-center',
    'items-center',
    color || 'bg-green-500',
    'rounded-full',
    'text-sm',
    'text-white',
    'font-extrabold',
  ]
    .filter(Boolean)
    .join(' ');

  const firstTwoLetters = () => {
    if (name) {
      const result = name.slice(0, 2).toUpperCase();
      return result;
    }
  };

  return (
    <div
      className={className}
      {...props}
      style={{ width: `${width || 45}px`, height: `${height || 45}px` }}>
      {firstTwoLetters() || undefined}
    </div>
  );
};

const UserAvatar: React.FC<IUserAvatarProps> = ({ image, color, name, height, width }) => {
  return (
    <>
      {image && <ImageExists imgSrc={image} height={height} width={width} />}
      {!image && <ImageDoesNotExist name={name} color={color} height={height} width={width} />}
    </>
  );
};

export default UserAvatar;
