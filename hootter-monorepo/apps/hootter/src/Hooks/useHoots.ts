//
//  useHoots.ts
//  react-twitter-clone-project
//
//  Created by Sergey Smetannikov on 14.02.2025
//

import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

export function useHoots() {
  const sendHootQuery = useQuery({
    queryKey: ['send-hoot'],
    queryFn: async () => {
      const response = await axios.post('/api/hoots')

    }
  })

  const receiveHootQuery = useQuery({
    queryKey: ['send-hoot'],
    queryFn: async () => {
      const response = await axios.get('/api/hoots')

    }
  })

  return {
    sendHootQuery,
    receiveHootQuery
  }
}
