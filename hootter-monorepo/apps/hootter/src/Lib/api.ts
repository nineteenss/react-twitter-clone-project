//
//  api.ts
//  react-twitter-clone-project
//
//  Created by Sergey Smetannikov on 15.02.2025
//

import { QueryClient } from '@tanstack/react-query'

export const queryClient = new QueryClient()

const API_PORT = import.meta.env.VITE_API_PORT
const API_URL = import.meta.env.VITE_API_HOST

export const BASE_API_URL = `${API_URL}:${API_PORT}`

/**
 * Retrieves the authorization headers required for API requests.
 *
 * @returns An object containing the Authorization header with a Bearer token
 *          retrieved from local storage. The token is used to authenticate
 *          API requests.
 */
export function getAuthHeaders() {
  return {
    Authorization: `Bearer ${localStorage.getItem('token')}`
  }
}
