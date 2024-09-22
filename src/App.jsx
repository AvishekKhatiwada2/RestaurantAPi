import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home'
import Companies from './Companies'
import Dashboard from './Dashboard'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Layout from './Layout'
import ProductList from './ProductList'
import ProductTable from './ProductTable'

function App() {
  const [loggedUsername, setLoggedUserame] = useState('');
  const [loggedCompany, setLoggedCompany] = useState('');
  const [currentFiscalyear, setcurrentFiscalyear] = useState('');
  const [mytoken, setMytoken] = useState('');

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home setLoggedUserame={setLoggedUserame} setMytoken={setMytoken} />} />
          {/* <Route path='/' element={<ProductTable />} /> */}

          <Route element={<Layout loggedUsername={loggedUsername} loggedCompany={loggedCompany} currentFiscalyear={currentFiscalyear} />} >
            <Route path='/Companies' element={<Companies token={mytoken} loggedUsername={loggedUsername} setLoggedCompany={setLoggedCompany} setcurrentFiscalyear={setcurrentFiscalyear} />} />
            <Route path='/Dashboard' element={<Dashboard />} />
            <Route path='/ProductList' element={<ProductList />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
