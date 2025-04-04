import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { BASE_API_URL, getAuthHeaders, queryClient } from '../Lib/api';
import { PATHS } from '../Constants/pathsConstants';

export function useFetchUserData(user_id: number) {
  const fetchUserDataQuery = useQuery({
    queryKey: ['user', user_id],
    queryFn: async () => {
      const response = await axios.get(`${BASE_API_URL}/api${PATHS.USERS}/${user_id}`, {
        headers: getAuthHeaders()
      })
      return response.data
    }
  })

  return {
    fetchUserDataQuery
  }
}