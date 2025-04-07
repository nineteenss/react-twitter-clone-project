import React from 'react';
import Button from '../Buttons/Button';
import ImageIcon from '../Icons/ImageIcon';
import GifIcon from '../Icons/GifIcon';
import PollIcon from '../Icons/PollIcon';
import SendHootIcon from '../Icons/SendHootIcon';
import Tooltip from '../Tooltip/Tooltip';
import { useState } from 'react';
import { useHoots } from './../../../Hooks/useHoots';
import { HootSchema } from '@hootter/shared';
import { z } from 'zod';
import { useOutletContext } from 'react-router-dom';
import { IContextType } from 'apps/hootter/src/Props/globalProps';

interface IHootsInputProps {
  data?: [];
  placeholder?: string;
  rows?: number;
}

const HootsInput: React.FC<IHootsInputProps> = ({ data, rows, placeholder }) => {
  const [content, setContent] = useState<string>('');
  const [_, setError] = useState<Record<string, string>>({});
  const { userId } = useOutletContext<IContextType>();

  const { sendHootMutation } = useHoots();

  const handleSendHoot = async () => {
    try {
      setError({});
      HootSchema.parse({
        content,
        user_id: userId,
      });

      await sendHootMutation.mutateAsync({
        content,
        user_id: userId,
      });

      setContent('');
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: Record<string, string> = {};

        error.errors.forEach((err) => {
          newErrors[err.path[0]] = err.message;
        });

        setError(newErrors);
      } else {
        console.error('Error sending hoot:', error);
      }
    }
  };

  return (
    <div className="grid grid-cols-1 gap-4 max-sm:mb-4">
      <div className="bg-slate-200 rounded-3xl h-fit p-4 flex flex-col">
        <textarea
          name="hootarea"
          id="hootcontent"
          placeholder={placeholder}
          className="outline-none resize-none overflow-y-hidden bg-transparent w-full mb-2"
          rows={rows || 2}
          value={content}
          onChange={(e) => setContent(e.target.value)}
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
              onClick={handleSendHoot}
            />
          </Tooltip>
        </div>
      </div>
    </div>
  );
};

export default HootsInput;
