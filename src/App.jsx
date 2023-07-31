import { BrowserRouter, Routes, Route } from 'react-router-dom'

// import firebase from 'firebase/app'
// import 'firebase/auth'
// import 'firebase/firestore'

import Home from './pages/Home'
import Message from './components/Message'

import Login from './auth/Login'
import Signup from './auth/Signup'

// firebase.initializeApp({

// })

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      {/* create condition if no user found then redirect to login */}
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      <Route path="/" element={<Home />} />
      <Route path="/message" element={<Message />} />
      
    </Routes>
    </BrowserRouter>
  )
}

export default App