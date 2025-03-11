//
//  useAuthStore.ts
//  react-twitter-clone-project
//
//  Created by Sergey Smetannikov on 16.02.2025
//

import { create } from 'zustand'

interface IAuthState {
  token: string | null
  setToken: (token: string | null) => void
  logout: () => void
}

const useAuthStore = create<IAuthState>((set) => ({
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
