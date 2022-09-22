import Home from './pages/Home'
import Login from './pages/Login'
import SignIn from './pages/SignIn'

import { Routes, Route } from 'react-router-dom'

function App() {
  return(    
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/sign-in" element={<SignIn />} />
    </Routes>
  )
}

export default App
