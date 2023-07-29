//import React from 'react'
import ReactDOM from 'react-dom/client'

import './css/index.css'
import FrontPage from './components/FrontPage.jsx'
import Profile_Nav from './components/Profile_Nav.jsx'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Profile_Nav />
    <FrontPage />
  </BrowserRouter>,
)
