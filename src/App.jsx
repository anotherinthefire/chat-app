/* eslint-disable react/prop-types */
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import Login from './auth/Login'
import Signup from './auth/Signup'

import Home from './pages/Home'
import { AuthContext } from './context/AuthContext'
import { useContext } from 'react'

const App = () => {

  const { currentUser } = useContext(AuthContext)

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />
    }

    return children
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/signup"
          element={<Signup />}
        />

        <Route index element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        } />

      </Routes>
    </BrowserRouter>
  )
}

export default App