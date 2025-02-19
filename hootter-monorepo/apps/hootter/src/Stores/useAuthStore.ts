//
//  useAuthStore.ts
//  react-twitter-clone-project
//
//  Created by Sergey Smetannikov on 16.02.2025
//

import { create } from 'zustand'

interface AuthState {
  token: string | null
  setToken: (token: string | null) => void
  logout: () => void // No need for duplicated API call
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
    localStorage.removeItem('token')
    set({ token: null })
  }
}))

export default useAuthStore
