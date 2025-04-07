import { useMutation } from '@tanstack/react-query'
import axios, { AxiosError } from 'axios'
import { useNavigate } from 'react-router-dom'
import { PATHS } from '../Constants/pathsConstants'
import { BASE_API_URL, getAuthHeaders } from '../Lib/api'
import { IUserAuthProps, IUserRegisterProps } from '../Props/globalProps'
import useAuthStore from '../Stores/useAuthStore'

const useAuth = () => {
  const setToken = useAuthStore((state) => state.setToken)
  const logout = useAuthStore((state) => state.logout)
  const navigate = useNavigate()

  const loginMutatiion = useMutation({
    mutationFn: async (credentials: IUserAuthProps) => {
      const response = await axios.post(`${BASE_API_URL}/api${PATHS.LOGIN}`, credentials)
      return response.data.token
    },
    onSuccess: (token) => {
      setToken(token)
      navigate(PATHS.HOME)
    },
    onError: (error) => {
      if (error instanceof AxiosError && error.response) {
        throw new Error(error.response.data.error || 'Login failed')
      }
      throw new Error('Login failed. Please try again later')
    }
  })

  const registerMutation = useMutation({
    mutationFn: async (credentials: IUserRegisterProps) => {
      const response = await axios.post(`${BASE_API_URL}/api${PATHS.REGISTER}`, credentials)
      return response.data.token
    },
    onSuccess: (token) => {
      setToken(token)
      navigate(PATHS.HOME)
    },
    onError: (error) => {
      console.error('Registration error:', error)
    }
  })

  const logoutMutation = useMutation({
    mutationFn: async () => {
      await axios.post(`${BASE_API_URL}/api${PATHS.LOGOUT}`, {}, {
        headers: getAuthHeaders()
      })
    },
    onSuccess: () => {
      logout()
      navigate(PATHS.LOGIN)
    },
    onError: (error) => {
      console.error('Logout error:', error)
      throw new Error('Logout failed.')
    }
  })

  return {
    login: loginMutatiion.mutateAsync,
    register: registerMutation.mutateAsync,
    logout: logoutMutation.mutateAsync,
    isLoading: loginMutatiion.isPending || registerMutation.isPending || logoutMutation.isPending,
    error: loginMutatiion.error || registerMutation.error || logoutMutation.error
  }
}

export default useAuth
