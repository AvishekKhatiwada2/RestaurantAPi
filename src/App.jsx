import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home'
import Companies from './Companies'
import Dashboard from './Dashboard'
import Layout from './Layout'
import ProductList from './ProductList'
import { userNameContext } from './context/context'

function App() {
  const [loggedUsername, setLoggedUserame] = useState('');
  const [loggedCompany, setLoggedCompany] = useState('');
  const [currentFiscalyear, setcurrentFiscalyear] = useState('');
  const [initial, setInitial ] = useState('');
  const [mytoken, setMytoken] = useState('');

  return (
    <>    
    <userNameContext.Provider value={{loggedUsername, setLoggedUserame, loggedCompany, setLoggedCompany,currentFiscalyear, setcurrentFiscalyear, initial, setInitial, mytoken, setMytoken}}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home setMytoken={setMytoken} />} />
          {/* <Route path='/' element={<NewNavbar />} /> */}
          <Route element={<Layout/>} >
            <Route path='/Companies' element={<Companies token={mytoken} />} />
            <Route path='/Dashboard' element={<Dashboard />} />
            <Route path='/ProductList' element={<ProductList />} />
          </Route>
        </Routes>
      </BrowserRouter>
      </userNameContext.Provider>
    </>
  )
}

export default App
