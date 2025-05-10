'use client'

import { createContext, useContext, ReactNode, useState, useEffect } from 'react'
import { usePathname, useRouter } from 'next/navigation'

type User = {
  email: string
  name: string
}

type AuthContextType = {
  user: User | null
  token: string | null
  isAuthenticated: boolean
  login: (email: string, password: string, remember?: boolean) => Promise<void> // ← Ahora recibe credenciales
  register: (name: string, email: string, password: string, remember?: boolean) => Promise<void>
  logout: () => void
  loading: boolean
  error: string | null
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [token, setToken] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()
  const pathname = usePathname()

  // Función para guardar sesión (reutilizable)
  const saveSession = (newToken: string, userData: User, remember: boolean) => {
    setToken(newToken)
    setUser(userData)
    if (remember) {
      localStorage.setItem('token', newToken)
      localStorage.setItem('user', JSON.stringify(userData))
    } else {
      sessionStorage.setItem('token', newToken)
      sessionStorage.setItem('user', JSON.stringify(userData))
    }
  }

  // Login ahora hace una llamada a la API
  const login = async (email: string, password: string, remember = false) => {
    setLoading(true)
    setError(null)
    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      })
      const data = await response.json()
      if (!response.ok) throw new Error(data.message || 'Error en el login')
      saveSession(data.token, data.user, remember)
      router.push('/') // Redirige al dashboard/home
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error en el login')
      throw err
    } finally {
      setLoading(false)
    }
  }

  // Register llama a login si el backend devuelve token
  const register = async (name: string, email: string, password: string, remember = false) => {
    setLoading(true)
    setError(null)
    try {
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password }),
      })
      const data = await response.json()
      if (!response.ok) throw new Error(data.message || 'Error en el registro')

      // Si hay token, inicia sesión automáticamente
      if (data.token && data.user) {
        saveSession(data.token, data.user, remember)
        router.push('/')
      } else {
        // Si no, redirige a login con mensaje de éxito
        router.push('/login?registered=true')
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error en el registro')
      throw err
    } finally {
      setLoading(false)
    }
  }

  const logout = () => {
    setToken(null)
    setUser(null)
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    sessionStorage.removeItem('token')
    sessionStorage.removeItem('user')
    router.push('/login')
  }

  // Efecto para cargar la sesión al inicio
  useEffect(() => {
    const initializeAuth = () => {
      try {
        const storedToken = localStorage.getItem('token') || sessionStorage.getItem('token')
        const storedUser = localStorage.getItem('user') || sessionStorage.getItem('user')
        if (storedToken && storedUser) {
          setToken(storedToken)
          setUser(JSON.parse(storedUser))
        }
      } catch (error) {
        console.error('Error al cargar la sesión:', error)
        setError('Error al cargar la sesión')
      } finally {
        setLoading(false)
      }
    }
    initializeAuth()
  }, [])

  const value = {
    user,
    token,
    isAuthenticated: !!token,
    login,
    register,
    logout,
    loading,
    error,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth debe usarse dentro de un AuthProvider')
  }
  return context
}