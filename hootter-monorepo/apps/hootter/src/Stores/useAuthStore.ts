//
//  useAuthStore.ts
//  react-twitter-clone-project
//
//  Created by Sergey Smetannikov on 16.02.2025
//

import { create } from 'zustand'
import axios from 'axios'

interface AuthState {
  token: string | null
  setToken: (token: string | null) => void
  logout: () => Promise<void> // async for API call
}

const useAuthStore = create<AuthState>((set) => ({
  token: localStorage.getItem('token') || null,
  setToken: (token) => {
    if (token) {
      localStorage.setItem('token', token)
    } else {
      localStorage.removeItem('token')
    }
    set({ token })
  },
  logout: async () => {
    try {
      await axios.post('/api/logout', {}, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      })
    } catch (error) {
      console.error('Logout error:', error)
    } finally {
      localStorage.removeItem('token')
      set({ token: null })
    }
  }
}))

export default useAuthStore
