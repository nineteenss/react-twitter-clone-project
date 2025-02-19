//
//  useTimeAgo.ts
//  react-twitter-clone-project
//
//  Created by Sergey Smetannikov on 19.02.2025
//

import { useState, useEffect } from 'react';
import { formatDistanceToNow } from 'date-fns'

const useTimeAgo = (timestamp: string) => {
  const [timeAgo, setTimeAgo] = useState<string>('');

  useEffect(() => {
    const updateTimeAgo = () => {
      setTimeAgo(formatDistanceToNow(new Date(timestamp), { addSuffix: true }));
    };

    updateTimeAgo();
    const timer = setInterval(updateTimeAgo, 60000);

    return () => clearInterval(timer);
  }, [timestamp]);

  return timeAgo;
};

export default useTimeAgo
