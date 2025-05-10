'use client'

import { useEffect } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { useAuth } from '../context/AuthContext'

export default function withAuth(Component: any) {
  return function ProtectedRoute(props: any) {
    const { isAuthenticated, loading } = useAuth()
    const router = useRouter()
    const pathname = usePathname()

    useEffect(() => {
      if (!loading && !isAuthenticated) {
        router.push(`/login?redirect=${encodeURIComponent(pathname)}`)
      }
    }, [isAuthenticated, loading, router, pathname])

    if (loading || !isAuthenticated) {
      return <div className="min-h-screen flex items-center justify-center">Cargando...</div>
    }

    return <Component {...props} />
  }
}