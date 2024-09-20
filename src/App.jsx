import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './Home'
import Companies from './Companies'
import Dashboard from './Dashboard'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Layout from './Layout'

function App() {
  const [loggedUsername,setLoggedUserame] = useState('');
  const [loggedCompany,setLoggedCompany] = useState('');
  const [currentFiscalyear,setcurrentFiscalyear] = useState('');

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />} /> 
          {/* <Route path='/' element={<Home setLoggedUserame={setLoggedUserame}/>} /> */}
          {/* <Route path='/Companies' element={<Companies loggedUsername={loggedUsername} setLoggedCompany={setLoggedCompany} setcurrentFiscalyear={setcurrentFiscalyear} />} /> */}
          {/* <Route path='/Dashboard' element={<Dashboard loggedUsername={loggedUsername} loggedCompany={loggedCompany} currentFiscalyear={currentFiscalyear} />}/> */}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
