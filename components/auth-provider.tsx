"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

type User = {
  id: string
  name: string
  email: string
  role: "admin" | "operator" | "viewer"
}

type AuthContextType = {
  user: User | null
  login: (email: string, password: string) => Promise<void>
  logout: () => void
  isLoading: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>({
    id: "1",
    name: "Operator",
    email: "operator@example.com",
    role: "operator",
  })
  const [isLoading, setIsLoading] = useState(false)

  const login = async (email: string, password: string) => {
    setIsLoading(true)
    try {
      // Mock login - would be replaced with actual API call
      setUser({
        id: "1",
        name: "Operator",
        email: email,
        role: "operator",
      })
    } catch (error) {
      console.error("Login failed", error)
      throw error
    } finally {
      setIsLoading(false)
    }
  }

  const logout = () => {
    setUser(null)
  }

  return <AuthContext.Provider value={{ user, login, logout, isLoading }}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
