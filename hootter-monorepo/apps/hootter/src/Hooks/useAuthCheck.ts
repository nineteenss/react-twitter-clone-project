import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { PATHS } from '../Constants/pathsConstants'
import useAuthStore from '../Stores/useAuthStore'
import axios from 'axios'
import { BASE_API_URL, getAuthHeaders } from '../Lib/api'

export const useAuthCheck = () => {
  const navigate = useNavigate()
  const { token, logout } = useAuthStore()

  useEffect(() => {
    const checkAuth = async () => {
      if (!token) {
        navigate(PATHS.LOGIN)
        return
      }

      try {
        await axios.get(`${BASE_API_URL}/api/auth/verify`, {
          headers: getAuthHeaders()
        })
      } catch (error) {
        console.error('Auth check failed:', error)
        logout()
        navigate(PATHS.LOGIN)
      }
    }

    checkAuth()
  }, [token, navigate, logout])

  const getCurrentUserId = async () => {
    if (!token) return null;

    try {
      const response = await axios.get(`${BASE_API_URL}/api/users/me`, {
        headers: getAuthHeaders()
      });

      return response.data.user_id;
    } catch (error) {
      console.error('Error fetching current user:', error);
      return null;
    }
  }

  return {
    isAuthenticated: !!token,
    getCurrentUserId
  }
}