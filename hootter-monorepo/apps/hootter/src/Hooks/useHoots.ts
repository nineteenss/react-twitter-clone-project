//
//  useHoots.ts
//  react-twitter-clone-project
//
//  Created by Sergey Smetannikov on 14.02.2025
//

import { useQuery, useMutation } from '@tanstack/react-query'
import axios from 'axios'
import { BASE_API_URL, queryClient, getAuthHeaders } from '../Lib/api'
import { PATHS } from '../Constants/pathsConstants'

export function useHoots() {
  const receiveHootQuery = useQuery({
    queryKey: ['hoots'],
    queryFn: async () => {
      const response = await axios.get(`${BASE_API_URL}/api${PATHS.HOOTS}`, {
        headers: getAuthHeaders()
      })
      return response.data
    }
  })

  const sendHootMutation = useMutation({
    mutationFn: (newHoot) => axios.post(`${BASE_API_URL}/api${PATHS.HOOTS}`, newHoot),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['hoots'] });
    }
  })

  return {
    receiveHootQuery,
    sendHootMutation
  }
}
