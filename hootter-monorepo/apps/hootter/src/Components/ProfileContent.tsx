import React from 'react';
import Title from './UI/Text/Titles';
import HootsInput from './UI/Hoots/HootsInput';
import HootsWrapper from './UI/Hoots/HootsWrapper';
import { DEFAULT_NAMES } from '../Constants/nameConstants';
import PersonalInfo from './UI/ProfileSection/PersonalInfo';
import { IHootterFeedProps } from '@hootter/shared';

const ProfileContent: React.FC<IHootterFeedProps> = ({ data }) => {
  return (
    <div className="flex flex-col gap-2">
      <Title label={DEFAULT_NAMES.profileName} />
      <PersonalInfo
        textname={'Your name'}
        username={'YourName'}
        about={'Nothing much to say, honestly. I am just me! Entrepreneur.'}
        location={'US, Los Angeles'}
        website={'hootter.com'}
        joined={'May 2026'}
        totalHoots={0}
        followers={123}
        following={42}
        isSelf={false}
      />
      <HootsInput placeholder={DEFAULT_NAMES.hootPlaceholderName} rows={2} />
      {data?.map((hoot) => (
        <HootsWrapper
          key={hoot.id}
          userId={hoot.user_id}
          isFollowing={false}
          isSelf={false}
          content={hoot.content}
          datetime={hoot.created_at}
          likes={hoot.likes}
          rehoots={hoot.rehoots}
          comments={hoot.comments}
        />
      ))}
      {/* Dummy data */}
      {/* <HootsWrapper
        isFollowing={false}
        isSelf={true}
        textname="You"
        username="YourSelf"
        content="some text by You"
        datetime="12 hrs"
        likes={15}
        rehoots={25}
        comments={152}
      />
      <HootsWrapper
        isFollowing={false}
        isSelf={true}
        textname="You"
        username="YourSelf"
        content="some text by You"
        datetime="12 hrs"
        likes={15}
        rehoots={25}
        comments={152}
      />
      <HootsWrapper
        isFollowing={false}
        isSelf={true}
        textname="You"
        username="YourSelf"
        content="some text by You"
        datetime="12 hrs"
        likes={15}
        rehoots={25}
        comments={152}
      /> */}
      {/* Dummy data end */}
    </div>
  );
};

export default ProfileContent;
