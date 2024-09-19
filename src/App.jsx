import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './Home'
import Companies from './Companies'

function App() {
  const [loggedUsername,setLoggedUserame] = useState('');

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home setLoggedUserame={setLoggedUserame}/>} />
          <Route path='/Companies' element={<Companies loggedUsername={loggedUsername}/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
