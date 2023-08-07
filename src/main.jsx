//import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
// import FrontPage from './components/FrontPage.jsx'
// import Profile_Nav from './components/Profile_Nav.jsx'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  < App />
    {/* <FrontPage /> */}
  </BrowserRouter>,
)
