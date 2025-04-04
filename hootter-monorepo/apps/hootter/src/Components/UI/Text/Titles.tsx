import React from 'react';

interface ITitleProps {
  label: string;
}

const Title: React.FC<ITitleProps> = ({ label }) => {
  return <h1 className="text-blue-500 font-bold text-2xl">{label}</h1>;
};

export default Title;
