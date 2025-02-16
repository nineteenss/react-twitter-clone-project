//
//  useHoots.ts
//  react-twitter-clone-project
//
//  Created by Sergey Smetannikov on 14.02.2025
//

import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { BASE_API_URL } from '../Lib/api'

interface Hoot {
  id: number
  content: string
  user_id: string //number?
  created_at: string
}

interface CreateHootData {
  content: string
  user_id: string
}

export function useHoots() {
  // const sendHootQuery = useQuery({
  //   queryKey: ['hoots'],
  //   queryFn:
  // })

  const receiveHootQuery = useQuery({
    queryKey: ['hoots'],
    queryFn: async () => {
      const response = await axios.get('/api/hoots')
      return response.data
    }
  })

  return {
    // sendHootQuery,
    receiveHootQuery
  }
}
